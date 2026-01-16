import { Target, Users, BarChart3, Shield, Zap, Globe } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Целевой трафик",
    description: "Только качественный трафик с высокой конверсией для ваших офферов",
  },
  {
    icon: Users,
    title: "CPA Сети",
    description: "Работаем с топовыми CPA сетями и прямыми рекламодателями",
  },
  {
    icon: BarChart3,
    title: "Аналитика",
    description: "Глубокая аналитика и отчётность по всем кампаниям в реальном времени",
  },
  {
    icon: Shield,
    title: "Антифрод",
    description: "Собственная система защиты от фрода и некачественного трафика",
  },
  {
    icon: Zap,
    title: "Быстрый старт",
    description: "Запуск кампаний за 24 часа с полной оптимизацией",
  },
  {
    icon: Globe,
    title: "Все ГЕО",
    description: "Работаем с трафиком из любых стран мира",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            НАШИ <span className="text-gradient">УСЛУГИ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный спектр услуг для вашего affiliate бизнеса
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-mafia"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
