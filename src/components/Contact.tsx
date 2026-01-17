import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
      <div className="hero-glow bottom-[-300px] left-1/2 -translate-x-1/2 opacity-20" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="section-line" />
              <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
                Контакты
              </span>
              <div className="section-line rotate-180" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Готовы <span className="text-gradient-accent">обсудить</span> проект?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
              Оставьте заявку или напишите в Telegram. Ответим в течение нескольких часов.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-8 lg:p-10">
                <h3 className="font-display text-xl font-semibold text-foreground mb-8">
                  Оставить заявку
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Telegram или Email *</label>
                    <input type="text" placeholder="@username или email" className="form-input" />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Ваша ниша *</label>
                    <input type="text" placeholder="Gambling, крипто, nutra..." className="form-input" />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Примерный бюджет</label>
                    <input type="text" placeholder="от $5K" className="form-input" />
                  </div>
                  <Button size="xl" className="w-full btn-glow bg-accent hover:bg-accent/90 text-white rounded-xl h-14 text-base group">
                    Отправить заявку
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Telegram */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="glass-card p-8 lg:p-10 h-full flex flex-col">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 mb-8">
                  <MessageCircle className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Или в Telegram
                </h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  Быстрый ответ, можно сразу обсудить детали и получить консультацию.
                </p>
                <a
                  href="https://t.me/mafia_trafa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full py-4 rounded-xl 
                           border border-accent/30 text-accent font-medium
                           hover:bg-accent/10 hover:border-accent/50 transition-all group"
                >
                  <Send className="w-5 h-5" />
                  @mafia_trafa
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
