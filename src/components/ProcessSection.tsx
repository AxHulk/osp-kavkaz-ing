import { FileText, Search, FlaskConical, CheckCircle, Award } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Подача заявки",
    description: "Клиент подает заявку на сертификацию с необходимыми документами",
  },
  {
    number: "02",
    icon: Search,
    title: "Анализ документации",
    description: "Наши специалисты проводят анализ технической документации и проекта",
  },
  {
    number: "03",
    icon: FlaskConical,
    title: "Проведение испытаний",
    description: "Выполняются необходимые испытания и проверки безопасности",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Решение о выдаче",
    description: "Принимается решение о соответствии требованиям и выдаче сертификата",
  },
  {
    number: "05",
    icon: Award,
    title: "Выдача сертификата",
    description: "Выдача официального сертификата соответствия",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="section-title mb-4">
            Процесс сертификации
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Прозрачный маршрут к безопасности — понятная последовательность шагов
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Desktop horizontal line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border" />
          
          {/* Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step number & icon container */}
                <div className="relative z-10 mb-6">
                  <div className="w-24 h-24 rounded-full bg-card border-2 border-border flex flex-col items-center justify-center group hover:border-accent transition-colors duration-300">
                    <span className="text-accent font-heading font-bold text-lg mb-1">{step.number}</span>
                    <step.icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>

                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-8 bg-border mt-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
