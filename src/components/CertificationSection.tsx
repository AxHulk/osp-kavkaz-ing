import { Award, Target, CheckCircle2 } from "lucide-react";

const CertificationSection = () => {
  return (
    <section id="certification" className="py-16 md:py-20 bg-secondary">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Аккредитованный орган по сертификации
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Орган по сертификации
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Наш орган по сертификации аккредитован для проведения работ по обязательной сертификации пассажирских подвесных канатных дорог и их комплектующих в соответствии с требованиями технических регламентов.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Сертификация ППКД</h4>
                  <p className="text-muted-foreground text-sm">Пассажирские подвесные канатные дороги всех типов</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Сертификация элементов</h4>
                  <p className="text-muted-foreground text-sm">Комплектующие и элементы безопасности</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Техническая экспертиза</h4>
                  <p className="text-muted-foreground text-sm">Комплексная оценка соответствия требованиям</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-xl mb-4">
                Область аккредитации
              </h3>
              <p className="text-muted-foreground mb-6">
                Сертификация пассажирских подвесных канатных дорог и фуникулёров в соответствии с ТР ЕАЭС 042/2017
              </p>
              <div className="bg-secondary rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Номер аккредитации</p>
                <p className="font-heading font-bold text-primary text-lg">
                  RA.RU.11XX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
