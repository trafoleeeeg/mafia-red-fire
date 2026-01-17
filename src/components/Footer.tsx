import { Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
              <span className="font-display text-sm font-bold text-accent">MT</span>
            </div>
            <span className="font-display text-lg font-semibold text-foreground">
              MAFIA TRAFA
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Услуги
            </a>
            <a href="#cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Кейсы
            </a>
            <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Процесс
            </a>
            <a href="#expertise" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              О нас
            </a>
          </nav>

          {/* Social & Contact */}
          <div className="flex items-center gap-4">
            <a 
              href="https://t.me/mafiatrafa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20
                       text-accent text-sm font-medium hover:bg-accent/20 hover:border-accent/30 transition-all"
            >
              <Send className="w-4 h-4" />
              @mafiatrafa
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 MAFIA TRAFA. Performance Marketing Agency.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;