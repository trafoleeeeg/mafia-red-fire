import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Scene3D from "./Scene3D";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 z-[1]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="line-accent" />
            <span className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
              Трафик-агентство
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-8"
          >
            <span className="text-foreground">Приводим клиентов</span>
            <br />
            <span className="text-foreground">в бизнес, где</span>
            <br />
            <span className="text-accent">реклама — сложно</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed"
          >
            Gambling, крипта, nutra, финансы — ниши, где обычные агентства 
            отказывают или не справляются. Мы знаем, как получить трафик 
            и не слить бюджет.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Button variant="premium" size="xl" className="group">
              Обсудить задачу
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Как мы работаем
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border/50"
          >
            {[
              { value: "6 лет", label: "Работаем в сложных нишах" },
              { value: "40+", label: "Проектов за прошлый год" },
              { value: "от $5K", label: "Минимальный бюджет на тест" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
