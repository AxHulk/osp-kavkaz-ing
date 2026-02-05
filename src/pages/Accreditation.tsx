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
                  Основополагающие документы
                </h2>
                <p className="text-foreground/80 mb-8">
                  Основополагающие документы, регламентирующие деятельность ООО «КАВКАЗ-ИНЖИНИРИНГ», аккредитованного в качестве ОСП, а также нормативные правовые акты, документы по стандартизации и иные документы, устанавливающие требования к оценке (подтверждению) соответствия и объектам оценки (подтверждения) соответствия.
                </p>
                
                {/* Федеральные законы */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    Федеральные законы
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Федеральный закон России от 28.12.2013 №412-ФЗ «Об аккредитации в национальной системе аккредитации» (с изменениями)",
                      "Федеральный закон России от 27.12.2002 №184-ФЗ «О техническом регулировании» (с изменениями)",
                      "Федеральный закон России от 08.03.2022 №46-ФЗ «О внесении изменений в отдельные законодательные акты Российской Федерации»",
                      "Закон России от 07.02.1992 №2300-1 «О защите прав потребителей» (с изменениями)",
                      "Федеральный закон России от 08.02.1998 №14-ФЗ «Об обществах с ограниченной ответственностью» (с изменениями)",
                      "Федеральный закон России от 31.07.2020 №247-ФЗ «Об обязательных требованиях в Российской Федерации»",
                      "Федеральный закон России от 31.07.2020 №248-ФЗ «О государственном контроле (надзоре) и муниципальном контроле в Российской Федерации»",
                      "Федеральный закон России от 26.12.2008 №294-ФЗ «О защите прав юридических лиц и индивидуальных предпринимателей при осуществлении государственного контроля (надзора) и муниципального контроля» (с изменениями)",
                      "Федеральный закон России от 26.07.2006 №135-ФЗ «О защите конкуренции» (с изменениями)",
                      "Федеральный закон России от 29.12.2012 №273-ФЗ «Об образовании в Российской Федерации» (с изменениями)",
                      "Федеральный закон России от 13.03.2006 №38-ФЗ «О рекламе» (с изменениями)",
                      "Федеральный закон России от 29.07.2004 №98-ФЗ «О коммерческой тайне» (с изменениями)",
                      "Федеральный закон России от 02.05.2006 №59-ФЗ «О порядке рассмотрения обращений граждан Российской Федерации» (с изменениями)",
                    ].map((doc, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-card/30 rounded-lg border border-border/50">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Кодексы */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    Кодексы Российской Федерации
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Гражданский кодекс России: часть первая — от 30.11.1994 №51-ФЗ (с изменениями); часть вторая — от 26.01.1996 №14-ФЗ (с изменениями); часть третья — от 26.11.2001 №146-ФЗ (с изменениями); часть четвертая — от 18.12.2006 №230-ФЗ (с изменениями)",
                      "Уголовный кодекс России от 13.06.1996 №63-ФЗ (с изменениями)",
                      "Кодекс России об административных правонарушениях от 30.12.2001 №195-ФЗ (с изменениями)",
                      "Трудовой кодекс России от 30.12.2001 №197-ФЗ (с изменениями)",
                      "Таможенный кодекс ЕАЭС (с изменениями)",
                    ].map((doc, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-card/30 rounded-lg border border-border/50">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Постановления Правительства */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    Постановления Правительства России
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Постановление Правительства России от 12.03.2022 №353 «Об особенностях разрешительной деятельности в Российской Федерации в 2022 году» (с изменениями)",
                      "Постановление Правительства России от 17.10.2011 №845 «О Федеральной службе по аккредитации» (с изменениями)",
                      "Постановление Правительства России от 26.11.2021 №2050 «Об утверждении Правил осуществления аккредитации в национальной системе аккредитации...» (с изменениями)",
                      "Постановление Правительства России от 14.07.2014 №653 «Об утверждении методики определения размеров платы за проведение экспертизы...» (с изменениями)",
                      "Постановление Правительства России от 09.11.2021 №1923 «О порядке формирования и ведения реестра экспертов-аудиторов»",
                      "Постановление Правительства России от 29.11.2021 №2080 «О порядке подтверждения компетентности эксперта-аудитора и требованиях к экспертам-аудиторам»",
                      "Постановление Правительства России от 04.03.2020 №440 «О продлении действия разрешений и иных особенностях в отношении разрешительной деятельности в 2020-2022 годах» (с изменениями)",
                      "Постановление Правительства России от 19.06.2021 №934 «Об утверждении Правил принятия национальным органом по аккредитации решения о признании недействительными документов...»",
                      "Постановление Правительства России от 19.06.2021 №936 «О порядке регистрации, приостановления, возобновления и прекращения действия деклараций о соответствии...»",
                      "Постановление Правительства России от 18.11.2020 №1856 «О порядке формирования и ведения единого реестра сертификатов соответствия...» (с изменениями)",
                      "Постановление Правительства России от 17.12.2014 №1383 «О порядке выдачи бланков сертификатов соответствия...»",
                      "Постановление Правительства России от 15.08.2003 №500 «О Федеральном информационном фонде технических регламентов и стандартов...» (с изменениями)",
                      "Постановление Правительства России от 21.12.2021 №2425 «Об утверждении единого перечня продукции, подлежащей обязательной сертификации...» (с изменениями)",
                    ].map((doc, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-card/30 rounded-lg border border-border/50">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Приказы */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    Приказы Минэкономразвития и Росаккредитации
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Приказ Минобрнауки России от 01.07.2013 №499 «Об утверждении порядка организации и осуществления образовательной деятельности по дополнительным профессиональным программам» (с изменениями)",
                      "Приказ Росаккредитации от 29.04.2020 №84 «Об утверждении Административного регламента по предоставлению Федеральной службой по аккредитации государственной услуги...»",
                      "Приказ Минэкономразвития России от 26.10.2020 №707 «Об утверждении критериев аккредитации и перечня документов, подтверждающих соответствие заявителя...» (с изменениями)",
                      "Приказ Минэкономразвития России от 15.04.2020 №229 «Об особенностях рассмотрения заявлений о прохождении процедуры подтверждения компетентности...» (с изменениями)",
                      "Приказ Минэкономразвития России от 28.05.2021 №300 «Об утверждении перечня индикаторов риска нарушения обязательных требований...»",
                      "Приказ Минэкономразвития России от 17.10.2024 №649 «Об утверждении Перечня несоответствий заявителя критериям аккредитации...»",
                      "Приказ Минэкономразвития России от 16.08.2021 №496 «Об утверждении форм заявления об аккредитации...»",
                      "Приказ Минэкономразвития России от 29.10.2021 №657 «О порядке заполнения форм заявлений об аккредитации...»",
                      "Приказ Росаккредитации от 13.06.2019 №106 «Об утверждении методических рекомендаций по описанию области аккредитации органа по сертификации продукции...» (с изменениями)",
                      "Приказ Минэкономразвития России от 24.10.2020 №704 «Об утверждении Положения о составе сведений о результатах деятельности аккредитованных лиц...» (с изменениями)",
                      "Приказ Минэкономразвития России от 14.11.2024 №714 «О порядке, случаях и размерах платы за внесение сведений в реестры сертификатов соответствия...»",
                      "Приказ Минэкономразвития России от 30.07.2020 №473 «Об установлении изображений знака национальной системы аккредитации...»",
                    ].map((doc, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-card/30 rounded-lg border border-border/50">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ГОСТы */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    Стандарты (ГОСТ)
                  </h3>
                  <div className="space-y-2">
                    {[
                      "ГОСТ Р ИСО/МЭК 17065-2012 «Оценка соответствия. Требования к органам по сертификации продукции, процессов и услуг»",
                      "ГОСТ Р ИСО 9000-2015 «Системы менеджмента качества. Основные положения и словарь»",
                      "ГОСТ Р ИСО/МЭК 17000-2022 «Оценка соответствия. Словарь и общие принципы»",
                      "ГОСТ Р 54294-2010/ISO/PAS/17001:2005 «Оценка соответствия. Беспристрастность. Принципы и требования»",
                      "ГОСТ Р 54295-2010/ISO/PAS 17003:2004 «Оценка соответствия. Жалобы и апелляции. Принципы и требования»",
                      "ГОСТ Р 54296-2010/ISO/PAS 17002:2004 «Оценка соответствия. Конфиденциальность. Принципы и требования»",
                      "ГОСТ Р ИСО 19011-2021 «Оценка соответствия. Руководящие указания по проведению аудита систем менеджмента»",
                      "ГОСТ 31893-2012 «Оценка соответствия. Система стандартов в области оценки соответствия»",
                      "ГОСТ Р 53603-2020 «Оценка соответствия. Схемы сертификации продукции в Российской Федерации»",
                      "ГОСТ Р 58987-2020 «Оценка соответствия. Исследования типа продукции в целях оценки (подтверждения) соответствия...»",
                      "ГОСТ Р 57120-2016 «Применение схемы сертификации, основанной на анализе технической документации...»",
                      "ГОСТ Р 56541-2015 «Оценка соответствия. Общие правила идентификации продукции для целей оценки (подтверждения) соответствия...»",
                      "ГОСТ Р 58972-2020 «Оценка соответствия. Общие правила отбора образцов для испытаний продукции при подтверждении соответствия»",
                      "ГОСТ Р 58975-2020 «Оценка соответствия. Рекомендации по выбору методик исследований (испытаний) и измерений...»",
                      "ГОСТ ISO/IEC 17025-2019 «Общие требования к компетентности испытательных и калибровочных лабораторий»",
                      "ГОСТ Р 58973-2020 «Оценка соответствия. Правила к оформлению протоколов испытаний»",
                      "ГОСТ Р 54293-2020 «Анализ состояния производства при подтверждении соответствия»",
                      "ГОСТ Р 58984-2020 «Оценка соответствия. Порядок проведения инспекционного контроля в процедурах сертификации»",
                      "ГОСТ Р ИСО/МЭК 17021-1-2017 «Оценка соответствия. Требования к органам, проводящим аудит и сертификацию систем менеджмента. Часть 1. Требования»",
                      "ГОСТ 31816-2012 «Оценка соответствия. Применение знаков, указывающих о соответствии»",
                    ].map((doc, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-card/30 rounded-lg border border-border/50">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ГОСТы на канатные дороги */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    Стандарты на канатные дороги
                  </h3>
                  <p className="text-foreground/60 text-sm mb-3 italic">
                    Применяются исключительно в части требований, установленных Постановлением Правительства России от 21.12.2021 №2425
                  </p>
                  <div className="space-y-2">
                    {[
                      "ГОСТ Р 71233–2024 «Подвесные канатные дороги для транспортирования людей. Дороги кольцевые одноканатные. Приводы и другое механическое оборудование. Требования безопасности»",
                      "ГОСТ Р 71234–2024 «Подвесные канатные дороги для транспортирования людей. Дороги кольцевые одноканатные. Подвижной состав. Требования безопасности»",
                      "ГОСТ Р 71235–2024 «Подвесные канатные дороги для транспортирования людей. Дороги кольцевые одноканатные. Натяжные устройства. Требования безопасности»",
                    ].map((doc, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-accent/10 rounded-lg border border-accent/30">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Документы Росаккредитации и международные */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    Документы Росаккредитации и международные стандарты
                  </h3>
                  <div className="space-y-2">
                    {[
                      "СМ №03.1-9.0017 «Схема аккредитации органов по сертификации продукции в национальной системе аккредитации» (действующая версия)",
                      "СМ №03.1-1.0007 «Руководство по проведению удаленной оценки» (действующая версия)",
                      "СМ №02.1-3.0001 «Руководство пользователя программного продукта «True Conf» для организации видеоконференцсвязи» (действующая версия)",
                      "СМ №04.1-9.0014 «Политика использования аккредитованными лицами знака национальной системы аккредитации» (действующая версия)",
                      "СМ №04.1-1.0010 «Руководство по аудиту и сертификации системы менеджмента организаций, имеющих несколько мест осуществления деятельности» (IAF MD 1:2023, IDT)",
                      "СМ №04.1-1.0020 «Руководство по применению информационных и коммуникационных технологий в целях аудита/оценки» (IAF MD 4:2023, IDT)",
                      "СМ №02.1-2.0031 «Правила формирования регистрационных номеров сертификатов соответствия и деклараций о соответствии в реестрах Росаккредитации» (действующая версия)",
                      "IAF MD 1:2023 «Обязательный документ IAF для аудита и сертификации системы менеджмента организаций, имеющих несколько мест осуществления деятельности»",
                      "IAF MD 4:2023 «Обязательный документ IAF по применению информационно-коммуникационных технологий (ИКТ) в целях аудита/оценки»",
                      "ILAC P8:11/2023 «Договоренность о взаимном признании ILAC: дополнительные требования в отношении использования аккредитованными органами по оценке соответствия знаков аккредитации...»",
                      "Решение Совета ЕЭК от 12.11.2021 №130 «О порядке ввоза на таможенную территорию Евразийского экономического союза продукции, подлежащей обязательной оценке соответствия...»",
                    ].map((doc, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-card/30 rounded-lg border border-border/50">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm">{doc}</span>
                      </div>
                    ))}
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
                  Схемы сертификации
                </h2>
                <p className="text-foreground/80 mb-4">
                  Согласно Приложения №1 Документированной процедуры «Оценка (подтверждение) соответствия продукции» ДП-02.09, а также ГОСТ Р 53603-2020 «Оценка соответствия. Схемы сертификации продукции в Российской Федерации», применительно к области аккредитации ОСП ООО «КАВКАЗ-ИНЖИНИРИНГ», типовыми схемами сертификации являются:
                </p>
                
                <div className="space-y-8">
                  {/* Схема 1с */}
                  <div className="p-6 bg-card/30 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-4 py-2 bg-accent text-accent-foreground text-lg font-bold rounded-lg">1с</span>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">Серийно выпускаемая продукция</h3>
                        <p className="text-foreground/60 text-sm">С инспекционным контролем</p>
                      </div>
                    </div>
                    
                    {/* Заявитель */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-accent" />
                        Заявитель
                      </h4>
                      <p className="text-foreground/60 text-xs mb-3 italic">
                        Изготовитель; уполномоченное изготовителем лицо — в случае, если продукция изготовлена за пределами РФ
                      </p>
                      <div className="space-y-2">
                        {[
                          "Подает заявку на сертификацию продукции с прилагаемыми документами",
                          "Заключает договор(ы) на выполнение работ по сертификации и проведению исследований (испытаний) и измерений",
                          "Предоставляет продукцию для проведения идентификации и отбора образцов (проб)",
                          "Создает условия для проведения анализа состояния производства",
                          "Заключает договор на выполнение работ по проведению инспекционного контроля",
                          "Маркирует продукцию единым знаком обращения на рынке (знаком соответствия)",
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span className="text-foreground/80 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Орган по сертификации */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-accent" />
                        Орган по сертификации
                      </h4>
                      <div className="space-y-2">
                        {[
                          "Проводит анализ документов, представленных заявителем",
                          "Заключает договор на выполнение работ по сертификации",
                          "Проводит идентификацию продукции и отбор образцов (проб) для проведения исследований",
                          "Направляет продукцию в испытательную лабораторию",
                          "Проводит анализ состояния производства",
                          "Обобщает результаты анализа документов, исследований и анализа состояния производства",
                          "Принимает решение о выдаче (отказе в выдаче) сертификата соответствия",
                          "Вносит сведения о выданном сертификате в единый реестр Росаккредитации",
                          "Заключает договор на проведение инспекционного контроля и осуществляет его",
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-foreground/50 shrink-0 mt-0.5" />
                            <span className="text-foreground/80 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Испытательная лаборатория */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <FlaskConical className="w-5 h-5 text-accent" />
                        Испытательная лаборатория
                      </h4>
                      <div className="space-y-2">
                        {[
                          "Заключает договор на проведение исследований (испытаний) и измерений продукции",
                          "Проводит исследования (испытания) и измерения продукции при сертификации и/или инспекционном контроле",
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-foreground/50 shrink-0 mt-0.5" />
                            <span className="text-foreground/80 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Схема 3с */}
                  <div className="p-6 bg-card/30 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-4 py-2 bg-accent text-accent-foreground text-lg font-bold rounded-lg">3с</span>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">Партия продукции</h3>
                        <p className="text-foreground/60 text-sm">Без инспекционного контроля</p>
                      </div>
                    </div>
                    
                    {/* Заявитель */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-accent" />
                        Заявитель
                      </h4>
                      <p className="text-foreground/60 text-xs mb-3 italic">
                        Изготовитель; уполномоченное изготовителем лицо; продавец (импортер)
                      </p>
                      <div className="space-y-2">
                        {[
                          "Подает заявку на сертификацию продукции с прилагаемыми документами",
                          "Заключает договор(ы) на выполнение работ по сертификации и проведению исследований (испытаний) и измерений",
                          "Предоставляет продукцию для проведения идентификации и отбора образцов (проб)",
                          "Маркирует продукцию единым знаком обращения на рынке (знаком соответствия)",
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span className="text-foreground/80 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Орган по сертификации */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-accent" />
                        Орган по сертификации
                      </h4>
                      <div className="space-y-2">
                        {[
                          "Проводит анализ документов, представленных заявителем",
                          "Заключает договор на выполнение работ по сертификации",
                          "Проводит идентификацию продукции и отбор образцов (проб) для проведения исследований",
                          "Направляет продукцию в испытательную лабораторию",
                          "Обобщает результаты анализа документов и результаты исследований образцов продукции",
                          "Принимает решение о выдаче (отказе в выдаче) сертификата соответствия",
                          "Вносит сведения о выданном сертификате в единый реестр Росаккредитации",
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-foreground/50 shrink-0 mt-0.5" />
                            <span className="text-foreground/80 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Испытательная лаборатория */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <FlaskConical className="w-5 h-5 text-accent" />
                        Испытательная лаборатория
                      </h4>
                      <div className="space-y-2">
                        {[
                          "Заключает договор на проведение исследований (испытаний) и измерений продукции",
                          "Проводит исследования (испытания) и измерения продукции при сертификации",
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-foreground/50 shrink-0 mt-0.5" />
                            <span className="text-foreground/80 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Схема 9с */}
                  <div className="p-6 bg-card/30 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-4 py-2 bg-accent text-accent-foreground text-lg font-bold rounded-lg">9с</span>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">Единичные изделия</h3>
                        <p className="text-foreground/60 text-sm">Для оснащения предприятий на территории РФ</p>
                      </div>
                    </div>
                    
                    {/* Заявитель */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-accent" />
                        Заявитель
                      </h4>
                      <p className="text-foreground/60 text-xs mb-3 italic">
                        Изготовитель; уполномоченное изготовителем лицо; продавец (импортер)
                      </p>
                      <div className="space-y-2">
                        {[
                          "Подает заявку на сертификацию продукции с прилагаемыми документами",
                          "Заключает договор на выполнение работ по сертификации",
                          "Маркирует продукцию единым знаком обращения на рынке (знаком соответствия)",
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span className="text-foreground/80 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Орган по сертификации */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-accent" />
                        Орган по сертификации
                      </h4>
                      <div className="space-y-2">
                        {[
                          "Проводит анализ документов, представленных заявителем",
                          "Заключает договор на выполнение работ по сертификации",
                          "Проводит анализ технической документации на продукцию",
                          "Обобщает результаты анализа документов и технической документации",
                          "Принимает решение о выдаче (отказе в выдаче) сертификата соответствия",
                          "Вносит сведения о выданном сертификате в единый реестр Росаккредитации",
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-foreground/50 shrink-0 mt-0.5" />
                            <span className="text-foreground/80 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <p className="mt-4 text-foreground/60 text-xs italic">
                      Примечание: Схема 9с не предусматривает проведение испытаний в лаборатории — оценка проводится на основе анализа технической документации.
                    </p>
                  </div>
                </div>

                {/* Сравнительная таблица */}
                <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/30">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Сравнение схем сертификации</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-accent/20">
                          <th className="border border-border p-3 text-left text-foreground font-semibold">Характеристика</th>
                          <th className="border border-border p-3 text-center text-foreground font-semibold">1с</th>
                          <th className="border border-border p-3 text-center text-foreground font-semibold">3с</th>
                          <th className="border border-border p-3 text-center text-foreground font-semibold">9с</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-3 text-foreground/80">Тип продукции</td>
                          <td className="border border-border p-3 text-center text-foreground/80">Серийная</td>
                          <td className="border border-border p-3 text-center text-foreground/80">Партия</td>
                          <td className="border border-border p-3 text-center text-foreground/80">Единичное изделие</td>
                        </tr>
                        <tr className="bg-card/30">
                          <td className="border border-border p-3 text-foreground/80">Испытания в лаборатории</td>
                          <td className="border border-border p-3 text-center text-accent">✓</td>
                          <td className="border border-border p-3 text-center text-accent">✓</td>
                          <td className="border border-border p-3 text-center text-foreground/50">—</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3 text-foreground/80">Анализ производства</td>
                          <td className="border border-border p-3 text-center text-accent">✓</td>
                          <td className="border border-border p-3 text-center text-foreground/50">—</td>
                          <td className="border border-border p-3 text-center text-foreground/50">—</td>
                        </tr>
                        <tr className="bg-card/30">
                          <td className="border border-border p-3 text-foreground/80">Инспекционный контроль</td>
                          <td className="border border-border p-3 text-center text-accent">✓</td>
                          <td className="border border-border p-3 text-center text-foreground/50">—</td>
                          <td className="border border-border p-3 text-center text-foreground/50">—</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3 text-foreground/80">Анализ техдокументации</td>
                          <td className="border border-border p-3 text-center text-foreground/50">—</td>
                          <td className="border border-border p-3 text-center text-foreground/50">—</td>
                          <td className="border border-border p-3 text-center text-accent">✓</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* 5. Заявка на сертификацию */}
              <section id="application" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-heading">
                  Форма заявки на обязательную сертификацию продукции
                </h2>
                
                <div className="p-6 bg-card/30 rounded-xl border border-border mb-8">
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Для проведения обязательной оценки (подтверждения) соответствия в форме обязательной сертификации продукции согласно области аккредитации ОСП ООО «КАВКАЗ-ИНЖИНИРИНГ», заявитель (изготовитель; уполномоченное изготовителем лицо — если продукция изготовлена за пределами Российской Федерации; продавец (импортер)) оформляет рекомендованную форму заявки и направляет заявку, а также необходимый комплект документов согласно схеме сертификации и основополагающим документам, устанавливающим требования к сертифицируемой продукции.
                  </p>
                  
                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20 mb-6">
                    <p className="text-foreground/80 text-sm">
                      <strong className="text-foreground">Нормативная база:</strong> В зависимости от конкретной продукции согласно Постановлению Правительства России от 21.12.2021 №2425 (с изменениями) это: <span className="text-accent">ГОСТ Р 71233–2024</span>, <span className="text-accent">ГОСТ Р 71234–2024</span>, <span className="text-accent">ГОСТ Р 71235–2024</span>.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4 font-heading">
                  Способы подачи заявки
                </h3>
                
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="p-5 bg-card/30 rounded-xl border border-border">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="text-foreground font-semibold mb-2">По электронной почте</h4>
                    <a 
                      href="mailto:osp@kavkaz-ing.ru?subject=Заявка на сертификацию"
                      className="text-accent hover:underline text-sm"
                    >
                      osp@kavkaz-ing.ru
                    </a>
                  </div>
                  
                  <div className="p-5 bg-card/30 rounded-xl border border-border">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="text-foreground font-semibold mb-2">По почте</h4>
                    <p className="text-foreground/70 text-sm">
                      123112, РОССИЯ, г. Москва, вн.тер.г. муниципальный округ Пресненский, ул. Тестовская, д.10, оф.509
                    </p>
                  </div>
                  
                  <div className="p-5 bg-card/30 rounded-xl border border-border">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <User className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="text-foreground font-semibold mb-2">При личном приеме</h4>
                    <p className="text-foreground/70 text-sm">
                      123112, РОССИЯ, г. Москва, вн.тер.г. муниципальный округ Пресненский, ул. Тестовская, д.10, оф.509
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-accent/10 rounded-xl border border-accent/30">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h4 className="text-foreground font-semibold mb-1">Скачать форму заявки</h4>
                      <p className="text-foreground/70 text-sm">Форма заявки на обязательную сертификацию продукции (формат .docx)</p>
                    </div>
                    <a
                      href="/documents/Заявка_на_обяз_сертиф_продукции.docx"
                      download
                      className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap"
                    >
                      <FileText className="w-4 h-4" />
                      Скачать заявку
                    </a>
                  </div>
                </div>
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
                  Права и обязанности заявителей
                </h2>
                <p className="text-foreground/80 mb-8">
                  Права и обязанности заявителей, обращающихся в Орган по сертификации продукции (ОСП) ООО «КАВКАЗ-ИНЖИНИРИНГ».
                </p>
                
                {/* Права заявителя */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <Scale className="w-5 h-5 text-accent" />
                    </div>
                    Заявитель вправе
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Во всякое время проверять ход и качество выполняемых ОСП ООО «КАВКАЗ-ИНЖИНИРИНГ» работ, не вмешиваясь в деятельность ОСП ООО «КАВКАЗ-ИНЖИНИРИНГ».",
                      "Отказаться от дальнейшего выполнения работ по заявке в любое время до завершения выполнения работ и подписания Акта сдачи-приема работ, выплатив ОСП ООО «КАВКАЗ-ИНЖИНИРИНГ» часть установленной цены пропорционально части работ, выполненных до получения извещения об отказе.",
                      "Выбирать форму и схему подтверждения соответствия, предусмотренные для определенных видов продукции соответствующими установленными требованиями.",
                      "Обращаться для осуществления подтверждения соответствия продукции в любой орган по сертификации, область аккредитации которого распространяется на продукцию, в отношении которой Заявитель намеревается провести работу по подтверждению соответствия.",
                      "Обращаться в Федеральную службу по аккредитации с жалобами на неправомерные действия ОСП ООО «КАВКАЗ-ИНЖИНИРИНГ» и аккредитованных Испытательных лабораторий (центров) в соответствии с законодательством Российской Федерации.",
                      "Использовать техническую и разрешительную документацию для подтверждения соответствия продукции установленным требованиям, распространяющимся на данную продукцию.",
                    ].map((right, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-accent/5 rounded-xl border border-accent/20">
                        <span className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-foreground/80 text-sm">{right}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Обязанности заявителя */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <ClipboardList className="w-5 h-5 text-foreground/70" />
                    </div>
                    Заявитель обязан
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Представить ОСП ООО «КАВКАЗ-ИНЖИНИРИНГ» оригиналы (копии — заверенные в установленном порядке) документов в соответствии с требованиями действующего законодательства, образцы (пробы) продукции для сертификационных испытаний, организовать анализ состояния производства.",
                      "Оплатить работы ОСП ООО «КАВКАЗ-ИНЖИНИРИНГ» в соответствии с условиями договора, который заявитель обязан заключить в целях проведения сертификации (в т.ч. инспекционного контроля).",
                      "Обеспечивать стабильность показателей (характеристик) продукции, подтвержденных сертификатом соответствия, требованиям нормативных документов.",
                      "Выпускать в обращение продукцию, подлежащую обязательному подтверждению соответствия, только после осуществления такого подтверждения соответствия.",
                      "Указывать в сопроводительной документации сведения о сертификате соответствия.",
                      "Выполнять установленные требования к объектам оценки (подтверждения) соответствия, в т.ч. требования схем сертификации, а также требования ОСП ООО «КАВКАЗ-ИНЖИНИРИНГ» в отношении использования знаков соответствия.",
                      "Предъявлять в уполномоченные органы государственного контроля (надзора), а также заинтересованным лицам документы, свидетельствующие об оценке (подтверждению) соответствия продукции.",
                      "Приостанавливать или прекращать реализацию продукции, если действие сертификата соответствия приостановлено либо прекращено.",
                      "Предварительно письменно уведомлять ОСП ООО «КАВКАЗ-ИНЖИНИРИНГ» обо всех намечающихся модернизациях (модификациях) продукции, изменениях в ее конструкции, технологии производства.",
                      "Извещать ОСП ООО «КАВКАЗ-ИНЖИНИРИНГ» об изменениях, которые могут повлиять на выполнение требований к объектам оценки (подтверждения) соответствия.",
                      "Приостанавливать производство продукции, которая прошла подтверждение соответствия, но впоследствии не соответствует требованиям нормативных документов, на основании решений уполномоченных органов.",
                      "В случае приостановки действия или отмены документов по подтверждению соответствия продукции, прекратить использовать все рекламные материалы и вернуть по требованию ОСП бланки сертификатов.",
                      "Не использовать информацию таким образом, чтобы нанести вред репутации ОСП ООО «КАВКАЗ-ИНЖИНИРИНГ» и не делать несанкционированных заявлений.",
                      "Вести учет всех рекламаций (жалоб, претензий, обращений) на продукцию, принимать необходимые меры, документировать их и извещать ОСП по запросу.",
                    ].map((obligation, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-card/30 rounded-xl border border-border/50">
                        <span className="w-6 h-6 bg-secondary text-foreground/70 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-foreground/80 text-sm">{obligation}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Дополнительные требования ГОСТ Р ИСО/МЭК 17065-2012 */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <FileText className="w-5 h-5 text-foreground/70" />
                    </div>
                    Требования согласно ГОСТ Р ИСО/МЭК 17065-2012 (п.4.1.2.2)
                  </h3>
                  <div className="p-6 bg-card/30 rounded-xl border border-border">
                    <p className="text-foreground/70 text-sm mb-4">Заявитель также обязан соблюдать следующие требования:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Постоянное выполнение сертификационных требований, включая внесение соответствующих изменений",
                        "Соответствие сертифицированной продукции требованиям при непрерывном производстве",
                        "Предоставление доступа для оценивания и надзора к оборудованию, местам, персоналу и субподрядчикам",
                        "Выступление с заявлениями исключительно в рамках сертификации",
                        "Использование сертификации таким образом, чтобы не нанести ущерб репутации органа",
                        "Прекращение использования рекламных материалов при приостановке или отмене сертификации",
                        "Предоставление копий документов по сертификации в полноте или согласно схеме",
                        "Выполнение требований при ссылках на сертификацию в СМИ и рекламе",
                        "Выполнение требований по использованию знаков соответствия",
                        "Ведение записей всех жалоб и принятие мер по ним",
                        "Незамедлительное информирование об изменениях, влияющих на сертификацию",
                      ].map((req, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                          <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-foreground/70 text-sm">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Примечание о передаче сертификата */}
                <div className="p-6 bg-accent/10 rounded-xl border border-accent/20">
                  <h4 className="font-semibold text-foreground mb-3">В случае прекращения аккредитации ОСП</h4>
                  <p className="text-foreground/70 text-sm">
                    В случае прекращения аккредитации ОСП ООО «КАВКАЗ-ИНЖИНИРИНГ» (сокращения области аккредитации) заявитель вправе заключить договор о передаче сертификата соответствия, выданного на серийно выпускаемую продукцию, с иным аккредитованным в национальной системе аккредитации ОСП с действующей областью аккредитации. ОСП, с которым был заключен такой договор, пользуется всеми правами и несет все обязанности и ответственность, предусмотренные законодательством Российской Федерации.
                  </p>
                </div>
              </section>

              {/* 8. Рассмотрение жалоб */}
              <section id="complaints" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-heading">
                  Правила рассмотрения жалоб и обращений
                </h2>
                
                <div className="p-6 bg-card/30 rounded-xl border border-border mb-8">
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Рассмотрение жалоб и обращений в ОСП ООО «КАВКАЗ-ИНЖИНИРИНГ» осуществляется в соответствии с документированной процедурой «Порядок рассмотрения жалоб, обращений и апелляций» ДП-02.08 (в действующей редакции), являющейся частью документов системы менеджмента качества ОСП ООО «КАВКАЗ-ИНЖИНИРИНГ».
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4 font-heading">Определения</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="p-5 bg-card/30 rounded-xl border border-border">
                    <h4 className="text-foreground font-semibold mb-2 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-accent" />
                      Жалоба (претензия)
                    </h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Просьба юридического лица и/или физического лица, в т.ч. которое может быть зарегистрировано в качестве индивидуального предпринимателя, а также сообщества (ассоциации, общественной организации) юридических и/или физических лиц, иных организаций и учреждений, в т.ч. Федеральной службы по аккредитации и/или органов государственного контроля (надзора), о восстановлении или защите его нарушенных прав, свобод или законных интересов, ожидающая ответа.
                    </p>
                  </div>
                  
                  <div className="p-5 bg-card/30 rounded-xl border border-border">
                    <h4 className="text-foreground font-semibold mb-2 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-accent" />
                      Обращение
                    </h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Направленные в ОСП ООО «КАВКАЗ-ИНЖИНИРИНГ», Федеральную службу по аккредитации в письменной форме или в форме электронного документа предложение, заявление или жалоба, а также устное обращение гражданина (личного, индивидуального и коллективного).
                    </p>
                  </div>
                  
                  <div className="p-5 bg-card/30 rounded-xl border border-border">
                    <h4 className="text-foreground font-semibold mb-2 flex items-center gap-2">
                      <User className="w-5 h-5 text-accent" />
                      Заявитель жалобы, обращения
                    </h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Юридическое лицо и/или физическое лицо, в т.ч. которое может быть зарегистрировано в качестве индивидуального предпринимателя, а также сообщества (ассоциации, общественные организации) юридических и/или физических лиц, иные организации и учреждения, в т.ч. Федеральная служба по аккредитации и/или органы государственного контроля (надзора).
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4 font-heading">Право на подачу жалобы</h3>
                
                <div className="p-6 bg-card/30 rounded-xl border border-border mb-8">
                  <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                    Юридические и физические лица, в т.ч. индивидуальные предприниматели, сообщества (ассоциации, общественные организации), иные организации и учреждения, в т.ч. Росаккредитация и органы государственного контроля (надзора), имеют право направлять в ОСП ООО «КАВКАЗ-ИНЖИНИРИНГ» жалобы и обращения, относящиеся к деятельности по оценке (подтверждению) соответствия.
                  </p>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    Заявителем жалобы, обращения может быть любая организация или лицо-участник процесса оценки (подтверждения) соответствия продукции, или лицо, заинтересованное в оценке (подтверждении) соответствия продукции, право которой или иных лиц, по её мнению, нарушено.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4 font-heading">Порядок подачи и рассмотрения</h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="p-5 bg-card/30 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">1</span>
                      <h4 className="text-foreground font-semibold">Подача</h4>
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Жалоба, обращение подается на имя Генерального директора ООО «КАВКАЗ-ИНЖИНИРИНГ» по почте, на электронный адрес ОСП или нарочно в письменном виде.
                    </p>
                  </div>
                  
                  <div className="p-5 bg-card/30 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">2</span>
                      <h4 className="text-foreground font-semibold">Содержание</h4>
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Должны быть указаны причины разногласия, приведены соответствующие документы. Допустимо также оформлять жалобу в свободной письменной форме.
                    </p>
                  </div>
                  
                  <div className="p-5 bg-card/30 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">3</span>
                      <h4 className="text-foreground font-semibold">Регистрация</h4>
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Жалоба подлежит регистрации не позднее следующего рабочего дня со дня получения. Получение подтверждается отправителю не позднее <strong className="text-accent">1 рабочего дня</strong>.
                    </p>
                  </div>
                  
                  <div className="p-5 bg-card/30 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">4</span>
                      <h4 className="text-foreground font-semibold">Рассмотрение</h4>
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Решение оформляется Менеджером по качеству ОСП не позднее <strong className="text-accent">10 рабочих дней</strong> со дня получения жалобы.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-accent/10 rounded-xl border border-accent/20 mb-8">
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    <strong className="text-foreground">Принятие решения:</strong> Решение по жалобе высылается на адрес заявителя в письменном виде не позднее 10 рабочих дней со дня получения. Если в течение 10 рабочих дней с момента отправления не поступило возражений (за исключением решений по жалобам, поступившим из Росаккредитации), оно считается принятым.
                  </p>
                </div>

                <div className="p-6 bg-accent/10 rounded-xl border border-accent/30">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h4 className="text-foreground font-semibold mb-1">Скачать форму жалобы/обращения</h4>
                      <p className="text-foreground/70 text-sm">Образец формы подачи жалобы или обращения (формат .docx)</p>
                    </div>
                    <a
                      href="/documents/Форма_подачи_Жалобы_обращения.docx"
                      download
                      className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap"
                    >
                      <FileText className="w-4 h-4" />
                      Скачать форму
                    </a>
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
                  Методика расчёта стоимости работ
                </h2>
                <p className="text-foreground/80 mb-8">
                  Методика расчета стоимости работ по сертификации и примерная стоимость работ Органа по сертификации продукции (ОСП) ООО «КАВКАЗ-ИНЖИНИРИНГ».
                </p>
                
                {/* Общие положения */}
                <div className="mb-10 p-6 bg-card/30 rounded-xl border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Общие положения</h3>
                  <div className="space-y-3 text-foreground/80 text-sm">
                    <p>
                      Все фактически проведенные ОСП ООО «КАВКАЗ-ИНЖИНИРИНГ» работы по сертификации, за исключением работ, финансирование которых в соответствии с законодательством осуществляется из средств государственного бюджета, оплачиваются за счет собственных средств предприятий, организаций, граждан, обратившихся с заявкой на проведение соответствующих работ, вне зависимости от принятых по их результатам решений.
                    </p>
                    <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
                      <Calculator className="w-5 h-5 text-accent shrink-0" />
                      <span><strong>Уровень рентабельности</strong> работ по сертификации не должен превышать <strong className="text-accent">35%</strong>.</span>
                    </div>
                    <p>
                      Инспекционный контроль за сертифицированной продукцией оплачивается в размере фактических затрат, понесенных организациями, выполняющими соответствующие работы.
                    </p>
                    <p>
                      Стоимость работ по сертификации <strong>не включает</strong> командировочные расходы и налог на добавленную стоимость. Их оплата проводится заявителем дополнительно.
                    </p>
                    <p>
                      Средняя дневная ставка специалистов не должна превышать минимальной месячной заработной платы, установленной законодательством Российской Федерации.
                    </p>
                  </div>
                </div>

                {/* Основная формула */}
                <div className="mb-10">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Суммарные затраты по подтверждению соответствия</h3>
                  <div className="p-6 bg-accent/10 rounded-xl border border-accent/30 mb-6">
                    <div className="text-center mb-6">
                      <span className="text-2xl md:text-3xl font-bold text-accent font-mono">
                        С = С<sub>ое</sub> + С<sub>об</sub> + С<sub>ип</sub> + С<sub>а</sub> + С<sub>ик</sub> × n + С<sub>рс</sub>
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-accent min-w-[40px]">С</span>
                          <span className="text-foreground/80">— общая стоимость услуг по подтверждению соответствия продукции, руб.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-accent min-w-[40px]">С<sub>ое</sub></span>
                          <span className="text-foreground/80">— стоимость работ, проводимых ОСП, руб.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-accent min-w-[40px]">С<sub>об</sub></span>
                          <span className="text-foreground/80">— стоимость образцов, отобранных для испытаний (разрушающихся), руб.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-accent min-w-[40px]">С<sub>ип</sub></span>
                          <span className="text-foreground/80">— стоимость испытаний в аккредитованной лаборатории, руб.</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-accent min-w-[40px]">С<sub>а</sub></span>
                          <span className="text-foreground/80">— стоимость анализа состояния производства</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-accent min-w-[40px]">С<sub>ик</sub></span>
                          <span className="text-foreground/80">— стоимость одной проверки в рамках инспекционного контроля, руб.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-accent min-w-[40px]">n</span>
                          <span className="text-foreground/80">— число проверок в течение срока действия сертификата</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-accent min-w-[40px]">С<sub>рс</sub></span>
                          <span className="text-foreground/80">— расходы на упаковку, хранение, транспортировку образцов, руб.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground/60 text-sm italic">
                    В зависимости от конкретной ситуации в формулу включаются только элементы, соответствующие составу фактически проводимых работ.
                  </p>
                </div>

                {/* Формула затрат ОСП */}
                <div className="mb-10">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Затраты ОСП по подтверждению соответствия</h3>
                  <div className="p-6 bg-card/30 rounded-xl border border-border mb-6">
                    <div className="text-center mb-6">
                      <span className="text-xl md:text-2xl font-bold text-foreground font-mono">
                        С<sub>ое</sub> = t<sub>oci</sub> × Т × (1 + (К<sub>нз</sub> + К<sub>нр</sub>)/100) × (1 + Р/100)
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-foreground min-w-[50px]">t<sub>oci</sub></span>
                          <span className="text-foreground/80">— трудоемкость подтверждения соответствия по i-й схеме, чел.-дн.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-foreground min-w-[50px]">Т</span>
                          <span className="text-foreground/80">— дневная ставка эксперта, руб.</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-foreground min-w-[50px]">К<sub>нз</sub></span>
                          <span className="text-foreground/80">— норматив начислений на заработную плату, %</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-foreground min-w-[50px]">К<sub>нр</sub></span>
                          <span className="text-foreground/80">— коэффициент накладных расходов, %</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-foreground min-w-[50px]">Р</span>
                          <span className="text-foreground/80">— уровень рентабельности, %</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Таблица нормативов трудоемкости */}
                <div className="mb-10">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Предельные нормативы трудоёмкости работ</h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    Предельные нормативы трудоемкости и состав работ, выполняемых ОСП при сертификации конкретной продукции, в зависимости от схемы сертификации:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-accent/20">
                          <th className="border border-border p-3 text-left text-foreground font-semibold">Наименование работ</th>
                          <th className="border border-border p-3 text-center text-foreground font-semibold w-20">1с</th>
                          <th className="border border-border p-3 text-center text-foreground font-semibold w-20">3с</th>
                          <th className="border border-border p-3 text-center text-foreground font-semibold w-20">9с</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-secondary/30">
                          <td className="border border-border p-3 font-semibold text-foreground" colSpan={4}>
                            1. Принятие решения по заявке на сертификацию
                          </td>
                        </tr>
                        {[
                          { name: "1.1. Прием, входной контроль и регистрация заявки", s1c: "0,5", s3c: "0,5", s9c: "0,5" },
                          { name: "1.2. Рассмотрение документов, приложенных к заявке", s1c: "2,0", s3c: "2,0", s9c: "-" },
                          { name: "1.3. Рассмотрение заявления-декларации и сопроводительных документов", s1c: "-", s3c: "-", s9c: "4,0" },
                          { name: "1.4. Предварительное ознакомление с состоянием производства сертифицируемой продукции **", s1c: "-", s3c: "-", s9c: "-" },
                          { name: "1.5. Выбор схемы и программы сертификации", s1c: "0,5", s3c: "0,5", s9c: "0,5" },
                          { name: "1.6. Определение организаций-соисполнителей", s1c: "1,5", s3c: "1,5", s9c: "-" },
                          { name: "1.7. Подготовка решения по заявке", s1c: "1,0", s3c: "1,0", s9c: "1,0" },
                        ].map((row, index) => (
                          <tr key={index} className="hover:bg-card/50">
                            <td className="border border-border p-3 text-foreground/80">{row.name}</td>
                            <td className="border border-border p-3 text-center text-foreground/80">{row.s1c}</td>
                            <td className="border border-border p-3 text-center text-foreground/80">{row.s3c}</td>
                            <td className="border border-border p-3 text-center text-foreground/80">{row.s9c}</td>
                          </tr>
                        ))}
                        <tr className="bg-secondary/30">
                          <td className="border border-border p-3 font-semibold text-foreground" colSpan={4}>
                            2. Выполнение процедур сертификации
                          </td>
                        </tr>
                        {[
                          { name: "2.1. Отбор и идентификация образцов для проведения сертификационных испытаний", s1c: "3,0", s3c: "3,0", s9c: "-" },
                          { name: "2.2. Анализ протоколов испытаний", s1c: "1,0", s3c: "1,0", s9c: "-" },
                          { name: "2.3. Проверка производства сертифицируемой продукции", s1c: "-", s3c: "-", s9c: "-" },
                          { name: "2.3.1. Анализ состояния производства **", s1c: "-", s3c: "-", s9c: "-" },
                          { name: "2.3.2. Анализ результатов работ по сертификации производства или системы качества", s1c: "-", s3c: "-", s9c: "-" },
                          { name: "2.4. Оценка соответствия продукции и подготовка решения о выдаче сертификата", s1c: "1,0", s3c: "1,0", s9c: "1,0" },
                        ].map((row, index) => (
                          <tr key={index} className="hover:bg-card/50">
                            <td className="border border-border p-3 text-foreground/80">{row.name}</td>
                            <td className="border border-border p-3 text-center text-foreground/80">{row.s1c}</td>
                            <td className="border border-border p-3 text-center text-foreground/80">{row.s3c}</td>
                            <td className="border border-border p-3 text-center text-foreground/80">{row.s9c}</td>
                          </tr>
                        ))}
                        <tr className="bg-secondary/30">
                          <td className="border border-border p-3 font-semibold text-foreground" colSpan={4}>
                            3. Инспекционный контроль за сертифицированной продукцией ***
                          </td>
                        </tr>
                        {[
                          { name: "3.1. Выбор программы инспекционного контроля ***", s1c: "1,5", s3c: "1,5", s9c: "-" },
                          { name: "3.2. Проведение одной проверки, включая анализ данных о сертифицированной продукции", s1c: "1,5", s3c: "1,5", s9c: "-" },
                          { name: "3.3. Анализ состояния производства при инспекционном контроле ***", s1c: "1,5", s3c: "-", s9c: "-" },
                          { name: "3.4. Разработка перечня корректирующих воздействий и сроков их реализации", s1c: "1,5", s3c: "1,5", s9c: "-" },
                          { name: "3.5. Контроль за реализацией корректирующих мероприятий", s1c: "2,0", s3c: "2,0", s9c: "-" },
                        ].map((row, index) => (
                          <tr key={index} className="hover:bg-card/50">
                            <td className="border border-border p-3 text-foreground/80">{row.name}</td>
                            <td className="border border-border p-3 text-center text-foreground/80">{row.s1c}</td>
                            <td className="border border-border p-3 text-center text-foreground/80">{row.s3c}</td>
                            <td className="border border-border p-3 text-center text-foreground/80">{row.s9c}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Таблица групп сложности */}
                <div className="mb-10">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Группы сложности производства</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse max-w-2xl">
                      <thead>
                        <tr className="bg-accent/20">
                          <th className="border border-border p-3 text-center text-foreground font-semibold w-20">Группа</th>
                          <th className="border border-border p-3 text-left text-foreground font-semibold">Среднее число технологических операций при изготовлении продукции</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { group: "1", operations: "от 1 до 3" },
                          { group: "2", operations: "от 4 до 10" },
                          { group: "3", operations: "от 11 до 20" },
                          { group: "4", operations: "от 21 до 50" },
                          { group: "5", operations: "от 51 до 200" },
                          { group: "6", operations: "от 201 до 2000" },
                          { group: "7", operations: "от 2001 до 5000" },
                          { group: "8", operations: "свыше 5000" },
                        ].map((row, index) => (
                          <tr key={index} className="hover:bg-card/50">
                            <td className="border border-border p-3 text-center font-bold text-accent">{row.group}</td>
                            <td className="border border-border p-3 text-foreground/80">{row.operations}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Дополнительные положения */}
                <div className="mb-10 space-y-3">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Дополнительные положения</h3>
                  {[
                    "Стоимость испытаний для сертификации продукции калькулируется аккредитованной испытательной лабораторией на основе самостоятельно установленных нормативов материальных и трудовых затрат в действующих ценах.",
                    "Стоимость образцов, взятых у заявителя (изготовителя) для испытаний, определяется по их фактической себестоимости.",
                    "Оплата образцов, отобранных в торговле, проводится в соответствии с их розничной ценой на основании документов, удостоверяющих факт покупки.",
                    "Расходы по отбору и доставке образцов включают фактически произведенные затраты на транспортировку, погрузочно-разгрузочные работы, хранение и утилизацию.",
                    "Оплата испытаний проводится по тарифам соответствующей аккредитованной испытательной лаборатории на основе возмещения издержек.",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-card/30 rounded-lg border border-border/50">
                      <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Примечания */}
                <div className="mb-10 p-4 bg-secondary/30 rounded-xl border border-border text-sm text-foreground/70 space-y-2">
                  <p><strong>*</strong> Схемы сертификации даны в соответствии с Приложением №1 ДП-02.09, а также ГОСТ Р 53603-2020. Приведенный состав работ является типовым.</p>
                  <p><strong>**</strong> Устанавливается согласно положениям Приложения Б Постановления Госстандарта России от 23.08.1999 №44.</p>
                  <p><strong>***</strong> Проводится ОСП, если это предусмотрено схемой сертификации.</p>
                </div>

                {/* Примерная стоимость */}
                <div className="p-6 bg-accent/10 rounded-xl border border-accent/30">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Примерная стоимость работ</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-4 bg-background/50 rounded-lg text-center">
                      <p className="text-foreground/60 text-sm mb-2">Сертификация</p>
                      <p className="text-3xl font-bold text-accent">от 50 000 ₽</p>
                    </div>
                    <div className="p-4 bg-background/50 rounded-lg text-center">
                      <p className="text-foreground/60 text-sm mb-2">Инспекционный контроль</p>
                      <p className="text-3xl font-bold text-accent">от 50 000 ₽</p>
                    </div>
                  </div>
                  <p className="text-foreground/70 text-sm mb-6">
                    Не включая стоимость внесения сведений в реестр Росаккредитации (оплачивается заявителем и ОСП дополнительно, согласно положениям приказа Минэкономразвития России от 14.11.2024 №714).
                  </p>
                  
                  <h4 className="font-semibold text-foreground mb-3">Как узнать точную стоимость?</h4>
                  <p className="text-foreground/80 text-sm mb-4">
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
