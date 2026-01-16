import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Target, Calendar } from "lucide-react";

const cases = [
  {
    id: 1,
    vertical: "GAMBLING",
    geo: "TIER-1",
    spent: "$45,000",
    earned: "$187,000",
    roi: "315%",
    period: "30 дней",
    color: "from-primary to-red-900",
  },
  {
    id: 2,
    vertical: "NUTRA",
    geo: "LATAM",
    spent: "$12,000",
    earned: "$78,400",
    roi: "553%",
    period: "14 дней",
    color: "from-amber-500 to-amber-800",
  },
  {
    id: 3,
    vertical: "CRYPTO",
    geo: "CIS",
    spent: "$28,000",
    earned: "$156,800",
    roi: "460%",
    period: "21 день",
    color: "from-emerald-500 to-emerald-900",
  },
  {
    id: 4,
    vertical: "DATING",
    geo: "EU",
    spent: "$8,500",
    earned: "$41,650",
    roi: "390%",
    period: "7 дней",
    color: "from-pink-500 to-pink-900",
  },
];

const Cases = () => {
  return (
    <section id="cases" className="py-24 relative noise-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-sm font-bold uppercase tracking-widest mb-6">
            Реальные результаты
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            КЕЙСЫ <span className="text-gradient">НАШИХ ПАРТНЁРОВ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Не обещания — а факты. Каждый кейс подтверждён скринами и статистикой.
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden border border-border bg-card card-hover"
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${caseItem.color}`} />
              
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${caseItem.color} text-white`}>
                        {caseItem.vertical}
                      </span>
                      <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-secondary text-muted-foreground border border-border">
                        {caseItem.geo}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{caseItem.period}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Target className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-wider">Потрачено</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">{caseItem.spent}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-wider">Заработано</span>
                    </div>
                    <div className="text-2xl font-bold text-gradient">{caseItem.earned}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-wider">ROI</span>
                    </div>
                    <div className="text-3xl font-bold text-gradient-gold">{caseItem.roi}</div>
                  </div>
                </div>

                {/* Profit bar visualization */}
                <div className="mt-8">
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className={`h-full bg-gradient-to-r ${caseItem.color}`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Хочешь такие же результаты?
          </p>
          <a href="#contacts" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider hover:gap-4 transition-all">
            Получить персональную стратегию
            <TrendingUp className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Cases;
