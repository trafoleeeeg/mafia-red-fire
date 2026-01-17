import { motion } from "framer-motion";

const team = [
  { role: "Медиабайеры", count: "1", desc: "FB, Google, TikTok" },
  { role: "Креативный отдел", count: "2", desc: "Дизайн, видео" },
  { role: "Аккаунт-менеджеры", count: "3", desc: "Коммуникация" },
  { role: "Аналитики", count: "4", desc: "BI, отчётность" },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-16 lg:py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="section-line" />
            <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
              О нас
            </span>
            <div className="section-line rotate-180" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Команда с <span className="text-gradient-accent">экспертизой</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-10 border border-accent/10 hover:border-accent/30 transition-colors hover:shadow-[0_0_30px_rgba(127,29,29,0.1)]"
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Почему мы
            </h3>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>• Если видим, что проект не взлетит — скажем честно до начала работы.</p>
              <p>• Медиабайеры с опытом 5+ лет в gambling и крипто.</p>
              <p>• Обходим модерацию и баны FB, Google, TikTok.</p>
              <p>• Запуск рекламной кампании за 48 часов.</p>
              <p>• Еженедельные отчёты с полной аналитикой.</p>
              <p>• Работаем с бюджетами от $2K/мес.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-10 border border-accent/10 hover:border-accent/30 transition-colors hover:shadow-[0_0_30px_rgba(127,29,29,0.1)]"
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Структура команды
            </h3>
            <div className="space-y-4">
              {team.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-accent/20 last:border-0 group hover:bg-accent/5 px-4 -mx-4 rounded-lg transition-colors">
                  <div>
                    <div className="font-medium text-foreground">{item.role}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                  <span className="text-3xl font-display font-bold text-accent drop-shadow-[0_0_8px_rgba(127,29,29,0.5)]">{item.count}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
