import React, { useState, useEffect, useRef } from 'react';
import { Globe, Heart, FileText, Sun, Moon } from 'lucide-react';
import { Lang } from '../types';
import { TRANSLATIONS } from '../data';

interface NavbarProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  onDonateClick: () => void;
  onAdoptClick: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isNavbarVisible?: boolean;
}

export default function Navbar({
  lang,
  setLang,
  theme,
  setTheme,
  onDonateClick,
  onAdoptClick,
  activeSection,
  onNavigate,
  isNavbarVisible = true
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
useEffect(() => {
  const handleTopHover = (e: MouseEvent) => {
    if (e.clientY < 80) {
      const navbar = document.getElementById("main-navigation-header");

      if (navbar) {
        navbar.style.transform = "translateY(0)";
      }
    }
  };

  window.addEventListener("mousemove", handleTopHover);

  return () => {
    window.removeEventListener("mousemove", handleTopHover);
  };
}, []);
  // Auto-scroll active tab into view on mobile
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.querySelector('[data-active="true"]');
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeSection]);

  const t = (key: string) => TRANSLATIONS[key]?.[lang] || key;

  const navItems = [
    { id: 'hero', key: 'nav_home' },
    { id: 'mission', key: 'nav_about' },
    { id: 'causes', key: 'nav_projects' },
    { id: 'news', key: 'nav_news' },
    { id: 'events', key: 'nav_publications' },
    { id: 'footer', key: 'nav_contact' }
  ];

  const languages: Lang[] = ['EN', 'HI', 'KN', 'MR'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 border-b transform transform transalte-y-0 ${
        
        isScrolled
          ? 'bg-[#1d2d35]/95 backdrop-blur-3xl border-white/10 shadow-xl py-2'
          : 'bg-[#142026]/90 backdrop-blur-2xl border-white/5 py-3'
      }`}
      id="main-navigation-header"
    >
      <div className="w-full px-4 sm:px-6 md:px-8 xl:px-12">
        {/* DESKTOP LAYOUT (>= 1024px) */}
        <div className="hidden lg:flex items-center justify-between w-full h-[70px]">
          {/* BRAND LOGO BUTTON */}
          <button
            onClick={() => onNavigate('hero')}
            className="navbar-logo flex items-center gap-2 sm:gap-3 group cursor-pointer text-left focus:outline-none"
            id="brand-logo-button"
          >
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Swami Vivekanand Seva Pratishthan Logo"
              className="lg:h-[64px] lg:w-[64px] object-contain flex-shrink-0 pointer-events-none select-none"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col text-left justify-center pr-1">
              <strong className="tracking-tight uppercase leading-[1.1] lg:text-[14px] xl:text-[15px] font-extrabold font-sans shimmer-glow-text">
                Swami Vivekanand Seva Pratishthan
              </strong>
              <span className="text-[10px] xl:text-[11px] font-sans font-semibold text-[#f4b223] group-hover:text-amber-300 mt-0.5 transition-colors duration-200 leading-none">
                {t('nav_slogan')}
              </span>
            </div>
          </button>

          {/* Desktop Right side: Nav links + Language → Adopt → Donate */}
          <div className="flex items-center gap-6 xl:gap-8 pr-2">
            <nav className="flex items-center gap-4 xl:gap-7 flex-nowrap min-w-0" aria-label="Desktop Global Nav">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`navlink-${item.id}`}
                  onClick={() => onNavigate(item.id)}
                  className={`relative text-[13px] xl:text-[14px] font-bold tracking-wide transition-all duration-300 py-1.5 group cursor-pointer whitespace-nowrap ${
                    activeSection === item.id
                      ? 'text-white font-extrabold'
                      : 'text-white/85 hover:text-white'
                  }`}
                >
                  <span>{t(item.key)}</span>
                  <span
                    className={`absolute -bottom-1 left-0 h-[2.5px] bg-[#f4b223] rounded-full transition-all duration-300 ${
                      activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Language Selector Dropdown */}
              <div className="relative">
                <button
                  id="language-select-dropdown"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-2 text-xs font-bold border border-white/10 bg-white/5 rounded-xl px-4 h-[42px] text-white hover:bg-white/10 cursor-pointer transition-colors duration-200"
                >
                  <Globe size={14} className="text-amber-400" />
                  <span>{lang}</span>
                </button>

                {langDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-30" onClick={() => setLangDropdownOpen(false)} />
                    <div className="absolute right-0 mt-2.5 w-32 bg-[#1d2d35] border border-white/10 rounded-xl shadow-2xl py-1.5 z-40 text-white">
                      {languages.map((l) => (
                        <button
                          key={l}
                          id={`lang-opt-${l}`}
                          onClick={() => {
                            setLang(l);
                            setLangDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-xs font-bold hover:bg-white/10 hover:text-[#f4b223] transition-all duration-150 flex items-center justify-between ${
                            lang === l ? 'bg-white/10 text-[#f4b223]' : 'text-white/80'
                          }`}
                        >
                          <span>{l === 'EN' ? 'English' : l === 'HI' ? 'हिन्दी' : l === 'KN' ? 'ಕನ್ನಡ' : 'मराठी'}</span>
                          <span className="text-[9px] font-mono text-white/40">{l}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Theme Toggle Button */}
              <button
                id="theme-toggle-desktop"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="flex items-center justify-center border border-white/10 bg-white/5 rounded-xl w-[42px] h-[42px] text-white hover:bg-white/10 cursor-pointer transition-colors duration-200"
                aria-label="Toggle Theme"
                title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              >
                {theme === 'light' ? (
                  <Moon size={16} className="text-[#f4b223]" />
                ) : (
                  <Sun size={16} className="text-amber-400" />
                )}
              </button>

              {/* Adopt Action Button */}
              <button
                id="navbar-adopt-cta"
                onClick={onAdoptClick}
                className="flex items-center justify-center gap-1.5 bg-[#f4b223] hover:bg-amber-500 active:scale-[0.98] text-slate-950 text-xs font-black uppercase rounded-xl px-6 h-[42px] whitespace-nowrap transition-all duration-300 shadow-md shadow-amber-950/20 cursor-pointer flex-shrink-0 font-sans"
              >
                <FileText size={13} className="stroke-[2.5]" />
                <span>{t('nav_adopt')}</span>
              </button>

              {/* Donate Action Button */}
              <button
                id="navbar-donate-cta"
                onClick={onDonateClick}
                className="flex items-center justify-center gap-1.5 bg-[#d91f63] hover:bg-[#c01958] active:scale-[0.98] text-white text-xs font-black uppercase rounded-xl px-6 h-[42px] whitespace-nowrap transition-all duration-300 shadow-md shadow-pink-950/20 cursor-pointer flex-shrink-0 font-sans"
              >
                <Heart className="fill-white" size={13} />
                <span>{t('nav_donate')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET REDESIGNED LAYOUT (< 1024px) */}
        <div className="block lg:hidden flex flex-col gap-2.5 py-1" id="mobile-tablet-navbar">
          
          {/* ROW 1: Logo, Full Organization Name, and Tagline */}
          <div className="flex items-center gap-3 w-full" id="mob-row-1">
            <button
              onClick={() => onNavigate('hero')}
              className="navbar-logo flex-shrink-0 cursor-pointer focus:outline-none"
              id="mob-logo-btn"
            >
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Swami Vivekanand Seva Pratishthan Logo"
                className="h-[46px] w-[46px] sm:h-[54px] sm:w-[54px] object-contain pointer-events-none select-none"
                referrerPolicy="no-referrer"
              />
            </button>
            <div className="flex flex-col text-left justify-center min-w-0 flex-1">
              <h1 className="tracking-tight uppercase leading-[1.2] text-[11px] sm:text-[13px] font-extrabold font-sans shimmer-glow-text">
                Swami Vivekanand Seva Pratishthan
              </h1>
              <p className="text-[8px] sm:text-[9.5px] font-sans font-semibold text-[#f4b223] mt-0.5 leading-snug">
                {t('nav_slogan')}
              </p>
            </div>
          </div>

          {/* ROW 2: Single Horizontally Scrollable Navigation & Actions Row (Hides scrollbars, NO hamburger menu) */}
          <div className="border-t border-white/5 pt-2" id="mob-scrollable-links-container">
            <div
              ref={scrollContainerRef}
              className="flex items-center gap-1.5 overflow-x-auto scrollbar-none scroll-smooth flex-nowrap -mx-4 px-4 snap-x"
              aria-label="Mobile and Tablet Navigation Links and Actions"
            >
              {/* Core Nav Items (Home → About Us → Objectives → Staff & Team → Recognition → Contact Us) */}
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`moblenlink-${item.id}`}
                    data-active={isActive ? 'true' : 'false'}
                    onClick={() => onNavigate(item.id)}
                    className={`snap-center flex-shrink-0 px-3.5 py-1.5 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 font-black shadow-md scale-102 font-sans'
                        : 'bg-white/5 text-white/80 border border-white/5 hover:bg-white/10 active:scale-95 font-sans'
                    }`}
                  >
                    {t(item.key)}
                  </button>
                );
              })}

              {/* Language Selector Pill */}
              <div className="relative flex-shrink-0 snap-center" id="mob-language-select-wrapper">
                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value as Lang)}
                  className="appearance-none bg-white/5 text-white/80 border border-white/5 hover:bg-white/10 active:scale-95 px-3.5 py-1.5 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap text-center focus:outline-none font-sans"
                  style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                  id="mobile-language-select-pill"
                >
                  <option value="EN" className="bg-[#1d2d35] text-white">EN</option>
                  <option value="HI" className="bg-[#1d2d35] text-white">HI</option>
                  <option value="KN" className="bg-[#1d2d35] text-white">KN</option>
                  <option value="MR" className="bg-[#1d2d35] text-white">MR</option>
                </select>
              </div>

              {/* Theme Toggle Button Pill */}
              <button
                id="theme-toggle-mobile"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="snap-center flex-shrink-0 flex items-center justify-center border border-white/5 bg-white/5 hover:bg-white/10 rounded-full w-[32px] h-[32px] text-white active:scale-95 duration-150 cursor-pointer"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? (
                  <Moon size={13} className="text-[#f4b223]" />
                ) : (
                  <Sun size={13} className="text-amber-400" />
                )}
              </button>

              {/* Adopt Action Button */}
              <button
                id="mobile-adopt-cta"
                onClick={onAdoptClick}
                className="snap-center flex-shrink-0 flex items-center justify-center bg-[#f4b223] hover:bg-amber-500 text-slate-900 text-xs font-black uppercase rounded-full px-4 py-1.5 h-[32px] transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap leading-none font-sans"
              >
                <span>{t('nav_adopt')}</span>
              </button>

              {/* Donate Action Button */}
              <button
                id="mobile-donate-cta"
                onClick={onDonateClick}
                className="snap-center flex-shrink-0 flex items-center justify-center gap-1 bg-[#d91f63] hover:bg-[#c01958] text-white text-xs font-black uppercase rounded-full px-4 py-1.5 h-[32px] transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap leading-none font-sans"
              >
                <Heart className="fill-white" size={11} />
                <span>{t('nav_donate')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
