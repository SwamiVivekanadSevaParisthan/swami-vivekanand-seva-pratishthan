import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, BookOpen, X, BookOpenCheck } from 'lucide-react';
import { Lang, NewsItem } from '../types';
import { TRANSLATIONS, NEWS } from '../data';

interface NewsSectionProps {
  lang: Lang;
}

export default function NewsSection({ lang }: NewsSectionProps) {
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);

  const t = (key: string) => TRANSLATIONS[key]?.[lang] || key;

  return (
    <section
      id="news"
      className="bg-transparent py-20 sm:py-28 text-text-secondary transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Tagline */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-mono font-black tracking-widest text-[#d97706] uppercase bg-amber-50/50 dark:bg-slate-900 px-3.5 py-1.5 rounded-full border border-amber-100 dark:border-slate-800">
            {t('news_tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight text-text-primary leading-tight">
            {t('news_title')}
          </h2>
        </div>

        {/* Article Custom Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col justify-between bg-bg-card border border-border-primary rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-gray-205 transition-all duration-300"
              id={`blog-card-${item.id}`}
            >
              <div>
                {/* Photo aspect-[16/10] */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-255">
                  <img
                    src={item.image}
                    alt={item.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-104 transition-all duration-300 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  {/* AI Badge */}
                  <span className="absolute top-4 right-4 z-20 bg-cyan-500/90 text-white text-[10px] font-bold px-2 py-1 rounded-full backdrop-blur-sm">
                  ✨ AI
                 </span>
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 bg-white/95 dark:bg-slate-900/95 text-amber-600 text-[9px] font-mono font-black tracking-wider uppercase py-1 px-2.5 rounded-md shadow-xs border border-white/10 dark:border-black/5">
                    {item.category[lang]}
                  </span>
                </div>

                {/* Body Details */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <div className="flex items-center gap-1.5 text-xs text-text-tertiary font-mono font-bold">
                    <Calendar size={13} className="text-amber-600" />
                    <span>{lang === 'EN' ? 'Year' : lang === 'HI' ? 'वर्ष' : 'ವರ್ಷ'}: {item.date}</span>
                  </div>

                  <h3 className="font-sans font-black text-lg sm:text-xl text-text-primary leading-snug group-hover:text-amber-600 transition-colors duration-200 line-clamp-2">
                    {item.title[lang]}
                  </h3>

                  <p className="text-text-secondary text-xs leading-relaxed line-clamp-3">
                    {item.excerpt[lang]}
                  </p>
                </div>
              </div>

              {/* Action read block */}
              <div className="p-5 sm:p-6 pt-0">
                <button
                  type="button"
                  id={`btn-read-${item.id}`}
                  onClick={() => setActiveArticle(item)}
                  className="flex items-center justify-center gap-2 text-xs font-black tracking-wider uppercase text-amber-600 group-hover:text-amber-800 cursor-pointer transition-colors duration-200 font-sans"
                >
                  <span>{t('news_read_more')}</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </motion.article>
          ))}
        </div>

        {/* Read More Detail Article Modal POP-UP */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setActiveArticle(null)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-bg-card rounded-2xl shadow-2xl overflow-hidden z-10 border border-border-primary transition-colors duration-300"
              id="article-detail-modal"
            >
              {/* Cover Photo */}
              <div className="relative aspect-video w-full bg-gray-200">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title[lang]}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                
                {/* Close Button top-right */}
                <button
                  id="close-article-modal"
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2.5 rounded-full hover:bg-black/75 transition-colors duration-200"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                {/* Overlaid Title context labels on image */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="inline-block bg-amber-600 text-[9px] font-mono font-black tracking-widest uppercase py-1 px-2.5 rounded-md mb-2">
                    {activeArticle.category[lang]}
                  </span>
                  <p className="text-xs font-mono font-medium text-gray-200 flex items-center gap-1.5">
                    <Calendar size={12} />
                    <span>{lang === 'EN' ? 'Year' : lang === 'HI' ? 'वर्ष' : 'ವರ್ಷ'}: {activeArticle.date}</span>
                  </p>
                </div>
              </div>

              {/* Text Articles and descriptions */}
              <div className="p-6 sm:p-8 space-y-5 max-h-[50vh] overflow-y-auto">
                <h3 className="text-xl sm:text-2xl font-sans font-black text-text-primary tracking-tight leading-snug">
                  {activeArticle.title[lang]}
                </h3>

                <p className="text-sm font-sans font-bold text-amber-700 dark:text-amber-400 leading-relaxed border-l-2 border-amber-600 pl-3 py-1 bg-amber-50/50 dark:bg-amber-950/15 rounded-r-lg">
                  {activeArticle.excerpt[lang]}
                </p>

                <div className="text-sm text-text-secondary leading-relaxed font-sans space-y-4 font-medium">
                  <p>{activeArticle.content[lang]}</p>
                  <p>
                    {lang === 'EN' 
                      ? 'Swami Vivekanand Seva Pratishthan coordinates seamlessly with state child protection units, ensuring highly transparent legal processes, nutrient-rich diet layouts, and robust educational guidance.'
                      : lang === 'HI'
                      ? 'स्वामी विवेकानंद सेवा प्रतिष्ठान राज्य बाल कल्याण विभाग के साथ मिलकर पारदर्शी व कानूनी सुरक्षा, उच्च स्तरीय पोषण व्यवस्था और निरंतर उत्कृष्ट स्कूली शिक्षा सुनिश्चित करता है।'
                      : 'ಸ್ವಾಮಿ ವಿವೇಕಾನಂದ ಸೇವಾ ಪ್ರತಿಷ್ಠಾನವು ರಾಜ್ಯ ಮಕ್ಕಳ ಕಲ್ಯಾಣ ಇಲಾಖೆಯೊಂದಿಗೆ ಸಮನ್ವಯ ಸಾಧಿಸಿ ಪಾರದರ್ಶಕ ರಕ್ಷಣೆ, ಗುಣಮಟ್ಟದ ಆಹಾರ ಮತ್ತು ವಸತಿ ಹಾಗೂ ಶೈಕ್ಷಣಿಕ ಪ್ರಗತಿಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.'}
                  </p>
                </div>

                {/* Micro CTA footer */}
                <div className="pt-4 border-t border-gray-200/50 flex justify-end">
                  <button
                    type="button"
                    id="finish-read-modal-btn"
                    onClick={() => setActiveArticle(null)}
                    className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-black tracking-wider uppercase py-2.5 px-6 rounded-lg cursor-pointer transition-colors duration-200"
                  >
                    <BookOpenCheck size={14} />
                    <span>{lang === 'EN' ? 'Close Details' : lang === 'HI' ? 'विवरण बंद करें' : 'ವಿವರಗಳನ್ನು ಮುಚ್ಚಿ'}</span>
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
