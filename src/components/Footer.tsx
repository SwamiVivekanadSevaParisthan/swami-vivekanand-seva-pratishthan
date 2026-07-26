import { Globe, Mail, Phone, MapPin, Heart, ShieldCheck, HelpCircle } from 'lucide-react';
import { Lang } from '../types';
import { TRANSLATIONS } from '../data';

interface FooterProps {
  lang: Lang;
  onNavigate: (sectionId: string) => void;
  onDonateClick: () => void;
}

export default function Footer({ lang, onNavigate, onDonateClick }: FooterProps) {
  const t = (key: string) => TRANSLATIONS[key]?.[lang] || key;

  return (
    <footer
      id="footer"
      className="bg-slate-950 dark:bg-slate-950/75 text-gray-400 py-16 sm:py-24 border-t border-slate-900/60 dark:border-slate-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Main Columns Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Col 1: Brand description & slogan */}
          <div className="md:col-span-5 space-y-6">
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
          </div>

          {/* Col 2: Quick navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-black tracking-widest text-white uppercase">
              {t('footer_quick_links')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { id: 'hero', key: 'nav_home' },
                { id: 'mission', key: 'nav_about' },
                { id: 'causes', key: 'nav_projects' },
                { id: 'news', key: 'nav_news' },
                { id: 'events', key: 'nav_publications' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-amber-500 transition-all duration-150 cursor-pointer text-left"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact details */}
          <div className="md:col-span-4 space-y-4">
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
                  <a href="tel:08312473919" className="hover:text-amber-500 transition">0831 247 3919</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-amber-500 shrink-0" />
                  <a href="tel:+919606869122" className="hover:text-amber-500 transition">+91 96068 69122</a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-amber-500 shrink-0" />
                <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=vivekanand.chikkumbimath@gmail.com&su=Inquiry%20Regarding%20SVSP"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-amber-500 transition"
>
  vivekanand.chikkumbimath@gmail.com
</a>    
              </li>
            </ul>

            {/* Micro Social icons row */}
            <div className="flex gap-3 pt-3">
              {[
                { name: 'youtube', url: 'https://youtube.com' },
                { name: 'facebook', url: 'https://facebook.com' },
                { name: 'maps', url: 'https://www.google.com/maps/place/Swami+Vivekanand+Seva+Pratishthan/' }
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noreferrer"
                  id={`footer-social-${platform.name}`}
                  className="p-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition-colors border border-white/5"
                  aria-label={`Connect on ${platform.name}`}
                >
                  <Globe size={14} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Separator block & legal copyright rights */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs">
          
          <div className="text-center sm:text-left space-y-1 text-gray-500">
            <p>© 1982 Swami Vivekanand Seva Pratishthan. {t('footer_rights')}</p>
            <p>{lang === 'EN' ? 'Registered Public Trust under Bombay Public Trust Act. All rights reserved.' : lang === 'HI' ? 'बॉम्बे पब्लिक ट्रस्ट एक्ट के तहत पंजीकृत। सर्वाधिकार सुरक्षित।' : 'ಬಾಂಬೆ ಸಾರ್ವಜನಿಕ ಟ್ರಸ್ಟ್ ಕಾಯ್ದೆಯಡಿ ನೊಂದಾಯಿತ ಸಂಸ್ಥೆ.'}</p>
          </div>

          <div className="flex gap-4 text-gray-500">
            <a href="#" className="hover:text-white transition">80G Scheme</a>
            <a href="https://www.google.com/maps/place/Swami+Vivekanand+Seva+Pratishthan/" target="_blank" rel="noreferrer" className="hover:text-white transition">Google Maps</a>
            <a href="#causes" className="hover:text-white transition">Our Objectives</a>
          </div>

        </div>

      </div>
    </footer>
  );
}
