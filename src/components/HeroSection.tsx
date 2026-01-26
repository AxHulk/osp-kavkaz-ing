import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNext = () => {
    document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>
      
      <div className="section-container relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 animate-slide-up leading-tight">
            Сертификация
            <br />
            <span className="text-muted-foreground">на высоте</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Профессиональная сертификация канатных дорог и их элементов.
            <br />
            Более 20 лет опыта в сложнейших инженерных проектах.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              onClick={scrollToContact}
              className="btn-primary text-base h-auto"
            >
              Получить консультацию
            </Button>
            <Button 
              variant="ghost"
              className="btn-secondary text-base h-auto"
              onClick={() => document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" })}
            >
              Портфолио
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
