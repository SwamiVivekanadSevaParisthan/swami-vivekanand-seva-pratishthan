import { motion } from 'motion/react';
import { Heart, Compass, ArrowDownCircle } from 'lucide-react';
import { Lang } from '../types';
import { TRANSLATIONS } from '../data';


interface HeroProps {
  lang: Lang;
  onDonateClick: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ lang, onDonateClick, onNavigate }: HeroProps) {
  const t = (key: string) => TRANSLATIONS[key]?.[lang] || key;

  const renderInteractiveText = (text: string) => {
    const words = text.split(' ');
    return (
      <span className="inline-block">
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-[0.25em] last:mr-0 cursor-default select-none transition-colors duration-150"
            style={{
              color: 'rgb(243, 244, 246)', // gray-100 / white
            }}
            whileHover={{
              color: '#fbbf24', // Amber/Yellow
              textShadow: '0 0 12px rgba(251, 191, 36, 0.5)',
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 12,
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 dark:bg-transparent text-white"
    >
      {/* PREMIUM RIGHT SIDE MOVING LINES */}
      <div className="premium-right-lines" id="hero-premium-lines">
        <svg
          className="premium-lines-svg"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
        >
          {/* TOP RIGHT LINE */}
          <path
            className="premium-line line-1"
            d="
            M1760,-120
            C1620,80 1640,260 1780,420
            C1920,580 1940,760 1820,900
            "
          />

          {/* CENTER RIGHT FLOW */}
          <path
            className="premium-line line-2"
            d="
            M1680,-120
            C1540,120 1560,340 1680,540
            C1800,740 1770,920 1910,1020
            "
          />

          {/* LOWER RIGHT CURVE */}
          <path
            className="premium-line line-3"
            d="
            M1620,880
            C1740,940 1850,900 1920,790
            "
          />
        </svg>

        <style>{`
          /* LINES CONTAINER */
          .premium-right-lines {
            position: absolute;
            inset: 0;
            z-index: 2; /* Perfectly above background image element but below text content (z-10) */
            pointer-events: none;
            overflow: hidden;
          }

          /* SVG */
          .premium-lines-svg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
          }

          /* LINE STYLE */
          .premium-line {
            fill: none;
            stroke: rgba(232, 220, 180, 0.75);
            stroke-width: 2px;
            vector-effect: non-scaling-stroke;
            will-change: transform;
          }

          /* PREMIUM SMOOTH MOTION */
          .line-1 {
            animation: premiumMove1 7s ease-in-out infinite alternate;
          }

          .line-2 {
            animation: premiumMove2 8.5s ease-in-out infinite alternate;
          }

          .line-3 {
            animation: premiumMove3 7.5s ease-in-out infinite alternate;
          }

          /* SMOOTH LUXURY MOVEMENT */
          @keyframes premiumMove1 {
            from {
              transform: translate3d(0px, 0px, 0);
            }
            to {
              transform: translate3d(-65px, 28px, 0);
            }
          }

          @keyframes premiumMove2 {
            from {
              transform: translate3d(0px, 0px, 0);
            }
            to {
              transform: translate3d(-80px, 40px, 0);
            }
          }

          @keyframes premiumMove3 {
            from {
              transform: translate3d(0px, 0px, 0);
            }
            to {
              transform: translate3d(-55px, -20px, 0);
            }
          }
        `}</style>
      </div>

      {/* Immersive Photo Background with beautiful muted color grading */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1600"
          alt="Humanitarian care support"
          className="w-full h-full object-cover object-center opacity-45 scale-102 filter brightness-[0.7] saturate-[0.8]"
        />
        {/* Multilayer gradient overlays to integrate with header and footer seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2]/10 via-black/40 to-black/80 z-1" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent z-1" />
      </div>

      {/* Floating Sparkles Accent purely for ambient feel */}
      <div className="absolute inset-0 pointer-events-none z-2" aria-hidden="true">
        <div className="absolute top-[25%] left-[15%] w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-[65%] right-[20%] w-2 h-2 bg-amber-400 rounded-full animate-pulse opacity-40" />
        <div className="absolute top-[40%] right-[45%] w-1 h-1 bg-white rounded-full animate-ping opacity-50" />
      </div>

      {/* Hero Core Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-40 sm:pt-44 lg:pt-28 pb-16">
        <div className="space-y-6">
          {/* Circular Institutional Logo Branding */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-2"
          >
            <img
              src="/logo.png?v=3"
              alt="Swami Vivekanand Seva Pratishthan Logo"
              className="hero-logo h-[115px] w-auto max-w-full object-contain pointer-events-none select-none"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Epic Main Heading with balanced spacing and typography */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black tracking-tight leading-none text-white max-w-4xl mx-auto"
            id="hero-header-title"
          >
            <span className="block text-amber-400 font-serif font-extrabold italic text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4">
              {t('hero_title_accent')}
            </span>
            <span className="block mt-2 sm:mt-3">
              {renderInteractiveText(t('hero_title_main'))}
            </span>
          </motion.h1>

          {/* Story Supporting Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-base sm:text-lg lg:text-xl text-gray-200 font-medium leading-relaxed max-w-3xl mx-auto font-sans"
            id="hero-header-subtitle"
          >
            {t('hero_subtitle')}
          </motion.p>

          {/* Elegant quote block */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-white/80 font-serif italic text-sm py-1.5"
          >
            “{t('nav_slogan')}”
          </motion.p>

          {/* Direct CTA Buttons with pristine animations & hover behaviors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 sm:pt-6"
          >
            <button
              id="hero-cta-main"
              onClick={onDonateClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#e59a18] hover:bg-[#c88210] active:scale-[0.98] text-white py-4 px-8 rounded-2xl text-sm font-black uppercase tracking-wider shadow-lg shadow-yellow-700/20 hover:shadow-yellow-700/35 transition-all duration-200 cursor-pointer"
            >
              <Heart className="fill-white" size={17} />
              <span>{t('hero_cta_donate')}</span>
            </button>

            <button
              id="hero-cta-secondary"
              onClick={() => onNavigate('causes')}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 active:scale-[0.98] border border-white/25 backdrop-blur-md text-white py-4 px-8 rounded-2xl text-sm font-black uppercase tracking-wider transition-all duration-200 cursor-pointer"
            >
              <Compass size={17} />
              <span>{t('hero_cta_projects')}</span>
            </button>
          </motion.div>
        </div>

        {/* Scroll helper indicator at absolute bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer hidden sm:flex flex-col items-center gap-1"
          onClick={() => onNavigate('mission')}
          id="scroll-to-mission-helper"
        >
          <span className="text-[10px] tracking-widest uppercase font-mono text-gray-400 font-bold">
            {lang === 'EN' ? 'Scroll to explore' : lang === 'HI' ? 'नीचे स्क्रॉल करें' : 'ಅನ್ವೇಷಿಸಲು ಸ್ಕ್ರಾಲ್ ಮಾಡಿ'}
          </span>
          <ArrowDownCircle size={18} className="text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
}
