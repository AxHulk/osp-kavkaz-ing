import { MapPin, Phone, Mail, Send } from "lucide-react";
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
    <section id="contacts" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="section-title mb-4">
            Готовы начать сертификацию?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Свяжитесь с нами — наши специалисты ответят на все ваши вопросы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-card rounded-xl p-6 md:p-8 border border-border order-2 lg:order-1">
            <h3 className="font-heading font-semibold text-foreground text-xl mb-6">
              Свяжитесь с нами
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Ваш вопрос"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={8}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>
              <Button type="submit" className="w-full btn-primary h-12 text-base">
                <Send className="w-4 h-4 mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Contact details */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-heading font-semibold text-foreground text-lg mb-4">
                Контактная информация
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+79187846121"
                  className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <p className="font-medium">+7 (918) 784-61-21</p>
                  </div>
                </a>
                <a
                  href="mailto:osp@kavkaz-ing.ru"
                  className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">osp@kavkaz-ing.ru</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Addresses */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-heading font-semibold text-foreground text-lg mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
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

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-border h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.1234567890123!2d43.07!3d44.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDAyJzI0LjAiTiA0M8KwMDQnMTIuMCJF!5e0!3m2!1sru!2sru!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта - Пятигорск, ул. Ермолова д. 12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
