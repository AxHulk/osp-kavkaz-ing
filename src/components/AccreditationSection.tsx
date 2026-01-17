import { Building2, Users, FileCheck, GitBranch, Workflow, UserCheck, AlertCircle } from "lucide-react";

const accreditationItems = [
  {
    icon: Building2,
    title: "Структура организации",
    description: "Организационная структура органа по сертификации",
  },
  {
    icon: Users,
    title: "Сотрудники",
    description: "Квалифицированные специалисты и эксперты",
  },
  {
    icon: FileCheck,
    title: "Основные документы",
    description: "Нормативные документы и регламенты",
  },
  {
    icon: GitBranch,
    title: "Схема сертификации",
    description: "Применяемые схемы сертификации продукции",
  },
  {
    icon: Workflow,
    title: "Порядок работы",
    description: "Регламент работы органа по сертификации",
  },
  {
    icon: UserCheck,
    title: "Права и обязанности заявителя",
    description: "Права и обязанности участников процесса",
  },
  {
    icon: AlertCircle,
    title: "Правила рассмотрения жалоб и апелляций",
    description: "Процедуры рассмотрения обращений",
  },
];

const AccreditationSection = () => {
  return (
    <section id="accreditation" className="py-16 md:py-20 bg-secondary">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Аккредитация
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Подробная информация о структуре, документации и процедурах органа по сертификации
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {accreditationItems.map((item, index) => (
            <div
              key={item.title}
              className="group bg-card rounded-lg p-5 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border cursor-pointer hover:border-primary/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccreditationSection;
