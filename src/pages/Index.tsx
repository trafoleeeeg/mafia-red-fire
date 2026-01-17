import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import Process from "@/components/Process";
import Expertise from "@/components/Expertise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <div className="section-divider mx-auto max-w-4xl" />
      <Services />
      <div className="section-divider mx-auto max-w-4xl" />
      <Cases />
      <div className="section-divider mx-auto max-w-4xl" />
      <Process />
      <div className="section-divider mx-auto max-w-4xl" />
      <Expertise />
      <div className="section-divider mx-auto max-w-4xl" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;