const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-display text-2xl text-gradient">
            MAFIA TRAFA
          </a>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2024 MAFIA TRAFA. Все права защищены.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
