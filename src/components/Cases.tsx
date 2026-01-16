import { motion } from "framer-motion";

const cases = [
  {
    niche: "Крипто-бот (Telegram)",
    budget: "$12K",
    period: "2 месяца",
    metrics: [
      { label: "Цена подписчика", value: "$1.2" },
      { label: "ROI", value: "x2.4" },
      { label: "CTR", value: "3.2%" },
    ],
    actions: [
      "Креативы под разные сегменты аудитории",
      "Локализованные лендинги на 3 языка",
      "Интеграция с CRM клиента",
    ],
  },
  {
    niche: "Инвестиционный проект",
    budget: "$45K",
    period: "4 месяца",
    metrics: [
      { label: "Цена лида", value: "$18" },
      { label: "ROI", value: "x3.1" },
      { label: "Конверсия", value: "12%" },
    ],
    actions: [
      "Разработка воронки с прогревом",
      "A/B тестирование 20+ креативов",
      "Масштабирование на 5 гео",
    ],
  },
  {
    niche: "Gambling (slots)",
    budget: "$144K",
    period: "6 месяцев",
    metrics: [
      { label: "FTD", value: "$28" },
      { label: "ROI", value: "x2.8" },
      { label: "Retention D7", value: "34%" },
    ],
    actions: [
      "Мультиаккаунтинг FB",
      "Клоакинг и обход модерации",
      "Retention-кампании",
    ],
  },
  {
    niche: "HR / Крипто-вакансии",
    budget: "$8K",
    period: "1.5 месяца",
    metrics: [
      { label: "Цена отклика", value: "$4.5" },
      { label: "ROI", value: "x2.1" },
      { label: "CTR", value: "4.8%" },
    ],
    actions: [
      "Таргет на узкую аудиторию",
      "Telegram-бот для сбора заявок",
      "Автоматическая квалификация",
    ],
  },
];

const Cases = () => {
  return (
    <section id="cases" className="py-24 lg:py-32 relative dot-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="line-accent" />
            <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
              Результаты
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            Результаты наших клиентов
          </h2>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="premium-card p-8"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {caseItem.niche}
                  </h3>
                  <div className="text-sm text-muted-foreground">
                    Бюджет: {caseItem.budget} • {caseItem.period}
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
                {caseItem.metrics.map((metric, mIndex) => (
                  <div key={mIndex}>
                    <div className="font-display text-2xl font-semibold text-accent">
                      {metric.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                  Что сделали
                </div>
                <ul className="space-y-2">
                  {caseItem.actions.map((action, aIndex) => (
                    <li key={aIndex} className="text-sm text-foreground flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
