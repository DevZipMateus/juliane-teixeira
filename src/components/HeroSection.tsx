
import { ArrowRight, Target, Eye, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/fc3096a6-10df-4a7d-829f-13d96fbeb050.png)',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-900/80"></div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-primary/20 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-primary/30 rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-brand-primary/40 rounded-full opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div className="text-center lg:text-left">
              <div className={`opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}>
                <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm mb-6">
                  Consultoria Empresarial Especializada
                </span>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-display">
                  <span className="text-blue-300">Clareza</span> e{' '}
                  <span className="text-blue-300">soluções</span> para o dia a dia dos{' '}
                  <span className="text-blue-300">empresários</span>
                </h1>
                
                <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                  Unimos conhecimento técnico e experiência prática para entregar resultados reais. 
                  Nossa atuação é marcada por comprometimento, qualidade e foco em resultados.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                  <Button onClick={scrollToContact} size="lg" className="bg-brand-primary hover:bg-brand-dark text-white px-8 py-4 text-lg rounded-full transition-all hover:scale-105">
                    Fale Conosco
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <a href="https://wa.me/5554996403759?text=Olá,%20gostaria%20de%20conhecer%20mais%20sobre%20a%20consultoria" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-full transition-all hover:scale-105 bg-white/10 backdrop-blur-sm">
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>

              {/* Mission, Vision, Values */}
              <div className={`grid md:grid-cols-3 gap-6 opacity-0 ${isVisible ? 'animate-fadeIn delay-500' : ''}`}>
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="h-6 w-6 text-blue-300" />
                  </div>
                  <h3 className="font-bold text-white mb-2 font-display">Missão</h3>
                  <p className="text-sm text-blue-100">
                    Contribuir para a tomada de decisão oferecendo clareza e soluções práticas
                  </p>
                </div>
                
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Eye className="h-6 w-6 text-blue-300" />
                  </div>
                  <h3 className="font-bold text-white mb-2 font-display">Visão</h3>
                  <p className="text-sm text-blue-100">
                    Ser referência em Consultoria Empresarial promovendo crescimento sustentável
                  </p>
                </div>
                
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lightbulb className="h-6 w-6 text-blue-300" />
                  </div>
                  <h3 className="font-bold text-white mb-2 font-display">Valores</h3>
                  <p className="text-sm text-blue-100">
                    Comprometimento, qualidade e foco em resultados práticos
                  </p>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className={`flex justify-center lg:justify-end opacity-0 ${isVisible ? 'animate-fadeIn delay-300' : ''}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/40 to-brand-primary/60 rounded-full opacity-20 blur-2xl"></div>
                <img src="/lovable-uploads/598581a5-235d-45d1-88d0-5cc9a9ae9f78.png" alt="Juliane Teixeira Consultoria Empresarial - Logo" className="relative z-10 max-w-sm w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
