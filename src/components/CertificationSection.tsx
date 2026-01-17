import { Cable, Truck, Settings, FlaskConical, ArrowUpRight, Activity } from "lucide-react";
import geomonitoringEquipment from "@/assets/geomonitoring-equipment.jpg";
import elbrusCableCar from "@/assets/elbrus-cable-car.webp";

const directions = [
  {
    icon: Cable,
    title: "Пассажирские канатные дороги",
    description: "Сертификация безопасности и надежности пассажирских канатных дорог всех типов",
    image: elbrusCableCar,
    isImport: true,
  },
  {
    icon: Truck,
    title: "Грузовые канатные дороги",
    description: "Сертификация грузовых и смешанных канатных дорог",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80",
    isImport: false,
  },
  {
    icon: Settings,
    title: "Элементы и компоненты",
    description: "Сертификация отдельных элементов, компонентов и узлов канатных дорог",
    image: geomonitoringEquipment,
    isImport: true,
  },
  {
    icon: FlaskConical,
    title: "Испытания и экспертиза",
    description: "Проведение испытаний, технической экспертизы и анализа безопасности",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    isImport: false,
  },
];

const CertificationSection = () => {
  return (
    <section id="certification" className="py-20 md:py-28 bg-secondary">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="section-title mb-4">
            Направления сертификации
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Полный спектр услуг по сертификации канатных дорог и их элементов
          </p>
        </div>

        {/* Directions grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {directions.map((direction, index) => (
            <div
              key={direction.title}
              className="group relative h-64 md:h-72 rounded-xl overflow-hidden cursor-pointer card-hover-effect animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${direction.image}')` }}
              />
              
              {/* Overlay */}
              <div className="card-overlay transition-opacity duration-300 group-hover:opacity-95" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <direction.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">
                      {direction.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {direction.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-4 h-4 text-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Geomonitoring block */}
        <div className="bg-card rounded-2xl p-8 md:p-10 border border-border animate-fade-in">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Activity className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                Геотехнический мониторинг
              </h3>
              <p className="text-muted-foreground">(геомониторинг)</p>
            </div>
          </div>
          
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
            Геомониторинг — система слежения за параметрами, характеризующими основания зданий или сооружений 
            (т.е. геологической среды), которая обеспечивает безопасное и эффективное осуществление 
            строительно-технологических процессов, ввод и последующую эксплуатацию зданий и сооружений.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-foreground">
                <span className="font-semibold text-accent">Целью геомониторинга</span> является обеспечение 
                высокого качества строительства и сохранности зданий и сооружений окружающей застройки.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-foreground">
                <span className="font-semibold text-accent">Задача геомониторинга</span> — регулярное отслеживание 
                поведения основания строящегося сооружения и его конструкций, окружающих его зданий, а также 
                принятие мер по обеспечению безопасного строительства и корректировки конструктивно-технологических решений.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
