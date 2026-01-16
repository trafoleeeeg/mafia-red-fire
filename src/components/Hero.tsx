import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Skull } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 noise-bg stripes-bg">
      {/* Aggressive Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-card" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/15 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-none bg-primary/20 border border-primary/50 mb-8"
          >
            <Flame className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-bold text-primary uppercase tracking-widest">
              Лимитированные слоты — осталось 3 места
            </span>
            <Flame className="w-5 h-5 text-primary animate-pulse" />
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-7xl md:text-[10rem] lg:text-[12rem] font-bold leading-[0.85] mb-6">
              <span className="text-gradient text-fire block">MAFIA</span>
              <span className="text-foreground block -mt-2 md:-mt-6">TRAFA</span>
            </h1>
          </motion.div>

          {/* Killer Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl text-foreground font-bold max-w-3xl mx-auto mb-4"
          >
            Трафик, который <span className="text-gradient">УБИВАЕТ КОНКУРЕНТОВ</span>
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Гарантируем ROI 300%+ или возвращаем деньги. Только эксклюзивные офферы и прямые контракты.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="hero" size="xl" className="group min-w-[280px]">
              <Skull className="w-5 h-5" />
              Забрать свой слот
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="min-w-[280px]">
              Смотреть кейсы
            </Button>
          </motion.div>

          {/* Trust Stats - More Aggressive */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {[
              { value: "$127M", label: "Заработано партнёрами", highlight: true },
              { value: "847%", label: "Средний ROI", highlight: false },
              { value: "24ч", label: "До первого профита", highlight: false },
              { value: "0%", label: "Фрода", highlight: true },
            ].map((stat, index) => (
              <div
                key={index}
                className={`p-6 border ${stat.highlight ? 'border-primary/50 bg-primary/5' : 'border-border bg-card/50'} card-hover`}
              >
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.highlight ? 'text-gradient' : 'text-foreground'}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent" />
    </section>
  );
};

export default Hero;
