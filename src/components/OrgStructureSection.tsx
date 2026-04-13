import { User, Users, Shield, Scale, ClipboardCheck, Briefcase, Calculator, Settings, GraduationCap, FileText } from "lucide-react";

const OrgStructureSection = () => {
  return (
    <section className="py-20 md:py-32 bg-card/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Организационная структура
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Органа по сертификации продукции (ОСП) ООО «КАВКАЗ-ИНЖИНИРИНГ» (Общества)
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Level 1 - Генеральный директор */}
          <div className="flex justify-center mb-4">
            <div className="bg-accent/20 border-2 border-accent rounded-xl p-5 text-center min-w-[260px] shadow-lg">
              <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-base">
                Генеральный директор
              </h3>
              <p className="text-foreground/60 text-sm">Общества</p>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center mb-4">
            <div className="w-0.5 h-8 bg-accent/40" />
          </div>

          {/* Level 2 - Руководитель ОСП + Commissions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 items-start">
            {/* Left: Комиссия по оценке компетентности */}
            <div className="flex flex-col gap-4">
              <div className="bg-card border-2 border-dashed border-border rounded-xl p-4 text-center hover:border-accent/30 transition-colors">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                  <ClipboardCheck className="w-5 h-5 text-foreground/70" />
                </div>
                <h4 className="font-heading font-semibold text-foreground text-sm">
                  Комиссия по оценке компетентности ОСП
                </h4>
              </div>
            </div>

            {/* Center: Руководитель ОСП */}
            <div className="flex flex-col items-center">
              <div className="bg-accent/15 border-2 border-accent/50 rounded-xl p-5 text-center w-full">
                <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-heading font-bold text-foreground text-base">
                  Руководитель ОСП
                </h4>
              </div>
            </div>

            {/* Right: Совет по обеспечению беспристрастности */}
            <div className="flex flex-col gap-4">
              <div className="bg-card border-2 border-dashed border-border rounded-xl p-4 text-center hover:border-accent/30 transition-colors">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                  <Scale className="w-5 h-5 text-foreground/70" />
                </div>
                <h4 className="font-heading font-semibold text-foreground text-sm">
                  Совет по обеспечению беспристрастности ОСП
                </h4>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center mb-4">
            <div className="w-0.5 h-8 bg-accent/40" />
          </div>

          {/* Level 3 - Комиссия по апелляциям + Зам руководителя + Support departments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 items-start">
            {/* Left: Комиссия по апелляциям */}
            <div>
              <div className="bg-card border-2 border-dashed border-border rounded-xl p-4 text-center hover:border-accent/30 transition-colors">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                  <Scale className="w-5 h-5 text-foreground/70" />
                </div>
                <h4 className="font-heading font-semibold text-foreground text-sm">
                  Комиссия по апелляциям ОСП
                </h4>
              </div>
            </div>

            {/* Center: Заместитель руководителя */}
            <div className="flex flex-col items-center">
              <div className="bg-card border border-border rounded-xl p-5 text-center w-full hover:border-accent/30 transition-colors">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="w-6 h-6 text-foreground/70" />
                </div>
                <h4 className="font-heading font-semibold text-foreground text-sm">
                  Заместитель руководителя ОСП
                </h4>
              </div>
            </div>

            {/* Right: Support departments block */}
            <div className="bg-card border border-border rounded-xl p-4 space-y-3" style={{ gridRow: "span 4" }}>
              <div>
                <h5 className="font-heading font-semibold text-foreground text-sm mb-1">Бухгалтерия Общества:</h5>
                <p className="text-foreground/60 text-xs">— главный бухгалтер.</p>
              </div>
              <div className="border-t border-border pt-3">
                <h5 className="font-heading font-semibold text-foreground text-sm mb-1">Отдел кадров и администрирования Общества:</h5>
                <ul className="text-foreground/60 text-xs space-y-0.5">
                  <li>— специалист по кадрам;</li>
                  <li>— специалист по охране труда и технике безопасности;</li>
                  <li>— офис-менеджер.</li>
                </ul>
              </div>
              <div className="border-t border-border pt-3">
                <h5 className="font-heading font-semibold text-foreground text-sm mb-1">Административно-хозяйственный отдел Общества:</h5>
                <p className="text-foreground/60 text-xs">— системный администратор.</p>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center mb-4">
            <div className="w-0.5 h-8 bg-accent/40" />
          </div>

          {/* Level 4 - Эксперты + Менеджер по качеству */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 items-start">
            {/* Left: Менеджер по качеству */}
            <div>
              <div className="bg-card border border-border rounded-xl p-4 text-center hover:border-accent/30 transition-colors">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                  <ClipboardCheck className="w-5 h-5 text-foreground/70" />
                </div>
                <h4 className="font-heading font-semibold text-foreground text-sm">
                  Менеджер по качеству ОСП
                </h4>
              </div>
            </div>

            {/* Center: Эксперты */}
            <div className="flex flex-col items-center">
              <div className="bg-accent/10 border border-accent/30 rounded-xl p-5 text-center w-full hover:border-accent/50 transition-colors">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-foreground text-sm">
                  Эксперты сертификации продукции ОСП
                </h4>
              </div>
            </div>

            {/* Right: empty for alignment with support block */}
            <div />
          </div>

          {/* Connector */}
          <div className="flex justify-center mb-4">
            <div className="w-0.5 h-8 bg-accent/40" />
          </div>

          {/* Level 5 - Стажеры */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 items-start">
            <div />
            <div className="flex flex-col items-center">
              <div className="bg-card border border-border rounded-xl p-5 text-center w-full hover:border-accent/30 transition-colors">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-6 h-6 text-foreground/70" />
                </div>
                <h4 className="font-heading font-semibold text-foreground text-sm">
                  Стажеры экспертов по сертификации продукции ОСП
                </h4>
              </div>
            </div>
            <div />
          </div>

          {/* Connector */}
          <div className="flex justify-center mb-4">
            <div className="w-0.5 h-8 bg-accent/40" />
          </div>

          {/* Level 6 - Делопроизводитель */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 items-start">
            <div />
            <div className="flex flex-col items-center">
              <div className="bg-card border border-border rounded-xl p-5 text-center w-full hover:border-accent/30 transition-colors">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-foreground/70" />
                </div>
                <h4 className="font-heading font-semibold text-foreground text-sm">
                  Делопроизводитель ОСП
                </h4>
              </div>
            </div>
            <div />
          </div>

          {/* Legend */}
          <div className="border-t border-border pt-8">
            <p className="text-foreground/60 text-sm mb-4 font-medium">Примечание:</p>
            <p className="text-foreground/50 text-xs mb-4">
              Сведения о количестве штатных единиц ОСП Общества содержатся в штатном расписании Общества.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs text-foreground/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-accent" />
                <span>Административное подчинение</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 border-t-2 border-dashed border-foreground/40" />
                <span>Функциональное подчинение</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 border-t-2 border-dotted border-foreground/30" />
                <span>Взаимодействие</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-4 border-2 border-dashed border-foreground/30 rounded" />
                <span>Ответственность, назначаемая приказом по основной деятельности</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrgStructureSection;
