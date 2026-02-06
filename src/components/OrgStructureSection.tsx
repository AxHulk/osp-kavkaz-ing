import { User, Users, Shield, Scale, ClipboardCheck, Briefcase, Calculator, Settings, GraduationCap, Headphones } from "lucide-react";

const OrgStructureSection = () => {
  return (
    <section className="py-20 md:py-32 bg-card/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Организационная структура
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Органа по сертификации продукции ООО «КАВКАЗ-ИНЖИНИРИНГ»
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Top Level - CEO */}
          <div className="flex justify-center mb-8">
            <div className="bg-accent/20 border-2 border-accent rounded-xl p-6 text-center min-w-[280px] shadow-lg">
              <div className="w-14 h-14 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg">
                Генеральный директор
              </h3>
              <p className="text-foreground/60 text-sm">ООО «КАВКАЗ-ИНЖИНИРИНГ»</p>
              <p className="text-accent font-medium text-sm mt-2">Аниканов Александр Сергеевич</p>
            </div>
          </div>

          {/* Vertical connector */}
          <div className="flex justify-center mb-4">
            <div className="w-0.5 h-8 bg-accent/40" />
          </div>

          {/* Second Level - Three bodies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 relative">
            {/* Horizontal connector line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-border -translate-y-1/2 z-0" />
            
            {/* Competence Commission */}
            <div className="bg-card border border-border rounded-xl p-5 text-center relative z-10 hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <ClipboardCheck className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                Комиссия по оценке компетентности
              </h4>
              <p className="text-foreground/50 text-xs">ОСП</p>
            </div>

            {/* Impartiality Council */}
            <div className="bg-card border border-border rounded-xl p-5 text-center relative z-10 hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <Scale className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                Совет по обеспечению беспристрастности
              </h4>
              <p className="text-foreground/50 text-xs">ОСП</p>
            </div>

            {/* OSP Head */}
            <div className="bg-accent/15 border-2 border-accent/50 rounded-xl p-5 text-center relative z-10">
              <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                Руководитель ОСП
              </h4>
              <p className="text-foreground/50 text-xs">Орган по сертификации</p>
              <p className="text-accent font-medium text-xs mt-2">Гайманова Александра Александровна</p>
            </div>
          </div>

          {/* Third Level Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-3xl mx-auto">
            {/* Appeals Commission */}
            <div className="bg-card border border-border rounded-xl p-5 text-center hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <Scale className="w-6 h-6 text-foreground/70" />
              </div>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                Комиссия по апелляциям
              </h4>
              <p className="text-foreground/50 text-xs">ОСП</p>
            </div>

            {/* Deputy Head */}
            <div className="bg-card border border-border rounded-xl p-5 text-center hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="w-6 h-6 text-foreground/70" />
              </div>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                Заместитель руководителя ОСП
              </h4>
              <p className="text-foreground/50 text-xs">Орган по сертификации</p>
            </div>
          </div>

          {/* Core OSP Personnel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {/* Experts */}
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-5 text-center hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                Эксперты по сертификации продукции
              </h4>
              <p className="text-foreground/50 text-xs">ОСП</p>
            </div>

            {/* Quality Manager */}
            <div className="bg-card border border-border rounded-xl p-5 text-center hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <ClipboardCheck className="w-6 h-6 text-foreground/70" />
              </div>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                Менеджер по качеству
              </h4>
              <p className="text-foreground/50 text-xs">ОСП</p>
            </div>

            {/* Trainees */}
            <div className="bg-card border border-border rounded-xl p-5 text-center hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="w-6 h-6 text-foreground/70" />
              </div>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                Стажеры экспертов
              </h4>
              <p className="text-foreground/50 text-xs">по сертификации продукции ОСП</p>
            </div>
          </div>

          {/* Supporting Departments */}
          <div className="border-t border-border pt-8">
            <h3 className="text-center text-foreground/60 text-sm font-medium mb-6 uppercase tracking-wide">
              Подразделения Общества
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Accounting */}
              <div className="bg-secondary/50 border border-border/50 rounded-lg p-4 text-center">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                  <Calculator className="w-5 h-5 text-foreground/60" />
                </div>
                <h5 className="font-medium text-foreground/80 text-sm">Бухгалтерия</h5>
                <p className="text-foreground/50 text-xs mt-1">Главный бухгалтер</p>
              </div>

              {/* HR & Admin */}
              <div className="bg-secondary/50 border border-border/50 rounded-lg p-4 text-center">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                  <Briefcase className="w-5 h-5 text-foreground/60" />
                </div>
                <h5 className="font-medium text-foreground/80 text-sm">Отдел кадров</h5>
                <p className="text-foreground/50 text-xs mt-1">Кадры, охрана труда, офис</p>
              </div>

              {/* IT & Admin */}
              <div className="bg-secondary/50 border border-border/50 rounded-lg p-4 text-center">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                  <Settings className="w-5 h-5 text-foreground/60" />
                </div>
                <h5 className="font-medium text-foreground/80 text-sm">АХО</h5>
                <p className="text-foreground/50 text-xs mt-1">Системный администратор</p>
              </div>

              {/* Note */}
              <div className="bg-muted/30 border border-dashed border-border rounded-lg p-4 text-center flex flex-col justify-center">
                <p className="text-foreground/50 text-xs leading-relaxed">
                  Штатные единицы указаны в штатном расписании Общества
                </p>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-foreground/50">
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-accent" />
              <span>Административное подчинение</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-border border-dashed border-t" />
              <span>Функциональное подчинение</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border-2 border-accent/50 bg-accent/20" />
              <span>Ключевые позиции ОСП</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrgStructureSection;
