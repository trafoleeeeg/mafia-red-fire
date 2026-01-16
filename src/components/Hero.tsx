import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import Scene3D from "./Scene3D";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      
      {/* 3D Scene */}
      <Scene3D />
      
      {/* Glow effects */}
      <div className="hero-glow top-[-400px] left-1/2 -translate-x-1/2" />
      <div className="hero-glow-secondary top-[5%] right-[-300px]" />
      <div className="hero-glow-secondary bottom-[5%] left-[-300px]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Top fade for seamless header blend */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background via-background/80 to-transparent z-10" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Two column layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 mb-8"
              >
                <div className="tag">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  Принимаем проекты
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6"
              >
                <span className="text-gradient">Приводим трафик</span>
                <br />
                <span className="text-gradient">в </span>
                <span className="text-gradient-accent">сложных нишах</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
              >
                Gambling, крипто, финансы, nutra. Полный цикл от креативов 
                до масштабирования с гарантией результата.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-12"
              >
                <Button 
                  size="xl" 
                  className="btn-glow bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-base font-medium"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Обсудить проект
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="rounded-full px-8 h-14 border-border/50 hover:border-accent/50 hover:bg-accent/5 group"
                  asChild
                >
                  <a href="#cases">
                    <Play className="w-4 h-4 mr-2 text-accent" />
                    Смотреть кейсы
                  </a>
                </Button>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <span>FB & Google Ads</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>TikTok Ads</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
                  </svg>
                  <span>Telegram</span>
                </div>
              </motion.div>
            </div>

            {/* Right - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main stat card */}
              <div className="glass-card p-8 mb-6 animate-glow-pulse">
                <div className="text-sm text-muted-foreground mb-3 uppercase tracking-wider">
                  Реализованный бюджет
                </div>
                <div className="font-display text-6xl md:text-7xl font-bold text-foreground mb-2">
                  $500K<span className="text-accent">+</span>
                </div>
                <div className="text-muted-foreground">
                  успешно открученного бюджета за 2024
                </div>
              </div>

              {/* Secondary stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="stat-card p-6 relative">
                  <div className="relative z-10">
                    <div className="font-display text-4xl font-bold text-foreground mb-1">
                      x2.5<span className="text-accent">+</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Средний ROI
                    </div>
                  </div>
                </div>
                <div className="stat-card p-6 relative">
                  <div className="relative z-10">
                    <div className="font-display text-4xl font-bold text-foreground mb-1">
                      50<span className="text-accent">+</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Проектов
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;