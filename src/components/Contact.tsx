import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-card to-background" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="premium-card p-10 md:p-14">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="line-accent" />
                <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
                  Контакт
                </span>
                <div className="line-accent rotate-180" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Расскажите о задаче
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Опишите ваш бизнес и цели. Ответим в течение нескольких часов 
                и договоримся о созвоне, если видим, что можем помочь.
              </p>
            </div>

            {/* Form */}
            <div className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Имя</label>
                  <input
                    type="text"
                    placeholder="Как обращаться"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Telegram или Email</label>
                  <input
                    type="text"
                    placeholder="Для связи"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">О проекте</label>
                <textarea
                  rows={4}
                  placeholder="Ниша, текущая ситуация, что хотите получить"
                  className="w-full px-4 py-3 bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors resize-none"
                />
              </div>
              <Button variant="premium" size="xl" className="w-full">
                Отправить
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Or Telegram */}
            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Или напишите напрямую
              </p>
              <a
                href="https://t.me/mafia_trafa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
              >
                <Send className="w-4 h-4" />
                <span className="font-medium">@mafia_trafa</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
