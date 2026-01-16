import { motion } from "framer-motion";

const niches = [
  "iGaming / Gambling",
  "Криптовалюты",
  "Nutra / Health",
  "Финансы / Займы",
  "Беттинг",
  "Adult",
  "E-commerce (серый)",
  "Инфобизнес",
];

const sources = [
  "Facebook / Instagram",
  "Google Ads",
  "TikTok",
  "Telegram Ads",
  "Native сети",
  "Push-уведомления",
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 lg:py-32 relative dot-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="line-accent" />
              <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
                О нас
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Не просто агентство — партнёр, который понимает вашу специфику
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Мы не берём всех подряд. Работаем только с нишами, в которых 
                разбираемся глубоко: знаем риски, понимаем юнит-экономику, 
                умеем обходить ограничения площадок.
              </p>
              <p>
                Команда — бывшие арбитражники и маркетологи из крупных 
                gambling и fintech проектов. Говорим на одном языке 
                с вашим бизнесом.
              </p>
            </div>
          </motion.div>

          {/* Right - Lists */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-6">
                Ниши, с которыми работаем
              </h3>
              <div className="flex flex-wrap gap-2">
                {niches.map((niche, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm text-foreground border border-border bg-secondary/30 hover:border-accent/30 transition-colors"
                  >
                    {niche}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-6">
                Источники трафика
              </h3>
              <div className="flex flex-wrap gap-2">
                {sources.map((source, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm text-foreground border border-border bg-secondary/30 hover:border-accent/30 transition-colors"
                  >
                    {source}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
