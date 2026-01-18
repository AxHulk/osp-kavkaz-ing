import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import elbrusImage from "@/assets/elbrus-project.jpg";
import veduchiImage from "@/assets/veduchi-project.jpg";
import mamisonImage from "@/assets/mamison-project.avif";
import priyut11Image from "@/assets/priyut11-project.webp";
import elbrusDetailImage from "@/assets/project-elbrus-detail.png";
import veduchiDetailImage from "@/assets/project-veduchi-detail.png";
import mamisonDetailImage from "@/assets/project-mamison-detail.png";
import priyut11DetailImage from "@/assets/project-priyut11-detail.png";

interface ProjectDetail {
  title: string;
  subtitle: string;
  sections: {
    heading: string;
    content: string;
  }[];
}

interface Project {
  name: string;
  description: string;
  image: string;
  detailImage: string;
  inProgress?: boolean;
  details: ProjectDetail;
}

const projects: Project[] = [
  {
    name: "Эльбрус",
    description: "Система искусственного снегообразования (СИС) и Альп-городок",
    image: elbrusImage,
    detailImage: elbrusDetailImage,
    details: {
      title: "Эльбрус: Новая высота комфорта и снега",
      subtitle: "Представьте себе идеальное утро на Эльбрусе. Солнце заливает белоснежные склоны, воздух кристально чист, а под вашими лыжами — безупречный вельветовый снег. Раньше такая картина зависела от капризов природы. Сегодня — это гарантированная реальность, созданная инженерной мыслью и смелой мечтой.",
      sections: [
        {
          heading: "Снег, который всегда есть: Система искусственного снегообразования (СИС)",
          content: "Мы бросили вызов самой высокой вершине Европы и создали то, что казалось невозможным — самую высокогорную в Европе систему искусственного снегообразования. Это не просто трубы и пушки. Это сложнейший организм, который вдыхает жизнь в трассы, когда природа берет паузу.\n\nНаша СИС — это гарантия вашего идеального катания с ноября по май. Это километры трасс, покрытых идеальным снегом, который не тает под ярким горным солнцем. Мы не ждем милости от природы — мы создаем ее для вас, превращая каждый день в лучший день для катания."
        },
        {
          heading: "Альп-городок: Ваш уютный дом среди вершин",
          content: "Но что такое идеальный снег без места, где можно отдохнуть душой и телом? Мы создали не просто отель, а настоящий Альп-городок — островок комфорта и тепла в сердце величественных гор.\n\nЭто место, где после дня, полного адреналина и скорости, вы возвращаетесь в атмосферу уюта. Где можно выпить чашку горячего чая, глядя на заснеженные пики из панорамного окна, поделиться впечатлениями с друзьями и набраться сил для нового дня. Альп-городок — это не просто место для ночлега. Это ваша личная база на Эльбрусе, отправная точка для приключений и финальный аккорд идеального дня.\n\nВместе — система снегообразования и Альп-городок — они создают новую реальность. Реальность, в которой Эльбрус стал ближе, доступнее и комфортнее, чем когда-либо. Добро пожаловать на новую высоту!"
        }
      ]
    }
  },
  {
    name: "Ведучи",
    description: "Техническое сопровождение создания Системы искусственного снегообразования",
    image: veduchiImage,
    detailImage: veduchiDetailImage,
    details: {
      title: "Ведучи: Инженерная точность за кулисами идеального снега",
      subtitle: "Создать систему искусственного снегообразования (СИС) — это само по себе вызов. Но обеспечить её безупречную работу на одном из самых молодых и амбициозных курортов Кавказа, в Ведучи, — это задача совершенно иного уровня. Это история не о прокладке труб, а о виртуозном техническом сопровождении, где каждый шаг требовал ювелирной точности.",
      sections: [
        {
          heading: "Не просто построить, а заставить работать как часы",
          content: "Наш опыт в Ведучи — это история о том, что происходит после того, как основной проект завершен. Мы были не просто строителями, а техническим дирижером сложнейшего оркестра. Нашей задачей было взять передовые европейские технологии и заставить их работать в уникальных условиях чеченских гор.\n\nМы осуществляли полный технический надзор: от проверки каждого чертежа и каждой спецификации до контроля за монтажом и пусконаладочными работами. Мы были глазами и ушами заказчика на объекте, гарантируя, что каждый компонент системы — от насосной станции до последней снеговой пушки — соответствует высочайшим стандартам качества и безопасности."
        },
        {
          heading: "Интеллект, а не грубая сила",
          content: "Техническое сопровождение — это интеллектуальная работа. Это способность предвидеть проблемы до их появления, находить нестандартные решения и говорить на одном языке с проектировщиками, поставщиками и монтажниками.\n\nМы не просто следили за процессом — мы управляли им, оптимизировали его и доводили до совершенства. Наш опыт в Ведучи — это доказательство того, что «Кавказ Инжиниринг» не просто реализует проекты. Мы обеспечиваем их надежность, эффективность и долговечность на годы вперед. Мы — та самая сила, которая остается за кадром, но без которой магия идеального снега была бы невозможна."
        }
      ]
    }
  },
  {
    name: "Мамисон",
    description: "Инженерное сопровождение строительства гаража ратраков и СИС",
    image: mamisonImage,
    detailImage: mamisonDetailImage,
    details: {
      title: "Мамисон: За кулисами рождения новой звезды",
      subtitle: "Когда в горах Осетии рождается новая легенда — курорт «Мамисон», — за грандиозным фасадом кипит сложнейшая инженерная работа. Создать курорт с нуля — значит заложить его «сердце» и «легкие» с безупречной точностью. Именно эту задачу мы выполняли, осуществляя инженерное сопровождение строительства двух ключевых объектов: системы искусственного снегообразования (СИС) и гаража для ратраков.",
      sections: [
        {
          heading: "Два элемента — одна система",
          content: "Представьте себе идеальный горнолыжный курорт. Его основа — это гарантированный снег и идеально подготовленные трассы. СИС — это «легкие», которые обеспечивают курорт снегом в любую погоду. Гараж ратраков — это «сердце», дом для мощных машин, которые каждую ночь превращают этот снег в безупречный «вельвет».\n\nНаша роль в Мамисоне — быть тем самым «инженерным мозгом», который связал эти два элемента в единую, слаженно работающую систему. Мы не просто контролировали стройку. Мы обеспечивали синергию."
        },
        {
          heading: "Инженерное сопровождение: Гарантия надежности",
          content: "Наше участие — это гарантия того, что каждый кубометр бетона в фундаменте гаража и каждый стык трубы в системе снегообразования соответствуют проекту и высочайшим стандартам.\n\n• Для гаража ратраков: Мы проконтролировали, чтобы это было не просто здание, а высокотехнологичная база, способная выдерживать суровые горные условия и обеспечивать эффективное обслуживание техники.\n\n• Для СИС: Мы осуществляли надзор за монтажом сложнейшей системы, гарантируя, что она будет работать эффективно, экономично и будет идеально адаптирована под уникальный рельеф Мамисона.\n\nНаш опыт — это невидимый, но фундаментальный вклад в будущее курорта. Это уверенность в том, что, когда первые лыжники коснутся склонов Мамисона, их будет ждать снег высочайшего качества, подготовленный техникой, которая базируется в надежном и современном доме. Мы заложили инженерную основу для рождения новой легенды."
        }
      ]
    }
  },
  {
    name: "Приют-11",
    description: "Участие в проекте федерального значения по восстановлению легендарной высокогорной гостиницы",
    image: priyut11Image,
    detailImage: priyut11DetailImage,
    inProgress: true,
    details: {
      title: "Приют-11: Возрождение легенды на вершине Европы",
      subtitle: "Есть имена, которые для каждого альпиниста звучат как музыка. «Приют-11» — одно из них. Легендарная высокогорная гостиница на склонах Эльбруса, ставшая домом для поколений восходителей, символ эпохи и точка притяжения. Десятилетиями она ждала своего часа, чтобы возродиться. И сегодня этот час настал.",
      sections: [
        {
          heading: "Миссия на высоте 4100 метров",
          content: "Восстановление «Приюта-11» — это не просто стройка. Это проект федерального значения, миссия по возвращению истории. Работать на высоте более 4100 метров, в суровых условиях, где каждый шаг требует предельной концентрации, — это вызов, который могут принять лишь немногие. И мы гордимся быть в их числе.\n\n«Кавказ Инжиниринг» принимает непосредственное участие в этом историческом проекте, предоставляя свою ключевую компетенцию — инженерное сопровождение. Наша задача — не просто отстроить стены. Наша задача — вдохнуть в легенду новую жизнь, соединив ее исторический дух с самыми современными технологиями безопасности и комфорта."
        },
        {
          heading: "Инженерный интеллект на службе истории",
          content: "Мы осуществляем строгий технический надзор, чтобы гарантировать, что новый «Приют-11» будет не только данью уважения прошлому, но и самым надежным, теплым и современным высокогорным приютом в Европе. Каждый чертеж, каждый материал, каждый этап работ проходит через нашу экспертизу.\n\nДля нас это больше, чем проект. Это возможность прикоснуться к истории и стать частью ее будущего. Мы строим не просто гостиницу. Мы возрождаем легенду."
        }
      ]
    }
  },
];

const ExpertiseSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="expertise" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="section-title mb-4 animate-fade-in">
            Подтверждённая экспертиза
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
              onClick={() => setSelectedProject(project)}
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

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
          <DialogClose className="absolute right-4 top-4 z-20 rounded-full bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors">
            <X className="h-5 w-5" />
            <span className="sr-only">Закрыть</span>
          </DialogClose>
          
          {selectedProject && (
            <ScrollArea className="max-h-[90vh]">
              {/* Hero Image */}
              <div className="relative h-64 md:h-80 w-full">
                <img 
                  src={selectedProject.detailImage} 
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* In Progress badge */}
                {selectedProject.inProgress && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full">
                    В работе
                  </div>
                )}
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                      {selectedProject.details.title}
                    </DialogTitle>
                  </DialogHeader>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 space-y-6">
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {selectedProject.details.subtitle}
                </p>
                
                {selectedProject.details.sections.map((section, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">
                      {section.heading}
                    </h3>
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ExpertiseSection;
