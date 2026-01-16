import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Cases from "@/components/Cases";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Cases />
      <Services />
      <Advantages />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
