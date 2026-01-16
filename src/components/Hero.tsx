import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import Scene3D from "./Scene3D";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <Scene3D />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 z-[1]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6"
          >
            <span className="text-foreground">Приводим целевой трафик</span>
            <br />
            <span className="text-accent">в серых нишах</span>
          </motion.h1>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20">
              <Check className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground">Гарантия результата</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border">
              <span className="text-sm text-foreground">ROI x2+ в 9 из 10 проектов</span>
            </div>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-8 mb-10"
          >
            <div>
              <div className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                $80K+
              </div>
              <div className="text-sm text-muted-foreground">
                в месяц под управлением
              </div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                от $5K
              </div>
              <div className="text-sm text-muted-foreground">
                минимальный бюджет
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Button variant="premium" size="xl" className="group">
              Оставить заявку
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="https://t.me/mafia_trafa" target="_blank" rel="noopener noreferrer">
                Написать в Telegram
              </a>
            </Button>
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
