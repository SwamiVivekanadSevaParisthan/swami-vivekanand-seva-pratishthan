import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Activity, ShieldCheck, GraduationCap, Flame, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { Lang, Project } from '../types';
import { TRANSLATIONS, PROJECTS } from '../data';
import { ImageSlideshow } from './ui/ImageSlideshow';

interface CausesProps {
  lang: Lang;
  onDonateClick: (amount?: number) => void;
}

export default function Causes({ lang, onDonateClick }: CausesProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'health' | 'protection' | 'education' | 'emergency'>('all');
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);

  const t = (key: string) => TRANSLATIONS[key]?.[lang] || key;

  const categories = [
    { id: 'all', label: { EN: 'All Objectives', HI: 'सभी उद्देश्य', KN: 'ಎಲ್ಲಾ ಉದ್ದೇಶಗಳು' }, icon: null },
    { 
      id: 'health', 
      label: { EN: 'Shelter & Health', HI: 'आश्रय और चिकित्सा', KN: 'ಆಶ್ರಯ ಮತ್ತು ಆರೋಗ್ಯ' }, 
      icon: <Activity size={15} />,
      animate: {
        animate: { scale: [1, 1.15, 1, 1.15, 1] },
        transition: { repeat: Infinity, duration: 1.8, ease: "easeInOut", repeatDelay: 1.2 }
      }
    },
    { 
      id: 'protection', 
      label: { EN: 'Child Protection', HI: 'बाल सुरक्षा', KN: 'ಮಕ್ಕಳ ಸುರಕ್ಷತೆ' }, 
      icon: <ShieldCheck size={15} />,
      animate: {
        animate: { rotate: [0, -8, 8, -8, 0] },
        transition: { repeat: Infinity, duration: 4, ease: "easeInOut", repeatDelay: 1 }
      }
    },
    { 
      id: 'education', 
      label: { EN: 'Education', HI: 'शिक्षा और कल्याण', KN: 'ಶಿಕ್ಷಣ ಮತ್ತು ಕಲ್ಯಾಣ' }, 
      icon: <GraduationCap size={15} />,
      animate: {
        animate: { y: [0, -4, 0] },
        transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
      }
    }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const getPercentage = (raised: number, goal: number) => {
    return Math.min(100, Math.round((raised / goal) * 100));
  };

  return (
    <section
  id="causes"
  className="bg-transparent py-20 sm:py-28 text-text-secondary transition-colors duration-300"
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-mono font-black tracking-widest text-[#00828a] uppercase bg-teal-50/50 dark:bg-slate-900 px-3.5 py-1.5 rounded-full border border-teal-100 dark:border-slate-800">
            {t('causes_tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight text-text-primary leading-tight">
            {t('causes_title')}
          </h2>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 sm:mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`cat-filter-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-black tracking-wide border transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#00828a] border-[#00828a] text-white shadow-lg shadow-teal-700/10'
                  : 'bg-bg-secondary border-border-primary text-text-secondary hover:border-gray-300 dark:hover:border-slate-700 hover:text-text-primary'
              }`}
            >
              {cat.icon && (
                <motion.span
                  whileHover={{ scale: 1.25 }}
                  className="inline-flex items-center justify-center mr-0.5 shrink-0"
                  {...(cat as any).animate}
                >
                  {cat.icon}
                </motion.span>
              )}
              <span>{cat.label?.[lang as keyof typeof cat.label]}</span>
            </button>
          ))}
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => {
              const pct = getPercentage(p.raised, p.goal);
              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="group relative rounded-2xl bg-bg-card border border-border-primary overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
                  id={`project-card-${p.id}`}
                >
                  {/* Photo Head */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                    {p.images && p.images.length > 0 ? (
                      <ImageSlideshow
                        images={p.images}
                        alt={p.title[lang]}
                        className="w-full h-full"
                      />
                    ) : (
                      <img
                        src={p.image}
                        alt={p.title[lang]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-350"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    {/* AI Badge */}
                    <span className="absolute top-4 right-4 z-20 bg-cyan-500/90 text-white text-[10px] font-bold px-2 py-1 rounded-full backdrop-blur-sm shadow-lg">
                    ✨ AI
                   </span>
                    {/* Dark gradient blur over image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    {/* Pill indicators for category */}
                    <span className="absolute top-4 left-4 text-[9px] font-mono font-black uppercase tracking-widest text-white px-2.5 py-1 rounded-md bg-[#00828a] shadow-md z-10 pointer-events-none">
                      {p.category}
                    </span>
                  </div>

                  {/* Body Copy */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-sans font-bold text-base sm:text-lg text-text-primary leading-snug group-hover:text-[#00828a] transition-colors duration-200 line-clamp-2">
                        {p.title[lang]}
                      </h3>
                      <p className="text-text-secondary text-xs leading-relaxed line-clamp-3">
                        {p.description[lang]}
                      </p>
                    </div>

                    {/* Button block */}
                    <div className="pt-2 border-t border-border-primary">
                      <button
                        type="button"
                        id={`btn-learn-${p.id}`}
                        onClick={() => setExpandedProject(p)}
                        className="w-full flex items-center justify-center gap-1.5 font-bold text-xs tracking-wide text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/20 hover:bg-teal-100 dark:hover:bg-teal-900/30 py-2.5 rounded-lg cursor-pointer transition-all duration-200 border border-teal-100 dark:border-teal-900/40"
                      >
                        <span>Learn More</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Detailed Expansion Drawer/Modal */}
        {expandedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setExpandedProject(null)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-bg-card rounded-2xl shadow-2xl overflow-hidden z-10 border border-border-primary transition-colors duration-300 max-h-[90vh] sm:max-h-[85vh] flex flex-col"
              id="project-drawer"
            >
              <div className="relative h-56 sm:h-72 md:h-80 w-full shrink-0">
                {expandedProject.images && expandedProject.images.length > 0 ? (
                  <ImageSlideshow
                    images={expandedProject.images}
                    alt={expandedProject.title[lang]}
                    className="w-full h-full rounded-2xl"
                  />
                ) : (
                  <img
                    src={expandedProject.image}
                    alt={expandedProject.title[lang]}
                    className="w-full h-full object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card/40 to-transparent pointer-events-none z-10" />
                <button
                  id="close-drawer"
                  onClick={() => setExpandedProject(null)}
                  className="absolute top-3 right-3 bg-black/40 text-white p-1.5 rounded-full hover:bg-black/60 transition z-20"
                >
                  <ArrowRight size={16} className="rotate-180" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-5 rounded-2xl overflow-y-auto flex-1 min-h-0">
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-sans font-black text-text-primary tracking-tight leading-snug">
                    {expandedProject.title[lang]}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans font-medium whitespace-pre-line">
                  {expandedProject.description[lang]}
                </p>

                {/* Confirm Action CTA button */}
                <div className="pt-3">
                  <button
                    type="button"
                    id="drawer-cancel"
                    onClick={() => setExpandedProject(null)}
                    className="w-full border border-border-primary text-text-secondary font-bold py-3 rounded-xl hover:bg-bg-secondary active:scale-98 cursor-pointer transition-all duration-200 text-sm text-center"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
}
