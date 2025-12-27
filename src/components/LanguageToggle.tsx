import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface LanguageToggleProps {
  isScrolled?: boolean;
}

const LanguageToggle = ({ isScrolled = false }: LanguageToggleProps) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
        isScrolled
          ? "bg-muted text-foreground hover:bg-muted/80"
          : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
      }`}
    >
      <span className={`transition-opacity ${language === "he" ? "opacity-100" : "opacity-50"}`}>
        עב
      </span>
      <span className="text-xs opacity-50">|</span>
      <span className={`transition-opacity ${language === "ar" ? "opacity-100" : "opacity-50"}`}>
        ع
      </span>
      
      {/* Active indicator */}
      <motion.div
        layoutId="lang-indicator"
        className={`absolute bottom-0 h-0.5 rounded-full ${
          isScrolled ? "bg-primary" : "bg-secondary"
        }`}
        initial={false}
        animate={{
          left: language === "he" ? "8px" : "auto",
          right: language === "ar" ? "8px" : "auto",
          width: "16px",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </motion.button>
  );
};

export default LanguageToggle;