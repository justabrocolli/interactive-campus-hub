import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Clock, UserCheck, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "ניסיון",
    description: "עם ניסיון מעל לשתי עשורים, המכללה שלנו חוותה את כל מה שניתן לחוות בענף ובאה להעביר לכם את הדרכים ושיטות סחר הנכונות.",
  },
  {
    icon: UserCheck,
    title: "ליווי אישי",
    description: "כל התלמידים אצלינו עוברים ליווי צמוד לאורך הדרך, המדריכים שלנו ידריכו אותכם ויתלוו אליכם בשיעורים העיוניים ובחו״ל.",
  },
  {
    icon: TrendingUp,
    title: "תוצאות",
    description: "בוגרי המכללה מצליחים בשוק העבודה ובעסקים שלהם, עם ידע מעשי ומקצועי שמאפשר להם להתחיל לעבוד מיד.",
  },
  {
    icon: Shield,
    title: "אמינות",
    description: "המכללה פועלת בשקיפות מלאה ומתחייבת לאיכות הוראה גבוהה ולתמיכה מתמשכת בסטודנטים.",
  },
];

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            מי אנחנו
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            המכללה המובילה לסחר בינלאומי
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            עופרים מכללה לייבוא, יצוא וסחר בינלאומי, היא מהמובילות בתחום כבר למעלה מ-25 שנה. עם ניסיון עשיר, ידע מעמיק וקשרים גלובליים ענפים, אנו מעניקים לסטודנטים שלנו את הכלים והמיומנויות הנדרשים להצלחה.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: 25, suffix: "+", label: "שנות פעילות" },
            { value: 10000, suffix: "+", label: "בוגרים" },
            { value: 100, suffix: "+", label: "חברות שותפות" },
            { value: 98, suffix: "%", label: "שביעות רצון" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card card-shadow hover:card-shadow-hover transition-shadow duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group p-6 rounded-2xl bg-card card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;