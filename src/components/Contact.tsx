import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
      <div className="hero-glow bottom-[-200px] left-1/2 -translate-x-1/2 opacity-30" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-accent" />
              <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
                Контакты
              </span>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-accent" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Готовы обсудить проект?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Оставьте заявку или напишите в Telegram. Ответим в течение нескольких часов.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
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
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Ваша ниша *
                    </label>
                    <input
                      type="text"
                      placeholder="Gambling, крипто, nutra..."
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Примерный бюджет на тест
                    </label>
                    <input
                      type="text"
                      placeholder="от $5K"
                      className="form-input"
                    />
                  </div>
                  <Button 
                    size="xl" 
                    className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl group"
                  >
                    Отправить заявку
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Telegram CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="premium-card p-8 h-full flex flex-col">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 mb-6">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Или в Telegram
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  Быстрый ответ, можно сразу обсудить детали и получить первичную консультацию.
                </p>
                
                <a
                  href="https://t.me/mafia_trafa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl 
                           border border-accent/30 text-accent font-medium
                           hover:bg-accent/10 hover:border-accent/50 transition-all group"
                >
                  <Send className="w-4 h-4" />
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