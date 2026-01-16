import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, Percent, ArrowUpRight } from "lucide-react";

const cases = [
  {
    niche: "Crypto Trading Bot",
    tag: "Telegram",
    budget: "$12K",
    period: "2 мес",
    result: "2,400+",
    resultLabel: "подписчиков",
    metrics: [
      { label: "CPL", value: "$1.2" },
      { label: "ROI", value: "x2.4" },
      { label: "CTR", value: "3.2%" },
    ],
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
  {
    niche: "Investment Platform",
    tag: "Finance",
    budget: "$45K",
    period: "4 мес",
    result: "2,500",
    resultLabel: "квал. лидов",
    metrics: [
      { label: "CPL", value: "$18" },
      { label: "ROI", value: "x3.1" },
      { label: "CR", value: "12%" },
    ],
    gradient: "from-emerald-500/20 to-teal-500/10",
  },
  {
    niche: "iGaming Slots",
    tag: "Gambling",
    budget: "$144K",
    period: "6 мес",
    result: "5,100",
    resultLabel: "FTD",
    metrics: [
      { label: "CPA", value: "$28" },
      { label: "ROI", value: "x2.8" },
      { label: "Ret D7", value: "34%" },
    ],
    gradient: "from-purple-500/20 to-pink-500/10",
  },
  {
    niche: "Chargeback Services",
    tag: "Finance",
    budget: "$28K",
    period: "3 мес",
    result: "780",
    resultLabel: "заявок",
    metrics: [
      { label: "CPL", value: "$36" },
      { label: "ROI", value: "x4.2" },
      { label: "CR", value: "18%" },
    ],
    gradient: "from-orange-500/20 to-amber-500/10",
  },
  {
    niche: "Premium Dating",
    tag: "Adult",
    budget: "$67K",
    period: "5 мес",
    result: "12,000",
    resultLabel: "регистраций",
    metrics: [
      { label: "CPA", value: "$5.6" },
      { label: "ROI", value: "x2.1" },
      { label: "Ret D30", value: "22%" },
    ],
    gradient: "from-rose-500/20 to-red-500/10",
  },
  {
    niche: "Nutra / Weight Loss",
    tag: "Health",
    budget: "$52K",
    period: "4 мес",
    result: "3,200",
    resultLabel: "продаж",
    metrics: [
      { label: "CPS", value: "$16" },
      { label: "ROI", value: "x2.6" },
      { label: "Approve", value: "42%" },
    ],
    gradient: "from-green-500/20 to-lime-500/10",
  },
];

const Cases = () => {
  return (
    <section id="cases" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-accent" />
            <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
              Кейсы
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-accent" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Результаты клиентов
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Реальные цифры из проектов. Каждый кейс — от стратегии до масштабирования.
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="case-card group"
            >
              {/* Gradient top */}
              <div className={`h-1.5 bg-gradient-to-r ${caseItem.gradient}`} />
              
              <div className="p-7">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="inline-block text-[10px] tracking-[0.15em] uppercase text-accent/80 
                                   bg-accent/10 px-3 py-1 rounded-full mb-3">
                      {caseItem.tag}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {caseItem.niche}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent 
                                          group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                {/* Budget & Period */}
                <div className="flex items-center gap-4 text-sm mb-6 pb-6 border-b border-border/50">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground font-medium">{caseItem.budget}</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground/50 rounded-full" />
                  <span className="text-muted-foreground">{caseItem.period}</span>
                </div>

                {/* Result */}
                <div className="mb-6">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Результат
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl font-bold text-foreground">
                      {caseItem.result}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {caseItem.resultLabel}
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  {caseItem.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="text-center p-3 rounded-xl bg-secondary/50">
                      <div className="font-display text-lg font-semibold text-foreground mb-0.5">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                  ))}
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
          <p className="text-muted-foreground mb-4">
            Хотите такие же результаты?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
          >
            Обсудить ваш проект
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Cases;