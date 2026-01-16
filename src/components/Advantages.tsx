import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const advantages = [
  "Прямые контракты — ставки выше рынка",
  "Выплаты каждый день без задержек",
  "Персональный менеджер в Telegram 24/7",
  "Эксклюзивные офферы под ключ",
  "Готовые связки с доказанным ROI",
  "Бесплатный аудит ваших кампаний",
  "API интеграция за 15 минут",
  "Гарантия возврата при невыполнении KPI",
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-24 relative overflow-hidden noise-bg">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-sm font-bold uppercase tracking-widest mb-6">
              Наши преимущества
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              ПОЧЕМУ <span className="text-gradient">MAFIA?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Мы не просто льём трафик — мы строим машины для печатания денег. 
              Каждый партнёр получает индивидуальную стратегию под свои цели.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-3">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 bg-card border border-border hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="w-5 h-5 bg-blood-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Results Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[80px]" />
            <div className="relative bg-card border border-primary/30 shadow-intense">
              {/* Header */}
              <div className="p-8 border-b border-border bg-primary/5">
                <div className="flex items-center gap-3">
                  <Zap className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-3xl font-bold text-foreground">
                      РЕЗУЛЬТАТЫ 2024
                    </h3>
                    <p className="text-muted-foreground">Только факты и цифры</p>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="p-8 space-y-6">
                {[
                  { label: "Выплачено партнёрам", value: "$127M", bar: 100 },
                  { label: "Успешных запусков", value: "14,847", bar: 85 },
                  { label: "Средний ROI партнёров", value: "412%", bar: 75 },
                  { label: "Партнёров вернулись снова", value: "94%", bar: 94 },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</span>
                      <span className="text-3xl font-bold text-gradient">{stat.value}</span>
                    </div>
                    <div className="h-1 bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.bar}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-blood-gradient"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer badge */}
              <div className="p-4 bg-primary/10 border-t border-primary/30">
                <p className="text-center text-sm text-primary font-bold uppercase tracking-wider">
                  Все данные подтверждены документально
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
