
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import LocationSection from "@/components/LocationSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Juliane Teixeira - Consultoria Empresarial | Clareza e Soluções para Empresários</title>
        <meta name="description" content="Juliane Teixeira Consultoria Empresarial oferece clareza e soluções práticas para o dia a dia dos empresários. Conhecimento técnico e experiência prática para resultados reais." />
        <meta name="keywords" content="consultoria empresarial, soluções empresariais, gestão empresarial, tomada de decisão, crescimento sustentável" />
        <meta property="og:title" content="Juliane Teixeira - Consultoria Empresarial" />
        <meta property="og:description" content="Clareza e soluções para o dia a dia dos empresários. Conhecimento técnico e experiência prática." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://julianeteixeira.com.br" />
        <meta property="og:image" content="/lovable-uploads/598581a5-235d-45d1-88d0-5cc9a9ae9f78.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Juliane Teixeira - Consultoria Empresarial" />
        <meta name="twitter:description" content="Clareza e soluções para o dia a dia dos empresários" />
        <meta name="twitter:image" content="/lovable-uploads/598581a5-235d-45d1-88d0-5cc9a9ae9f78.png" />
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
