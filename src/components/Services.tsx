import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Media Buying",
    description: "Закупка трафика на всех крупнейших платформах: Meta, Google, TikTok, native. Работаем с бюджетами от $10K/мес.",
    tags: ["Facebook Ads", "Google Ads", "TikTok", "Native"],
  },
  {
    number: "02",
    title: "Affiliate Marketing",
    description: "Прямые контракты с рекламодателями. Эксклюзивные условия и повышенные ставки для наших партнёров.",
    tags: ["CPA", "RevShare", "Hybrid"],
  },
  {
    number: "03",
    title: "Креатив и продакшн",
    description: "Собственная студия для создания конвертящих креативов. От статики до полноценных видеороликов.",
    tags: ["UGC", "Video", "Static", "Landing"],
  },
  {
    number: "04",
    title: "Аналитика и BI",
    description: "Глубокая аналитика на базе собственных инструментов. Трекинг, атрибуция, прогнозирование.",
    tags: ["Tracking", "Attribution", "Dashboards"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="line-accent" />
            <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
              Услуги
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Полный цикл performance-маркетинга
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            От стратегии до масштабирования. Берём на себя весь процесс привлечения и монетизации трафика.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-1">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="premium-card p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                  {/* Number */}
                  <span className="text-muted-foreground/30 font-display text-6xl font-semibold">
                    {service.number}
                  </span>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs text-muted-foreground border border-border bg-secondary/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
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
