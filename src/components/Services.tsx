import { motion } from "framer-motion";
import { Target, Palette, Globe, MessageCircle, TrendingUp, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Закупка трафика",
    description: "Facebook, Instagram, TikTok, Google. Работаем с любыми источниками, знаем как проходить модерацию в серых нишах.",
  },
  {
    icon: Palette,
    title: "Креативы и A/B тесты",
    description: "Собственная команда дизайнеров. Тестируем десятки гипотез, находим работающие связки.",
  },
  {
    icon: Globe,
    title: "Лендинги и прелендинги",
    description: "Разрабатываем высококонверсионные страницы, настраиваем трекеры и сквозную аналитику.",
  },
  {
    icon: MessageCircle,
    title: "Telegram-воронки",
    description: "Боты, автопрогревы, рассылки. Полная автоматизация работы с лидами в мессенджерах.",
  },
  {
    icon: TrendingUp,
    title: "Масштабирование",
    description: "Увеличиваем бюджеты без потери эффективности. Стабильный рост без просадок ROI.",
  },
  {
    icon: BarChart3,
    title: "Аналитика и отчётность",
    description: "Еженедельные отчёты с прозрачной статистикой. Видите каждый потраченный доллар.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      
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
              Услуги
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-accent" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Полный цикл работы
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            От анализа ниши до масштабирования. Берём на себя весь performance-маркетинг.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="premium-card p-8 group"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 mb-6 
                            group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-300">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
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