import { Mail, Phone, Instagram, Facebook } from 'lucide-react';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-16 pb-8 w-full">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 pb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img alt="Juliane Teixeira Consultoria" className="h-12 w-auto" src="/lovable-uploads/2392007a-1872-4ac0-9b17-6a9feefbb118.png" />
              <div>
                <h3 className="text-xl font-bold text-white font-display">Juliane Teixeira</h3>
                <p className="text-blue-300 text-sm">Consultoria Empresarial</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Clareza e soluções para o dia a dia dos empresários. 
              Unimos conhecimento técnico e experiência prática para entregar resultados reais.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/julianeteixeiraconsultoria/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61563785207254" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-400 font-display">Links Rápidos</h3>
            <ul className="space-y-3">
              {[{
              label: "Início",
              id: "inicio"
            }, {
              label: "Sobre",
              id: "sobre"
            }, {
              label: "Serviços",
              id: "servicos"
            }, {
              label: "Depoimentos",
              id: "depoimentos"
            }, {
              label: "Localização",
              id: "localizacao"
            }, {
              label: "Contato",
              id: "contato"
            }].map(({
              label,
              id
            }) => <li key={id}>
                  <button onClick={() => scrollToSection(id)} className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                    {label}
                  </button>
                </li>)}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-400 font-display">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">+55 54 9640-3759</p>
                  <p className="text-sm text-blue-300">WhatsApp disponível</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:contato@julianeteixeira.com.br" className="text-gray-300 hover:text-blue-400 transition-colors">
                    contato@julianeteixeira.com.br
                  </a>
                </div>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
              <h4 className="font-bold mb-2 font-display">Horário de Atendimento</h4>
              <p className="text-blue-100 text-sm">Segunda a Sexta: 08:00 às 18:00</p>
              <p className="text-blue-100 text-sm">Sábados: 09:00 às 12:00</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Juliane Teixeira Consultoria Empresarial. Todos os direitos reservados.
          </p>
          <button onClick={scrollToTop} className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition-colors text-sm font-medium">
            Voltar ao topo ↑
          </button>
        </div>
      </div>
    </footer>;
};
export default Footer;