import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Бриф",
    description: "Созвон 30-40 минут. Узнаём продукт, аудиторию, цели и текущие результаты.",
  },
  {
    number: "02",
    title: "Анализ",
    description: "Изучаем конкурентов, источники, рабочие подходы. Формируем гипотезы.",
  },
  {
    number: "03",
    title: "Тесты",
    description: "2-4 недели на тесты. Находим работающие связки, отсекаем нерабочие.",
  },
  {
    number: "04",
    title: "Скейл",
    description: "Увеличиваем бюджеты на прибыльные связки. Постоянная оптимизация.",
  },
  {
    number: "05",
    title: "Саппорт",
    description: "Еженедельные отчёты, оперативная связь, адаптация под изменения.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-28 lg:py-40 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="section-line" />
            <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
              Процесс
            </span>
            <div className="section-line rotate-180" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Как мы <span className="text-gradient-accent">работаем</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Прозрачный процесс от первого контакта до стабильного ROI
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="step-number mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
