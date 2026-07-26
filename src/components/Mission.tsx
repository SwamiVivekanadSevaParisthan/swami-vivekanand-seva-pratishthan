import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

import { motion } from 'motion/react';
import { Heart, Globe, Award, Users, BookOpen, Sparkles } from 'lucide-react';
import { Lang } from '../types';
import { TRANSLATIONS } from '../data';
import VivekanandaModal from './VivekanandaModal';

interface MissionProps {
  lang: Lang;
}

export default function Mission({ lang }: MissionProps) {
  const [isSwamiOpen, setIsSwamiOpen] = useState(false);
  const t = (key: string) => TRANSLATIONS[key]?.[lang] || key;
  const [missionData, setMissionData] = useState({
  established: "1982",
  boysCapacity: "50",
  girlsCapacity: "50",
  childrenCount: "100 Children"
}); 
useEffect(() => {
  const loadMissionData = async () => {
    try {
      const docRef = doc(db, "siteContent", "mission");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setMissionData(docSnap.data() as any);
      }
    } catch (error) {
      console.error("Error loading mission data:", error);
    }
  };

  loadMissionData();
}, []);
  const stats = [
    {
      id: 'stat1',
      number: missionData.established,
      labelKey: 'stat_projects_label',
      icon: <Award className="text-teal-600" size={24} />,
      animate: {
        animate: { rotate: [0, -8, 8, -8, 0] },
        transition: { repeat: Infinity, duration: 4, ease: "easeInOut", repeatDelay: 1 }
      }
    },
    {
      id: 'stat2',
      number: missionData.boysCapacity,
      labelKey: 'stat_countries_label',
      icon: <Users className="text-teal-600" size={24} />,
      animate: {
        animate: { y: [0, -4, 0] },
        transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
      }
    },
    {
      id: 'stat3',
      number: missionData.girlsCapacity,
      labelKey: 'stat_beneficiaries_label',
      icon: <Users className="text-teal-600" size={24} />,
      animate: {
        animate: { scale: [1, 1.1, 1] },
        transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut", repeatDelay: 1.5 }
      }
    },
    {
      id: 'stat4',
      number: missionData.childrenCount,
      labelKey: 'stat_years_label',
      icon: <Heart className="text-teal-600" size={24} />,
      animate: {
        animate: { scale: [1, 1.15, 1, 1.15, 1] },
        transition: { repeat: Infinity, duration: 1.8, ease: "easeInOut", repeatDelay: 1.2 }
      }
    }
  ];

  return (
    <section
      id="mission"
      className="bg-bg-secondary text-text-primary py-20 sm:py-28 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Description, Slogans, Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight text-text-primary leading-tight">
                {t('mission_title')}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-sans font-medium">
              {t('mission_p1')}
            </p>

            <p className="text-sm sm:text-base text-text-tertiary leading-relaxed">
              {t('mission_p2')}
            </p>

            {/* Sub Quote Block styled minimal luxury - clickable to open bio modal */}
            <div className="space-y-4">
              <blockquote 
                onClick={() => setIsSwamiOpen(true)}
                className="group border-l-4 border-amber-600 pl-4 py-2 italic text-text-secondary font-serif my-5 cursor-pointer hover:bg-amber-500/5 transition-all duration-200 rounded-r-xl pr-3"
                title="Click to learn about Swami Vivekananda"
              >
                “{t('nav_slogan')}”
                <span className="block text-xs font-mono font-bold tracking-widest uppercase text-text-tertiary not-italic mt-2 group-hover:text-[#00828a] transition-colors duration-200">
                  — Swami Vivekananda (Inspirational Philosopher)
                </span>
              </blockquote>

              <button
                onClick={() => setIsSwamiOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-secondary hover:bg-bg-card border border-border-primary text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 hover:text-[#00828a] dark:hover:text-[#33b1b9] shadow-sm hover:shadow transition-all duration-200 group"
              >
                <BookOpen size={14} className="text-amber-500 group-hover:scale-110 transition-transform duration-200" />
                <span>{lang === 'EN' ? 'Who was Swami Vivekananda?' : lang === 'HI' ? 'स्वामी विवेकानंद कौन थे?' : lang === 'KN' ? 'ಸ್ವಾಮಿ ವಿವೇಕಾನಂದರು ಯಾರು?' : 'स्वामी विवेकानंद कोण होते?'}</span>
              </button>
            </div>
          </div>

          {/* Right Block: Interactive Photo + Floating Stats Panel */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Background Decorative Element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-100/20 dark:bg-amber-950/20 rounded-2xl -z-1" />
            
            {/* Foreground Beautiful Split Portrait Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-bg-card border border-border-primary p-2.5 transition-colors duration-300">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
                alt="Swami Vivekanand children homes"
                className="w-full aspect-[4/3] object-cover rounded-2xl filter brightness-98 saturate-95"
              />
              
              {/* Overlay Stat Counter Grid */}
              <div className="grid grid-cols-2 gap-4 p-5">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex flex-col p-4 bg-bg-secondary border border-border-primary rounded-2xl hover:bg-bg-card hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-2.5 mb-2.5">
                       <motion.span
                        className="p-1.5 bg-amber-50 dark:bg-amber-950/40 rounded-lg inline-flex items-center justify-center"
                       >
                        {stat.icon}
                      </motion.span>
                      <span className="text-xl sm:text-2xl font-mono font-black text-text-primary tracking-tight">
                        {stat.number}
                      </span>
                    </div>
                    {stat.id !== 'stat4' && (
                      <span className="text-xs font-sans font-semibold text-text-tertiary leading-tight">
                        {t(stat.labelKey)}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interactive Badge */}
            <div className="absolute -right-4 -bottom-4 bg-amber-600 text-white py-3.5 px-5 rounded-2xl shadow-xl flex items-center gap-3 max-w-[200px]">
              <span className="text-2xl font-black font-mono">
  {missionData.established}
</span>
              <p className="text-[10px] uppercase font-mono font-black tracking-wider leading-none">
                {lang === 'EN' ? 'ESTABLISHED NGO IN BELAGAVI' : lang === 'HI' ? 'बेलगावी में स्थापित संस्था' : 'ಬೆಳಗಾವಿಯಲ್ಲಿ ಸ್ಥಾಪಿತ ಸಂಸ್ಥೆ'}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Swami Vivekananda Biography Details Modal */}
      <VivekanandaModal
        isOpen={isSwamiOpen}
        onClose={() => setIsSwamiOpen(false)}
        lang={lang}
      />
    </section>
  );
}
