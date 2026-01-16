import { motion } from "framer-motion";

const problems = [
  {
    problem: "Реклама блокируется",
    solution: "Знаем, как проходить модерацию и работать с клоакингом без риска бана",
  },
  {
    problem: "Агентства отказывают",
    solution: "Специализируемся на нишах, от которых другие бегут",
  },
  {
    problem: "Трафик есть, продаж нет",
    solution: "Настраиваем аналитику и оптимизируем воронку до конверсии в деньги",
  },
  {
    problem: "Непонятно, куда уходит бюджет",
    solution: "Прозрачная отчётность: видите каждый рубль и его отдачу",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
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
              Что решаем
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            Типичные проблемы владельцев бизнеса в сложных нишах
          </h2>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-1">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="premium-card p-8 md:p-10"
            >
              <div className="text-accent text-sm font-medium uppercase tracking-wider mb-3">
                Проблема
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                {item.problem}
              </h3>
              <div className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                Наше решение
              </div>
              <p className="text-foreground leading-relaxed">
                {item.solution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
