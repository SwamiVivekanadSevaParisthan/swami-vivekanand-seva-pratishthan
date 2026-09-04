import React, { useState, useEffect, useRef } from 'react';
import { Globe, Heart, FileText, Sun, Moon, Menu, X, ChevronRight } from 'lucide-react';
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

const LANGUAGE_LABELS: Record<Lang, string> = {
  EN: 'English',
  HI: 'हिन्दी',
  KN: 'ಕನ್ನಡ',
  MR: 'मराठी'
};

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleTopHover = (e: MouseEvent) => {
      if (e.clientY < 80) {
        const navbar = document.getElementById('main-navigation-header');
        if (navbar) navbar.style.transform = 'translateY(0)';
      }
    };
    window.addEventListener('mousemove', handleTopHover);
    return () => window.removeEventListener('mousemove', handleTopHover);
  }, []);

  // Lock body scroll while the mobile drawer is open, close on Escape,
  // and return focus to the trigger button when it closes.
  useEffect(() => {
    if (isMenuOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = previousOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      menuButtonRef.current?.focus();
    }
  }, [isMenuOpen]);

  // Close the drawer automatically if the viewport grows past the mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

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

  const handleMobileNavigate = (sectionId: string) => {
    setIsMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    // NOTE: the outer <header> below is intentionally NOT the element that carries
    // the show/hide translateY transform. A CSS `transform` on any ancestor of a
    // `position: fixed` element creates a new containing block for it, so putting
    // the transform on <header> (with the drawer nested inside it) caused the
    // mobile drawer's `fixed inset-0` to be sized against the header's own small
    // box instead of the real viewport. The transform lives on an inner wrapper,
    // and the drawer is a sibling of that wrapper, so it always covers the true
    // viewport regardless of screen size.
    <header
      id="main-navigation-header"
      className="fixed top-0 left-0 right-0 z-[999]"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      {/* TOP BAR — this inner wrapper owns the transform + background/blur */}
      <div
        className={`transition-transform duration-500 border-b ${
          isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-[#1d2d35]/95 backdrop-blur-3xl border-white/10 shadow-xl py-2'
            : 'bg-[#142026]/90 backdrop-blur-2xl border-white/5 py-3'
        }`}
      >
        <div className="w-full px-4 sm:px-6 md:px-8 xl:px-12">
          {/* DESKTOP LAYOUT (>= 1024px) — unchanged: full nav + standalone CTA buttons */}
          <div className="hidden lg:flex items-center justify-between w-full h-[70px]">
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

            <div className="flex items-center gap-6 xl:gap-8 pr-2">
              <nav className="flex items-center gap-4 xl:gap-7 flex-nowrap min-w-0" aria-label="Desktop Global Nav">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    id={`navlink-${item.id}`}
                    onClick={() => onNavigate(item.id)}
                    className={`relative text-[13px] xl:text-[14px] font-bold tracking-wide transition-all duration-300 py-1.5 group cursor-pointer whitespace-nowrap ${
                      activeSection === item.id ? 'text-white font-extrabold' : 'text-white/85 hover:text-white'
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
                <div className="relative">
                  <button
                    id="language-select-dropdown"
                    onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                    aria-haspopup="listbox"
                    aria-expanded={langDropdownOpen}
                    className="flex items-center gap-2 text-xs font-bold border border-white/10 bg-white/5 rounded-xl px-4 h-[42px] text-white hover:bg-white/10 cursor-pointer transition-colors duration-200"
                  >
                    <Globe size={14} className="text-amber-400" />
                    <span>{lang}</span>
                  </button>

                  {langDropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-30" onClick={() => setLangDropdownOpen(false)} />
                      <div
                        role="listbox"
                        className="absolute right-0 mt-2.5 w-32 bg-[#1d2d35] border border-white/10 rounded-xl shadow-2xl py-1.5 z-40 text-white"
                      >
                        {languages.map((l) => (
                          <button
                            key={l}
                            id={`lang-opt-${l}`}
                            role="option"
                            aria-selected={lang === l}
                            onClick={() => {
                              setLang(l);
                              setLangDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-xs font-bold hover:bg-white/10 hover:text-[#f4b223] transition-all duration-150 flex items-center justify-between ${
                              lang === l ? 'bg-white/10 text-[#f4b223]' : 'text-white/80'
                            }`}
                          >
                            <span>{LANGUAGE_LABELS[l]}</span>
                            <span className="text-[9px] font-mono text-white/40">{l}</span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>

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

                <button
                  id="navbar-adopt-cta"
                  onClick={onAdoptClick}
                  className="flex items-center justify-center gap-1.5 bg-[#f4b223] hover:bg-amber-500 active:scale-[0.98] text-slate-950 text-xs font-black uppercase rounded-xl px-6 h-[42px] whitespace-nowrap transition-all duration-300 shadow-md shadow-amber-950/20 cursor-pointer flex-shrink-0 font-sans"
                >
                  <FileText size={13} className="stroke-[2.5]" />
                  <span>{t('nav_adopt')}</span>
                </button>

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

          {/* MOBILE & TABLET LAYOUT (< 1024px) — Logo + Hamburger trigger only */}
          <div className="flex lg:hidden items-center justify-between w-full h-[58px] sm:h-[66px]" id="mobile-tablet-navbar">
            <button
              onClick={() => onNavigate('hero')}
              className="navbar-logo flex items-center gap-2.5 sm:gap-3 group cursor-pointer text-left focus:outline-none min-w-0"
              id="mob-logo-btn"
            >
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Swami Vivekanand Seva Pratishthan Logo"
                className="h-[42px] w-[42px] sm:h-[50px] sm:w-[50px] object-contain flex-shrink-0 pointer-events-none select-none"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col text-left justify-center min-w-0 flex-1">
                <h1 className="tracking-tight uppercase leading-[1.2] text-[11px] sm:text-[13px] font-extrabold font-sans shimmer-glow-text truncate">
                  Swami Vivekanand Seva Pratishthan
                </h1>
                <p className="text-[8px] sm:text-[9.5px] font-sans font-semibold text-[#f4b223] mt-0.5 leading-snug truncate">
                  {t('nav_slogan')}
                </p>
              </div>
            </button>

            <button
              ref={menuButtonRef}
              id="mobile-menu-trigger"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-haspopup="dialog"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-drawer"
              className="relative flex-shrink-0 flex items-center justify-center w-[42px] h-[42px] rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER — a compact half-screen list, sibling of the transformed
          top bar (see note above) so `fixed inset-0` always covers the true
          viewport. Adopt/Donate are now rows inside the same list as the other
          links, instead of large separate CTA buttons — keeps the panel to a
          single, calm list a person can scan in one glance. */}
      <div
        className={`lg:hidden fixed inset-0 z-[1000] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />

        {/* Sliding Panel — half the viewport width, sized to fit its own
            content (no internal scrollbar) rather than stretching to the full
            screen height. */}
        <div
          ref={drawerRef}
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={`absolute top-0 right-0 w-1/2 min-w-[220px] max-w-[300px] bg-[#152128] border-l border-b border-white/10 shadow-2xl flex flex-col rounded-bl-2xl transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/10 flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Swami Vivekanand Seva Pratishthan Logo"
              className="h-[32px] w-[32px] object-contain flex-shrink-0 pointer-events-none select-none"
              referrerPolicy="no-referrer"
            />
            <button
              id="mobile-menu-close"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation menu"
              className="flex-shrink-0 flex items-center justify-center w-[34px] h-[34px] rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Drawer Body: one plain list, sized to its content — no scroll.
              Nav links, then Adopt/Donate as rows in the same list, then
              language + theme settings below. */}
          <div className="px-3 py-4 flex flex-col gap-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile Global Nav">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobnavlink-${item.id}`}
                    onClick={() => handleMobileNavigate(item.id)}
                    className={`flex items-center justify-between text-left px-3.5 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                        : 'bg-white/5 text-white/85 hover:bg-white/10'
                    }`}
                  >
                    <span>{t(item.key)}</span>
                    <ChevronRight size={14} className={isActive ? 'text-slate-950' : 'text-white/40'} />
                  </button>
                );
              })}

              {/* Divider so Adopt/Donate read as distinct actions within the list,
                  without breaking out into their own oversized buttons. */}
              <div className="h-px bg-white/10 my-2" />

              <button
                id="mobile-drawer-adopt-cta"
                onClick={() => {
                  setIsMenuOpen(false);
                  onAdoptClick();
                }}
                className="flex items-center gap-2 text-left px-3.5 py-2.5 rounded-xl text-[13px] font-bold bg-[#f4b223]/12 text-[#f4b223] hover:bg-[#f4b223]/20 transition-all duration-200 cursor-pointer"
              >
                <FileText size={14} className="flex-shrink-0 stroke-[2.5]" />
                <span>{t('nav_adopt')}</span>
              </button>

              <button
                id="mobile-drawer-donate-cta"
                onClick={() => {
                  setIsMenuOpen(false);
                  onDonateClick();
                }}
                className="flex items-center gap-2 text-left px-3.5 py-2.5 rounded-xl text-[13px] font-bold bg-[#d91f63]/12 text-[#f680ac] hover:bg-[#d91f63]/20 transition-all duration-200 cursor-pointer"
              >
                <Heart size={14} className="flex-shrink-0 fill-current" />
                <span>{t('nav_donate')}</span>
              </button>
            </nav>

            {/* Language Selector */}
            <div className="flex flex-col gap-2">
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/40 px-1">Language</span>
              <button
                onClick={() => setMobileLangOpen(!mobileLangOpen)}
                aria-expanded={mobileLangOpen}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-[13px] font-bold cursor-pointer"
              >
                <span className="flex items-center gap-2 min-w-0">
                  <Globe size={14} className="text-amber-400 flex-shrink-0" />
                  <span className="truncate">{LANGUAGE_LABELS[lang]}</span>
                </span>
                <ChevronRight
                  size={14}
                  className={`flex-shrink-0 text-white/40 transition-transform duration-200 ${mobileLangOpen ? 'rotate-90' : ''}`}
                />
              </button>
              {mobileLangOpen && (
                <div className="grid grid-cols-2 gap-1.5 mt-1">
                  {languages.map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLang(l);
                        setMobileLangOpen(false);
                      }}
                      className={`px-2 py-2 rounded-lg text-[11px] font-bold transition-all duration-150 cursor-pointer truncate ${
                        lang === l
                          ? 'bg-[#f4b223] text-slate-950'
                          : 'bg-white/5 text-white/75 hover:bg-white/10 border border-white/5'
                      }`}
                    >
                      {LANGUAGE_LABELS[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <div className="flex flex-col gap-2">
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/40 px-1">Appearance</span>
              <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-[13px] font-bold cursor-pointer"
              >
                {theme === 'light' ? (
                  <Moon size={14} className="text-[#f4b223] flex-shrink-0" />
                ) : (
                  <Sun size={14} className="text-amber-400 flex-shrink-0" />
                )}
                <span className="truncate">{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
