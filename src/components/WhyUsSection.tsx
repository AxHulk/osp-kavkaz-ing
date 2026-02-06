import { Clock, Users, Layers, ShieldCheck, HeadphonesIcon, Award } from "lucide-react";

const advantages = [
  {
    icon: Clock,
    title: "Многолетний опыт",
    description: "Более 20 лет работы в сфере инженерного сопровождения сложных объектов",
  },
  {
    icon: Users,
    title: "Команда экспертов",
    description: "Дипломированные инженеры с глубоким пониманием специфики канатных дорог",
  },
  {
    icon: Layers,
    title: "Полный спектр услуг",
    description: "От анализа документации до проведения испытаний и выдачи сертификата",
  },
  {
    icon: ShieldCheck,
    title: "Соблюдение стандартов",
    description: "Работа в соответствии с российскими и международными нормативами",
  },
  {
    icon: HeadphonesIcon,
    title: "Сопровождение на всех этапах",
    description: "Консультирование и поддержка на протяжении всего процесса сертификации",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-secondary">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - content */}
          <div>
            <h2 className="section-title mb-6">
              Почему выбирают нас
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              ООО «КАВКАЗ-ИНЖИНИРИНГ» — многопрофильный экспертный центр с уникальным опытом работы с высокогорными объектами и сложными инженерными проектами.
            </p>
            
            {/* Accreditation info */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">Аккредитация</h4>
                  <p className="text-muted-foreground text-sm">Росаккредитация</p>
                </div>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Номер записи в реестре аккредитованных лиц:</p>
                <p className="font-heading font-bold text-foreground text-lg">RA.RU.11XX</p>
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                Область аккредитации: сертификация пассажирских подвесных канатных дорог и фуникулёров в соответствии с Постановлением Правительства №2425 от ../../2026г.
              </p>
            </div>
          </div>

          {/* Right side - advantages */}
          <div className="space-y-4">
            {advantages.map((advantage, index) => (
              <div
                key={advantage.title}
                className="group flex items-start gap-4 p-4 rounded-lg bg-card/50 hover:bg-card border border-transparent hover:border-border transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                  <advantage.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">
                    {advantage.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
