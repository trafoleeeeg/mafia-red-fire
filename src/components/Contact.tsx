import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-card to-background" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="line-accent" />
              <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
                Контакты
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Готовы обсудить ваш проект
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Оставьте заявку или напишите в Telegram. Ответим в течение 
              нескольких часов и обсудим, чем можем помочь.
            </p>
            
            {/* Telegram CTA */}
            <a
              href="https://t.me/mafia_trafa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-accent/10 border border-accent/30">
                <Send className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="font-medium">Telegram</div>
                <div className="text-sm text-muted-foreground">@mafia_trafa</div>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="premium-card p-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Оставить заявку
              </h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Telegram или Email *
                  </label>
                  <input
                    type="text"
                    placeholder="@username или email"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Ваша ниша *
                  </label>
                  <input
                    type="text"
                    placeholder="Gambling, крипто, nutra..."
                    className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Примерный бюджет на тест
                  </label>
                  <input
                    type="text"
                    placeholder="от $5K"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors"
                  />
                </div>
                <Button variant="premium" size="xl" className="w-full">
                  Отправить заявку
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
