import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="gradient-hero py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Company */}
          <div>
            <img src={logo} alt="Кавказ Инжиниринг" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 text-sm">
              Орган по сертификации пассажирских подвесных канатных дорог
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">
              Навигация
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  О компании
                </a>
              </li>
              <li>
                <a href="#applicants" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Информация для заявителей
                </a>
              </li>
              <li>
                <a href="#accreditation" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Аккредитация
                </a>
              </li>
              <li>
                <a href="#contacts" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">
              Документы
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Пользовательское соглашение
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} ООО «Кавказ Инжиниринг». Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
