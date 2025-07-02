import { MapPin, Clock, Phone } from 'lucide-react';

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
                    <p className="text-gray-600">+55 54 9640-3759</p>
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
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.99-5.366 11.99-11.99C24.007 5.367 18.641.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.317C4.198 14.745 3.732 13.6 3.732 12.267s.466-2.478 1.394-3.404c.875-.827 2.026-1.317 3.323-1.317s2.448.49 3.323 1.317c.928.926 1.394 2.067 1.394 3.404s-.466 2.478-1.394 3.404c-.875.827-2.026 1.317-3.323 1.317zm7.718-1.317c-.875.827-2.026 1.317-3.323 1.317s-2.448-.49-3.323-1.317c-.928-.926-1.394-2.067-1.394-3.404s.466-2.478 1.394-3.404c.875-.827 2.026-1.317 3.323-1.317s2.448.49 3.323 1.317c.928.926 1.394 2.067 1.394 3.404s-.466 2.478-1.394 3.404z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61563785207254" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
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
                  href="https://wa.me/5554964037590?text=Olá,%20gostaria%20de%20conhecer%20mais%20sobre%20a%20consultoria" 
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
