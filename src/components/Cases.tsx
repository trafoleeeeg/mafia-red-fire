import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const cases = [
  {
    niche: "Crypto Trading Bot",
    tag: "Telegram",
    task: "Привлечь активную аудиторию в Telegram-бот для торговли криптовалютой",
    budget: "$11.8K",
    period: "2 мес",
    result: "2,347",
    resultLabel: "подписчиков",
    metrics: [
      { label: "CPL", value: "$1.18" },
      { label: "ROI", value: "x2.41" },
      { label: "CTR", value: "3.17%" },
    ],
    actions: ["Запуск FB Ads на tier-1 ГЕО", "Разработка креативов с демо-результатами", "Настройка бота и автоворонки"],
    color: "from-blue-500/20 via-blue-500/5 to-transparent",
    borderColor: "border-blue-500/20 hover:border-blue-500/40",
  },
  {
    niche: "Investment Platform",
    tag: "Finance",
    task: "Привести квалифицированных инвесторов на платформу с минимальным депозитом $1000",
    budget: "$43.5K",
    period: "4 мес",
    result: "2,487",
    resultLabel: "квал. лидов",
    metrics: [
      { label: "CPL", value: "$17.5" },
      { label: "ROI", value: "x3.14" },
      { label: "CR", value: "11.8%" },
    ],
    actions: ["Мультиканальный запуск (FB + Google)", "Лендинги под каждый сегмент аудитории", "Интеграция с CRM клиента"],
    color: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    borderColor: "border-emerald-500/20 hover:border-emerald-500/40",
  },
  {
    niche: "iGaming Slots",
    tag: "Gambling",
    task: "Максимизировать FTD с упором на retention и LTV игроков",
    budget: "$142K",
    period: "6 мес",
    result: "5,073",
    resultLabel: "FTD",
    metrics: [
      { label: "CPA", value: "$27.9" },
      { label: "ROI", value: "x2.83" },
      { label: "Ret D7", value: "33.7%" },
    ],
    actions: ["PWA-приложения под iOS/Android", "Push-уведомления для реактивации", "Сплит-тесты по бонусным программам"],
    color: "from-purple-500/20 via-purple-500/5 to-transparent",
    borderColor: "border-purple-500/20 hover:border-purple-500/40",
  },
  {
    niche: "Chargeback Services",
    tag: "Finance",
    task: "Привлечь пострадавших от мошенников для услуг возврата средств",
    budget: "$27.4K",
    period: "3 мес",
    result: "763",
    resultLabel: "заявок",
    metrics: [
      { label: "CPL", value: "$35.9" },
      { label: "ROI", value: "x4.17" },
      { label: "CR", value: "17.6%" },
    ],
    actions: ["Таргет на пострадавших от скама", "Лендинги с кейсами успешных возвратов", "Telegram-бот для квалификации"],
    color: "from-orange-500/20 via-orange-500/5 to-transparent",
    borderColor: "border-orange-500/20 hover:border-orange-500/40",
  },
  {
    niche: "Premium Dating",
    tag: "Adult",
    task: "Регистрации мужской аудитории 25-45 на премиум dating-платформу",
    budget: "$64.8K",
    period: "5 мес",
    result: "11,847",
    resultLabel: "регистраций",
    metrics: [
      { label: "CPA", value: "$5.47" },
      { label: "ROI", value: "x2.13" },
      { label: "Ret D30", value: "21.4%" },
    ],
    actions: ["Push-трафик + попандеры", "Прелендинги с квизами", "Оптимизация под retention"],
    color: "from-rose-500/20 via-rose-500/5 to-transparent",
    borderColor: "border-rose-500/20 hover:border-rose-500/40",
  },
  {
    niche: "Nutra / Weight Loss",
    tag: "Health",
    task: "Продажи БАДов для похудения на tier-1 рынках с высоким approve",
    budget: "$51.2K",
    period: "4 мес",
    result: "3,189",
    resultLabel: "продаж",
    metrics: [
      { label: "CPS", value: "$16.1" },
      { label: "ROI", value: "x2.58" },
      { label: "Approve", value: "41.3%" },
    ],
    actions: ["Native-реклама + FB", "UGC-креативы и отзывы", "A/B тесты офферов"],
    color: "from-green-500/20 via-green-500/5 to-transparent",
    borderColor: "border-green-500/20 hover:border-green-500/40",
  },
];

const Cases = () => {
  return (
    <section id="cases" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-15" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
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
              Кейсы
            </span>
            <div className="section-line rotate-180" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Результаты наших
            <br />
            <span className="text-gradient-accent">клиентов</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Реальные цифры из проектов. Каждый кейс — от стратегии 
            до масштабирования.
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`case-card group ${caseItem.borderColor}`}
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${caseItem.color}`} />
              
              <div className="p-8 lg:p-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="tag mb-4">
                      {caseItem.tag}
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-foreground mt-3">
                      {caseItem.niche}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground/30 
                                          group-hover:text-accent group-hover:rotate-45 
                                          transition-all duration-300" />
                </div>

                {/* Task */}
                <div className="mb-8">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Задача
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    {caseItem.task}
                  </p>
                </div>

                {/* Budget & Period */}
                <div className="flex items-center gap-6 text-sm mb-8 pb-8 border-b border-border/50">
                  <div>
                    <span className="text-muted-foreground">Бюджет: </span>
                    <span className="text-foreground font-semibold">{caseItem.budget}</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                  <div>
                    <span className="text-muted-foreground">Срок: </span>
                    <span className="text-foreground font-semibold">{caseItem.period}</span>
                  </div>
                </div>

                {/* Result highlight */}
                <div className="mb-8">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                    Результат
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-5xl font-bold text-foreground">
                      {caseItem.result}
                    </span>
                    <span className="text-lg text-muted-foreground">
                      {caseItem.resultLabel}
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {caseItem.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="text-center p-4 rounded-xl bg-secondary/50 border border-border/30">
                      <div className="font-display text-xl font-bold text-accent mb-1">
                        {metric.value}
                      </div>
                      <div className="text-[11px] text-muted-foreground uppercase tracking-wider">
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
                  <div className="space-y-2">
                    {caseItem.actions.map((action, aIndex) => (
                      <div key={aIndex} className="flex items-start gap-2 text-sm text-foreground/70">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="glass-card inline-flex items-center gap-6 px-8 py-5">
            <p className="text-foreground font-medium">
              Хотите такие же результаты?
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 
                       font-medium transition-colors group"
            >
              Обсудить проект
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cases;
