import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, BookOpen, Ship, Building2, Plane, Package, FileText } from "lucide-react";
import { Button } from "./ui/button";

const courses = [
  {
    icon: Ship,
    title: "יבוא ויצוא סחורה",
    description: "לימוד מקיף על תהליכי יבוא ויצוא, כולל מכס, לוגיסטיקה ותיעוד בינלאומי.",
    duration: "6 חודשים",
    format: "היברידי",
    color: "from-primary to-primary/70",
  },
  {
    icon: Building2,
    title: "סחר בינלאומי",
    description: "הבנת השוק הגלובלי, משא ומתן בינלאומי והתאמה תרבותית לשווקים שונים.",
    duration: "4 חודשים",
    format: "פרונטלי",
    color: "from-secondary to-secondary/70",
  },
  {
    icon: Plane,
    title: "לוגיסטיקה בינלאומית",
    description: "ניהול שרשרת אספקה גלובלית, שילוח ימי ואווירי, ואחסנה בינלאומית.",
    duration: "3 חודשים",
    format: "אונליין",
    color: "from-primary to-secondary",
  },
  {
    icon: Package,
    title: "ניהול מוצר",
    description: "פיתוח מוצרים לשוק הבינלאומי, איכות ותקינה, אריזה ומיתוג.",
    duration: "4 חודשים",
    format: "היברידי",
    color: "from-secondary to-primary",
  },
  {
    icon: FileText,
    title: "מכס ורגולציה",
    description: "הכרת תקנות מכס, הסכמי סחר בינלאומיים ופטורים ממכסים.",
    duration: "2 חודשים",
    format: "אונליין",
    color: "from-primary/80 to-primary",
  },
  {
    icon: BookOpen,
    title: "קורס מתקדם",
    description: "תוכנית מקיפה לבעלי ניסיון הכוללת התמחות בשווקים ספציפיים.",
    duration: "8 חודשים",
    format: "פרונטלי",
    color: "from-secondary/80 to-secondary",
  },
];

const CoursesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            הקורסים שלנו
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            מסלולי לימוד מגוונים
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            בחרו את המסלול המתאים לכם והתחילו את הדרך לקריירה מצליחה בסחר בינלאומי
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-2xl bg-card card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 border border-border/50 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <course.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Meta */}
                <div className="flex gap-4 mb-4 text-sm">
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">
                    {course.duration}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">
                    {course.format}
                  </span>
                </div>

                {/* CTA */}
                <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-secondary group/btn">
                  למידע נוסף
                  <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="xl">
            צפה בכל הקורסים
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;