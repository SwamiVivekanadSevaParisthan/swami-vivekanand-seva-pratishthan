import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Send, CheckCircle, ShieldCheck } from 'lucide-react';
import { Lang } from '../types';
import { TRANSLATIONS } from '../data';
import { PhoneInput, validatePhoneNumber } from './ui/PhoneInput';
import { LocationMap } from "./ui/LocationMap"; 
import {
  cleanName,
  sanitizeInput,
  validateName,
  MAX_NAME_LENGTH,
} from "../utils/validation";

const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL;

interface ContactSectionProps {
  lang: Lang;
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: '', email: '', msg: '' });
  const [phoneCountry, setPhoneCountry] = useState('IN');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);

  const t = (key: string) => TRANSLATIONS[key]?.[lang] || key;

  const handleNameBlur = () => {
    setNameTouched(true);
    // Trim leading and trailing spaces automatically on blur
    setFormData(prev => ({ ...prev, name: prev.name.trim() }));
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

  const trimmedName = formData.name.trim();
  const nameLettersCount = trimmedName.replace(/[^A-Za-z]/g, '').length;
  const isNameValid = nameLettersCount >= 2 && trimmedName.length <= 25;

  const nameError = nameTouched || formData.name.length > 0
    ? (formData.name.length === 0 
        ? (lang === 'EN' ? 'Full name is required' : 'पूरा नाम आवश्यक है')
        : getFullNameError(formData.name))
    : '';

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setEmailError('');

    const sanitizedName = sanitizeInput(formData.name);
    const sanitizedEmail = sanitizeInput(formData.email);
    const sanitizedMsg = sanitizeInput(formData.msg);

    const trimmedSanitizedName = sanitizedName.trim();
    const lettersCount = trimmedSanitizedName.replace(/[^A-Za-z]/g, '').length;

    if (!trimmedSanitizedName) {
      setFormError(lang === 'EN' ? 'Full name is required' : 'पूरा नाम आवश्यक है');
      return;
    }

    if (lettersCount < 2) {
      setFormError(lang === 'EN' ? 'Name must contain at least 2 alphabetic characters' : 'नाम में कम से कम 2 वर्ण होने चाहिए');
      return;
    }

    if (trimmedSanitizedName.length > 25) {
      setFormError(lang === 'EN' ? 'Name must not exceed 25 characters' : 'नाम 25 वर्णों से अधिक नहीं होना चाहिए');
      return;
    }

    // Check for any invalid characters (only A-Z, a-z and spaces allowed, no consecutive spaces)
    if (/[^A-Za-z ]/.test(trimmedSanitizedName) || /  /.test(trimmedSanitizedName)) {
      setFormError(lang === 'EN' ? 'Invalid characters or spacing in name' : 'नाम में अमान्य वर्ण या रिक्ति');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      setEmailError(lang === 'EN' ? 'Please enter a valid email address' : 'कृपया मान्य ईमेल पता दर्ज करें');
      return;
    }

    const pVal = validatePhoneNumber(phoneCountry, phoneNumber);
    if (!pVal.isValid) {
      setFormError(pVal.errorMsg);
      return;
    }

    if (!sanitizedMsg) {
      setFormError(lang === 'EN' ? 'Message content is required' : 'संदेश सामग्री आवश्यक है');
      return;
    }

    setLoading(true);

try {
 const response = await fetch(SCRIPT_URL, {
  method: "POST",
  redirect: "follow",
  body: JSON.stringify({
    formType: "contact",
    name: sanitizedName,
    email: sanitizedEmail,
    phone: phoneNumber,
    message: sanitizedMsg,
  }),
});

  const result = await response.json();

  console.log("Apps Script Response:", result);

  if (!result.success) {
    throw new Error(
  result.message || "Something went wrong. Please try again."
);
  }

  setSuccess(true);
  setFormData({
    name: "",
    email: "",
    msg: "",
  });

  setPhoneNumber("");
  setPhoneCountry("IN");
  setNameTouched(false);

  setTimeout(() => {
    setSuccess(false);
  }, 5000);

} catch (err) {

  setFormError("Unable to send message. Please try again.");

} finally {

  setLoading(false);

}


 
};
  return (
    <section id="contact-us" className="bg-transparent py-20 sm:py-28 text-text-secondary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Tagline */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-mono font-black tracking-widest text-[#d97706] uppercase bg-amber-50/50 dark:bg-slate-900 border border-amber-100 dark:border-slate-800 px-3.5 py-1.5 rounded-full">
            {lang === 'EN' ? 'REACH OUT' : lang === 'HI' ? 'सम्पर्क करें' : 'ಸಂಪರ್ಕ'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight text-text-primary leading-tight">
            {lang === 'EN' ? 'Contact Our Trust Office' : lang === 'HI' ? 'हमारे ट्रस्ट कार्यालय से संपर्क करें' : 'ನಮ್ಮ ಟ್ರಸ್ಟ್ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ'}
          </h2>
          <p className="text-text-tertiary text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {lang === 'EN' 
              ? 'Have queries regarding legal CARA child adoptions, sponsorship schedules, or volunteering plans? Drop us a line or visit us directly.' 
              : lang === 'HI'
              ? 'क्या आपके पास कानूनी कारा बाल दत्तक ग्रहण, प्रायोजन कार्यक्रम या स्वयंसेवी योजनाओं के बारे में प्रश्न हैं? हमें लिखें या सीधे हमसे मिलें।'
              : 'ಕಾನೂನುಬದ್ಧ CARA ದತ್ತು ಪ್ರಕ್ರಿಯೆಗಳು, ಪ್ರಾಯೋಜಕತ್ವಗಳು ಅಥವಾ ಸ್ವಯಂಸೇವಾ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳಿವೆಯೇ? ನಮಗೆ ಬರೆಯಿರಿ ಅಥವಾ ನೇರವಾಗಿ ಭೇಟಿ ನೀಡಿ.'}
          </p>
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Panel: Address, Phones, WhatsApp & Iframe MAP */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Direct Cards Info */}
            <div className="bg-bg-secondary border border-border-primary p-6 sm:p-8 rounded-2xl space-y-5">
              <h3 className="font-sans font-black text-xl text-text-primary mb-2">
                SWAMI VIVEKANAND SEVA PRATISHTHAN
              </h3>
              
              <div className="space-y-4 text-sm sm:text-base">
                {/* Address vector */}
                <div className="flex gap-3.5 items-start">
                  <MapPin className="text-amber-600 shrink-0 mt-1" size={18} />
                  <div>
                    <span className="block text-xs font-mono font-black text-text-tertiary uppercase tracking-wider mb-0.5">
                      {lang === 'EN' ? 'Registered Office Address' : lang === 'HI' ? 'पंजीकृत कार्यालय का पता' : 'ನೋಂದಾಯಿತ ಕಚೇರಿ ವಿಳಾಸ'}
                    </span>
                    <p className="text-text-secondary text-sm font-semibold leading-relaxed">
                      Nyay Marg, Near SP Office, Double Road, Subhash Nagar, Belagavi, Karnataka – 590016
                    </p>
                  </div>
                </div>

                {/* Click to call Phones */}
                <div className="flex gap-3.5 items-start">
                  <Phone className="text-amber-600 shrink-0 mt-1" size={18} />
                  <div>
                    <span className="block text-xs font-mono font-black text-text-tertiary uppercase tracking-wider mb-0.5">
                      {lang === 'EN' ? 'Telephone Lines (Click to Call)' : lang === 'HI' ? 'टेलीफोन लाइन्स (कॉल करें)' : 'ದೂರವಾಣಿ ಸಂಖ್ಯೆಗಳು (ಕರೆ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ)'}
                    </span>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm font-bold text-[#00828a]">
                      <a href="tel:08312473919" className="hover:text-amber-600 transition flex items-center gap-1">
                        <span>0831 247 3919</span>
                      </a>
                      <a href="tel:+919606869122" className="hover:text-amber-600 transition flex items-center gap-1">
                        <span>+91 96068 69122</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Mailbox */}
                <div className="flex gap-3.5 items-start pt-2 border-t border-border-primary/50">
                  <Mail className="text-amber-600 shrink-0 mt-1" size={18} />
                  <div>
                    <span className="block text-xs font-mono font-black text-text-tertiary uppercase tracking-wider mb-0.5">
                      Email Mailbox
                    </span>
                  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=vivekanand.chikkumbimath@gmail.com&su=Inquiry%20Regarding%20SVSP"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm font-bold text-[#00828a] hover:text-amber-600 transition block break-all"
>
  vivekanand.chikkumbimath@gmail.com
</a>
                  </div>
                </div>

              </div>
            </div>

            {/* Embedded Google Map Iframe with modern round-edges */}
           <div className="flex justify-center py-6">
  <LocationMap
    location="Swami Vivekanad Seva Pratishthan"
  />
</div>

          </div>

          {/* Right Panel: Functional Message Submission Form */}
          <div className="lg:col-span-6 bg-bg-secondary border border-border-primary rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <h3 className="font-sans font-black text-xl text-text-primary mb-3 flex items-center gap-2">
              <ShieldCheck className="text-amber-600" size={20} />
              <span>
                {lang === 'EN' ? 'Write Us A Message' : lang === 'HI' ? 'हमें संदेश लिखें' : 'ನಮಗೆ ಸಂದೇಶ ಬರೆಯಿರಿ'}
              </span>
            </h3>

            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleFormSubmit}
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label htmlFor="contact-fullname" className="block text-xs font-semibold text-text-secondary">
                        {lang === 'EN' ? 'Your Full Name' : lang === 'HI' ? 'आपका पूरा नाम' : 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು'} *
                      </label>
                      <span className="text-[10px] font-mono font-bold text-text-tertiary">
                        {formData.name.length}/25
                      </span>
                    </div>
                    <input
                      id="contact-fullname"
                      type="text"
                      required
                      placeholder={lang === 'EN' ? 'Enter your full name' : 'अपना पूरा नाम दर्ज करें'}
                      value={formData.name}
                      onChange={(e) =>
  setFormData((prev) => ({
    ...prev,
    name: cleanName(e.target.value),
  }))
}
                      onBlur={handleNameBlur}
                      className={`w-full bg-bg-card border ${nameError ? "border-red-500 focus:ring-red-500" : "border-border-primary focus:ring-amber-500"} rounded-xl py-3 px-4 text-xs font-semibold text-text-primary focus:outline-none focus:ring-1`}
                    />
                    {nameError && (
                      <span className="block text-[10px] font-bold text-red-500 font-mono mt-1 pl-1">
                        {nameError}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-emailAddress" className="block text-xs font-semibold text-text-secondary mb-1">
                        {lang === 'EN' ? 'Email Address' : lang === 'HI' ? 'ईमेल पता' : 'ಇಮೇಲ್ ವಿಳಾಸ'} *
                      </label>
                      <input
                        id="contact-emailAddress"
                        type="email"
                        required
                        placeholder={lang === 'EN' ? 'Enter your email address' : 'अपना ईमेल दर्ज करें'}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          setEmailError('');
                        }}
                        className={`w-full bg-bg-card border ${emailError ? "border-red-500" : "border-border-primary"} rounded-xl py-3 px-4 text-xs font-semibold text-text-primary focus:outline-none focus:ring-1 focus:ring-amber-500`}
                      />
                      {emailError && (
                        <span className="block text-[10px] font-bold text-red-500 font-mono mt-1">{emailError}</span>
                      )}
                    </div>
                    <div>
                      <PhoneInput
                        countryCode={phoneCountry}
                        phone={phoneNumber}
                        onChange={(code, num, isValid) => {
                          setPhoneCountry(code);
                          setPhoneNumber(num);
                          setIsPhoneValid(isValid);
                        }}
                        label={lang === 'EN' ? 'Mobile Number' : lang === 'HI' ? 'मोबाइल नंबर' : 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ'}
                        required={false}
                        idPrefix="contact-phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-msgText" className="block text-xs font-semibold text-text-secondary mb-1">
                      {lang === 'EN' ? 'Message / Sponsorship query' : lang === 'HI' ? 'संदेश / प्रायोजन पूछताछ' : 'ಸಂದೇಶ / ಪ್ರಾಯೋಜಕತ್ವ ವಿಚಾರಣೆ'} *
                    </label>
                    <textarea
                      id="contact-msgText"
                      required
                      rows={4}
                      placeholder={lang === 'EN' ? 'Explain how you want to support or ask about child adoptions...' : 'पूछताछ विवरण यहाँ लिखें...'}
                      value={formData.msg}
                      onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                      className="w-full bg-bg-card border border-border-primary rounded-xl py-3 px-4 text-xs font-semibold text-text-primary focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  {formError && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-[11px] font-bold p-3 rounded-xl font-mono">
                      {formError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading || !isPhoneValid || !isNameValid}
                    className="w-full bg-amber-600 hover:bg-amber-700 active:scale-[0.98] disabled:bg-gray-400 font-bold text-white tracking-wide py-3.5 px-6 rounded-xl shadow-md cursor-pointer transition-all duration-200 text-center flex items-center justify-center gap-2 text-xs uppercase"
                  >
                    {loading ? (
                      <span>Sending Query Gateway...</span>
                    ) : (
                      <>
                        <Send size={13} />
                        <span>{lang === 'EN' ? 'Send Message' : lang === 'HI' ? 'संदेश भेजें' : 'ಸಂದೇಶ ಕಳುಹಿಸಿ'}</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="submit-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-green-50 text-green-700 border border-green-150 p-6 rounded-2xl text-center space-y-4 my-auto py-12"
                >
                  <div className="flex justify-center">
                    <CheckCircle className="text-green-600 animate-bounce" size={40} />
                  </div>
                  <h4 className="font-sans font-black text-lg">
                    {lang === 'EN' ? 'Message Sent Successfully!' : lang === 'HI' ? 'संदेश सफलतापूर्वक भेजा गया!' : 'ಸಂದೇಶ ಯಶಸ್ವಿಯಾಗಿ ರವಾನೆಯಾಗಿದೆ!'}
                  </h4>
                  <p className="text-xs text-green-600 font-medium font-sans leading-relaxed">
                    {lang === 'EN'
                      ? 'Thank you for contacting Swami Vivekanand Seva Pratishthan. Our administration office will analyze your message and reply via email within 24 working hours.'
                      : lang === 'HI'
                      ? 'स्वामी विवेकानंद सेवा प्रतिष्ठान से संपर्क करने के लिए धन्यवाद। हमारा कार्यालय आपके संदेश का विश्लेषण करेगा और 24 घंटे में उत्तर देगा।'
                      : 'ಸ್ವಾಮಿ ವಿವೇಕಾನಂದ ಸೇವಾ ಪ್ರತಿಷ್ಠಾನವನ್ನು ಸಂಪರ್ಕಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು. ನಮ್ಮ ಕಚೇರಿಯು ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಪರಿಶೀಲಿಸಿ 24 ಗಂಟೆಗಳಲ್ಲಿ ಉತ್ತರಿಸುತ್ತದೆ.'}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
