import { motion } from "framer-motion";
import { Target, Palette, Globe, MessageCircle, TrendingUp, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Закупка трафика",
    description: "Facebook, Instagram, TikTok, Google. Работаем с любыми источниками, знаем как проходить модерацию.",
  },
  {
    icon: Palette,
    title: "Креативы и A/B тесты",
    description: "Собственная команда дизайнеров. Тестируем гипотезы, находим работающие связки.",
  },
  {
    icon: Globe,
    title: "Лендинги и прелендинги",
    description: "Разрабатываем конвертящие страницы, настраиваем трекеры и аналитику.",
  },
  {
    icon: MessageCircle,
    title: "Telegram-воронки",
    description: "Боты, автопрогревы, рассылки. Полная автоматизация работы с лидами.",
  },
  {
    icon: TrendingUp,
    title: "Масштабирование",
    description: "Увеличиваем бюджеты без потери эффективности. Стабильный рост без просадок.",
  },
  {
    icon: BarChart3,
    title: "Отчётность и аналитика",
    description: "Еженедельные отчёты с прозрачной статистикой. Видите каждый потраченный рубль.",
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
              Наши услуги
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            Полный цикл работы с трафиком
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="premium-card p-8 md:p-10 group"
            >
              <service.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
