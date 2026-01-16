import { motion } from "framer-motion";

const expertise = [
  {
    category: "Вертикали",
    items: ["iGaming", "Nutra", "Finance", "E-commerce", "Apps", "Crypto"],
  },
  {
    category: "ГЕО",
    items: ["Tier-1 (US, UK, CA, AU)", "Europe", "LATAM", "CIS", "Asia", "MENA"],
  },
  {
    category: "Источники",
    items: ["Meta Ads", "Google Ads", "TikTok Ads", "Native", "Push", "SEO"],
  },
  {
    category: "Технологии",
    items: ["Keitaro", "Binom", "Voluum", "Custom Solutions", "API Integrations"],
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-32 relative dot-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="line-accent" />
            <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
              Экспертиза
            </span>
            <div className="line-accent rotate-180" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Глубокое понимание рынка
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            6 лет опыта в performance-маркетинге. Знаем специфику каждой ниши и умеем находить прибыльные связки.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
          {expertise.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="premium-card p-8"
            >
              <h3 className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-6">
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div className="w-1 h-1 bg-accent rounded-full" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border/50"
        >
          {[
            { value: "200+", label: "Успешных проектов" },
            { value: "15+", label: "Экспертов в команде" },
            { value: "$127M", label: "Профита для клиентов" },
            { value: "24/7", label: "Мониторинг кампаний" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-4xl font-semibold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
