
import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Maria Silva",
    position: "CEO, Empresa ABC",
    content: "A consultoria da Juliane foi fundamental para reestruturar nossa empresa. A clareza nas orientações e o foco em resultados práticos fizeram toda a diferença.",
    rating: 5,
    delay: 0
  },
  {
    name: "João Santos",
    position: "Diretor, Indústria XYZ",
    content: "Profissionalismo exemplar e conhecimento técnico de alto nível. As soluções apresentadas trouxeram resultados imediatos para nosso negócio.",
    rating: 5,
    delay: 200
  },
  {
    name: "Ana Costa",
    position: "Sócia, StartUp Tech",
    content: "Recomendo fortemente! A experiência prática da consultoria nos ajudou a tomar decisões mais assertivas e acelerar nosso crescimento.",
    rating: 5,
    delay: 400
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
