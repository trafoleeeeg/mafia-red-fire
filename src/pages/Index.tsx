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
    <div className="min-h-screen bg-[#050505] text-foreground relative overflow-hidden">
      {/* Subtle neon glow accents */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-red-950/15 rounded-full blur-[300px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-red-900/10 rounded-full blur-[280px]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        {/* Hero to content transition */}
        <div className="relative h-32">
          <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-transparent via-red-950/5 to-transparent" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-red-800/30 to-transparent" />
        </div>
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