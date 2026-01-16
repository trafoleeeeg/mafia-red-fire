import { Flame } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Flame className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl text-gradient">
              MAFIA TRAFA
            </span>
          </a>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2024 MAFIA TRAFA. Доминируй или умри.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
              Telegram
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
              Условия
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
