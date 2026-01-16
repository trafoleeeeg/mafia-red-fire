import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Разбираемся в вашем бизнесе",
    description: "Созвон на 30-40 минут. Узнаём продукт, целевую аудиторию, текущие результаты и цели. Без этого не начинаем.",
  },
  {
    number: "02",
    title: "Предлагаем стратегию",
    description: "Через 2-3 дня присылаем план: какие источники, какие креативы, какой бюджет нужен на тест и что ожидать.",
  },
  {
    number: "03",
    title: "Тестовый запуск",
    description: "2-4 недели на тест гипотез. Минимальный бюджет — $5K. По итогам понимаем, что работает, и согласовываем масштабирование.",
  },
  {
    number: "04",
    title: "Масштабирование",
    description: "Увеличиваем бюджеты на работающие связки. Вы видите отчёты в реальном времени и контролируете каждый шаг.",
  },
];

const Results = () => {
  return (
    <section id="results" className="py-24 lg:py-32 relative">
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
              Процесс
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            Как строится работа
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="premium-card p-8"
            >
              <span className="text-accent/40 font-display text-5xl font-semibold">
                {step.number}
              </span>
              <h3 className="font-display text-xl font-semibold text-foreground mt-4 mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Honest note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 border border-border bg-secondary/20"
        >
          <h4 className="font-display text-lg font-semibold text-foreground mb-3">
            Честно о гарантиях
          </h4>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Мы не обещаем ROI 500% и миллионные прибыли. Обещаем прозрачную работу, 
            понятные отчёты и честную оценку перспектив вашего проекта. Если видим, 
            что не сможем помочь — скажем сразу, до того как потратите деньги.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
