import { useState, useEffect } from "react";
import { 
  Building2, 
  Users, 
  FileText, 
  GitBranch, 
  ClipboardList, 
  Settings, 
  Scale, 
  MessageSquare, 
  AlertCircle, 
  FlaskConical, 
  Calculator,
  ChevronRight,
  Mail,
  Phone,
  User,
  Shield,
  GraduationCap,
  Briefcase
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Accreditation = () => {
  const [activeSection, setActiveSection] = useState("structure");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: "structure", name: "Структура ОСП", icon: Building2 },
    { id: "team", name: "Наши сотрудники", icon: Users },
    { id: "documents", name: "Основные документы", icon: FileText },
    { id: "scope", name: "Область аккредитации", icon: ClipboardList },
    { id: "schemes", name: "Схема сертификации", icon: GitBranch },
    { id: "application", name: "Заявка на сертификацию", icon: ClipboardList },
    { id: "process", name: "Порядок работы ОС", icon: Settings },
    { id: "rights", name: "Права и обязанности", icon: Scale },
    { id: "complaints", name: "Рассмотрение жалоб", icon: MessageSquare },
    { id: "appeals", name: "Рассмотрение апелляций", icon: AlertCircle },
    { id: "laboratories", name: "Испытательные лаборатории", icon: FlaskConical },
    { id: "pricing", name: "Стоимость работ", icon: Calculator },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const teamMembers = [
    {
      initials: "ГА",
      name: "Гайманова Александра",
      position: "Руководитель Органа по сертификации",
      expertise: "Более 15 лет опыта в области сертификации и промышленной безопасности. Аттестованный эксперт по оценке соответствия подъемных сооружений. Отвечает за стратегическое развитие органа и взаимодействие с государственными надзорными ведомствами."
    },
    {
      initials: "ИИ",
      name: "Иванов Иван",
      position: "Ведущий эксперт по сертификации",
      expertise: "Специалист в области механических и гидравлических систем канатных дорог. Проводит технический анализ документации и руководит программой испытаний. Участвовал в сертификации объектов на курортах «Эльбрус» и «Архыз»."
    },
    {
      initials: "СС",
      name: "Степанов Степан",
      position: "Эксперт по анализу состояния производства",
      expertise: "Специализируется на оценке систем менеджмента качества и производственных процессов. Проводит аудит производственных площадок для подтверждения стабильности выпуска сертифицируемой продукции. Сертифицированный аудитор ISO 9001."
    }
  ];

  const processSteps = [
    { step: 1, title: "Прием и регистрация заявки", description: "Проверяем комплектность документов", time: "1-2 рабочих дня" },
    { step: 2, title: "Анализ и принятие решения", description: "Назначаем экспертов, определяем схему и объем работ", time: "2-3 рабочих дня" },
    { step: 3, title: "Заключение договора", description: "Согласовываем стоимость, сроки и подписываем договор", time: "1-2 рабочих дня" },
    { step: 4, title: "Проведение работ", description: "Организуем отбор образцов, испытания в лаборатории, анализ производства", time: "Зависит от схемы" },
    { step: 5, title: "Анализ результатов", description: "Эксперты анализируют протоколы испытаний и все полученные данные", time: "5-7 рабочих дней" },
    { step: 6, title: "Принятие решения", description: "На основании анализа принимается решение о соответствии продукции", time: "2-3 рабочих дня" },
    { step: 7, title: "Оформление сертификата", description: "Регистрируем сертификат в реестре Росаккредитации и выдаем его вам", time: "1-2 рабочих дня" },
    { step: 8, title: "Инспекционный контроль", description: "Проводим периодические проверки в течение срока действия сертификата", time: "Ежегодно" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-heading">
            Аккредитация
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-4xl mx-auto">
            Полный свод правил, процедур и документов, регламентирующих деятельность Органа по сертификации ООО «КАВКАЗ-ИНЖИНИРИНГ». Ваш навигатор в мире подтверждения соответствия.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-between p-4 bg-card/50 rounded-xl border border-border"
            >
              <span className="text-foreground font-medium">
                {sections.find(s => s.id === activeSection)?.name || "Навигация"}
              </span>
              <ChevronRight className={`w-5 h-5 text-accent transition-transform ${isMobileMenuOpen ? 'rotate-90' : ''}`} />
            </button>

            {/* Sidebar Navigation */}
            <aside className={`lg:w-72 shrink-0 ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
              <nav className="lg:sticky lg:top-28 bg-card/30 rounded-xl border border-border p-4 space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                      activeSection === section.id
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground/70 hover:text-foreground hover:bg-card/50"
                    }`}
                  >
                    <section.icon className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-medium">{section.name}</span>
                  </button>
                ))}
              </nav>
            </aside>

            {/* Content Area */}
            <main className="flex-1 space-y-16">
              
              {/* 1. Структура ОСП */}
              <section id="structure" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-heading">
                  Организационная структура ОСП
                </h2>
                <p className="text-foreground/80 mb-8">
                  Структура Органа по сертификации продукции ООО «КАВКАЗ-ИНЖИНИРИНГ» построена для обеспечения максимальной объективности, независимости и эффективности.
                </p>
                
                {/* Top Level - CEO */}
                <div className="flex justify-center mb-6">
                  <div className="bg-accent/20 border-2 border-accent rounded-xl p-5 text-center min-w-[240px] shadow-lg">
                    <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground">
                      Генеральный директор
                    </h3>
                    <p className="text-foreground/60 text-sm">Общества</p>
                  </div>
                </div>

                {/* Vertical connector */}
                <div className="flex justify-center mb-4">
                  <div className="w-0.5 h-6 bg-accent/40" />
                </div>

                {/* Second Level - Three bodies */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {/* Competence Commission */}
                  <div className="bg-card/50 border border-border rounded-xl p-4 text-center hover:border-accent/30 transition-colors">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                      <ClipboardList className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                      Комиссия по оценке компетентности
                    </h4>
                    <p className="text-foreground/50 text-xs">ОСП</p>
                  </div>

                  {/* OSP Head */}
                  <div className="bg-accent/15 border-2 border-accent/50 rounded-xl p-4 text-center">
                    <div className="w-10 h-10 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Shield className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                      Руководитель ОСП
                    </h4>
                    <p className="text-foreground/50 text-xs">Орган по сертификации</p>
                  </div>

                  {/* Impartiality Council */}
                  <div className="bg-card/50 border border-border rounded-xl p-4 text-center hover:border-accent/30 transition-colors">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                      <Scale className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                      Совет по обеспечению беспристрастности
                    </h4>
                    <p className="text-foreground/50 text-xs">ОСП</p>
                  </div>
                </div>

                {/* Third Level Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-w-2xl mx-auto">
                  {/* Appeals Commission */}
                  <div className="bg-card/50 border border-border rounded-xl p-4 text-center hover:border-accent/30 transition-colors">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                      <Scale className="w-5 h-5 text-foreground/70" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                      Комиссия по апелляциям
                    </h4>
                    <p className="text-foreground/50 text-xs">ОСП</p>
                  </div>

                  {/* Deputy Head */}
                  <div className="bg-card/50 border border-border rounded-xl p-4 text-center hover:border-accent/30 transition-colors">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                      <User className="w-5 h-5 text-foreground/70" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                      Заместитель руководителя ОСП
                    </h4>
                    <p className="text-foreground/50 text-xs">Орган по сертификации</p>
                  </div>
                </div>

                {/* Core OSP Personnel */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {/* Experts */}
                  <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 text-center hover:border-accent/50 transition-colors">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                      Эксперты по сертификации продукции
                    </h4>
                    <p className="text-foreground/50 text-xs">ОСП</p>
                  </div>

                  {/* Quality Manager */}
                  <div className="bg-card/50 border border-border rounded-xl p-4 text-center hover:border-accent/30 transition-colors">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                      <ClipboardList className="w-5 h-5 text-foreground/70" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                      Менеджер по качеству
                    </h4>
                    <p className="text-foreground/50 text-xs">ОСП</p>
                  </div>

                  {/* Trainees */}
                  <div className="bg-card/50 border border-border rounded-xl p-4 text-center hover:border-accent/30 transition-colors">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                      <GraduationCap className="w-5 h-5 text-foreground/70" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                      Стажеры экспертов
                    </h4>
                    <p className="text-foreground/50 text-xs">по сертификации продукции ОСП</p>
                  </div>
                </div>

                {/* Supporting Departments */}
                <div className="border-t border-border pt-6">
                  <h3 className="text-center text-foreground/60 text-sm font-medium mb-4 uppercase tracking-wide">
                    Подразделения Общества
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-secondary/50 border border-border/50 rounded-lg p-3 text-center">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                        <Calculator className="w-4 h-4 text-foreground/60" />
                      </div>
                      <h5 className="font-medium text-foreground/80 text-xs">Бухгалтерия</h5>
                    </div>
                    <div className="bg-secondary/50 border border-border/50 rounded-lg p-3 text-center">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                        <Briefcase className="w-4 h-4 text-foreground/60" />
                      </div>
                      <h5 className="font-medium text-foreground/80 text-xs">Отдел кадров</h5>
                    </div>
                    <div className="bg-secondary/50 border border-border/50 rounded-lg p-3 text-center">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                        <Settings className="w-4 h-4 text-foreground/60" />
                      </div>
                      <h5 className="font-medium text-foreground/80 text-xs">АХО</h5>
                    </div>
                    <div className="bg-muted/30 border border-dashed border-border rounded-lg p-3 text-center flex items-center justify-center">
                      <p className="text-foreground/50 text-xs">Согласно штатному расписанию</p>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-foreground/50">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-0.5 bg-accent" />
                    <span>Административное подчинение</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-0.5 border-t border-dashed border-foreground/30" />
                    <span>Функциональное подчинение</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full border-2 border-accent/50 bg-accent/20" />
                    <span>Ключевые позиции ОСП</span>
                  </div>
                </div>
              </section>

              {/* 2. Наши сотрудники */}
              <section id="team" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-heading">
                  Ключевые эксперты
                </h2>
                <p className="text-foreground/80 mb-8">
                  Наша команда — это аттестованные эксперты с многолетним инженерным и практическим опытом в профильных отраслях.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="p-6 bg-card/30 rounded-xl border border-border text-center">
                      <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-accent">{member.initials}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                      <p className="text-accent text-sm mb-4">{member.position}</p>
                      <p className="text-foreground/70 text-sm">{member.expertise}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3. Основные документы */}
              <section id="documents" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-heading">
                  Документарная база
                </h2>
                <p className="text-foreground/80 mb-8">
                  Деятельность Органа по сертификации регламентируется следующими ключевыми документами, содержание которых полностью соответствует требованиям законодательства и стандартов в области аккредитации.
                </p>
                
                <div className="space-y-4">
                  <div className="p-6 bg-card/30 rounded-xl border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Политика в области качества и беспристрастности</h3>
                    <p className="text-foreground/70 text-sm">
                      В этом документе изложены наши основные принципы: объективность, независимость, компетентность и конфиденциальность. Мы обязуемся принимать решения, основанные исключительно на фактах и результатах испытаний, исключая любое давление или конфликт интересов.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-card/30 rounded-xl border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Перечень прав и обязанностей заявителей</h3>
                    <p className="text-foreground/70 text-sm">
                      Документ подробно описывает права, которые вы получаете, обращаясь к нам (право на получение информации, право на апелляцию), и обязанности, которые необходимо соблюдать для успешного прохождения процедуры сертификации.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-card/30 rounded-xl border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Аттестат аккредитации</h3>
                    <p className="text-foreground/70 text-sm">
                      Официальный документ, подтверждающий нашу компетентность и право на осуществление деятельности по сертификации. Он содержит уникальный номер записи в реестре аккредитованных лиц и область нашей аккредитации.
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. Область аккредитации */}
              <section id="scope" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-heading">
                  Область аккредитации
                </h2>
                <p className="text-foreground/80 mb-6">
                  Область аккредитации Органа по сертификации продукции (ОСП) ООО «КАВКАЗ-ИНЖИНИРИНГ» охватывает оборудование одноканатных кольцевых пассажирских подвесных канатных дорог.
                </p>
                
                <div className="p-6 bg-card/30 rounded-xl border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Перечень сертифицируемого оборудования
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      { name: "Зажимы фиксированные", code: "8431 39 000 0" },
                      { name: "Зажимы отцепляемые", code: "8431 39 000 0" },
                      { name: "Кабины", code: "8431 39 000 0" },
                      { name: "Кабины для пассажиров, относящихся к маломобильным группам населения", code: "8431 39 000 0" },
                      { name: "Кресла открытые", code: "8431 39 000 0" },
                      { name: "Кресла с защитным колпаком", code: "8431 39 000 0" },
                      { name: "Подвески кабин и кресел", code: "8431 39 000 0" },
                      { name: "Промежуточные рамы", code: "8431 39 000 0" },
                      { name: "Шкивы приводные, обводные в сборе", code: "8483" },
                      { name: "Шкивы натяжные", code: "8483" },
                      { name: "Грузовые натяжные устройства", code: "8412 21 800 8" },
                      { name: "Натяжные тележки", code: "8431 39 000 0" },
                      { name: "Гидравлические цилиндры натяжного устройства", code: "8431 39 000 0" },
                      { name: "Рабочие и аварийные тормоза", code: "8431 39 000 0" },
                      { name: "Направляющие ролики и роликовые балансиры", code: "8431 39 000 0" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-background/50 rounded-lg">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="text-foreground/90 text-sm">{item.name}</span>
                          <span className="text-foreground/50 text-xs ml-2">(ТН ВЭД ЕАЭС: {item.code})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 5. Схема сертификации */}
              <section id="schemes" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-heading">
                  Схемы подтверждения соответствия
                </h2>
                <p className="text-foreground/80 mb-8">
                  Мы применяем различные схемы сертификации, установленные в технических регламентах. Выбор конкретной схемы зависит от типа продукции, уровня ее потенциальной опасности и других факторов.
                </p>
                
                <div className="space-y-4">
                  <div className="p-6 bg-card/30 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold rounded">1с</span>
                      <span className="text-foreground/60 text-sm">Продукция серийного производства</span>
                    </div>
                    <p className="text-foreground/70 text-sm">
                      Включает: подачу заявки, испытания типового образца, анализ состояния производства, выдачу сертификата и последующий инспекционный контроль.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-card/30 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold rounded">3с</span>
                      <span className="text-foreground/60 text-sm">Партия продукции</span>
                    </div>
                    <p className="text-foreground/70 text-sm">
                      Включает: подачу заявки, испытания образца из партии, выдачу сертификата (действует только для данной партии).
                    </p>
                  </div>
                  
                  <div className="p-6 bg-card/30 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold rounded">9с</span>
                      <span className="text-foreground/60 text-sm">Единичное изделие</span>
                    </div>
                    <p className="text-foreground/70 text-sm">
                      Включает: подачу заявки и анализ технической документации. Применяется для продукции, безопасность которой зависит от качества монтажа.
                    </p>
                  </div>
                </div>
              </section>

              {/* 5. Заявка на сертификацию */}
              <section id="application" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-heading">
                  Как подать заявку
                </h2>
                <p className="text-foreground/80 mb-8">
                  Процесс сертификации начинается с подачи заявки. Мы постарались сделать этот шаг максимально простым и понятным.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-card/30 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">1</span>
                      <h3 className="text-lg font-semibold text-foreground">Подготовка документов</h3>
                    </div>
                    <p className="text-foreground/70 text-sm mb-4">Перед подачей заявки подготовьте:</p>
                    <ul className="space-y-2 text-foreground/70 text-sm">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>Заполненная форма заявки</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>Регистрационные документы (ИНН, ОГРН)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>Техническая документация на продукцию</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-card/30 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">2</span>
                      <h3 className="text-lg font-semibold text-foreground">Направление заявки</h3>
                    </div>
                    <p className="text-foreground/70 text-sm mb-4">
                      Направьте скан-копии документов на нашу электронную почту с темой письма «Заявка на сертификацию».
                    </p>
                    <a 
                      href="mailto:osp@kavkaz-ing.ru?subject=Заявка на сертификацию"
                      className="inline-flex items-center gap-2 text-accent hover:underline text-sm"
                    >
                      <Mail className="w-4 h-4" />
                      osp@kavkaz-ing.ru
                    </a>
                  </div>
                </div>
                
                <p className="mt-6 p-4 bg-accent/10 rounded-lg text-foreground/80 text-sm border border-accent/20">
                  <strong>Форма заявки:</strong> На данный момент форма заявки предоставляется по запросу. Свяжитесь с нами по электронной почте или телефону, и мы оперативно вышлем вам необходимый бланк.
                </p>
              </section>

              {/* 6. Порядок работы ОС */}
              <section id="process" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-heading">
                  Этапы сертификации
                </h2>
                
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />
                  
                  <div className="space-y-8">
                    {processSteps.map((step, index) => (
                      <div key={index} className={`relative flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'} hidden md:block`}>
                          {index % 2 === 0 && (
                            <div className="p-4 bg-card/30 rounded-xl border border-border">
                              <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                              <p className="text-foreground/70 text-sm mb-2">{step.description}</p>
                              <span className="text-accent text-xs">{step.time}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm z-10">
                          {step.step}
                        </div>
                        
                        <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                          {index % 2 !== 0 ? (
                            <div className="p-4 bg-card/30 rounded-xl border border-border hidden md:block">
                              <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                              <p className="text-foreground/70 text-sm mb-2">{step.description}</p>
                              <span className="text-accent text-xs">{step.time}</span>
                            </div>
                          ) : null}
                          
                          {/* Mobile view */}
                          <div className="p-4 bg-card/30 rounded-xl border border-border md:hidden">
                            <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                            <p className="text-foreground/70 text-sm mb-2">{step.description}</p>
                            <span className="text-accent text-xs">{step.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 7. Права и обязанности */}
              <section id="rights" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-heading">
                  Взаимодействие с заявителем
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-card/30 rounded-xl border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4 text-accent">Ваши права</h3>
                    <ul className="space-y-3 text-foreground/70 text-sm">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>Выбирать схему сертификации из предложенных Органом</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>Получать полную информацию о ходе работ на любом этапе</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>Подавать апелляцию на решение Органа по сертификации</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>Обращаться с жалобами на действия сотрудников</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>Требовать конфиденциальности коммерческой информации</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-card/30 rounded-xl border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4 text-accent">Ваши обязанности</h3>
                    <ul className="space-y-3 text-foreground/70 text-sm">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>Предоставлять достоверную информацию и полный комплект документов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>Обеспечивать условия для анализа производства и контроля</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>Информировать об изменениях в продукции или документации</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>Прекращать использование сертификата по истечении срока</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 8. Рассмотрение жалоб */}
              <section id="complaints" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-heading">
                  Правила рассмотрения жалоб
                </h2>
                <p className="text-foreground/80 mb-8">
                  Мы стремимся к высочайшему качеству услуг, но если у вас возникли претензии к работе наших сотрудников, вы можете подать жалобу. Каждое обращение будет рассмотрено объективно и беспристрастно.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-card/30 rounded-xl border border-border text-center">
                    <Mail className="w-10 h-10 text-accent mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Как подать</h3>
                    <p className="text-foreground/70 text-sm">
                      Жалоба подается в письменной форме на имя руководителя ОСП и направляется на электронную почту
                    </p>
                  </div>
                  
                  <div className="p-6 bg-card/30 rounded-xl border border-border text-center">
                    <FileText className="w-10 h-10 text-accent mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Содержание</h3>
                    <p className="text-foreground/70 text-sm">
                      Укажите суть претензии, факты и обстоятельства, а также ваши контактные данные
                    </p>
                  </div>
                  
                  <div className="p-6 bg-card/30 rounded-xl border border-border text-center">
                    <Settings className="w-10 h-10 text-accent mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Сроки</h3>
                    <p className="text-foreground/70 text-sm">
                      Срок рассмотрения и предоставления ответа — не более <strong className="text-accent">10 рабочих дней</strong>
                    </p>
                  </div>
                </div>
              </section>

              {/* 9. Рассмотрение апелляций */}
              <section id="appeals" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-heading">
                  Рассмотрение апелляций
                </h2>
                <p className="text-foreground/80 mb-8">
                  Если вы не согласны с решением, принятым Органом по сертификации (например, с отказом в выдаче сертификата), вы имеете право подать апелляцию.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-card/30 rounded-xl border border-border">
                    <span className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm shrink-0">1</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Как подать</h3>
                      <p className="text-foreground/70 text-sm">Апелляция подается в письменной форме в Апелляционную комиссию Органа по сертификации.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-card/30 rounded-xl border border-border">
                    <span className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm shrink-0">2</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Содержание</h3>
                      <p className="text-foreground/70 text-sm">Четко изложите, с каким решением вы не согласны и предоставьте аргументы в свою пользу.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-card/30 rounded-xl border border-border">
                    <span className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm shrink-0">3</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Процедура</h3>
                      <p className="text-foreground/70 text-sm">Апелляционная комиссия, состоящая из независимых экспертов, проводит повторный анализ всех материалов дела.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-card/30 rounded-xl border border-border">
                    <span className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm shrink-0">4</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Сроки</h3>
                      <p className="text-foreground/70 text-sm">Срок рассмотрения апелляции и вынесения решения — не более <strong className="text-accent">15 рабочих дней</strong>.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 10. Испытательные лаборатории */}
              <section id="laboratories" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-heading">
                  Испытательные лаборатории
                </h2>
                <p className="text-foreground/80 mb-8">
                  Точность и объективность — ключевые требования к испытаниям. Поэтому мы доверяем проверку продукции только аккредитованным и независимым испытательным центрам, имеющим безупречную репутацию и современное оборудование.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-card/30 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <FlaskConical className="w-8 h-8 text-accent" />
                      <div>
                        <h3 className="font-semibold text-foreground">Испытательный центр АО «ВНИКТИ»</h3>
                        <span className="text-accent text-sm">RA.RU.10ЖД04 от 17.03.2015 г.</span>
                      </div>
                    </div>
                    <p className="text-foreground/70 text-sm">
                      Аккредитованный испытательный центр с многолетним опытом в области испытаний железнодорожной и канатной техники.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-card/30 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <FlaskConical className="w-8 h-8 text-accent" />
                      <div>
                        <h3 className="font-semibold text-foreground">ООО «ЦЕНТР ИСПЫТАНИЙ КАНАТНО-ТРАНСПОРТНЫХ СИСТЕМ»</h3>
                        <span className="text-accent/70 text-sm italic">В процессе получения аттестата аккредитации</span>
                      </div>
                    </div>
                    <p className="text-foreground/70 text-sm">
                      Специализированный центр для испытаний канатно-транспортных систем и их компонентов.
                    </p>
                  </div>
                </div>
              </section>

              {/* 11. Стоимость работ */}
              <section id="pricing" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-heading">
                  Как формируется стоимость
                </h2>
                <p className="text-foreground/80 mb-8">
                  Стоимость работ по сертификации не является фиксированной и рассчитывается индивидуально для каждого проекта. Мы гарантируем полную прозрачность ценообразования.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Факторы, влияющие на стоимость:</h3>
                    <ul className="space-y-3 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-1" />
                        <span>Тип и сложность продукции</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-1" />
                        <span>Выбранная схема сертификации</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-1" />
                        <span>Объем и сложность необходимых испытаний</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-1" />
                        <span>Необходимость анализа состояния производства</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-1" />
                        <span>Количество необходимых выездов экспертов</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-card/50 rounded-xl border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Методика расчета:</h3>
                    <div className="p-4 bg-background/50 rounded-lg mb-4 text-center">
                      <span className="text-2xl font-bold text-accent">С = Сос + Си + Сап + Сд</span>
                    </div>
                    <ul className="space-y-2 text-foreground/70 text-sm">
                      <li><strong className="text-foreground">Сос</strong> — работы Органа по сертификации</li>
                      <li><strong className="text-foreground">Си</strong> — испытания в лаборатории</li>
                      <li><strong className="text-foreground">Сап</strong> — анализ состояния производства</li>
                      <li><strong className="text-foreground">Сд</strong> — прочие расходы</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/30">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Как узнать точную стоимость?</h3>
                  <p className="text-foreground/80 mb-4">
                    Для получения детального коммерческого предложения направьте нам заполненную заявку с комплектом технической документации. Мы подготовим расчет в течение 2-3 рабочих дней.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="mailto:osp@kavkaz-ing.ru"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      osp@kavkaz-ing.ru
                    </a>
                    <a 
                      href="tel:+79187846121"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-card/80 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      +7 (918) 784-61-21
                    </a>
                  </div>
                </div>
              </section>

            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accreditation;
