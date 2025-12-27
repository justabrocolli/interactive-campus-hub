import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

const features = [
  "הכשרה מקצועית ברמה הגבוהה ביותר",
  "מרצים בכירים מהתעשייה",
  "ליווי אישי לאורך כל הדרך",
  "קשרים עסקיים עם חברות מובילות",
  "סדנאות מעשיות בחו״ל",
  "תעודה מוכרת בינלאומית",
  "השמה בחברות מובילות",
  "רשת בוגרים ענפה",
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              למה לבחור בנו
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              היתרונות של
              <br />
              <span className="text-gradient">מכללת עופרים</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              אנחנו מאמינים שלימודים הם יותר מסתם תיאוריה. במכללת עופרים תקבלו הכשרה מעשית, קשרים אמיתיים בתעשייה, וכל הכלים להצליח בעולם הסחר הבינלאומי.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                    <CheckCircle2 className="w-4 h-4 text-secondary group-hover:text-secondary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 right-1/4 w-20 h-20 rounded-full bg-primary/20" />
                <div className="absolute bottom-1/4 left-0 w-16 h-16 rounded-full bg-secondary/20" />
                <div className="absolute top-1/3 left-1/4 w-12 h-12 rounded-full bg-primary/10" />
              </motion.div>

              {/* Main card */}
              <div className="absolute inset-8 rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 shadow-2xl">
                <div className="h-full flex flex-col justify-center text-primary-foreground text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                    className="text-7xl font-bold mb-4"
                  >
                    25+
                  </motion.div>
                  <div className="text-xl font-medium opacity-90">שנות ניסיון</div>
                  <div className="text-sm opacity-70 mt-2">בהכשרת אנשי מקצוע מובילים</div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-xl border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">קשרים גלובליים</div>
                    <div className="text-sm text-muted-foreground">מעל 30 מדינות</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-xl border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">בוגרים מצליחים</div>
                    <div className="text-sm text-muted-foreground">מעל 10,000</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;