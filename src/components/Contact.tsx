import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacts" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6">
            НАЧНИ <span className="text-gradient">ЗАРАБАТЫВАТЬ</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Свяжитесь с нами прямо сейчас и начните получать качественный трафик уже завтра
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-mafia flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-xl bg-[#229ED9]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-[#229ED9]" />
              </div>
              <div className="text-left">
                <h3 className="font-display text-2xl text-foreground mb-1">Telegram</h3>
                <p className="text-muted-foreground">@mafia_trafa</p>
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground ml-auto group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
            </a>

            <a
              href="mailto:contact@mafiatrafa.com"
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-mafia flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-display text-2xl text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground">contact@mafiatrafa.com</p>
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground ml-auto group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
            </a>
          </div>

          {/* Main CTA */}
          <Button variant="hero" size="xl" className="min-w-[300px]">
            Оставить заявку
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
