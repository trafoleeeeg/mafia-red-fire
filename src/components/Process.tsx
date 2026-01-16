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
    description: "Изучаем конкурентов, источники трафика, рабочие подходы. Формируем гипотезы.",
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
    <section id="process" className="py-24 lg:py-32 relative overflow-hidden">
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
              Процесс
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-accent" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Как мы работаем
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Прозрачный процесс от первого контакта до стабильного ROI
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line - Desktop */}
          <div className="hidden lg:block absolute top-7 left-[calc(10%)] right-[calc(10%)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center lg:text-left"
              >
                {/* Number */}
                <div className="step-number mx-auto lg:mx-0 mb-5">
                  {step.number}
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
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