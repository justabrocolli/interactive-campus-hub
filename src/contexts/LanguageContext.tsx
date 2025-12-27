import { createContext, useContext, useState, ReactNode } from "react";

type Language = "he" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  dir: "rtl";
}

const translations: Record<Language, Record<string, string>> = {
  he: {
    // Navbar
    "nav.home": "ראשי",
    "nav.about": "אודות",
    "nav.courses": "קורסים",
    "nav.features": "יתרונות",
    "nav.contact": "צור קשר",
    "nav.import": "מחלקת יבוא",
    "nav.consult": "ייעוץ לימודים",
    "nav.brand": "מכללת עופרים",
    "nav.slogan": "להיכנס למגרש הגדולים",

    // Hero
    "hero.badge": "המכללה המובילה בישראל ליבוא ויצוא",
    "hero.title1": "מכללת עופרים",
    "hero.title2": "יבוא ויצוא סחורה",
    "hero.title3": "וסחר בינלאומי",
    "hero.desc": "קורס מאתגר ויישומי המציע לכם לרכוש כלים מעשיים וידע בכל הקשור ליבוא, יצוא סחורה וסחר בינלאומי, אשר ייצור עבורכם הזדמנויות לתעסוקה בחברות רבות.",
    "hero.cta": "פרטים על הקורס",
    "hero.video": "צפה בסרטון",
    "hero.graduates": "בוגרים",
    "hero.experience": "שנות ניסיון",
    "hero.partners": "חברות שותפות",
    "hero.globe": "סחר בינלאומי",
    "hero.globeSub": "העולם בידיים שלך",

    // About
    "about.badge": "מי אנחנו",
    "about.title": "המכללה המובילה לסחר בינלאומי",
    "about.desc": "עופרים מכללה לייבוא, יצוא וסחר בינלאומי, היא מהמובילות בתחום כבר למעלה מ-25 שנה. עם ניסיון עשיר, ידע מעמיק וקשרים גלובליים ענפים, אנו מעניקים לסטודנטים שלנו את הכלים והמיומנויות הנדרשים להצלחה.",
    "about.years": "שנות פעילות",
    "about.graduatesLabel": "בוגרים",
    "about.partnersLabel": "חברות שותפות",
    "about.satisfaction": "שביעות רצון",
    "about.expTitle": "ניסיון",
    "about.expDesc": "עם ניסיון מעל לשתי עשורים, המכללה שלנו חוותה את כל מה שניתן לחוות בענף ובאה להעביר לכם את הדרכים ושיטות סחר הנכונות.",
    "about.supportTitle": "ליווי אישי",
    "about.supportDesc": "כל התלמידים אצלינו עוברים ליווי צמוד לאורך הדרך, המדריכים שלנו ידריכו אותכם ויתלוו אליכם בשיעורים העיוניים ובחו״ל.",
    "about.resultsTitle": "תוצאות",
    "about.resultsDesc": "בוגרי המכללה מצליחים בשוק העבודה ובעסקים שלהם, עם ידע מעשי ומקצועי שמאפשר להם להתחיל לעבוד מיד.",
    "about.trustTitle": "אמינות",
    "about.trustDesc": "המכללה פועלת בשקיפות מלאה ומתחייבת לאיכות הוראה גבוהה ולתמיכה מתמשכת בסטודנטים.",

    // Courses
    "courses.badge": "הקורסים שלנו",
    "courses.title": "מסלולי לימוד מגוונים",
    "courses.desc": "בחרו את המסלול המתאים לכם והתחילו את הדרך לקריירה מצליחה בסחר בינלאומי",
    "courses.more": "למידע נוסף",
    "courses.viewAll": "צפה בכל הקורסים",
    "courses.months": "חודשים",
    "courses.hybrid": "היברידי",
    "courses.frontal": "פרונטלי",
    "courses.online": "אונליין",
    "course.import": "יבוא ויצוא סחורה",
    "course.importDesc": "לימוד מקיף על תהליכי יבוא ויצוא, כולל מכס, לוגיסטיקה ותיעוד בינלאומי.",
    "course.trade": "סחר בינלאומי",
    "course.tradeDesc": "הבנת השוק הגלובלי, משא ומתן בינלאומי והתאמה תרבותית לשווקים שונים.",
    "course.logistics": "לוגיסטיקה בינלאומית",
    "course.logisticsDesc": "ניהול שרשרת אספקה גלובלית, שילוח ימי ואווירי, ואחסנה בינלאומית.",
    "course.product": "ניהול מוצר",
    "course.productDesc": "פיתוח מוצרים לשוק הבינלאומי, איכות ותקינה, אריזה ומיתוג.",
    "course.customs": "מכס ורגולציה",
    "course.customsDesc": "הכרת תקנות מכס, הסכמי סחר בינלאומיים ופטורים ממכסים.",
    "course.advanced": "קורס מתקדם",
    "course.advancedDesc": "תוכנית מקיפה לבעלי ניסיון הכוללת התמחות בשווקים ספציפיים.",

    // Features
    "features.badge": "למה לבחור בנו",
    "features.title1": "היתרונות של",
    "features.title2": "מכללת עופרים",
    "features.desc": "אנחנו מאמינים שלימודים הם יותר מסתם תיאוריה. במכללת עופרים תקבלו הכשרה מעשית, קשרים אמיתיים בתעשייה, וכל הכלים להצליח בעולם הסחר הבינלאומי.",
    "features.1": "הכשרה מקצועית ברמה הגבוהה ביותר",
    "features.2": "מרצים בכירים מהתעשייה",
    "features.3": "ליווי אישי לאורך כל הדרך",
    "features.4": "קשרים עסקיים עם חברות מובילות",
    "features.5": "סדנאות מעשיות בחו״ל",
    "features.6": "תעודה מוכרת בינלאומית",
    "features.7": "השמה בחברות מובילות",
    "features.8": "רשת בוגרים ענפה",
    "features.yearsExp": "שנות ניסיון",
    "features.yearsExpSub": "בהכשרת אנשי מקצוע מובילים",
    "features.global": "קשרים גלובליים",
    "features.globalSub": "מעל 30 מדינות",
    "features.grads": "בוגרים מצליחים",
    "features.gradsSub": "מעל 10,000",

    // Contact
    "contact.badge": "צור קשר",
    "contact.title1": "מוכנים להתחיל?",
    "contact.title2": "דברו איתנו",
    "contact.desc": "השאירו פרטים ונציג מטעמנו יחזור אליכם בהקדם לייעוץ אישי ללא עלות וללא התחייבות.",
    "contact.phone": "טלפון",
    "contact.email": "אימייל",
    "contact.address": "כתובת",
    "contact.addressValue": "רחוב הברזל 30, תל אביב",
    "contact.formTitle": "השאירו פרטים",
    "contact.name": "שם מלא",
    "contact.namePlaceholder": "הזינו את שמכם",
    "contact.phonePlaceholder": "050-0000000",
    "contact.emailPlaceholder": "your@email.com",
    "contact.message": "הודעה",
    "contact.messagePlaceholder": "ספרו לנו על עצמכם ומה מעניין אתכם...",
    "contact.submit": "שלחו פנייה",
    "contact.success": "הפנייה נשלחה בהצלחה!",
    "contact.successDesc": "נחזור אליך בהקדם האפשרי.",

    // Footer
    "footer.desc": "המכללה המובילה בישראל ליבוא, יצוא וסחר בינלאומי. מעל 25 שנות ניסיון בהכשרת אנשי מקצוע מובילים.",
    "footer.courses": "קורסים",
    "footer.info": "מידע",
    "footer.grads": "בוגרים",
    "footer.faq": "שאלות נפוצות",
    "footer.blog": "בלוג",
    "footer.rights": "כל הזכויות שמורות.",
    "footer.terms": "תנאי שימוש",
    "footer.privacy": "מדיניות פרטיות",
    "footer.accessibility": "נגישות",
  },
  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.courses": "الدورات",
    "nav.features": "المزايا",
    "nav.contact": "اتصل بنا",
    "nav.import": "قسم الاستيراد",
    "nav.consult": "استشارة دراسية",
    "nav.brand": "كلية عوفاريم",
    "nav.slogan": "ادخل إلى عالم الكبار",

    // Hero
    "hero.badge": "الكلية الرائدة في إسرائيل للاستيراد والتصدير",
    "hero.title1": "كلية عوفاريم",
    "hero.title2": "استيراد وتصدير البضائع",
    "hero.title3": "والتجارة الدولية",
    "hero.desc": "دورة تحدي وعملية تقدم لكم اكتساب أدوات عملية ومعرفة في كل ما يتعلق بالاستيراد والتصدير والتجارة الدولية، مما سيخلق لكم فرص عمل في شركات عديدة.",
    "hero.cta": "تفاصيل الدورة",
    "hero.video": "شاهد الفيديو",
    "hero.graduates": "خريجون",
    "hero.experience": "سنوات خبرة",
    "hero.partners": "شركات شريكة",
    "hero.globe": "التجارة الدولية",
    "hero.globeSub": "العالم بين يديك",

    // About
    "about.badge": "من نحن",
    "about.title": "الكلية الرائدة في التجارة الدولية",
    "about.desc": "كلية عوفاريم للاستيراد والتصدير والتجارة الدولية، من الرائدات في المجال منذ أكثر من 25 عامًا. مع خبرة غنية ومعرفة عميقة وعلاقات عالمية واسعة، نمنح طلابنا الأدوات والمهارات اللازمة للنجاح.",
    "about.years": "سنوات نشاط",
    "about.graduatesLabel": "خريجون",
    "about.partnersLabel": "شركات شريكة",
    "about.satisfaction": "رضا العملاء",
    "about.expTitle": "الخبرة",
    "about.expDesc": "مع خبرة تزيد عن عقدين، شهدت كليتنا كل ما يمكن تجربته في الصناعة وجاءت لتنقل لكم الطرق والأساليب التجارية الصحيحة.",
    "about.supportTitle": "دعم شخصي",
    "about.supportDesc": "جميع الطلاب لدينا يحصلون على مرافقة مستمرة طوال الرحلة، مدربونا سيرشدونكم ويرافقونكم في الدروس النظرية وفي الخارج.",
    "about.resultsTitle": "النتائج",
    "about.resultsDesc": "خريجو الكلية ينجحون في سوق العمل وفي أعمالهم، مع معرفة عملية ومهنية تمكنهم من البدء في العمل فورًا.",
    "about.trustTitle": "الموثوقية",
    "about.trustDesc": "تعمل الكلية بشفافية كاملة وتلتزم بجودة تعليم عالية ودعم مستمر للطلاب.",

    // Courses
    "courses.badge": "دوراتنا",
    "courses.title": "مسارات تعليمية متنوعة",
    "courses.desc": "اختاروا المسار المناسب لكم وابدأوا الطريق نحو مهنة ناجحة في التجارة الدولية",
    "courses.more": "لمزيد من المعلومات",
    "courses.viewAll": "عرض جميع الدورات",
    "courses.months": "أشهر",
    "courses.hybrid": "هجين",
    "courses.frontal": "حضوري",
    "courses.online": "عبر الإنترنت",
    "course.import": "استيراد وتصدير البضائع",
    "course.importDesc": "تعليم شامل عن عمليات الاستيراد والتصدير، بما في ذلك الجمارك واللوجستيات والتوثيق الدولي.",
    "course.trade": "التجارة الدولية",
    "course.tradeDesc": "فهم السوق العالمي، المفاوضات الدولية والتكيف الثقافي مع الأسواق المختلفة.",
    "course.logistics": "اللوجستيات الدولية",
    "course.logisticsDesc": "إدارة سلسلة التوريد العالمية، الشحن البحري والجوي، والتخزين الدولي.",
    "course.product": "إدارة المنتجات",
    "course.productDesc": "تطوير منتجات للسوق الدولي، الجودة والمعايير، التعبئة والعلامة التجارية.",
    "course.customs": "الجمارك والتنظيم",
    "course.customsDesc": "التعرف على قواعد الجمارك، اتفاقيات التجارة الدولية والإعفاءات الجمركية.",
    "course.advanced": "دورة متقدمة",
    "course.advancedDesc": "برنامج شامل لذوي الخبرة يشمل التخصص في أسواق محددة.",

    // Features
    "features.badge": "لماذا تختارنا",
    "features.title1": "مزايا",
    "features.title2": "كلية عوفاريم",
    "features.desc": "نؤمن بأن التعليم أكثر من مجرد نظرية. في كلية عوفاريم ستحصلون على تدريب عملي، علاقات حقيقية في الصناعة، وجميع الأدوات للنجاح في عالم التجارة الدولية.",
    "features.1": "تدريب مهني على أعلى مستوى",
    "features.2": "محاضرون كبار من الصناعة",
    "features.3": "دعم شخصي طوال الرحلة",
    "features.4": "علاقات تجارية مع شركات رائدة",
    "features.5": "ورش عمل عملية في الخارج",
    "features.6": "شهادة معترف بها دوليًا",
    "features.7": "توظيف في شركات رائدة",
    "features.8": "شبكة خريجين واسعة",
    "features.yearsExp": "سنوات خبرة",
    "features.yearsExpSub": "في تدريب المهنيين الرائدين",
    "features.global": "علاقات عالمية",
    "features.globalSub": "أكثر من 30 دولة",
    "features.grads": "خريجون ناجحون",
    "features.gradsSub": "أكثر من 10,000",

    // Contact
    "contact.badge": "اتصل بنا",
    "contact.title1": "مستعدون للبدء؟",
    "contact.title2": "تحدثوا معنا",
    "contact.desc": "اتركوا تفاصيلكم وسيعود إليكم ممثل من طرفنا قريبًا لاستشارة شخصية مجانية وبدون التزام.",
    "contact.phone": "هاتف",
    "contact.email": "بريد إلكتروني",
    "contact.address": "عنوان",
    "contact.addressValue": "شارع هبرزل 30، تل أبيب",
    "contact.formTitle": "اتركوا تفاصيلكم",
    "contact.name": "الاسم الكامل",
    "contact.namePlaceholder": "أدخل اسمك",
    "contact.phonePlaceholder": "050-0000000",
    "contact.emailPlaceholder": "your@email.com",
    "contact.message": "رسالة",
    "contact.messagePlaceholder": "أخبرونا عن أنفسكم وما يهمكم...",
    "contact.submit": "إرسال",
    "contact.success": "تم إرسال الطلب بنجاح!",
    "contact.successDesc": "سنعود إليك في أقرب وقت ممكن.",

    // Footer
    "footer.desc": "الكلية الرائدة في إسرائيل للاستيراد والتصدير والتجارة الدولية. أكثر من 25 عامًا من الخبرة في تدريب المهنيين الرائدين.",
    "footer.courses": "الدورات",
    "footer.info": "معلومات",
    "footer.grads": "الخريجون",
    "footer.faq": "أسئلة شائعة",
    "footer.blog": "مدونة",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.terms": "شروط الاستخدام",
    "footer.privacy": "سياسة الخصوصية",
    "footer.accessibility": "إمكانية الوصول",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("he");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "he" ? "ar" : "he"));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, dir: "rtl" }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};