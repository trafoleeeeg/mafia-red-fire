import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Clock, Shield, Zap } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacts" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card stripes-bg" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[200px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Urgency Block */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/20 border border-primary/50 mb-8">
              <Clock className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-primary font-bold uppercase tracking-wider">
                Ограниченное предложение — только до конца недели
              </span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-bold text-foreground mb-6">
              ГОТОВ <span className="text-gradient text-fire">ДОМИНИРОВАТЬ?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Напиши нам сейчас и получи бесплатную консультацию + аудит твоих текущих кампаний
            </p>
          </div>

          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background border border-primary/30 p-8 md:p-12 shadow-intense"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left - Benefits */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground uppercase mb-6">
                  Что ты получишь:
                </h3>
                {[
                  { icon: Zap, text: "Персональную стратегию под твой бюджет" },
                  { icon: Shield, text: "Доступ к закрытым VIP офферам" },
                  { icon: Clock, text: "Запуск первой кампании за 24 часа" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-card border border-border">
                    <div className="w-10 h-10 bg-blood-gradient flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Right - CTA */}
              <div className="text-center md:text-left">
                <div className="mb-6">
                  <p className="text-muted-foreground mb-2 text-sm uppercase tracking-wider">Связаться напрямую:</p>
                  <p className="text-3xl font-bold text-gradient">@mafia_trafa</p>
                </div>
                
                <a
                  href="https://t.me/mafia_trafa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="hero" size="xl" className="w-full group">
                    <MessageCircle className="w-6 h-6" />
                    Написать в Telegram
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </a>
                
                <p className="text-muted-foreground text-sm mt-4">
                  Ответим в течение 15 минут
                </p>
              </div>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            {[
              "150+ активных партнёров",
              "5 лет на рынке",
              "Выплаты каждый день",
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm uppercase tracking-wider">{badge}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
