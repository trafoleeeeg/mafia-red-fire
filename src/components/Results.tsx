import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    vertical: "iGaming",
    geo: "Tier-1",
    result: "+$2.4M",
    roi: "380%",
    period: "6 месяцев",
    description: "Масштабирование gambling оффера на US/UK рынки с нуля до $400K/мес",
  },
  {
    vertical: "Nutra",
    geo: "LATAM",
    result: "+$890K",
    roi: "520%",
    period: "4 месяца",
    description: "Запуск и оптимизация воронки для health офферов на рынок Бразилии",
  },
  {
    vertical: "Finance",
    geo: "Europe",
    result: "+$1.2M",
    roi: "290%",
    period: "8 месяцев",
    description: "Комплексная стратегия для fintech продукта: от креативов до retention",
  },
];

const Results = () => {
  return (
    <section id="results" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="line-accent" />
              <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
                Результаты
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              Кейсы наших клиентов
            </h2>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="text-sm">Все кейсы</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid lg:grid-cols-3 gap-1">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="premium-card group"
            >
              {/* Top accent */}
              <div className="h-px bg-gradient-to-r from-accent via-accent/50 to-transparent" />
              
              <div className="p-8 md:p-10">
                {/* Tags */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="px-3 py-1 text-xs text-accent border border-accent/30 bg-accent/5">
                    {caseItem.vertical}
                  </span>
                  <span className="px-3 py-1 text-xs text-muted-foreground border border-border">
                    {caseItem.geo}
                  </span>
                </div>

                {/* Main Result */}
                <div className="mb-8">
                  <div className="font-display text-5xl md:text-6xl font-semibold text-foreground mb-2">
                    {caseItem.result}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    профита за {caseItem.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  {caseItem.description}
                </p>

                {/* ROI Badge */}
                <div className="flex items-center justify-between pt-6 border-t border-border/50">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">ROI</span>
                  <span className="font-display text-2xl font-semibold text-accent">
                    {caseItem.roi}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
