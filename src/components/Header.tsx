import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash navigation after page load
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const navLinks = [
    { name: "О компании", href: "/about", isPage: true },
    { name: "Экспертиза", href: "/#expertise", isPage: false },
    { name: "Сертификация", href: "/#certification", isPage: false },
    { name: "Процесс", href: "/#process", isPage: false },
    { name: "Контакты", href: "/#contacts", isPage: false },
  ];

  const handleNavClick = (href: string, isPage: boolean) => {
    setMobileMenuOpen(false);
    if (isPage) {
      navigate(href);
    } else {
      // Handle hash links
      if (location.pathname === '/') {
        // Already on home page, just scroll
        const hash = href.replace('/', '');
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home page with hash
        navigate(href);
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
    }`}>
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Кавказ Инжиниринг" 
              className={`h-10 md:h-12 w-auto transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.isPage)}
                className="text-foreground/80 hover:text-foreground font-medium transition-colors text-sm"
              >
                {link.name}
              </button>
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
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href, link.isPage)}
                  className="text-foreground/80 hover:text-foreground font-medium transition-colors text-left"
                >
                  {link.name}
                </button>
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
