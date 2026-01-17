import { MapPin, Phone, Mail, User, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactsSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contacts" className="py-16 md:py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Контакты
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Addresses */}
            <div className="bg-card rounded-xl p-6 shadow-card border border-border">
              <h3 className="font-heading font-semibold text-foreground text-lg mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Адреса
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Юридический адрес:</p>
                  <p className="text-foreground">
                    Российская Федерация, Ставропольский край, г. Пятигорск, ул. Ермолова д. 12, стр. 3
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Фактический адрес:</p>
                  <p className="text-foreground">Трямляндия 1</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-card rounded-xl p-6 shadow-card border border-border">
              <h3 className="font-heading font-semibold text-foreground text-lg mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Связь с нами
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+79187846121"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  +7 (918) 784-61-21
                </a>
                <a
                  href="mailto:osp@kavkaz-ing.ru"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  osp@kavkaz-ing.ru
                </a>
              </div>
            </div>

            {/* Leadership */}
            <div className="bg-card rounded-xl p-6 shadow-card border border-border">
              <h3 className="font-heading font-semibold text-foreground text-lg mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Руководство
              </h3>
              <div className="space-y-2">
                <p className="text-foreground">Генеральный директор</p>
                <p className="text-muted-foreground text-sm">
                  Информация о руководителях предоставляется по запросу
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-card border border-border">
            <h3 className="font-heading font-semibold text-foreground text-xl mb-6">
              Форма обратной связи
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Ваше сообщение"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>
              <Button type="submit" className="w-full gradient-hero hover:opacity-90 transition-opacity">
                <Send className="w-4 h-4 mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 rounded-xl overflow-hidden shadow-card border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.1234567890123!2d43.07!3d44.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDAyJzI0LjAiTiA0M8KwMDQnMTIuMCJF!5e0!3m2!1sru!2sru!4v1234567890123"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта - Пятигорск, ул. Ермолова д. 12"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
