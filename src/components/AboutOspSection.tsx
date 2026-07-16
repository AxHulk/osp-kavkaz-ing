import { Building2, FileText, Hash, Wallet, Mail, MapPin, ExternalLink } from "lucide-react";

const AboutOspSection = () => {
  return (
    <section id="about-osp" className="py-20 md:py-28 bg-card/50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            Об органе по сертификации продукции
          </h2>
          <p className="text-xl text-accent font-heading font-semibold">
            ООО «КАВКАЗ-ИНЖИНИРИНГ»
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Intro */}
          <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-foreground/80 leading-relaxed">
                  ОСП создан и функционирует на базе ООО «КАВКАЗ-ИНЖИНИРИНГ», имеющего статус юридического лица и расчетный счет в банке.
                </p>
              </div>
            </div>
          </div>

          {/* Names */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border hover:border-accent/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">Полное наименование</h3>
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Орган по сертификации продукции Общества с ограниченной ответственностью «КАВКАЗ-ИНЖИНИРИНГ»
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border hover:border-accent/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">Сокращенное наименование</h3>
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">
                ОСП ООО «КАВКАЗ-ИНЖИНИРИНГ»
              </p>
            </div>
          </div>

          {/* Accreditation Number */}
          <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Hash className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Уникальный номер записи об аккредитации
                </h3>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  № RA.RU.11НМ50 от 01.07.2026
                </p>
                <a
                  href="https://pub.fsa.gov.ru/ral/view/38812/applicant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mt-2 text-sm"
                >
                  Проверить в реестре Росаккредитации
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Financial Support */}
          <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Wallet className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">
                  Финансовая поддержка ОСП
                </h3>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  ОСП, являющийся структурным подразделением ООО «КАВКАЗ-ИНЖИНИРИНГ», получает финансовую поддержку путем заключения ООО «КАВКАЗ-ИНЖИНИРИНГ» договоров на проведение работ по оценке (подтверждению) соответствия продукции, получением оплаты от заявителей, которая идет на обеспечение ОСП помещениями, материально-техническим оснащением, заработную плату работникам ОСП и иные расходы, необходимые для выполнения ОСП своей деятельности.
                </p>
                <p className="text-foreground/80 leading-relaxed text-sm mt-3">
                  Также, в качестве финансовой поддержки могут использоваться: уставной капитал ООО «КАВКАЗ-ИНЖИНИРИНГ», страхование выплаты заработной платы работников ООО «КАВКАЗ-ИНЖИНИРИНГ» (в т.ч. работников ОСП) в лицензированных страховых учреждениях, заём средств у учредителя(-ей) ООО «КАВКАЗ-ИНЖИНИРИНГ».
                </p>
              </div>
            </div>
          </div>

          {/* Rules and Procedures */}
          <div className="bg-secondary rounded-xl p-6 md:p-8 border border-border">
            <h3 className="font-heading font-semibold text-foreground mb-4 text-center">
              Правила и процедуры сертификации
            </h3>
            <p className="text-foreground/80 leading-relaxed text-sm text-center mb-6">
              Правила и процедуры оценивания, выдачи, продления, расширения или сужения области применения, приостановления действия, отмены или отказа в выдаче сертификата предоставляются по запросу:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="mailto:osp@kavkaz-ing.ru" 
                className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border hover:border-accent/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Электронная почта</p>
                  <p className="text-foreground font-medium">osp@kavkaz-ing.ru</p>
                </div>
              </a>
              <div className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Адрес</p>
                  <p className="text-foreground font-medium text-sm">123112, Россия, г. Москва, ул. Тестовская, д. 10, ком. 2517/1 (офис 509)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOspSection;
