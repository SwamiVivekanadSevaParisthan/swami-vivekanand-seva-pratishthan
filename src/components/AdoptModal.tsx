import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X,ShieldAlert,FileText, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Lang } from '../types';
import { TRANSLATIONS } from '../data';
import { BouncingDots } from './ui/bouncing-dots';
import { PhoneInput, validatePhoneNumber } from './ui/PhoneInput';
import { COUNTRIES, STATES_BY_COUNTRY } from '../data/countries';

const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL;

  interface AdoptModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Lang;
  onScroll?: (e: React.UIEvent<HTMLDivElement>) => void;
}

export default function AdoptModal({ isOpen, onClose, lang, onScroll }: AdoptModalProps) {
  const [fullName, setFullName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [phoneCountry, setPhoneCountry] = useState('IN');
  const [phone, setPhone] = useState('');
  const [phoneValid, setPhoneValid] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('IN');
  const [stateName, setStateName] = useState('Karnataka');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');

  const handleNameChange = (val: string) => {
    // Allow only alphabetic letters (A–Z, a–z) and spaces
    const onlyLettersAndSpaces = val.replace(/[^A-Za-z ]/g, '');
    // Prevent multiple consecutive spaces
    let cleaned = onlyLettersAndSpaces.replace(/ +/g, ' ');
    // Prevent leading space
    if (cleaned.startsWith(' ')) {
      cleaned = cleaned.trimStart();
    }
    // Limit to 25 characters
    cleaned = cleaned.substring(0, 25);
    setFullName(cleaned);
  };

  const handleNameBlur = () => {
    setNameTouched(true);
    // Trim leading and trailing spaces automatically on blur
    setFullName(prev => prev.trim());
  };

  const getFullNameError = (nameVal: string): string => {
    const trimmed = nameVal.trim();
    if (!trimmed) {
      return '';
    }
    const lettersCount = trimmed.replace(/[^A-Za-z]/g, '').length;
    if (lettersCount < 2) {
      return lang === 'EN' 
        ? 'Name must contain at least 2 alphabetic characters' 
        : 'नाम में कम से कम 2 वर्ण होने चाहिए';
    }
    if (trimmed.length > 25) {
      return lang === 'EN' 
        ? 'Name must not exceed 25 characters' 
        : 'नाम 25 वर्णों से अधिक नहीं होना चाहिए';
    }
    return '';
  };

  const trimmedName = fullName.trim();
  const nameLettersCount = trimmedName.replace(/[^A-Za-z]/g, '').length;
  const isNameValid = nameLettersCount >= 2 && trimmedName.length <= 25;

  const nameError = nameTouched || fullName.length > 0
    ? (fullName.length === 0 
        ? (lang === 'EN' ? 'Full name is required' : 'पूरा नाम आवश्यक है')
        : getFullNameError(fullName))
    : '';
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const t = (key: string) => TRANSLATIONS[key]?.[lang] || key;
  const handleClose = () => {
  setIsSuccess(false);
  setFormError("");
  setFullName("");
  setPhone("");
  setMessage("");
  setPhoneCountry("IN");
  setPhoneValid(false);
  setSelectedCountry("IN");
  setStateName("Karnataka");
  setNameTouched(false);

  onClose();
};
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!fullName.trim()) {
      setFormError(lang === 'EN' ? 'Please enter your full name' : 'कृपया अपना पूरा नाम दर्ज करें');
      return;
    }

    const pVal = validatePhoneNumber(phoneCountry, phone);
    if (!pVal.isValid) {
      setFormError(pVal.errorMsg);
      return;
    }

    if (!stateName.trim()) {
      setFormError(lang === 'EN' ? 'Please select or enter your state / province' : 'कृपया अपना राज्य / प्रांत चुनें या दर्ज करें');
      return;
    }

   setIsProcessing(true);


const controller = new AbortController();

const timeout = setTimeout(() => {
  controller.abort();
}, 15000);

try {

const response = await fetch(SCRIPT_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow",
  signal: controller.signal,
  body: JSON.stringify({
    formType: "adoption",
    name: fullName,
    phone: phone,
    country: selectedCountry,
    state: stateName,
    inquiry: message,
  }),
});

  if (!response.ok) {
  throw new Error("Server returned " + response.status);
}

const result = await response.json();

  console.log("Apps Script Response:", result);

  if (!result.success) {
   throw new Error(
  result.message || "Something went wrong. Please try again."
);
  }

  setIsSuccess(true);
  document
  .getElementById("adopt-modal-fullpage")
  ?.scrollTo({
    top: 0,
    behavior: "smooth",
  });
} catch (err: unknown) {

  console.error("FULL ERROR:", err);

  if (err instanceof DOMException && err.name === "AbortError") {
  setFormError(
    "The request took too long. Please check your internet connection and try again."
  );
} else if (err instanceof Error) {
  setFormError(err.message);
} else {
  setFormError(String(err));
}

} finally {
  clearTimeout(timeout);
  setIsProcessing(false);

}

}; 

  if (!isOpen) return null;

  return (

    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onScroll={onScroll}
        className="fixed inset-0 z-[1000] w-full min-h-screen bg-[#faf7f2] dark:bg-[#0c161a] overflow-y-auto pb-16 scroll-smooth select-none"
        id="adopt-modal-fullpage"
      >
        {/* Top Offset equal to Navbar height */}
        <div className="h-[105px] sm:h-[110px] lg:h-[135px]" />

        {/* Floating "Back to Website" Button for user returns */}
        <button
          onClick={handleClose}
          className="fixed top-24 left-4 sm:left-6 z-[1010] flex items-center gap-2 bg-slate-900/90 dark:bg-white/90 text-white dark:text-slate-900 border border-white/10 dark:border-black/5 rounded-full px-4.5 py-2.5 text-xs font-black shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
          id="adopt-back-btn"
        >
          <ArrowLeft size={14} className="stroke-[3px]" />
          <span>{lang === 'EN' ? 'Back to Website' : lang === 'HI' ? 'वेबसाइट पर वापस' : lang === 'KN' ? 'ವೆಬ್‌ಸೈಟ್‌ಗೆ ಹಿಂತಿರುಗಿ' : 'वेबसाइटवर परत'}</span>
        </button>

        {/* Centered Page Card with gorgeous offsets */}
        <div className="w-full max-w-lg mx-auto p-4 sm:p-6">
          <div className="relative w-full overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-2xl border border-gray-100 dark:border-slate-800 transition-colors duration-300">
            {/* Accent Header panel */}
            <div className="bg-[#f4b223] px-6 py-6 text-slate-900 relative">
              <button
                id="close-adopt-modal"
                onClick={handleClose}
                className="absolute top-6 right-6 text-slate-800 hover:text-slate-950 hover:scale-110 transition-transform duration-200 cursor-pointer"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <div className="flex items-center gap-3">
                <span className="p-2 bg-slate-900/10 rounded-lg">
                  <FileText className="stroke-slate-900" size={22} />
                </span>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-slate-800 font-bold font-mono">
                    {lang === 'EN' ? 'CHILD WELFARE DEPT' : lang === 'HI' ? 'बाल कल्याण विभाग' : lang === 'KN' ? 'ಮಕ್ಕಳ ಕಲ್ಯಾಣ ಇಲಾಖೆ' : 'बाल कल्याण विभाग'}
                  </p>
                  <h3 className="text-base sm:text-lg font-sans font-extrabold tracking-tight">
                    {t('adopt_title')}
                  </h3>
                </div>
              </div>
            </div>

            <div className="px-6 py-6 text-gray-800 dark:text-slate-150">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Heading */}
                <h4 className="text-lg font-sans font-extrabold text-gray-900 dark:text-white leading-tight">
                  {lang === 'EN' ? 'Get Information About Adoption' : lang === 'HI' ? 'दत्तक ग्रहण के बारे में जानकारी प्राप्त करें' : lang === 'KN' ? 'ದತ್ತು ಪ್ರಕ್ರಿಯೆಯ ಬಗ್ಗೆ ಮಾಹಿತಿ ಪಡೆಯಿರಿ' : 'ದತ್ತक प्रक्रियेबद्दल माहिती मिळवा'}
                </h4>

                {/* Prominent Yellow Information Box */}
                <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-xl border border-yellow-200 dark:border-yellow-900/50 flex gap-3 items-start shadow-sm">
                  <span className="text-yellow-600 dark:text-yellow-400 mt-0.5 shrink-0">
                    <ShieldAlert size={20} className="stroke-[2.5]" />
                  </span>
                  <div className="text-xs text-yellow-900 dark:text-yellow-200 leading-relaxed font-medium space-y-2">
                    <strong className="block text-sm font-extrabold text-yellow-950 dark:text-yellow-100">
                      {lang === 'EN' ? 'Important Notice' : lang === 'HI' ? 'महत्वपूर्ण सूचना' : lang === 'KN' ? 'ಪ್ರಮುಖ ಸೂಚನೆ' : 'महत्वाची सूचना'}
                    </strong>
                    <p className="font-semibold text-yellow-950 dark:text-yellow-100">
                      {lang === 'EN' ? 'All adoption procedures are governed strictly by the guidelines of the Central Adoption Resource Authority (CARA), Government of India.' : 
                       lang === 'HI' ? 'सभी दत्तक ग्रहण प्रक्रियाएं केंद्रीय दत्तक ग्रहण संसाधन प्राधिकरण (CARA), भारत सरकार के दिशानिर्देशों द्वारा कड़ाई से शासित होती हैं।' :
                       lang === 'KN' ? 'ಎಲ್ಲಾ ದತ್ತು ಪ್ರಕ್ರಿಯೆಗಳನ್ನು ಭಾರತ ಸರ್ಕಾರದ ಕೇಂದ್ರ ದತ್ತು ಸಂಪನ್ಮೂಲ ಪ್ರಾಧಿಕಾರ (CARA) ಮಾರ್ಗಸೂಚಿಗಳ ಅಡಿಯಲ್ಲಿ ಕಟ್ಟುನಿಟ್ಟಾಗಿ ನಿಯಂತ್ರಿಸಲಾಗುತ್ತದೆ.' :
                       'सर्व दत्तक प्रक्रिया केंद्रीय दत्तक ग्रहण संसाधन प्राधिकरण (CARA), भारत सरकार यांच्या मार्गदर्शक तत्त्वांनुसार काटेकोरपणे नियंत्रित केल्या जातात.'}
                    </p>
                    <p>
                      {lang === 'EN' ? 'Swami Vivekanand Seva Pratishthan (SVSP) does not select, allocate, or match children with prospective adoptive parents. All child-parent matching is carried out exclusively through the CARA centralized system and in accordance with applicable laws and regulations.' :
                       lang === 'HI' ? 'स्वामी विवेकानंद सेवा प्रतिष्ठान (SVSP) भावी दत्तक माता-पिता के साथ बच्चों का चयन, आवंटन या मिलान नहीं करता है। सभी बच्चे-माता-पिता का मिलान विशेष रूप से CARA केंद्रीकृत प्रणाली के माध्यम से और लागू कानूनों और विनियमों के अनुसार किया जाता है।' :
                       lang === 'KN' ? 'ಸ್ವಾಮಿ ವಿವೇಕಾನಂದ ಸೇವಾ ಪ್ರತಿಷ್ಠಾನವು (SVSP) ಮಕ್ಕಳನ್ನು ಆಯ್ಕೆ ಮಾಡುವುದಿಲ್ಲ ಅಥವಾ ದತ್ತು ಪಡೆಯುವ ಪೋಷಕರೊಂದಿಗೆ ಹೊಂದಿಸುವುದಿಲ್ಲ. ಎಲ್ಲಾ ಮಕ್ಕಳ ಹಾಗೂ ಪೋಷಕರ ಹೊಂದಾಣಿಕೆಯನ್ನು ಕೇವಲ CARA ಕೇಂದ್ರೀಕೃತ ವ್ಯವಸ್ಥೆಯ ಮೂಲಕ ನಿಯಮಾನುಸಾರ ಮಾಡಲಾಗುತ್ತದೆ.' :
                       'स्वामी विवेकानंद सेवा प्रतिष्ठान (SVSP) भावी दत्तक पालकांशी मुलांची निवड, वाटप किंवा जुळणी करत नाही. सर्व मुले-पालक जुळणी केवळ CARA केंद्रीकृत प्रणालीद्वारे आणि लागू कायदे आणि नियमांनुसार केली जाते.'}
                    </p>
                    <p>
                      {lang === 'EN' ? 'Please refer to the official CARA guidelines before proceeding with any adoption-related inquiry.' :
                       lang === 'HI' ? 'कृपया दत्तक ग्रहण से संबंधित किसी भी पूछताछ के साथ आगे बढ़ने से पहले आधिकारिक CARA दिशानिर्देशों का संदर्भ लें।' :
                       lang === 'KN' ? 'ದತ್ತು ಪ್ರಕ್ರಿಯೆಗೆ ಸಂಬಂಧಿಸಿದ ಯಾವುದೇ ವಿಚಾರಣೆಯೊಂದಿಗೆ ಮುಂದುವರಿಯುವ ಮೊದಲು ದಯವಿಟ್ಟು ಅಧಿಕೃತ CARA ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ನೋಡಿ.' :
                       'कृपया दत्तक घेण्यासंबंधी कोणत्याही चौकशीसह पुढे जाण्यापूर्वी अधिकृत CARA मार्गदर्शक तत्त्वांचा संदर्भ घ्या.'}
                    </p>
                  </div>
                </div>

                {/* Downloadable PDF link directly below notice */}
                <div className="pb-2">
                  <a 
                   href="/cara-guidelines.pdf"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 underline transition-all duration-200"
                  >
                    <FileText size={16} />
                    <span>{lang === 'EN' ? 'Download CARA Adoption Guidelines PDF' : lang === 'HI' ? 'कारा दत्तक ग्रहण नियमावली PDF डाउनलोड करें' : lang === 'KN' ? 'CARA ದತ್ತು ಮಾರ್ಗಸೂಚಿಗಳ PDF ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ' : 'CARA दत्तक मार्गदर्शक तत्वे PDF डाउनलोड करा'}</span>
                  </a>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">
                    {t('adopt_form_title')}
                  </p>
                  
                  {/* Full Name field */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label htmlFor="adopt-name" className="block text-xs font-semibold text-gray-600 dark:text-slate-300">
                        {t('adopt_full_name')} *
                      </label>
                      <span className="text-[10px] font-mono font-bold text-gray-400">
                        {fullName.length}/25
                      </span>
                    </div>
                    <input
                      type="text"
                      required
                      id="adopt-name"
                      value={fullName}
                      onChange={(e) => handleNameChange(e.target.value)}
                      onBlur={handleNameBlur}
                      placeholder={lang === 'EN' ? 'Enter applicant full name' : 'आवेदक का पूरा नाम दर्ज करें'}
                      className={`w-full bg-white dark:bg-slate-800 border ${nameError ? "border-red-500 focus:ring-red-500" : "border-gray-200 dark:border-slate-700 focus:ring-amber-500"} rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 text-gray-800 dark:text-slate-100`}
                    />
                    {nameError && (
                      <span className="block text-[10px] font-bold text-red-500 font-mono mt-1 pl-1">
                        {nameError}
                      </span>
                    )}
                  </div>

                  {/* Phone field */}
                  <div>
                    <PhoneInput
                      countryCode={phoneCountry}
                      phone={phone}
                      onChange={(code, num, isValid) => {
                        setPhoneCountry(code);
                        setPhone(num);
                        setPhoneValid(isValid);
                      }}
                      label={t('adopt_phone')}
                      required={true}
                      idPrefix="adopt-phone"
                    />
                  </div>

                  {/* Country and State / Province Selection Side by Side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="adopt-country" className="block text-xs font-semibold text-gray-600 dark:text-slate-300 mb-1">
                        Country *
                      </label>
                      <select
                        id="adopt-country"
                        required
                        value={selectedCountry}
                        onChange={(e) => {
                          const val = e.target.value;
                          setSelectedCountry(val);
                          const firstState = STATES_BY_COUNTRY[val]?.[0] || "";
                          setStateName(firstState);
                        }}
                        className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 text-gray-800 dark:text-slate-100 cursor-pointer"
                      >
                        {COUNTRIES.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.flag} {c.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="adopt-state" className="block text-xs font-semibold text-gray-600 dark:text-slate-300 mb-1">
                        State / Province *
                      </label>
                      {STATES_BY_COUNTRY[selectedCountry] ? (
                        <select
                          id="adopt-state"
                          required
                          value={stateName}
                          onChange={(e) => setStateName(e.target.value)}
                          className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 text-gray-800 dark:text-slate-100 cursor-pointer animate-in fade-in duration-200"
                        >
                          {STATES_BY_COUNTRY[selectedCountry].map((st) => (
                            <option key={st} value={st}>
                              {st}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="text"
                          id="adopt-state"
                          required
                          value={stateName}
                          onChange={(e) => setStateName(e.target.value)}
                          placeholder="Enter state / province"
                          className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 text-gray-800 dark:text-slate-100 animate-in fade-in duration-200"
                        />
                      )}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="adopt-message" className="block text-xs font-semibold text-gray-600 dark:text-slate-300 mb-1">
                      {t('adopt_msg')}
                    </label>
                    <textarea
                      rows={3}
                      id="adopt-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={lang === 'EN' ? 'Enter your inquiries regarding CARA guidelines, eligibility, registration, etc.' : lang === 'HI' ? 'कारा दिशानिर्देशों, पात्रता, पंजीकरण आदि के बारे में अपनी पूछताछ दर्ज करें।' : lang === 'KN' ? 'CARA ಮಾರ್ಗಸೂಚಿಗಳು, ಅರ್ಹತೆ, ನೋಂದಣಿ ಇತ್ಯಾದಿಗಳ ಬಗ್ಗೆ ನಿಮ್ಮ ವಿಚಾರಣೆಗಳನ್ನು ನಮೂದಿಸಿ.' : 'CARA मार्गदर्शक तत्त्वे, पात्रता, नोंदणी इत्यादींबद्दलच्या तुमच्या चौकशीची नोंद करा.'}
                      className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 text-gray-800 dark:text-slate-100"
                    />
                  </div>
                </div>

                {formError && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold p-3 rounded-xl font-mono">
                    {formError}
                  </div>
                )}

                {/* Regulation compliance text */}
                <p className="text-[10px] text-gray-400 leading-normal text-center">
                  {lang === 'EN' ? 'Adoption from our specialized homes is fully regulated under the Ministry of Women and Child Development (CARA guidelines). No charge applies for pre-screening inquiries.' :
                   lang === 'HI' ? 'हमारे विशिष्ट गृहों से दत्तक ग्रहण पूरी तरह से महिला एवं बाल विकास मंत्रालय (कारा दिशानिर्देश) के तहत विनियमित है। पूछताछ के लिए कोई शुल्क नहीं है।' :
                   lang === 'KN' ? 'ನಮ್ಮ ಗೃಹಗಳಿಂದ ದತ್ತು ಪ್ರಕ್ರಿಯೆಯು ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳ ಅಭಿವೃದ್ಧಿ ಸಚಿವಾಲಯದ (CARA) ಅಡಿಯಲ್ಲಿ ನಿಯಂತ್ರಿಸಲ್ಪಡುತ್ತದೆ.' :
                   'आमच्या मान्यताप्राप्त बाल आश्रमातून दत्तक प्रक्रिया ही महिला व बाल विकास मंत्रालयाच्या (CARA मार्गदर्शक तत्त्वे) अंतर्गत पूर्णपणे कायदेशीररित्या केली जाते.'}
                </p>

                {/* Submit button */}
                <button
                  type="submit"
                  id="adopt-submit-btn"
                  disabled={isProcessing || !isNameValid || !phoneValid}
                  className="w-full bg-slate-900 hover:bg-amber-600 active:scale-[0.99] disabled:bg-gray-400 disabled:cursor-not-allowed font-bold text-white tracking-wide py-3 px-6 rounded-xl shadow-md cursor-pointer transition-all duration-200 text-center flex items-center justify-center gap-2 hover:shadow-lg mt-2 font-sans text-sm"
                >
                  {isProcessing ? (
                    <BouncingDots dots={3} message={lang === 'EN' ? 'Verifying guidelines...' : lang === 'HI' ? 'दिशा-निर्देशों का सत्यापन...' : lang === 'KN' ? 'ಮಾರ್ಗಸೂಚಿಗಳ ಪರಿಶೀಲನೆ...' : 'मार्गदर्शक तत्त्वांचे सत्यापन...'} />
                  ) : (
                    <span>{t('adopt_submit')}</span>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center"
              >
                <div className="mx-auto w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle2 size={32} className="animate-bounce" />
                </div>
               <h4 className="text-2xl font-extrabold text-green-700 mb-3 tracking-tight">
  {lang === 'EN'
    ? 'Thank You!'
    : lang === 'HI'
    ? 'धन्यवाद!'
    : lang === 'KN'
    ? 'ಧನ್ಯವಾದಗಳು!'
    : 'धन्यवाद!'}
</h4>

<p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-6">
  {lang === 'EN'
    ? 'Your adoption inquiry has been submitted successfully. Our team will review your request and contact you shortly.'
    : lang === 'HI'
    ? 'आपकी दत्तक ग्रहण संबंधी पूछताछ सफलतापूर्वक जमा हो गई है। हमारी टीम आपके अनुरोध की समीक्षा करेगी और शीघ्र ही आपसे संपर्क करेगी।'
    : lang === 'KN'
    ? 'ನಿಮ್ಮ ದತ್ತು ವಿಚಾರಣೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ. ನಮ್ಮ ತಂಡವು ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ.'
    : 'तुमची दत्तक चौकशी यशस्वीरित्या सबमिट झाली आहे. आमची टीम तुमच्या विनंतीची पाहणी करून लवकरच तुमच्याशी संपर्क साधेल.'}
</p>

                <div className="bg-white/80 border border-gray-100 rounded-xl p-4 text-left max-w-md mx-auto mb-6 space-y-2.5">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{lang === 'EN' ? 'Applicant Name:' : lang === 'HI' ? 'आवेदक:' : lang === 'KN' ? 'ಅರ್ಜಿದಾರರು:' : 'अर्जदार Name:'}</span>
                    <span className="font-semibold text-gray-800">{fullName}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{lang === 'EN' ? 'Contact:' : lang === 'HI' ? 'संपर्क:' : lang === 'KN' ? 'ಸಂಪರ್ಕ:' : 'संपर्क क्रमांक:'}</span>
                    <span className="font-semibold text-gray-800">{phone}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{lang === 'EN' ? 'State Authority:' : lang === 'HI' ? 'राज्य प्राधिकरण:' : lang === 'KN' ? 'ರಾಜ್ಯ ಪ್ರಾಧಿಕಾರ:' : 'राज्य प्राधिकरण:'}</span>
                    <span className="font-semibold text-gray-800">{stateName}</span>
                  </div>
                </div>

                <button
                  type="button"
                  id="adopt-success-close-btn"
                  onClick={handleClose}
                  className="bg-amber-600 hover:bg-amber-700 active:scale-95 text-white text-sm font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-200 cursor-pointer"
                >
                  {t('close')}
                </button>
              </motion.div>
            )}
          </div>
        </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
