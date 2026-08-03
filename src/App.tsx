import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Causes from './components/Causes';
import DonationImpact from './components/DonationImpact';
import NewsSection from './components/NewsSection';
import EventsSection from './components/EventsSection';
import Testimonials from './components/Testimonials';
import FacilitiesAndHealthcare from './components/FacilitiesAndHealthcare';
import Newsletter from './components/Newsletter';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AdoptModal from './components/AdoptModal';
import { Lang } from './types';
import FacebookFeed from './components/FacebookFeed';
import Aurora from './components/ui/Aurora';
import { CustomCursor } from './components/ui/CustomCursor';
import FadeInSection from './components/ui/FadeInSection';
import KeyDonors from "./components/KeyDonors";

export default function App() {
  const [lang, setLang] = useState<Lang>('EN');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isAdoptOpen, setIsAdoptOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScrollProgress);
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, []);

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
  });

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (isAdoptOpen) {
      // Auto hides after a short feedback window of 800ms
      const timer = setTimeout(() => {
        setIsNavbarVisible(false);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setIsNavbarVisible(true);
    }
 }, [isAdoptOpen]);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Don't hide if clicking inside the navbar/header
      if (target.closest('#main-navigation-header') || target.closest('#mobile-tablet-navbar')) {
        return;
      }

      // Check if target is a box/card or inside one
      const clickedBox = target.closest(
        '.bg-bg-card, .bg-bg-secondary, [id^="project-card-"], [id^="event-row-"], [id^="blog-card-"], [id^="tier-card-"], #testimonials-frame, #project-drawer, .rounded-2xl, .rounded-3xl, .rounded-xl'
      );

      if (clickedBox) {
        setIsNavbarVisible(false);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  const handleOverlayScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const lastScroll = (e.currentTarget as any)._lastScrollTop || 0;

    if (scrollTop > lastScroll && scrollTop > 50) {
      setIsNavbarVisible(false);
    } else if (scrollTop < lastScroll) {
      setIsNavbarVisible(true);
    }

    (e.currentTarget as any)._lastScrollTop = scrollTop;
  };

  // Smooth scroll handler with offset for sticky header
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Immediate donate trigger with parameter pre-fills
  const triggerDonate = () => {
  document.getElementById('donation-impact')?.scrollIntoView({
    behavior: 'smooth'
  });
};

  // Track scroll position to update active navigation state
  useEffect(() => {
    const handleScrollDetect = () => {
      const sections = ['hero', 'mission', 'causes', 'news', 'events', 'footer'];
      const scrollPos = window.scrollY + 120; // threshold offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollDetect);
    return () => window.removeEventListener('scroll', handleScrollDetect);
  }, []);

  return (
    <div className="font-sans text-text-primary bg-transparent selection:bg-amber-600 selection:text-white min-h-screen flex flex-col justify-between">
      {/* Custom follower cursor effect */}
      <CustomCursor />

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[3.5px] bg-amber-500/10 z-[1001] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-teal-500 via-amber-500 to-orange-500 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Immersive Global Animated Aurora Background Canvas */}
      {theme === 'dark' && (
        <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden opacity-35 select-none transition-opacity duration-500">
          <Aurora
            colorStops={["#EAB308", "#10B981", "#F97316"]}
            amplitude={1}
            blend={0.46}
          />
        </div>
      )}

      {/* Ambient Aesthetic Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none -z-40 overflow-hidden select-none">
        {/* Orb 1: Top Right, Amber/Yellow */}
        <div className="absolute top-[10%] -right-[10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-amber-400/10 dark:bg-amber-600/15 blur-[80px] sm:blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
        {/* Orb 2: Middle Left, Teal */}
        <div className="absolute top-[45%] -left-[15%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-teal-300/10 dark:bg-teal-500/10 blur-[90px] sm:blur-[140px] animate-pulse" style={{ animationDuration: '18s' }} />
        {/* Orb 3: Bottom Right, Golden Amber */}
        <div className="absolute bottom-[15%] -right-[10%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-[#e59a18]/5 dark:bg-[#e59a18]/10 blur-[80px] sm:blur-[110px] animate-pulse" style={{ animationDuration: '15s' }} />
      </div>

      {/* Premium Sticky Navigation Bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        onDonateClick={() => triggerDonate()}
        onAdoptClick={() => setIsAdoptOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isNavbarVisible={isNavbarVisible}
      />

      {/* Main Single Page Sections flow */}
      <main className="flex-1">
        {/* 1. Full-screen Immersive Hero Section */}
        <Hero
          lang={lang}
          onDonateClick={() => triggerDonate()}
          onNavigate={handleNavigate}
        />
         
      <div className="relative">

  <div className="relative z-10">   
        {/* 2. Storytelling / Mission Stat counters Section */}
        <FadeInSection>
          <Mission lang={lang} />
        </FadeInSection>

        {/* 3. NGO Causes with filter tabs and details drawers */}
        <FadeInSection>
          <Causes
            lang={lang}
            onDonateClick={() => triggerDonate()}
          />
        </FadeInSection>
        {/* 3b. Live Facebook page feed */}
        <FadeInSection>
          <FacebookFeed lang={lang} />
        </FadeInSection>
        {/* 4. Interactive Donation Impact board */}
        <FadeInSection>
          <section id="donation-impact">
        <DonationImpact
            lang={lang}
            onDonateClick={() => triggerDonate()}
          />
        </section>
         </FadeInSection>

        {/* 5. Clean News / Publications grids */}
        <FadeInSection>
          <NewsSection lang={lang} />
        </FadeInSection>

        {/* 6. Solidaire Schedule Calendar Timelines */}
        <FadeInSection>
          <EventsSection lang={lang} />
        </FadeInSection>

        {/* 6b. Facilities & Healthcare detailed grid */}
        <FadeInSection>
          <FacilitiesAndHealthcare lang={lang} />
        </FadeInSection>

        {/* 7. Humans Story citation Carousels */}
        <FadeInSection>
          <Testimonials lang={lang} />
        </FadeInSection>
        
        {/* Key Donors */}
        <FadeInSection>
        <KeyDonors lang={lang} />
        </FadeInSection>

        {/* Contact form, Map and interactive phone connections */}
        <FadeInSection>
          <ContactSection lang={lang} />
        </FadeInSection>
        </div>
       </div>. 
        {/* 8. Minimal Newsletter subscriber field */}
        <FadeInSection>
          <Newsletter lang={lang} />
        </FadeInSection>
      </main>

      {/* 9. Premium Grand-Ducal certified Footer */}
      <Footer
        lang={lang}
        onNavigate={handleNavigate}
        onDonateClick={() => triggerDonate()}
      />

      {/* Fully styled checkout simulation panel modal */}
      

      {/* Fully styled pre-registration CARA adoption modal */}
      <AdoptModal
        isOpen={isAdoptOpen}
        onClose={() => setIsAdoptOpen(false)}
        lang={lang}
        onScroll={handleOverlayScroll}
      />
    </div>
  );
}

