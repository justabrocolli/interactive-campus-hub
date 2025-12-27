import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language, t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{language === "he" ? "מכללת עופרים | יבוא ויצוא וסחר בינלאומי" : "كلية عوفاريم | استيراد وتصدير وتجارة دولية"}</title>
        <meta
          name="description"
          content={language === "he" 
            ? "מכללת עופרים - המכללה המובילה בישראל ליבוא, יצוא וסחר בינלאומי. למעלה מ-25 שנות ניסיון בהכשרת אנשי מקצוע מובילים בתחום."
            : "كلية عوفاريم - الكلية الرائدة في إسرائيل للاستيراد والتصدير والتجارة الدولية. أكثر من 25 عامًا من الخبرة."
          }
        />
        <meta name="keywords" content={language === "he" ? "יבוא, יצוא, סחר בינלאומי, קורסים, מכללה, עופרים" : "استيراد, تصدير, تجارة دولية, دورات, كلية, عوفاريم"} />
        <html lang={language} dir="rtl" />
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