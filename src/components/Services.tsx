import { motion } from "framer-motion";
import { Target, Palette, Globe, MessageCircle, TrendingUp, BarChart3, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Закупка трафика",
    description: "Facebook, Instagram, TikTok, Google. Работаем с любыми источниками, обходим модерацию в сложных нишах.",
    features: ["Прямые связи с модераторами", "Фарм и прогрев аккаунтов", "Антидетект системы"],
  },
  {
    icon: Palette,
    title: "Креативы и A/B тесты",
    description: "Собственная продакшн-команда. Сотни гипотез в месяц, находим рабочие связки быстро.",
    features: ["Статика и видео", "Адаптация под ГЕО", "Сплит-тесты"],
  },
  {
    icon: Globe,
    title: "Лендинги и прелендинги",
    description: "Высококонверсионные страницы под любые офферы. Сквозная аналитика и трекинг.",
    features: ["Мультиязычность", "A/B тесты страниц", "Интеграция с CRM"],
  },
  {
    icon: MessageCircle,
    title: "Telegram-воронки",
    description: "Боты, автопрогревы, рассылки. Полная автоматизация работы с лидами.",
    features: ["Чат-боты", "Автоответы", "Сегментация"],
  },
  {
    icon: TrendingUp,
    title: "Масштабирование",
    description: "Увеличиваем бюджеты без потери эффективности. Стабильный рост без просадок.",
    features: ["Мультиаккаунтинг", "Распределение рисков", "Оптимизация CPL"],
  },
  {
    icon: BarChart3,
    title: "Аналитика и отчётность",
    description: "Прозрачная статистика в реальном времени. Видите каждый потраченный доллар.",
    features: ["Дашборды", "Еженедельные отчёты", "Unit-экономика"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="section-line" />
            <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
              Услуги
            </span>
            <div className="section-line rotate-180" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Полный цикл работы
            <br />
            <span className="text-gradient-accent">с трафиком</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            От анализа ниши до масштабирования. Берём на себя 
            весь performance-маркетинг под ключ.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card p-8 group cursor-pointer"
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl 
                              bg-gradient-to-br from-accent/20 to-accent/5
                              border border-accent/20 mb-8
                              group-hover:border-accent/40 group-hover:from-accent/30
                              transition-all duration-500">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>

                {/* Content */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground/50 
                                          group-hover:text-accent group-hover:translate-x-0.5 
                                          group-hover:-translate-y-0.5 transition-all" />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, fIndex) => (
                    <span 
                      key={fIndex}
                      className="text-xs px-3 py-1.5 rounded-full 
                               bg-secondary/80 text-muted-foreground
                               border border-border/50"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
