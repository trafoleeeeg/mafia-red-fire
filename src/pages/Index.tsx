import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import Process from "@/components/Process";
import Expertise from "@/components/Expertise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import bgGradient from "@/assets/bg-gradient.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Static gradient background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${bgGradient})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="fixed inset-0 z-0 bg-background/40" />
      
      {/* Content */}
      <div className="relative z-10">
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
    </div>
  );
};

export default Index;