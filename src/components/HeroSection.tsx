import { motion } from "framer-motion";
import { ArrowLeft, Play, Users, Award, Globe } from "lucide-react";
import { Button } from "./ui/button";
import WaveBackground from "./WaveBackground";

const stats = [
  { icon: Users, value: "10,000+", label: "בוגרים" },
  { icon: Award, value: "25+", label: "שנות ניסיון" },
  { icon: Globe, value: "100+", label: "חברות שותפות" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <WaveBackground />
      
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-right"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6"
            >
              המכללה המובילה בישראל ליבוא ויצוא
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
            >
              מכללת עופרים
              <br />
              <span className="text-secondary">יבוא ויצוא סחורה</span>
              <br />
              וסחר בינלאומי
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-primary-foreground/80 mb-8 max-w-lg leading-relaxed"
            >
              קורס מאתגר ויישומי המציע לכם לרכוש כלים מעשיים וידע בכל הקשור ליבוא, יצוא סחורה וסחר בינלאומי, אשר ייצור עבורכם הזדמנויות לתעסוקה בחברות רבות.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button variant="hero" size="xl">
                פרטים על הקורס
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                צפה בסרטון
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border-2 border-dashed border-secondary/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-16 border border-primary-foreground/10 rounded-full"
              />
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 backdrop-blur-sm flex items-center justify-center">
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-2xl">
                  <div className="text-center text-secondary-foreground">
                    <Globe className="w-16 h-16 mx-auto mb-4" />
                    <div className="text-2xl font-bold">סחר בינלאומי</div>
                    <div className="text-sm opacity-80">העולם בידיים שלך</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;