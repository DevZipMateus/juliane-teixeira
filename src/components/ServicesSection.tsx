
import { useEffect, useRef } from 'react';
import { TrendingUp, Target, Users, BarChart3, Lightbulb, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: "Planejamento Estratégico",
    description: "Desenvolvimento de estratégias empresariais focadas em crescimento sustentável e tomada de decisões assertivas.",
    icon: Target,
    delay: 0
  },
  {
    title: "Gestão Financeira",
    description: "Análise e otimização de processos financeiros para melhor controle e rentabilidade do seu negócio.",
    icon: TrendingUp,
    delay: 100
  },
  {
    title: "Desenvolvimento Organizacional",
    description: "Estruturação de processos e desenvolvimento de equipes para aumentar a eficiência operacional.",
    icon: Users,
    delay: 200
  },
  {
    title: "Análise de Performance",
    description: "Monitoramento e análise de indicadores para identificar oportunidades de melhoria e crescimento.",
    icon: BarChart3,
    delay: 300
  },
  {
    title: "Inovação e Melhoria",
    description: "Implementação de soluções inovadoras e processos de melhoria contínua nos negócios.",
    icon: Lightbulb,
    delay: 400
  },
  {
    title: "Consultoria Especializada",
    description: "Atendimento personalizado com foco nas necessidades específicas de cada empresa e setor.",
    icon: Settings,
    delay: 500
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeIn');
        const cards = document.querySelectorAll('.service-card');
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('animate-fadeIn');
            card.classList.remove('opacity-0');
          }, index * 100);
        });
      }
    }, {
      threshold: 0.1
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white w-full" id="servicos">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-display">
            Soluções completas em <span className="text-blue-600">consultoria empresarial</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Oferecemos serviços especializados para apoiar o crescimento sustentável do seu negócio,
            com conhecimento técnico e experiência prática comprovada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "service-card p-8 rounded-2xl transition-all duration-300 opacity-0",
                "bg-white border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-xl",
                "hover:-translate-y-1 flex flex-col items-start group"
              )}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-display">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{service.description}</p>
              <Button 
                variant="link" 
                className="p-0 h-auto text-blue-600 hover:text-blue-700 font-medium"
                onClick={scrollToContact}
              >
                Saiba mais →
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all hover:scale-105"
          >
            Solicitar Consultoria
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
