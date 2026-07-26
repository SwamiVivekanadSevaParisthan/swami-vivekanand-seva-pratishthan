import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, CheckCircle2, Send, Bookmark } from 'lucide-react';
import { Lang } from '../types';
import { TRANSLATIONS } from '../data';

interface NewsletterProps {
  lang: Lang;
}

export default function Newsletter({ lang }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const t = (key: string) => TRANSLATIONS[key]?.[lang] || key;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1200);
  };

  return (
    <section
      id="newsletter-panel"
      className="bg-amber-700 py-16 sm:py-24 text-white relative overflow-hidden"
    >
      {/* Background circles purely for visual context */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-800/40 pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-yellow-600/20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Vector Mail Icon with floating animation */}
        <div className="flex justify-center">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="p-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 text-yellow-300"
          >
            <Mail size={32} />
          </motion.div>
        </div>

        <div className="space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-black tracking-tight leading-snug">
            {t('newsletter_title')}
          </h2>
          <p className="text-amber-100 text-xs sm:text-sm leading-relaxed font-medium">
            {t('newsletter_subtitle')}
          </p>
        </div>

        <div className="max-w-md mx-auto pt-2">
          <AnimatePresence mode="wait">
            {!isSubscribed ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch justify-center gap-2"
              >
                <div className="relative flex-1">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-200">
                    <Bookmark size={15} />
                  </span>
                  <input
                    type="email"
                    required
                    id="newsletter-email-field"
                    placeholder={t('newsletter_email_label')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-amber-850/80 border border-amber-600 rounded-xl py-3 pl-11 pr-4 text-xs font-semibold placeholder-amber-450 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
                  />
                </div>
                
                <button
                  type="submit"
                  id="newsletter-submit"
                  disabled={loading}
                  className="bg-[#e59a18] hover:bg-[#c88210] disabled:bg-slate-400 text-white py-3 px-6 rounded-xl text-xs font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-97 flex items-center justify-center gap-2 min-w-[120px] font-sans"
                >
                  <Send size={12} />
                  <span>{t('newsletter_subscribe')}</span>
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-5 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl flex items-center gap-3.5 text-left"
              >
                <CheckCircle2 className="text-yellow-400 shrink-0" size={24} />
                <div>
                  <h4 className="text-sm font-black tracking-tight">
                    {lang === 'EN' ? 'Registration Registered' : lang === 'HI' ? 'पंजीकरण सफल हुआ' : 'ನೋಂದಣಿ ಯಶಸ್ವಿಯಾಗಿದೆ'}
                  </h4>
                  <p className="text-xs text-amber-100 leading-normal font-sans font-medium">
                    {t('newsletter_success')}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
