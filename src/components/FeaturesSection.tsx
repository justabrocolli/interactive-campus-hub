import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const features = [
    t("features.1"),
    t("features.2"),
    t("features.3"),
    t("features.4"),
    t("features.5"),
    t("features.6"),
    t("features.7"),
    t("features.8"),
  ];

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
              {t("features.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t("features.title1")}
              <br />
              <span className="text-gradient">{t("features.title2")}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t("features.desc")}
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
                  <div className="text-xl font-medium opacity-90">{t("features.yearsExp")}</div>
                  <div className="text-sm opacity-70 mt-2">{t("features.yearsExpSub")}</div>
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
                    <div className="font-bold text-foreground">{t("features.global")}</div>
                    <div className="text-sm text-muted-foreground">{t("features.globalSub")}</div>
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
                    <div className="font-bold text-foreground">{t("features.grads")}</div>
                    <div className="text-sm text-muted-foreground">{t("features.gradsSub")}</div>
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