import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-card to-background" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="premium-card p-10 md:p-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="line-accent" />
                  <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
                    Контакты
                  </span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
                  Готовы обсудить ваш проект?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Свяжитесь с нами для бесплатной консультации. Проанализируем ваш бизнес и предложим стратегию роста.
                </p>

                {/* Contact Methods */}
                <div className="space-y-4">
                  <a
                    href="https://t.me/mafia_trafa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-secondary/50 border border-border hover:border-foreground/20 transition-colors group"
                  >
                    <Send className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <div>
                      <div className="text-foreground font-medium">Telegram</div>
                      <div className="text-sm text-muted-foreground">@mafia_trafa</div>
                    </div>
                    <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              </div>

              {/* Right Content - Form */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Имя</label>
                  <input
                    type="text"
                    placeholder="Как к вам обращаться"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Telegram / Email</label>
                  <input
                    type="text"
                    placeholder="@username или email"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">О проекте</label>
                  <textarea
                    rows={4}
                    placeholder="Расскажите кратко о вашем бизнесе и целях"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors resize-none"
                  />
                </div>
                <Button variant="premium" size="xl" className="w-full">
                  Отправить заявку
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Ответим в течение 2 часов в рабочее время
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
