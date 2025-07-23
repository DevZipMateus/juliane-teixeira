import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Maura Monteiro",
    position: "Vivenciar Comunicação e Marketing", 
    content: "A consultoria da Juliane vai muito além dos números: é sobre negócios, mas também sobre pessoas. Sua experiência e competência impulsionaram um novo momento na Vivenciar. Ela nos ajudou a enxergar nosso potencial, organizar e aprimorar cada processo. Seu trabalho vai ficar marcado para sempre na nossa história!",
    rating: 5,
    delay: 0
  },
  {
    name: "Bruna Milan",
    position: "Desperttar",
    content: "Sobre o sistema, tem facilitado muito minha rotina, consigo acompanhar tudo com mais clareza, especialmente estoque e faturamento da loja.A assessoria tem sido bem presente e me sinto segura com as orientações. No geral, atende minha necessidade e está fazendo muita diferença para meu negócio. Me sinto mais organizada e consigo tomar decisões com mais confiança. Grata pelo trabalho de vocês, atenção e disponibilidade! ",
    rating: 5,
    delay: 200
  },
  {
    name: "Juliane Teixeira",
    position: "Memorial Vera Cruz",
    content: "Gosto muito do trabalho que foi desenvolvido através da consultoria, tanto no diagnóstico quanto na consultoria mensal... Juliane é muito observadora, em alguns momentos ela visualiza demandas sem sequer termos comentado a respeito com ela. O que na minha opinião é um grande diferencial. Diferencial esse que nunca havia encontrado em outro consultor (dos vários consultores que já nos atenderam).",
    rating: 5,
    delay: 600
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll('.testimonial-card');
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('animate-fadeIn');
            card.classList.remove('opacity-0');
          }, index * 200);
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
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white" id="depoimentos">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-display">
            O que nossos <span className="text-blue-600">clientes dizem</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Conheça os resultados que alcançamos juntos e como nossa consultoria
            tem transformado negócios em todo o país.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card opacity-0 border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-blue-600 opacity-50" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900 font-display">{testimonial.name}</div>
                  <div className="text-sm text-blue-600">{testimonial.position}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
