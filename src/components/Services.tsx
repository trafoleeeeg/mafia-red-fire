import { motion } from "framer-motion";
import { Target, Users, BarChart3, Shield, Zap, Globe, Crown, Rocket } from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "VIP офферы",
    description: "Эксклюзивные офферы с повышенными ставками, недоступные в паблике",
    highlight: true,
  },
  {
    icon: Target,
    title: "Снайперский таргет",
    description: "Попадаем точно в ЦА — никакого слива бюджета на мусорный трафик",
    highlight: false,
  },
  {
    icon: Rocket,
    title: "Быстрый запуск",
    description: "От заявки до первых лидов — 24 часа. Без бюрократии и ожидания",
    highlight: true,
  },
  {
    icon: Shield,
    title: "0% фрода",
    description: "Собственная антифрод система. Каждый лид — живой и платящий",
    highlight: false,
  },
  {
    icon: BarChart3,
    title: "Real-time аналитика",
    description: "Личный кабинет с детальной статистикой по каждой кампании",
    highlight: false,
  },
  {
    icon: Globe,
    title: "200+ ГЕО",
    description: "Работаем по всему миру: от Tier-1 до экзотики",
    highlight: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-card stripes-bg" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-sm font-bold uppercase tracking-widest mb-6">
            Что мы даём
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            АРСЕНАЛ <span className="text-gradient">ПОБЕДИТЕЛЯ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Всё, что нужно для доминирования в арбитраже
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group p-8 bg-background border border-border hover:border-primary/50 transition-all duration-500 ${service.highlight ? 'bg-primary/5 border-primary/30' : ''}`}
            >
              <div className={`w-14 h-14 flex items-center justify-center mb-6 ${service.highlight ? 'bg-blood-gradient shadow-blood' : 'bg-secondary border border-border'}`}>
                <service.icon className={`w-7 h-7 ${service.highlight ? 'text-white' : 'text-primary'}`} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 uppercase">
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
