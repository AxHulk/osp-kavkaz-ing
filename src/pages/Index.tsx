import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutOspSection from "@/components/AboutOspSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import CertificationSection from "@/components/CertificationSection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutOspSection />
        <ExpertiseSection />
        <CertificationSection />
        <ProcessSection />
        <WhyUsSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
