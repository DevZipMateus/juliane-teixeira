
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const isMobile = useMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      const sections = ['inicio', 'sobre', 'servicos', 'depoimentos', 'localizacao', 'contato'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInViewport = rect.top <= 300 && rect.bottom >= 300;
          if (isInViewport) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  const getLinkColor = (section: string) => {
    return activeSection === section 
      ? 'text-blue-600' 
      : `${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500`;
  };
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('inicio')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/lovable-uploads/007e2875-abbc-4b4b-846c-ae23f71a8657.png" 
              alt="Juliane Teixeira Consultoria" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold font-display ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Juliane Teixeira
              </h1>
              <p className={`text-sm ${
                isScrolled ? 'text-blue-600' : 'text-blue-200'
              }`}>
                Consultoria Empresarial
              </p>
            </div>
          </button>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                { id: 'inicio', label: 'Início' },
                { id: 'sobre', label: 'Sobre' },
                { id: 'servicos', label: 'Serviços' },
                { id: 'depoimentos', label: 'Depoimentos' },
                { id: 'localizacao', label: 'Localização' },
                { id: 'contato', label: 'Contato' }
              ].map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`text-sm font-medium transition-colors duration-300 ${getLinkColor(id)}`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          <button 
            className={`block md:hidden transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            } hover:text-blue-500`}
            onClick={toggleMenu} 
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && isMobile && (
        <div className="fixed inset-0 bg-white z-50 pt-20">
          <div className="container mx-auto px-4">
            <nav>
              <ul className="flex flex-col space-y-4">
                {[
                  { id: 'inicio', label: 'Início' },
                  { id: 'sobre', label: 'Sobre' },
                  { id: 'servicos', label: 'Serviços' },
                  { id: 'depoimentos', label: 'Depoimentos' },
                  { id: 'localizacao', label: 'Localização' },
                  { id: 'contato', label: 'Contato' }
                ].map(({ id, label }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className="text-lg font-medium text-gray-700 hover:text-blue-600 block py-2 transition-colors w-full text-left"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            <button 
              onClick={toggleMenu} 
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
