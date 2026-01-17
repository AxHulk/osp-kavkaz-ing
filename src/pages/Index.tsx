import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CertificationSection from "@/components/CertificationSection";
import ApplicantsSection from "@/components/ApplicantsSection";
import AccreditationSection from "@/components/AccreditationSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CertificationSection />
        <ApplicantsSection />
        <AccreditationSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
