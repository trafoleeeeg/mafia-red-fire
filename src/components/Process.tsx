import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Бриф",
    description: "Созвон 30-40 минут. Узнаём продукт, аудиторию, цели и текущие результаты.",
  },
  {
    number: "02",
    title: "Анализ ниши",
    description: "Изучаем конкурентов, источники трафика, рабочие подходы. Формируем гипотезы.",
  },
  {
    number: "03",
    title: "Тест гипотез",
    description: "2-4 недели на тесты. Находим работающие связки, отсекаем нерабочие.",
  },
  {
    number: "04",
    title: "Масштабирование",
    description: "Увеличиваем бюджеты на прибыльные связки. Постоянная оптимизация.",
  },
  {
    number: "05",
    title: "Сопровождение",
    description: "Еженедельные отчёты, оперативная связь, адаптация под изменения рынка.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 lg:py-32 relative">
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
              Этапы запуска
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            Как мы работаем
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Number */}
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 border border-accent/30 mb-6">
                  <span className="font-display text-lg font-semibold text-accent">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
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
