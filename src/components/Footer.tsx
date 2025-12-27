import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import ofarimLogo from "@/assets/ofarim-logo.jpg";

const footerLinks = [
  {
    title: "קורסים",
    links: [
      { label: "יבוא ויצוא", href: "#" },
      { label: "סחר בינלאומי", href: "#" },
      { label: "לוגיסטיקה", href: "#" },
      { label: "ניהול מוצר", href: "#" },
    ],
  },
  {
    title: "מידע",
    links: [
      { label: "אודות", href: "#about" },
      { label: "בוגרים", href: "#" },
      { label: "שאלות נפוצות", href: "#" },
      { label: "בלוג", href: "#" },
    ],
  },
  {
    title: "צור קשר",
    links: [
      { label: "טלפון: 03-1234567", href: "tel:03-1234567" },
      { label: "info@ofarimacademy.com", href: "mailto:info@ofarimacademy.com" },
      { label: "רחוב הברזל 30, תל אביב", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-4">
              <img src={ofarimLogo} alt="מכללת עופרים" className="w-12 h-12 rounded-xl object-contain" />
              <div>
                <div className="font-bold text-xl">מכללת עופרים</div>
                <div className="text-sm opacity-70">להיכנס למגרש הגדולים</div>
              </div>
            </a>
            <p className="text-background/70 mb-6 leading-relaxed">
              המכללה המובילה בישראל ליבוא, יצוא וסחר בינלאומי. מעל 25 שנות ניסיון בהכשרת אנשי מקצוע מובילים.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-bold text-lg mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-secondary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} מכללת עופרים. כל הזכויות שמורות.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-secondary transition-colors">תנאי שימוש</a>
            <a href="#" className="hover:text-secondary transition-colors">מדיניות פרטיות</a>
            <a href="#" className="hover:text-secondary transition-colors">נגישות</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;