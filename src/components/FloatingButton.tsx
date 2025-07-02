import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-xl shadow-xl p-4 mb-4 animate-fadeIn border border-gray-100">
          <div className="flex flex-col space-y-3 min-w-[200px]">
            <a 
              href="https://wa.me/5554964037590?text=Olá,%20gostaria%20de%20conhecer%20mais%20sobre%20a%20consultoria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-brand-primary transition-colors p-2 rounded-lg hover:bg-brand-primary/5"
            >
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-medium">WhatsApp</div>
                <div className="text-sm text-gray-500">Fale conosco agora</div>
              </div>
            </a>
            
            <button 
              onClick={scrollToContact}
              className="flex items-center text-gray-700 hover:text-brand-primary transition-colors p-2 rounded-lg hover:bg-brand-primary/5"
            >
              <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center mr-3">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-medium">Formulário</div>
                <div className="text-sm text-gray-500">Envie uma mensagem</div>
              </div>
            </button>
          </div>
        </div>
      )}
      
      <button
        onClick={toggleOpen}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-gray-600 rotate-45' : 'bg-brand-primary hover:bg-brand-dark animate-pulse hover:animate-none'
        }`}
        style={{
          boxShadow: isOpen ? 'none' : '0 4px 20px rgba(81, 150, 217, 0.4)',
        }}
        aria-label={isOpen ? "Fechar menu de contato" : "Abrir menu de contato"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default FloatingButton;
