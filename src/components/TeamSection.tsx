
import { Mail, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: "Juliane Teixeira",
    position: "Consultora Empresarial",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=922&q=80",
    email: "contato@julianeteixeira.com.br",
    linkedin: "https://linkedin.com",
    delay: 0
  },
  {
    name: "Bianka Fank",
    position: "Secretária Executiva",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=776&q=80",
    email: "bianka@julianeteixeira.com.br",
    linkedin: "https://linkedin.com",
    delay: 200
  }
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-gray-50 w-full" id="equipe">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            Nossa Equipe
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-display">
            Profissionais experientes e <span className="text-blue-600">qualificados</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nossa equipe é formada por profissionais especializados,
            comprometidos em entregar serviços de excelência para nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="border-gray-200 overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden w-full aspect-[3/4]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                    <div className="flex gap-3 p-4 mb-2">
                      <a 
                        href={`mailto:${member.email}`} 
                        className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center bg-white p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {member.position}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
