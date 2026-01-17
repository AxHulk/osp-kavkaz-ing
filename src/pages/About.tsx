import { Shield, CheckCircle2, Lock, Award, MapPin, FileCheck, ExternalLink, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import elbrusCableCar from "@/assets/elbrus-cable-car.webp";

const About = () => {
  const officialData = [
    {
      label: "Полное наименование",
      value: "Орган по сертификации продукции ООО «Кавказ Инжиниринг»",
      icon: FileCheck,
    },
    {
      label: "Уникальный номер записи в реестре",
      value: "RA.RU.11КД01",
      icon: Award,
      link: "https://pub.fsa.gov.ru/roa/organizations",
      linkText: "Проверить в реестре Росаккредитации",
    },
    {
      label: "Адрес осуществления деятельности",
      value: "357500, Ставропольский край, г. Пятигорск, ул. Ермолова д. 12, стр. 3",
      icon: MapPin,
    },
  ];

  const principles = [
    {
      title: "Объективность",
      description: "Наши решения основаны исключительно на результатах испытаний и анализе фактов. Мы гарантируем полную независимость и беспристрастность оценки.",
      icon: CheckCircle2,
    },
    {
      title: "Компетентность",
      description: "Каждый наш эксперт обладает глубокими знаниями в профильной инженерной области. Мы понимаем не только требования стандартов, но и физику процессов, стоящих за ними.",
      icon: Shield,
    },
    {
      title: "Конфиденциальность",
      description: "Мы обеспечиваем полную сохранность и неразглашение коммерческой и технической информации, полученной в ходе работ по сертификации.",
      icon: Lock,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${elbrusCableCar})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        
        <div className="relative z-10 section-container text-center pt-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-heading">
            Орган по сертификации<br />
            <span className="text-accent">«Кавказ Инжиниринг»</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-light">
            Где инженерный опыт встречается<br className="hidden md:block" /> с высочайшими стандартами безопасности.
          </p>
        </div>
      </section>

      {/* Mission Block */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-heading">
              Наша миссия
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Мы не просто проверяем соответствие стандартам. Мы применяем многолетний инженерный опыт 
              для глубокого анализа и подтверждения реальной безопасности сложных технических объектов. 
              Наша миссия — обеспечить абсолютную уверенность в надежности каждого элемента, 
              от фундамента до вершины.
            </p>
          </div>
        </div>
      </section>

      {/* Official Status Block */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 font-heading text-center">
            Официальный статус
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {officialData.map((item, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row md:items-start gap-4 p-6 bg-card/50 rounded-xl border border-border hover:border-accent/30 transition-colors"
              >
                <div className="flex items-center gap-4 md:w-1/3">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-foreground/60 font-medium">{item.label}</span>
                </div>
                <div className="md:w-2/3">
                  <p className="text-foreground font-medium">{item.value}</p>
                  {item.link && (
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mt-2 text-sm"
                    >
                      {item.linkText}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Block */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 font-heading text-center">
            Принципы нашей работы
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="p-8 bg-background rounded-xl border border-border hover:border-accent/30 transition-all hover:shadow-lg"
              >
                <div className="p-4 bg-accent/10 rounded-xl w-fit mb-6">
                  <principle.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 font-heading">
                  {principle.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-heading">
              Готовы начать работу?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Получите подробную консультацию по процедуре сертификации для вашего объекта.
            </p>
            <a 
              href="/#contacts"
              className="btn-primary inline-flex items-center gap-2"
            >
              Связаться с нами
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
