import { FileText, MessageCircle, Scale, ListChecks, Calculator, FlaskConical } from "lucide-react";

const applicantItems = [
  {
    icon: FileText,
    title: "Заявки на сертификацию",
    description: "Порядок подачи и рассмотрения заявок на проведение сертификации",
  },
  {
    icon: MessageCircle,
    title: "Рассмотрение жалоб",
    description: "Процедура подачи и рассмотрения жалоб на деятельность органа",
  },
  {
    icon: Scale,
    title: "Рассмотрение апелляций",
    description: "Порядок обжалования решений органа по сертификации",
  },
  {
    icon: ListChecks,
    title: "Этапы сертификации",
    description: "Подробное описание всех этапов процедуры сертификации",
  },
  {
    icon: Calculator,
    title: "Стоимость сертификации",
    description: "Информация о стоимости услуг и порядке оплаты",
  },
  {
    icon: FlaskConical,
    title: "Испытательные лаборатории",
    description: "Перечень аккредитованных испытательных лабораторий",
  },
];

const ApplicantsSection = () => {
  return (
    <section id="applicants" className="py-16 md:py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Информация для заявителей
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Всё, что необходимо знать для прохождения процедуры сертификации
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicantItems.map((item, index) => (
            <div
              key={item.title}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicantsSection;
