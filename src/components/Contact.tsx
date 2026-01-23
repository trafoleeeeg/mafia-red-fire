import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Send, MessageCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [telegram, setTelegram] = useState("");
  const [niche, setNiche] = useState("");
  const [budget, setBudget] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Validate telegram handle format (5-32 chars, alphanumeric + underscore)
  const isValidTelegramHandle = (handle: string): boolean => {
    const cleaned = handle.trim().replace(/^@/, '');
    const telegramRegex = /^[a-zA-Z][a-zA-Z0-9_]{4,31}$/;
    return telegramRegex.test(cleaned);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!telegram.trim() || !niche.trim()) {
      toast({
        title: "Ошибка",
        description: "Заполните обязательные поля",
        variant: "destructive",
      });
      return;
    }

    if (!isValidTelegramHandle(telegram)) {
      toast({
        title: "Ошибка",
        description: "Неверный формат Telegram. Юзернейм должен быть 5-32 символа (буквы, цифры, _)",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-telegram", {
        body: {
          telegram: telegram.trim(),
          niche: niche.trim(),
          budget: budget.trim(),
        },
      });

      if (error) throw error;

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });

      setTelegram("");
      setNiche("");
      setBudget("");
    } catch (error: any) {
      console.error("Error sending form:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="section-line" />
              <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
                Контакты
              </span>
              <div className="section-line rotate-180" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Готовы <span className="text-gradient-accent">обсудить</span> проект?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
              Оставьте заявку или напишите в Telegram. Ответим в течение нескольких часов.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="glass-card p-8 lg:p-10">
                <h3 className="font-display text-xl font-semibold text-foreground mb-8">
                  Оставить заявку
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Telegram *</label>
                    <input
                      type="text"
                      placeholder="@username"
                      className="form-input"
                      value={telegram}
                      onChange={(e) => setTelegram(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Ваша ниша *</label>
                    <input
                      type="text"
                      placeholder="Gambling, крипто, nutra..."
                      className="form-input"
                      value={niche}
                      onChange={(e) => setNiche(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Примерный бюджет</label>
                    <input
                      type="text"
                      placeholder="от $2K/мес"
                      className="form-input"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="xl"
                    className="w-full btn-glow bg-accent hover:bg-accent/90 text-white rounded-xl h-14 text-base group"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        Отправить заявку
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Telegram */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="glass-card p-8 lg:p-10 h-full flex flex-col">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 mb-8">
                  <MessageCircle className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Или в Telegram
                </h3>
                <p className="text-muted-foreground mb-6">
                  Быстрый ответ, можно сразу обсудить детали и получить консультацию.
                </p>
                <div className="space-y-3 mt-auto">
                  <a
                    href="https://t.me/mafiatrafa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 w-full py-4 rounded-xl 
                             border border-accent/30 text-accent font-medium
                             hover:bg-accent/10 hover:border-accent/50 transition-all group"
                  >
                    <Send className="w-5 h-5" />
                    @mafiatrafa
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://t.me/mafia_trafa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 w-full py-3 rounded-xl 
                             border border-border/50 text-muted-foreground text-sm
                             hover:bg-secondary/50 hover:text-foreground transition-all group"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Канал с внутрянкой
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
