import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { Lang } from '../types';
import { TRANSLATIONS } from '../data';

interface FooterProps {
  lang: Lang;
  onNavigate: (sectionId: string) => void;
  onDonateClick: () => void;
}

// lucide-react dropped all brand/logo icons (Facebook, Instagram, X/Twitter,
// YouTube) in newer releases for trademark reasons, so these three are small
// inline SVG marks instead of a lucide import — keeps the build from breaking
// if/when the package updates further.
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.6-6.8L4.1 22H1l8.1-9.3L1 2h7.3l5 6.2L18.9 2Zm-1.2 18h1.7L7 4h-1.8l12.5 16Z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.48 17.52 2 12 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://www.instagram.com/svsp.belagavi/', Icon: InstagramIcon },
  { name: 'X', url: 'https://x.com/svspbelagavi', Icon: XIcon },
  { name: 'Facebook', url: 'https://www.facebook.com/SVSPBELGAUM/', Icon: FacebookIcon }
];

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' }
};

export default function Footer({ lang, onNavigate, onDonateClick }: FooterProps) {
  const t = (key: string) => TRANSLATIONS[key]?.[lang] || key;

  const quickLinks = [
    { id: 'hero', key: 'nav_home' },
    { id: 'mission', key: 'nav_about' },
    { id: 'causes', key: 'nav_projects' },
    { id: 'news', key: 'nav_news' },
    { id: 'events', key: 'nav_publications' }
  ];

  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-slate-950 dark:bg-slate-950/75 text-gray-400 py-16 sm:py-24 border-t border-slate-900/60 dark:border-slate-900/30"
    >
      {/* Soft ambient glow, purely decorative — matches the brand's warm-glow
          utility used elsewhere, kept subtle so it doesn't compete with text */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-amber-500/[0.05] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Col 1: Brand description & slogan */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 space-y-6"
          >
            <button
              onClick={() => onNavigate('hero')}
              className="flex items-center gap-3 group cursor-pointer text-left focus:outline-none"
              id="footer-brand"
            >
              <img
                src={`${import.meta.env.BASE_URL}logo.png?v=3`}
                alt="Swami Vivekanand Seva Pratishthan Logo"
                className="h-[56px] w-[56px] object-contain flex-shrink-0 pointer-events-none select-none"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col text-left justify-center">
                <strong className="tracking-tight uppercase leading-[1.15] text-[15px] font-extrabold font-sans text-white group-hover:text-amber-100 transition-colors duration-200">
                  Swami Vivekanand Seva Pratishthan
                </strong>
                <span className="text-[10px] font-sans font-medium text-[#f4b223] group-hover:text-amber-300 mt-0.5 transition-colors duration-200">
                  Building a Future Filled with Hope and Possibilities
                </span>
              </div>
            </button>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans font-medium">
              {t('footer_about_text')}
            </p>

            <div className="p-3.5 bg-white/5 rounded-2xl border border-white/5 flex gap-2.5 items-center max-w-sm">
              <span className="text-amber-500">
                <ShieldCheck size={18} />
              </span>
              <p className="text-[10px] text-gray-400 leading-snug font-sans">
                {lang === 'EN'
                  ? 'Registered Trust in Belagavi, Karnataka. Donations are tax-deductible up to 50% under the Indian Income Tax Act 80G Scheme.'
                  : lang === 'HI'
                  ? 'बेलगावी, कर्नाटक में पंजीकृत ट्रस्ट। आपका सभी दान भारतीय आयकर अधिनियम की धारा 80G के तहत कर-कटौती योग्य है।'
                  : 'ಬೆಳಗಾವಿಯ ನೊಂದಾಯಿತ ಸಂಸ್ಥೆ. ಈ ಸಂಸ್ಥೆಗೆ ನೀಡುವ ದೇಣಿಗೆಗಳಿಗೆ ಆದಾಯ ತೆರಿಗೆ ಕಾಯ್ದೆ ಸೆಕ್ಷನ್ 80G ಅಡಿ ಶೇ. 50 ವಿನಾಯಿತಿ ಇದೆ.'}
              </p>
            </div>
          </motion.div>

          {/* Col 2: Quick navigation — links + social icons, per request */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3 space-y-4"
          >
            <h4 className="text-xs font-mono font-black tracking-widest text-white uppercase">
              {t('footer_quick_links')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <motion.li key={link.id} whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-amber-500 transition-colors duration-150 cursor-pointer text-left"
                  >
                    {t(link.key)}
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* Social links */}
            <div className="pt-2 space-y-2.5">
              <h4 className="text-[10px] font-mono font-black tracking-widest text-white/50 uppercase">
                {lang === 'EN' ? 'Follow Us' : lang === 'HI' ? 'फॉलो करें' : 'ಫಾಲೋ ಮಾಡಿ'}
              </h4>
              <div className="flex gap-2.5">
                {SOCIAL_LINKS.map(({ name, url, Icon }) => (
                  <motion.a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`footer-social-${name.toLowerCase()}`}
                    aria-label={`${name === 'X' ? 'X (Twitter)' : name} — ${lang === 'EN' ? 'opens in a new tab' : ''}`}
                    className="p-2.5 bg-white/5 text-gray-400 rounded-xl border border-white/5"
                    whileHover={{
                      scale: 1.12,
                      rotate: [0, -6, 6, 0],
                      color: '#f4b223',
                      backgroundColor: 'rgba(244,178,35,0.12)',
                      borderColor: 'rgba(244,178,35,0.3)'
                    }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    <Icon width={15} height={15} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Col 3: Contact details */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 space-y-4"
          >
            <h4 className="text-xs font-mono font-black tracking-widest text-white uppercase">
              {t('footer_contact_info')}
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-snug">{t('footer_address')}</span>
              </li>
              <li className="flex flex-col gap-1.5 pl-6.5 -mt-1">
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-amber-500 shrink-0" />
                  <a href="tel:08312473919" className="hover:text-amber-500 transition-colors">0831 247 3919</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-amber-500 shrink-0" />
                  <a href="tel:+919606869122" className="hover:text-amber-500 transition-colors">+91 96068 69122</a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-amber-500 shrink-0" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=vivekanand.chikkumbimath@gmail.com&su=Inquiry%20Regarding%20SVSP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500 transition-colors"
                >
                  vivekanand.chikkumbimath@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Separator block & legal copyright rights */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs"
        >
          <div className="text-center sm:text-left space-y-1 text-gray-500">
            <p>© 1982 Swami Vivekanand Seva Pratishthan. {t('footer_rights')}</p>
            <p>
              {lang === 'EN'
                ? 'Registered Public Trust under Bombay Public Trust Act. All rights reserved.'
                : lang === 'HI'
                ? 'बॉम्बे पब्लिक ट्रस्ट एक्ट के तहत पंजीकृत। सर्वाधिकार सुरक्षित।'
                : 'ಬಾಂಬೆ ಸಾರ್ವಜನಿಕ ಟ್ರಸ್ಟ್ ಕಾಯ್ದೆಯಡಿ ನೊಂದಾಯಿತ ಸಂಸ್ಥೆ.'}
            </p>
          </div>

          <div className="flex gap-4 text-gray-500">
            <a href="#" className="hover:text-white transition-colors">80G Scheme</a>
            <a
              href="https://www.google.com/maps/place/Swami+Vivekanand+Seva+Pratishthan/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Google Maps
            </a>
            <a href="#causes" className="hover:text-white transition-colors">Our Objectives</a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
