import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company */}
          <div className="lg:col-span-1">
            <Link to="/">
              <img src={logo} alt="КАВКАЗ-ИНЖИНИРИНГ" className="h-10 w-auto mb-4 brightness-0 invert hover:opacity-80 transition-opacity" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Орган по сертификации пассажирских подвесных канатных дорог
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Навигация
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  О компании
                </a>
              </li>
              <li>
                <a href="/accreditation" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Аккредитация
                </a>
              </li>
              <li>
                <a href="/contacts" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Контакты
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+74959844315" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                  <Phone className="w-4 h-4 text-accent" />
                  8 (495) 984-43-15
                </a>
              </li>
              <li>
                <a href="mailto:osp@kavkaz-ing.ru" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                  <Mail className="w-4 h-4 text-accent" />
                  osp@kavkaz-ing.ru
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>123112, г. Москва,<br />ул. Тестовская, д. 10, ком 2517/1 (офис 509)</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Документы
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Пользовательское соглашение
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ООО «КАВКАЗ-ИНЖИНИРИНГ». Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
