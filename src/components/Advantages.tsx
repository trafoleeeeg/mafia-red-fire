import { Check } from "lucide-react";

const advantages = [
  "Прямые контракты с рекламодателями",
  "Ежедневные выплаты",
  "Персональный менеджер 24/7",
  "Эксклюзивные офферы",
  "Высокие ставки",
  "Гибкие условия сотрудничества",
  "Детальная статистика",
  "Быстрые интеграции API",
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6">
              ПОЧЕМУ <span className="text-gradient">МЫ?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              MAFIA TRAFA — это команда профессионалов с многолетним опытом в affiliate маркетинге. 
              Мы знаем, как сделать ваш трафик прибыльным.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{advantage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-3xl" />
            <div className="relative bg-card border border-border rounded-2xl p-10 shadow-mafia">
              <div className="text-center mb-10">
                <h3 className="font-display text-4xl text-foreground mb-2">
                  РЕЗУЛЬТАТЫ
                </h3>
                <p className="text-muted-foreground">За последний год</p>
              </div>
              
              <div className="space-y-8">
                {[
                  { label: "Выплачено партнёрам", value: "$50M+" },
                  { label: "Успешных кампаний", value: "10,000+" },
                  { label: "Средний ROI", value: "340%" },
                  { label: "Довольных клиентов", value: "99%" },
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-border pb-4 last:border-0 last:pb-0">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className="font-display text-3xl text-gradient">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
