import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Эльбрус",
    description: "Система искусственного снегообразования (СИС) и Альп-городок",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ведучи",
    description: "Техническое сопровождение создания Системы искусственного снегообразования",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Мамисон",
    description: "Инженерное сопровождение строительства гаража ратраков и СИС",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Приют-11",
    description: "Участие в проекте федерального значения по восстановлению легендарной высокогорной гостиницы",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80",
    inProgress: true,
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        {/* Section header */}
        <div className="mb-14">
          <h2 className="section-title mb-4 animate-fade-in">
            Подтверждённая экспертиза
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Часть крупного инженерного центра с доказанным опытом в реализации сложных проектов
          </p>
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group relative h-72 md:h-80 rounded-xl overflow-hidden cursor-pointer card-hover-effect animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              
              {/* Overlay */}
              <div className="card-overlay transition-opacity duration-300 group-hover:opacity-90" />
              
              {/* In Progress badge */}
              {project.inProgress && (
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  В работе
                </div>
              )}
              
              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
