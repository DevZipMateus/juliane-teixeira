
import { useEffect, useRef } from 'react';
import { CheckCircle, Users, Target, TrendingUp, Clock } from 'lucide-react';

const advantages = [
  "Conhecimento técnico especializado",
  "Experiência prática comprovada", 
  "Soluções personalizadas",
  "Foco em resultados",
  "Acompanhamento contínuo",
  "Crescimento sustentável"
];

const stats = [
  { icon: Clock, number: "15+", label: "Anos de Experiência" },
  { icon: Target, number: "Foco", label: "Em Resultados" },
  { icon: TrendingUp, number: "Crescimento", label: "Sustentável" }
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        const elements = entry.target.querySelectorAll('.animate-element');
        elements.forEach((el, i) => {
          setTimeout(() => {
            el.classList.add('animate-fadeIn');
          }, i * 200);
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

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" id="sobre">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="opacity-0 animate-element">
              <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                Sobre Nós
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-display">
                Transformando negócios com <span className="text-blue-600">clareza e expertise</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                A Juliane Teixeira Consultoria Empresarial tem como propósito contribuir para a tomada de decisão dos clientes, 
                oferecendo clareza e soluções práticas para o dia a dia dos empresários.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Unimos conhecimento técnico e experiência prática de implementação para entregar resultados reais. 
                Nossa atuação é marcada por comprometimento, qualidade e foco em resultados, sempre buscando facilitar 
                a rotina empresarial e apoiar o crescimento sustentável dos negócios.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start opacity-0 animate-element">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="ml-3 text-gray-700">{advantage}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 opacity-0 animate-element">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-lg font-bold text-gray-900 font-display">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-element order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-blue-200 rounded-xl opacity-50"></div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-blue-100 rounded-xl opacity-30"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Consultoria empresarial - reunião de negócios" 
                  className="w-full h-auto object-cover" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
