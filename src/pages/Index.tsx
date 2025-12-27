import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>מכללת עופרים | יבוא ויצוא וסחר בינלאומי</title>
        <meta
          name="description"
          content="מכללת עופרים - המכללה המובילה בישראל ליבוא, יצוא וסחר בינלאומי. למעלה מ-25 שנות ניסיון בהכשרת אנשי מקצוע מובילים בתחום."
        />
        <meta name="keywords" content="יבוא, יצוא, סחר בינלאומי, קורסים, מכללה, עופרים" />
        <html lang="he" dir="rtl" />
      </Helmet>
      
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <CoursesSection />
          <FeaturesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;