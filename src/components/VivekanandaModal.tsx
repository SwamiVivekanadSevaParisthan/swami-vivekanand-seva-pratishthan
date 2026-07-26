import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Award, BookOpen, Quote, Sparkles } from 'lucide-react';
import { Lang } from '../types';
import swamiPortrait from '../assets/images/swami_vivekananda_portrait_1782367502886.jpg';

interface VivekanandaModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Lang;
}

const VIVEKANANDA_BIO = {
  EN: {
    title: "Who was Swami Vivekananda?",
    subtitle: "Philosopher, Spiritual Leader & Reformer",
    birth: "Born: January 12, 1863, Kolkata, India",
    death: "Mahasamadhi: July 4, 1902",
    mainText: "Swami Vivekananda was a great Indian philosopher, spiritual leader, and disciple of Sri Ramakrishna. He was born on January 12, 1863, in Kolkata, India. He played a significant role in introducing Indian philosophy, especially Vedanta and Yoga, to the Western world through his famous speech at the Parliament of the World's Religions in Chicago in 1893. Swami Vivekananda inspired millions of people with his teachings on self-confidence, education, service to humanity, and national pride. He founded the Ramakrishna Mission in 1897 to promote education, healthcare, and social welfare. His life and teachings continue to motivate people to develop strength of character, compassion, and a spirit of service.",
    famousQuotesTitle: "Key Teachings & Quotes",
    quote1: "Arise, awake, and stop not till the goal is reached.",
    quote2: "You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul.",
    quote3: "The greatest religion is to be true to your own nature. Have faith in yourselves.",
    quote4: "Service to humanity is service to God.",
    close: "Close"
  },
  HI: {
    title: "स्वामी विवेकानंद कौन थे?",
    subtitle: "दार्शनिक, आध्यात्मिक नेता और समाज सुधारक",
    birth: "जन्म: 12 जनवरी, 1863, कोलकाता, भारत",
    death: "महासमाधि: 4 जुलाई, 1902",
    mainText: "स्वामी विवेकानंद एक महान भारतीय दार्शनिक, आध्यात्मिक नेता और श्री रामकृष्ण के परम शिष्य थे। उन्होंने 1893 में शिकागो में विश्व धर्म संसद में अपने प्रसिद्ध भाषण के माध्यम से पश्चिमी दुनिया को भारतीय दर्शन, विशेष रूप से वेदांत और योग से परिचित कराने में महत्वपूर्ण भूमिका निभाई। स्वामी विवेकानंद ने आत्मविश्वास, शिक्षा, मानवता की सेवा और राष्ट्रीय गौरव पर अपने उपदेशों से लाखों लोगों को प्रेरित किया। उन्होंने शिक्षा, स्वास्थ्य सेवा और सामाजिक कल्याण को बढ़ावा देने के लिए 1897 में रामकृष्ण मिशन की स्थापना की। उनका जीवन और विचार लोगों को चरित्र की शक्ति, करुणा और सेवा की भावना विकसित करने के लिए प्रेरित करते रहते हैं।",
    famousQuotesTitle: "प्रमुख शिक्षाएं और विचार",
    quote1: "उठो, जागो और तब तक मत रुको जब तक लक्ष्य प्राप्त न हो जाए।",
    quote2: "आपको अंदर से बाहर की ओर बढ़ना होगा। कोई आपको सिखा नहीं सकता, कोई आपको आध्यात्मिक नहीं बना सकता। आपकी अपनी आत्मा के अलावा कोई दूसरा शिक्षक नहीं है।",
    quote3: "सबसे बड़ा धर्म अपने स्वभाव के प्रति सच्चा होना है। अपने आप पर विश्वास रखें।",
    quote4: "मानवता की सेवा ही भगवान की सेवा है।",
    close: "बंद करें"
  },
  KN: {
    title: "ಸ್ವಾಮಿ ವಿವೇಕಾನಂದರು ಯಾರು?",
    subtitle: "ತತ್ವಜ್ಞಾನಿ, ಆಧ್ಯಾತ್ಮಿಕ ನಾಯಕ ಮತ್ತು ಸಮಾಜ ಸುಧಾರಕ",
    birth: "ಜನನ: ಜನವರಿ 12, 1863, ಕೋಲ್ಕತ್ತಾ, ಭಾರತ",
    death: "ಮಹಾಸಮಾಧಿ: ಜುಲೈ 4, 1902",
    mainText: "ಸ್ವಾಮಿ ವಿವೇಕಾನಂದರು ಭಾರತದ ಶ್ರೇಷ್ಠ ತತ್ವಜ್ಞಾನಿ, ಆಧ್ಯಾತ್ಮಿಕ ನಾಯಕ ಮತ್ತು ಶ್ರೀ ರಾಮಕೃಷ್ಣ ಪರಮಹಂಸರ ಶಿಷ್ಯರಾಗಿದ್ದರು. ಅವರು 1893 ರಲ್ಲಿ ಚಿಕಾಗೋದಲ್ಲಿ ನಡೆದ ವಿಶ್ವ ಧರ್ಮ ಸಂಸತ್ತಿನಲ್ಲಿ ತಮ್ಮ ಪ್ರಸಿದ್ಧ ಭಾಷಣದ ಮೂಲಕ ಭಾರತೀಯ ತತ್ವಶಾಸ್ತ್ರವನ್ನು, ವಿಶೇಷವಾಗಿ ವೇದಾಂತ ಮತ್ತು ಯೋಗವನ್ನು ಪಾಶ್ಚಿಮಾತ್ಯ ಜಗತ್ತಿಗೆ ಪರಿಚಯಿಸುವಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸಿದರು. ಸ್ವಾಮಿ ವಿವೇಕಾನಂದರು ಆತ್ಮವಿಶ್ವಾಸ, ಶಿಕ್ಷಣ, ಮಾನವೀಯ ಸೇವೆ ಮತ್ತು ರಾಷ್ಟ್ರೀय ಹೆಮ್ಮೆಯ ಬಗ್ಗೆ ತಮ್ಮ ಬೋಧನೆಗಳ ಮೂಲಕ ಲಕ್ಷಾಂತರ ಜನರಿಗೆ ಪ್ರೇರಣೆ ನೀಡಿದರು. ಶಿಕ್ಷಣ, ಆರೋಗ್ಯ ರಕ್ಷಣೆ ಮತ್ತು ಸಾಮಾಜಿಕ ಕಲ್ಯಾಣವನ್ನು ಉತ್ತೇಜಿಸಲು ಅವರು 1897 ರಲ್ಲಿ ರಾಮಕೃಷ್ಣ ಮಿಷನ್ ಅನ್ನು ಸ್ಥಾಪಿಸಿದರು. ಅವರ ಜೀವನ ಮತ್ತು ಬೋಧನೆಗಳು ಜನರಲ್ಲಿ ಚಾರಿತ್ರ್ಯದ ಶಕ್ತಿ, ಕರುಣೆ ಮತ್ತು ಸೇವಾ ಮನೋಭಾವವನ್ನು ಬೆಳೆಸಲು ಪ್ರೇರೇಪಿಸುತ್ತಲೇ ಇವೆ.",
    famousQuotesTitle: "ಪ್ರಮುಖ ಬೋಧನೆಗಳು ಮತ್ತು ಉಲ್ಲೇಖಗಳು",
    quote1: "ಏಳಿ, ಎದ್ದೇಳಿ, ಗುರಿ ಮುಟ್ಟುವ ತನಕ ನಿಲ್ಲದಿರಿ.",
    quote2: "ನೀವು ಒಳಗಿನಿಂದ ಬೆಳೆಯಬೇಕು. ಯಾರೂ ನಿಮಗೆ ಕಲಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ, ಯಾರೂ ನಿಮ್ಮನ್ನು ಆಧ್ಯಾತ್ಮಿಕರನ್ನಾಗಿ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ. ನಿಮ್ಮ ಆತ್ಮವನ್ನು ಬಿಟ್ಟು ಬೇರೆ ಯಾವುದೇ ಗುರು ಇಲ್ಲ.",
    quote3: "ನಿಮ್ಮ ಸ್ವಂತ ಸ್ವಭಾವಕ್ಕೆ ನಿಷ್ಠರಾಗಿರುವುದೇ ಅತ್ಯಂತ ಶ್ರೇಷ್ಠ ಧರ್ಮವಾಗಿದೆ. ನಿಮ್ಮಲ್ಲಿ ನಂಬಿಕೆ ಇಡಿ.",
    quote4: "ಮಾನವ ಸೇವೆಯೇ ಮಾಧವ ಸೇವೆ.",
    close: "ಮುಚ್ಚಿ"
  },
  MR: {
    title: "स्वामी विवेकानंद कोण होते?",
    subtitle: "तत्वज्ञ, आध्यात्मिक नेते आणि समाजसुधारक",
    birth: "जन्म: १२ जानेवारी १८६३, कोलकाता, भारत",
    death: "महासमाधी: ४ जुलै १९०२",
    mainText: "स्वामी विवेकानंद हे एक महान भारतीय तत्वज्ञ, आध्यात्मिक नेते आणि श्री रामकृष्ण परमहंस यांचे पट्टशिष्य होते. त्यांनी १८९३ मध्ये शिकागो येथील जागतिक धर्म परिषदेत आपल्या प्रसिद्ध भाषणाद्वारे पाश्चात्य जगाला भारतीय तत्त्वज्ञानाची, विशेषतः वेदांत आणि योगाची ओळख करून देण्यात महत्त्वपूर्ण भूमिका बजावली. स्वामी विवेकानंदांनी आत्मविश्वास, शिक्षण, मानवतेची सेवा आणि राष्ट्रीय अभिमान यावरील आपल्या शिकवणुकीतून कोट्यवधी लोकांना प्रेरित केले. त्यांनी शिक्षण, आरोग्य आणि समाजकल्याण वाढवण्यासाठी १८९७ मध्ये रामकृष्ण मिशनची स्थापना केली. त्यांचे जीवन आणि शिकवण लोकांना चारित्र्यनिर्मिती, करुणा आणि सेवाभाव विकसित करण्यासाठी सातत्याने प्रेरित करत आहे.",
    famousQuotesTitle: "प्रमुख विचार व शिकवण",
    quote1: "उठा, जागे व्हा आणि ध्येय साध्य होईपर्यंत थांबू नका.",
    quote2: "तुम्हाला आतून बाहेर वाढावे लागेल. तुम्हाला कोणीही शिकवू शकत नाही, कोणीही तुम्हाला आध्यात्मिक बनवू शकत नाही. तुमच्या स्वतःच्या आत्म्याशिवाय दुसरा कोणताही गुरु नाही.",
    quote3: "स्वतःच्या स्वभावाशी प्रामाणिक राहणे हाच सर्वात मोठा धर्म आहे. स्वतःवर विश्वास ठेवा.",
    quote4: "मानव सेवा हीच खरी ईश्वर सेवा आहे.",
    close: "बंद करा"
  }
};

export default function VivekanandaModal({ isOpen, onClose, lang }: VivekanandaModalProps) {
  const content = VIVEKANANDA_BIO[lang] || VIVEKANANDA_BIO.EN;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-4xl bg-bg-card border border-border-primary rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col lg:flex-row max-h-[90vh] lg:max-h-[85vh] text-text-primary"
          >
            {/* Left Column: Image with Gradient Cover */}
            <div className="relative lg:w-2/5 h-48 lg:h-auto min-h-[180px] lg:min-h-[400px] overflow-hidden bg-slate-900 flex-shrink-0">
              <img
                src={swamiPortrait}
                alt="Swami Vivekananda Painting"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
              
              {/* Overlay Details */}
              <div className="absolute bottom-4 left-5 right-5 text-white space-y-1">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#f4b223]/20 border border-[#f4b223]/30 text-[10px] font-mono uppercase font-black text-amber-400">
                  <Sparkles size={10} className="animate-spin-slow" />
                  Philosopher-Monk
                </span>
                <h3 className="text-lg lg:text-xl font-sans font-black tracking-tight drop-shadow-md">
                  Swami Vivekananda
                </h3>
                <p className="text-[10px] lg:text-xs text-slate-300 drop-shadow">
                  1863 – 1902
                </p>
              </div>
            </div>

            {/* Right Column: Information Flow */}
            <div className="flex-1 p-6 lg:p-8 overflow-y-auto flex flex-col justify-between max-h-[calc(90vh-180px)] lg:max-h-[85vh]">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-bg-secondary text-text-tertiary hover:text-text-primary transition-colors border border-transparent hover:border-border-primary z-20 bg-bg-card/80 backdrop-blur-sm"
              >
                <X size={20} />
              </button>

              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-1.5">
                  <h2 className="text-xl lg:text-2xl font-sans font-black tracking-tight text-[#00828a] dark:text-[#33b1b9]">
                    {content.title}
                  </h2>
                  <p className="text-xs lg:text-sm font-mono font-bold tracking-wider uppercase text-amber-600 dark:text-amber-400">
                    {content.subtitle}
                  </p>
                </div>

                {/* Timeline metadata badges */}
                <div className="flex flex-wrap gap-3 text-xs text-text-tertiary font-medium">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-bg-secondary border border-border-primary">
                    <Calendar size={14} className="text-teal-600" />
                    {content.birth}
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-bg-secondary border border-border-primary">
                    <MapPin size={14} className="text-teal-600" />
                    {lang === 'EN' ? 'Kolkata, India' : lang === 'HI' ? 'कोलकाता, भारत' : 'ಕೋಲ್ಕತ್ತಾ, ಭಾರತ'}
                  </span>
                </div>

                {/* Main Narrative Text */}
                <div className="text-sm lg:text-base text-text-secondary leading-relaxed font-sans font-medium space-y-4">
                  <p>{content.mainText}</p>
                </div>

                {/* Quotes Section */}
                <div className="space-y-3 pt-3 border-t border-border-primary">
                  <h4 className="text-xs font-mono font-black tracking-widest uppercase text-text-tertiary flex items-center gap-2">
                    <BookOpen size={14} className="text-[#00828a]" />
                    {content.famousQuotesTitle}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[content.quote1, content.quote2, content.quote3, content.quote4].map((q, i) => (
                      <div
                        key={i}
                        className="p-4 bg-bg-secondary border border-border-primary/50 hover:border-border-primary rounded-2xl flex gap-3 transition-all duration-200"
                      >
                        <Quote size={18} className="text-[#f4b223] flex-shrink-0 mt-1" />
                        <p className="text-xs italic text-text-secondary leading-normal font-serif">
                          {q}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-4 border-t border-border-primary flex justify-end">
                <button
                  onClick={handleClose}
                  className="px-5 py-2.5 rounded-xl bg-[#00828a] hover:bg-[#006e75] text-white text-xs font-mono font-bold tracking-wider uppercase shadow-md transition-all duration-200"
                >
                  {content.close}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
