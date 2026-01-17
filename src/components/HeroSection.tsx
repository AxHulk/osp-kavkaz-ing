import { Shield, Award, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="about" className="gradient-hero py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Орган по сертификации пассажирских подвесных канатных дорог
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed mb-8 animate-slide-up">
            ООО «Кавказ Инжиниринг» — это многопрофильный экспертный центр, предоставляющий комплексные услуги по техническому, геодезическому и инженерному сопровождению объектов капитального строительства.
          </p>
          <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-10 animate-slide-up">
            Мы специализируемся на комплексном сопровождении сложных инфраструктурных объектов, обеспечивая точность, безопасность и полное соответствие строительных процессов государственным стандартам и проектным решениям.
          </p>

          {/* Stats/Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <Shield className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-primary-foreground text-lg mb-2">Аккредитация</h3>
              <p className="text-primary-foreground/80 text-sm">Аккредитованный орган по сертификации</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Award className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-primary-foreground text-lg mb-2">Экспертиза</h3>
              <p className="text-primary-foreground/80 text-sm">Многолетний опыт в сфере сертификации</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <CheckCircle className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-primary-foreground text-lg mb-2">Надёжность</h3>
              <p className="text-primary-foreground/80 text-sm">Соответствие всем государственным стандартам</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
