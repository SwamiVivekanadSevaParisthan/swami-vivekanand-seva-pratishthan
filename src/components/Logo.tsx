import React from 'react';
import { motion } from 'motion/react';
import imageLogo from '../assets/images/organization_logo_1779597245559.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'icon-only' | 'horizontal';
  light?: boolean;
}

export default function Logo({
  className = '',
  size = 'md',
  layout = 'horizontal',
  light = false
}: LogoProps) {
  const fontClasses = {
    sm: { textTitle: 'text-sm sm:text-base md:text-[16px] font-extrabold font-sans hover:text-amber-400 tracking-tight leading-[1.15] whitespace-nowrap', textSub: 'text-[10px] sm:text-[11px] md:text-[12px] font-sans font-medium whitespace-nowrap' },
    md: { textTitle: 'text-sm sm:text-base md:text-[16px] font-extrabold font-sans tracking-tight leading-tight whitespace-nowrap', textSub: 'text-[9.5px] sm:text-[10.5px] md:text-[11px] font-serif font-semibold italic border-none whitespace-nowrap' },
    lg: { textTitle: 'text-lg sm:text-xl md:text-2xl font-black font-sans tracking-tight leading-normal whitespace-nowrap', textSub: 'text-xs sm:text-sm font-serif font-medium italic border-none whitespace-nowrap' },
    xl: { textTitle: 'text-2xl sm:text-3xl font-black font-sans tracking-tight leading-normal whitespace-nowrap', textSub: 'text-sm sm:text-base font-serif font-medium italic border-none whitespace-nowrap' }
  };

  const imageStyles = {
    sm: { height: '70px', width: '70px', background: 'transparent' },
    md: { height: '65px', width: 'auto', background: 'transparent' },
    lg: { height: '115px', width: 'auto', background: 'transparent' },
    xl: { height: '160px', width: 'auto', background: 'transparent' }
  };

  const currentFonts = fontClasses[size];
  const currentImageStyle = imageStyles[size];

  // Soft fade animation wrapper for larger hero positions
  const isLarge = size === 'lg' || size === 'xl';

  // Always apply multiply blend and transparent background to eliminate white box on both light and dark backdrops
  const finalImageStyle: React.CSSProperties = {
    ...currentImageStyle,
    mixBlendMode: 'multiply',
    backgroundColor: 'transparent',
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.12))',
    transition: 'all 0.3s ease'
  };

  const logoImage = (
    <img
      src={imageLogo}
      alt="Swami Vivekanand Seva Pratishthan Official Logo"
      style={finalImageStyle}
      className={`object-contain transition-all duration-300 pointer-events-none select-none`}
      referrerPolicy="no-referrer"
      id="svsp-logo-img"
    />
  );

  return (
    <div id="svsp-branding-logo" className={`flex items-center gap-3.5 ${className}`}>
      {/* Animated or Standard logo wrapper */}
      {isLarge ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="shrink-0"
        >
          {logoImage}
        </motion.div>
      ) : (
        <div className="shrink-0 bg-transparent p-0 border-none shadow-none logo-wrapper">
          {logoImage}
        </div>
      )}

      {/* Horizontal Layout Text Branding */}
      {layout === 'horizontal' && (
        <div className="flex flex-col text-left justify-center pr-2">
          <strong
            className={`tracking-tight uppercase leading-snug transition-colors duration-200 ${currentFonts.textTitle} ${
              light
                ? 'text-white group-hover:text-amber-100'
                : 'text-slate-900 group-hover:text-[#00828a]'
            }`}
          >
            Swami Vivekanand Seva Pratishthan
          </strong>
          <em
            className={`not-italic font-semibold tracking-normal leading-none mt-1 transition-colors duration-200 ${currentFonts.textSub} ${
              light
                ? 'text-[#f4b223] group-hover:text-amber-300'
                : 'text-amber-600 group-hover:text-amber-700'
            }`}
          >
            Building a Future Filled with Hope and Possibilities
          </em>
        </div>
      )}
    </div>
  );
}
