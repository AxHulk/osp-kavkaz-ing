import { Phone, Mail, MapPin, Clock, Send, Building2, CreditCard, Landmark } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Введите ваше имя").max(100, "Имя слишком длинное"),
  contact: z.string().trim().min(1, "Введите телефон или email").max(255, "Контакт слишком длинный"),
  message: z.string().trim().min(1, "Введите ваш вопрос").max(2000, "Сообщение слишком длинное"),
});

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      label: "Телефон",
      value: "+7 (495) 984-43-15",
      href: "tel:+74959844315",
    },
    {
      icon: Mail,
      label: "Электронная почта",
      value: "osp@kavkaz-ing.ru",
      href: "mailto:osp@kavkaz-ing.ru",
    },
    {
      icon: MapPin,
      label: "Адрес места осуществления деятельности ОСП",
      value: "123112, РОССИЯ, г. Москва, вн.тер.г. муниципальный округ Пресненский, ул. Тестовская, д.10, оф.509",
    },
    {
      icon: Clock,
      label: "Время работы",
      value: "Пн – Пт, 10:00 – 19:00 (МСК)",
    },
  ];

  const leadership = [
    {
      role: "Генеральный директор ООО «КАВКАЗ-ИНЖИНИРИНГ»",
      name: "Аниканов Александр Сергеевич",
    },
    {
      role: "Руководитель ОСП ООО «КАВКАЗ-ИНЖИНИРИНГ»",
      name: "Гайманова Александра Александровна",
    },
  ];

  const requisites = {
    main: [
      { label: "Полное наименование", value: "Общество с ограниченной ответственностью «КАВКАЗ-ИНЖИНИРИНГ»" },
      { label: "Место нахождения (юридический адрес)", value: "357500, РОССИЯ, Ставропольский край, г. Пятигорск, ул. Ермолова, д.12, стр.3" },
      { label: "ИНН / КПП", value: "2632125791 / 263201001" },
      { label: "ОГРН", value: "1252600004249" },
    ],
    bank: [
      { label: "Расчетный счет", value: "40702810700000231507" },
      { label: "Банк", value: "БАНК ГПБ (АО) г. Москва" },
      { label: "БИК", value: "044525823" },
      { label: "Корр. счет", value: "30101810200000000823" },
    ],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    if (!agreed) {
      toast({
        title: "Ошибка",
        description: "Необходимо принять условия обработки персональных данных",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Запрос отправлен",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      setFormData({ name: "", contact: "", message: "" });
      setAgreed(false);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-heading">
            Контакты
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Мы всегда на связи, чтобы ответить на ваши вопросы и помочь в решении самых сложных задач в области сертификации.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-heading">
                Свяжитесь с нами
              </h2>
              
              {/* Leadership */}
              <div className="mb-8 p-5 bg-accent/10 rounded-xl border border-accent/20">
                <h3 className="text-foreground font-semibold mb-4">Руководство</h3>
                <div className="space-y-3">
                  {leadership.map((item, index) => (
                    <div key={index}>
                      <span className="text-foreground/60 text-sm">{item.role}</span>
                      <p className="text-foreground font-medium">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-5 bg-card/50 rounded-xl border border-border hover:border-accent/30 transition-colors"
                  >
                    <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <span className="text-foreground/60 text-sm">{item.label}</span>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="block text-foreground font-medium hover:text-accent transition-colors mt-1"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium mt-1">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-heading">
                Задать вопрос эксперту
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-card/50 border-border focus:border-accent h-12"
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Input
                    placeholder="Контактный телефон или E-mail"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="bg-card/50 border-border focus:border-accent h-12"
                  />
                  {errors.contact && <p className="text-destructive text-sm mt-1">{errors.contact}</p>}
                </div>
                <div>
                  <Textarea
                    placeholder="Ваш вопрос"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-card/50 border-border focus:border-accent min-h-[150px] resize-none"
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                </div>
                
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="agree"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    className="mt-1"
                  />
                  <label htmlFor="agree" className="text-sm text-foreground/60 cursor-pointer">
                    Нажимая кнопку, вы даете согласие на обработку персональных данных и принимаете условия{" "}
                    <Link to="/privacy" className="text-accent hover:underline">политики конфиденциальности</Link>
                    {" "}и{" "}
                    <Link to="/terms" className="text-accent hover:underline">пользовательского соглашения</Link>.
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Отправка..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Отправить запрос
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-heading text-center">
            Как нас найти
          </h2>
          <div className="rounded-xl overflow-hidden border border-border h-[400px] md:h-[500px]">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.532646%2C55.751801&z=17&pt=37.532646,55.751801,pm2rdm"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              title="Офис Кавказ Инжиниринг на карте - Москва, ул. Тестовская"
            />
          </div>
        </div>
      </section>

      {/* Requisites Section */}
      <section className="pb-20 md:pb-32">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-heading text-center">
            Реквизиты
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Company Info */}
            <div className="p-6 bg-card/50 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Building2 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground font-heading">Сведения об организации</h3>
              </div>
              <div className="space-y-4">
                {requisites.main.map((item, index) => (
                  <div key={index}>
                    <span className="text-foreground/60 text-sm">{item.label}</span>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bank Info */}
            <div className="p-6 bg-card/50 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Landmark className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground font-heading">Банковские реквизиты</h3>
              </div>
              <div className="space-y-4">
                {requisites.bank.map((item, index) => (
                  <div key={index}>
                    <span className="text-foreground/60 text-sm">{item.label}</span>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
