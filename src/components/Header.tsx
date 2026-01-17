import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "О компании", href: "#about" },
    { name: "Экспертиза", href: "#expertise" },
    { name: "Сертификация", href: "#certification" },
    { name: "Процесс", href: "#process" },
    { name: "Контакты", href: "#contacts" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
    }`}>
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src={logo} 
              alt="Кавказ Инжиниринг" 
              className={`h-10 md:h-12 w-auto transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-foreground font-medium transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Phone & Menu */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+79187846121" 
              className="hidden md:flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              +7 (918) 784-61-21
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-border pt-4 animate-fade-in bg-background/95 backdrop-blur-sm -mx-4 px-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-foreground font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:+79187846121" 
                className="flex items-center gap-2 text-accent font-medium"
              >
                <Phone className="w-4 h-4" />
                +7 (918) 784-61-21
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
