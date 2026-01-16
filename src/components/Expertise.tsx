import { motion } from "framer-motion";

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
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
                Об агентстве
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Агентство с сильной экспертизой в серых нишах
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Мы не просто подрядчики — мы партнёры. Работаем на результат, 
                а не на открутку бюджета. Если видим, что проект не взлетит — 
                скажем честно до начала работы.
              </p>
              <p>
                Команда: медиабайеры с опытом 3+ лет в gambling и крипто, 
                креативщики, аналитики. Все прошли через арбитраж — понимаем 
                специфику изнутри.
              </p>
            </div>
          </motion.div>

          {/* Right - Team structure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="premium-card p-6">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                Структура команды
              </div>
              <div className="space-y-4">
                {[
                  { role: "Медиабайеры", count: "4 человека", desc: "FB, Google, TikTok" },
                  { role: "Креативный отдел", count: "2 человека", desc: "Дизайн, видео" },
                  { role: "Аналитики", count: "1 человек", desc: "BI, отчётность" },
                  { role: "Аккаунт-менеджеры", count: "2 человека", desc: "Коммуникация" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div>
                      <div className="font-medium text-foreground">{item.role}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                    <div className="text-sm text-accent">{item.count}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="premium-card p-6 text-center">
                <div className="font-display text-3xl font-semibold text-foreground mb-1">6+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>
              <div className="premium-card p-6 text-center">
                <div className="font-display text-3xl font-semibold text-foreground mb-1">50+</div>
                <div className="text-sm text-muted-foreground">проектов</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
