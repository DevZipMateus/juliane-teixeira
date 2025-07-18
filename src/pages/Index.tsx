
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import LocationSection from "@/components/LocationSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import TeamSection from "@/components/TeamSection";
import EgestorERP from "@/components/EgestorERP";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Juliane Teixeira - Consultoria Empresarial | Clareza e Soluções para Empresários</title>
        <meta name="description" content="Consultoria empresarial especializada em soluções práticas para o crescimento do seu negócio. Oferecemos gestão financeira, desenvolvimento de políticas empresariais, treinamentos e consultoria estratégica com foco em resultados reais e sustentáveis." />
        <meta name="keywords" content="consultoria empresarial, soluções empresariais, gestão empresarial, tomada de decisão, crescimento sustentável, gestão financeira, desenvolvimento de políticas, treinamentos empresariais, consultoria estratégica" />
        <meta name="author" content="Juliane Teixeira" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Juliane Teixeira - Consultoria Empresarial | Clareza e Soluções para Empresários" />
        <meta property="og:description" content="Consultoria empresarial especializada em soluções práticas para o crescimento do seu negócio. Gestão financeira, desenvolvimento de políticas empresariais e consultoria estratégica com foco em resultados reais." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://julianeteixeira.com.br" />
        <meta property="og:image" content="https://julianeteixeira.com.br/lovable-uploads/598581a5-235d-45d1-88d0-5cc9a9ae9f78.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Juliane Teixeira Consultoria Empresarial - Logo" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Juliane Teixeira - Consultoria Empresarial | Clareza e Soluções para Empresários" />
        <meta name="twitter:description" content="Consultoria empresarial especializada em soluções práticas para o crescimento do seu negócio. Gestão financeira, desenvolvimento de políticas e consultoria estratégica." />
        <meta name="twitter:image" content="https://julianeteixeira.com.br/lovable-uploads/598581a5-235d-45d1-88d0-5cc9a9ae9f78.png" />
        <meta name="twitter:image:alt" content="Juliane Teixeira Consultoria Empresarial - Logo" />
        
        <link rel="canonical" href="https://julianeteixeira.com.br" />
      </Helmet>
      <div className="min-h-screen w-full overflow-x-hidden">
        <Header />
        <main className="w-full">
          <section id="inicio" className="w-full">
            <HeroSection />
          </section>
          <section id="sobre" className="w-full">
            <AboutSection />
          </section>
          <section id="servicos" className="w-full">
            <ServicesSection />
          </section>
          <section id="egestor" className="w-full">
            <EgestorERP />
          </section>
          <section id="equipe" className="w-full">
            <TeamSection />
          </section>
          <section id="depoimentos" className="w-full">
            <TestimonialsSection />
          </section>
          <section id="localizacao" className="w-full">
            <LocationSection />
          </section>
          <section id="contato" className="w-full">
            <ContactForm />
          </section>
        </main>
        <Footer />
        <FloatingButton />
      </div>
    </>
  );
};

export default Index;
