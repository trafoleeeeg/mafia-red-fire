const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span className="font-display text-lg font-semibold text-foreground">
              MAFIA TRAFA
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 MAFIA TRAFA. Performance Marketing Agency.
          </p>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Telegram
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
