import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, Percent } from "lucide-react";

const cases = [
  {
    niche: "Crypto Trading Bot",
    tag: "Telegram",
    budget: "$12K",
    period: "2 мес",
    result: "2,400+ подписчиков",
    metrics: [
      { icon: DollarSign, label: "CPL", value: "$1.2" },
      { icon: TrendingUp, label: "ROI", value: "x2.4" },
      { icon: Percent, label: "CTR", value: "3.2%" },
    ],
  },
  {
    niche: "Investment Platform",
    tag: "Finance",
    budget: "$45K",
    period: "4 мес",
    result: "2,500 лидов",
    metrics: [
      { icon: DollarSign, label: "CPL", value: "$18" },
      { icon: TrendingUp, label: "ROI", value: "x3.1" },
      { icon: Percent, label: "CR", value: "12%" },
    ],
  },
  {
    niche: "iGaming Slots",
    tag: "Gambling",
    budget: "$144K",
    period: "6 мес",
    result: "5,100 FTD",
    metrics: [
      { icon: DollarSign, label: "CPA", value: "$28" },
      { icon: TrendingUp, label: "ROI", value: "x2.8" },
      { icon: Users, label: "Ret D7", value: "34%" },
    ],
  },
  {
    niche: "Chargeback Services",
    tag: "Finance",
    budget: "$28K",
    period: "3 мес",
    result: "780 заявок",
    metrics: [
      { icon: DollarSign, label: "CPL", value: "$36" },
      { icon: TrendingUp, label: "ROI", value: "x4.2" },
      { icon: Percent, label: "CR", value: "18%" },
    ],
  },
  {
    niche: "Premium Dating",
    tag: "Adult",
    budget: "$67K",
    period: "5 мес",
    result: "12,000 регистраций",
    metrics: [
      { icon: DollarSign, label: "CPA", value: "$5.6" },
      { icon: TrendingUp, label: "ROI", value: "x2.1" },
      { icon: Users, label: "Ret D30", value: "22%" },
    ],
  },
  {
    niche: "Nutra / Weight Loss",
    tag: "Health",
    budget: "$52K",
    period: "4 мес",
    result: "3,200 продаж",
    metrics: [
      { icon: DollarSign, label: "CPS", value: "$16" },
      { icon: TrendingUp, label: "ROI", value: "x2.6" },
      { icon: Percent, label: "Approve", value: "42%" },
    ],
  },
];

const Cases = () => {
  return (
    <section id="cases" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 dot-pattern opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-0 right-1/3 w-px h-48 bg-gradient-to-t from-transparent via-accent/10 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-accent to-transparent" />
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-medium">
              Кейсы
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            Результаты
            <span className="block text-muted-foreground">наших клиентов</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Реальные цифры из проектов в сложных нишах. Каждый кейс — это работа от стратегии до масштабирования.
          </p>
        </motion.div>

        {/* Cases Grid - Masonry-like layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative bg-gradient-to-br from-secondary/80 to-secondary/40 border border-border/50 p-8 h-full
                            hover:border-accent/30 transition-all duration-500 hover:-translate-y-1
                            backdrop-blur-sm">
                {/* Tag */}
                <div className="absolute top-6 right-6">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-accent/80 border border-accent/20 px-3 py-1">
                    {caseItem.tag}
                  </span>
                </div>
                
                {/* Header */}
                <div className="mb-8">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 pr-20">
                    {caseItem.niche}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">{caseItem.budget}</span>
                    <span className="w-1 h-1 bg-accent/50 rounded-full" />
                    <span>{caseItem.period}</span>
                  </div>
                </div>

                {/* Result highlight */}
                <div className="mb-8 pb-8 border-b border-border/50">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Результат
                  </div>
                  <div className="font-display text-2xl font-semibold text-foreground">
                    {caseItem.result}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {caseItem.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="text-center">
                      <metric.icon className="w-4 h-4 mx-auto mb-2 text-accent/60" />
                      <div className="font-display text-lg font-semibold text-foreground mb-1">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-accent to-accent/50 
                              group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 pt-16 border-t border-border/30"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "$350K+", label: "Общий бюджет кейсов" },
              { value: "40+", label: "Завершённых проектов" },
              { value: "x2.8", label: "Средний ROI" },
              { value: "6", label: "Ниш экспертизы" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cases;
