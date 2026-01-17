import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "О компании", href: "#about" },
    { name: "Орган по сертификации", href: "#certification" },
    { name: "Информация для заявителей", href: "#applicants" },
    { name: "Аккредитация", href: "#accreditation" },
    { name: "Контакты", href: "#contacts" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card shadow-card">
      {/* Top bar with phone */}
      <div className="gradient-hero">
        <div className="section-container py-2 flex justify-end items-center">
          <a 
            href="tel:+79187846121" 
            className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            +7 (918) 784-61-21
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="Кавказ Инжиниринг" className="h-12 md:h-16 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary font-medium transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground hover:text-primary font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
