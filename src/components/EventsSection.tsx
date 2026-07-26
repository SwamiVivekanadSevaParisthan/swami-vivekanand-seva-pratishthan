import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, Calendar, Ticket, Check, Landmark, ShieldCheck, Heart } from 'lucide-react';
import { Lang, EventItem } from '../types';
import { TRANSLATIONS, EVENTS } from '../data';

interface EventsSectionProps {
  lang: Lang;
}

export default function EventsSection({ lang }: EventsSectionProps) {
  const [registeredEventId, setRegisteredEventId] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState<Record<string, string>>({});
  const [showNotification, setShowNotification] = useState(false);

  const t = (key: string) => TRANSLATIONS[key]?.[lang] || key;

  const handleRegisterSubmit = (e: React.FormEvent, eventId: string) => {
    e.preventDefault();
    if (!emailInput[eventId]) return;

    setRegisteredEventId(eventId);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 4500);
  };

  return (
    <section
      id="events"
      className="bg-bg-secondary py-20 sm:py-28 text-text-secondary transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-mono font-black tracking-widest text-amber-600 uppercase bg-amber-50/50 dark:bg-slate-900 px-3.5 py-1.5 rounded-full border border-amber-100 dark:border-slate-800">
            {t('events_tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight text-text-primary leading-tight">
            {t('events_title')}
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto space-y-6">
          {EVENTS.map((item, idx) => {
            const isRegistered = registeredEventId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-bg-card rounded-2xl border border-border-primary p-6 flex flex-col md:flex-row items-stretch justify-between gap-6 hover:shadow-xl hover:border-gray-200 transition-all duration-300 relative group"
                id={`event-row-${item.id}`}
              >
                {/* Left block: Large visual institution badge */}
                <div className="flex items-center gap-5">
                  <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100/60 dark:border-amber-900/40 text-center shrink-0">
                    <Landmark className="text-amber-600 dark:text-amber-400" size={32} />
                  </div>

                  <div className="space-y-1.5">
                    <span className="inline-block text-[10px] font-mono font-black tracking-wider uppercase text-amber-600 bg-amber-50/50 dark:bg-amber-950/30 py-0.5 px-2 rounded-md">
                      {item.type[lang]}
                    </span>
                    <h3 className="font-sans font-extrabold text-[#00828a] dark:text-teal-400 text-lg leading-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-150">
                      {item.title[lang]}
                    </h3>
                    
                    {/* Meta info tags */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-tertiary font-medium">
                      <div className="flex items-center gap-1">
                        <MapPin size={12} className="text-amber-500" />
                        <span>{item.location[lang]}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} className="text-gray-400" />
                        <span>{item.date} • {item.time}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right block: Support registration widget */}
                <div className="md:border-b-0 border-t border-border-primary md:pt-0 pt-4 flex items-center shrink-0">
                  {!isRegistered ? (
                    <form
                      onSubmit={(e) => handleRegisterSubmit(e, item.id)}
                      className="flex items-center w-full md:w-auto"
                    >
                      <input
                        type="email"
                        required
                        placeholder={lang === 'EN' ? 'your@email.com' : lang === 'HI' ? 'आपका@ईमेल.com' : 'ನಿಮ್ಮ@ಇಮೇಲ್.com'}
                        value={emailInput[item.id] || ''}
                        onChange={(e) => setEmailInput({ ...emailInput, [item.id]: e.target.value })}
                        className="bg-bg-secondary border border-border-primary focus:outline-none focus:ring-1 focus:ring-amber-500 text-xs font-medium py-2 px-3 rounded-l-xl w-full min-w-[150px] text-text-primary"
                        id={`input-reg-${item.id}`}
                      />
                      <button
                        type="submit"
                        id={`btn-reg-sub-${item.id}`}
                        className="bg-amber-600 hover:bg-amber-700 text-white font-black text-[10px] tracking-wide uppercase py-2.5 px-4 rounded-r-xl cursor-pointer transition-all duration-200 flex items-center gap-1 shrink-0 whitespace-nowrap"
                      >
                        <Heart size={12} className="text-amber-200 fill-amber-200" />
                        <span>{t('event_register')}</span>
                      </button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-1 px-4 rounded-xl bg-green-50 text-green-700 border border-green-150 flex items-center gap-2.5"
                    >
                      <Check size={14} strokeWidth={3} />
                      <div className="text-left">
                        <p className="text-xs font-black tracking-tight">{lang === 'EN' ? 'Support Registered!' : lang === 'HI' ? 'सहयोग दर्ज हुआ!' : 'ಬೆಂಬಲ ದಾಖಲಾಗಿದೆ!'}</p>
                        <p className="text-[10px] text-green-600 font-medium font-mono">{lang === 'EN' ? 'Check your mailbox' : lang === 'HI' ? 'ईमेल जांचें' : 'ಇಮೇಲ್ ಪರೀಕ್ಷಿಸಿ'}</p>
                      </div>
                    </motion.div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Global floating notification */}
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              className="fixed bottom-6 right-6 z-50 bg-amber-600 text-white p-5 rounded-2xl shadow-xl flex items-center gap-4 max-w-sm border border-amber-500"
              id="global-registration-notice"
            >
              <span className="p-3 bg-white/10 rounded-xl">
                <Check className="stroke-white" size={24} />
              </span>
              <div className="text-left space-y-0.5">
                <h4 className="text-sm font-black tracking-tight">
                  {lang === 'EN' ? 'Sponsorship Registered' : lang === 'HI' ? 'पंजीकरण सफल' : 'ನೋಂದಣಿ ಯಶಸ್ವಿಯಾಗಿದೆ'}
                </h4>
                <p className="text-[11px] text-amber-50 font-sans leading-snug">
                  {lang === 'EN'
                    ? 'Thank you! SVSP Administrator Rudro Nadagouda will connect with you shorty.'
                    : lang === 'HI'
                    ? 'सहायता करने के लिए धन्यवाद! प्रशासक श्री रुद्र नादागौड़ा आपसे शीघ्र ही संपर्क करेंगे।'
                    : 'ಧನ್ಯವಾದಗಳು! ಆಡಳಿತಾಧಿಕಾರಿ ಶ್ರೀ ರುದ್ರ ನಾದಗೌಡ ಅವರು ನಿಮ್ಮನ್ನು ಶೀಘ್ರದಲ್ಲೇ ಸಂಪರ್ಕಿಸಲಿದ್ದಾರೆ.'}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
