import { MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="py-20 bg-white" id="localizacao">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              Localização
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-display">
              Como <span className="text-blue-600">chegar até nós</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Estamos prontos para atender você. Entre em contato para agendar uma consultoria personalizada.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Telefone</h4>
                    <p className="text-gray-600">+55 54 99640-3759</p>
                    <p className="text-sm text-blue-600 mt-1">WhatsApp disponível</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 08:00 às 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Atendimento</h4>
                    <p className="text-gray-600">Atendimento presencial e online</p>
                    <p className="text-gray-600">Consultorias personalizadas</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-blue-100">
                <h4 className="font-bold text-gray-900 mb-3">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/julianeteixeiraconsultoria/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61563785207254" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6 font-display">Pronto para transformar seu negócio?</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Entre em contato conosco e descubra como nossa consultoria pode ajudar 
                sua empresa a alcançar resultados extraordinários.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/5554996403759?text=Olá,%20gostaria%20de%20conhecer%20mais%20sobre%20a%20consultoria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-white text-blue-600 py-3 px-6 rounded-full font-medium hover:bg-blue-50 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
                
                <a 
                  href="mailto:contato@julianeteixeira.com.br"
                  className="w-full border border-white text-white py-3 px-6 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
                >
                  E-mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
