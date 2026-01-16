import { motion } from "framer-motion";
import { Users, Clock, Target, Award } from "lucide-react";

const stats = [
  { icon: Clock, value: "6+", label: "лет опыта" },
  { icon: Target, value: "50+", label: "проектов" },
  { icon: Users, value: "9", label: "человек" },
  { icon: Award, value: "x2.5", label: "средний ROI" },
];

const team = [
  { role: "Медиабайеры", count: "4", desc: "FB, Google, TikTok" },
  { role: "Креативный отдел", count: "2", desc: "Дизайн, видео" },
  { role: "Аналитики", count: "1", desc: "BI, отчётность" },
  { role: "Аккаунт-менеджеры", count: "2", desc: "Коммуникация" },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-28 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
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
              О нас
            </span>
            <div className="section-line rotate-180" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Команда с <span className="text-gradient-accent">экспертизой</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="stat-card p-6 text-center relative">
              <div className="relative z-10">
                <stat.icon className="w-6 h-6 text-accent mx-auto mb-4" />
                <div className="font-display text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-10"
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Почему мы
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Если видим, что проект не взлетит — скажем честно до начала работы.</p>
              <p>Команда: медиабайеры с опытом 3+ лет в gambling и крипто, креативщики, аналитики.</p>
              <p>Работаем с бюджетами от $5K. Оптимальный тестовый бюджет — $10-15K.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-10"
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Структура команды
            </h3>
            <div className="space-y-4">
              {team.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-border/30 last:border-0">
                  <div>
                    <div className="font-medium text-foreground">{item.role}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                  <span className="text-3xl font-display font-bold text-accent">{item.count}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
