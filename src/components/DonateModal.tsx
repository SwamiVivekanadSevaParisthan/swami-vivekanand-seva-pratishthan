import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Heart, Shield, CreditCard, Landmark, Loader2, ArrowLeft } from 'lucide-react';
import { Lang } from '../types';
import { TRANSLATIONS } from '../data';
import { BouncingDots } from './ui/bouncing-dots';
import { PhoneInput, validatePhoneNumber } from './ui/PhoneInput';
import { COUNTRIES, STATES_BY_COUNTRY } from '../data/countries';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Lang;
  initialAmount?: number;
  initialFrequency?: 'once' | 'monthly';
  onScroll?: (e: React.UIEvent<HTMLDivElement>) => void;
}

export default function DonateModal({
  isOpen,
  onClose,
  lang,
  initialAmount = 3000,
  initialFrequency = 'once',
  onScroll
}: DonateModalProps) {
  const [amount, setAmount] = useState<number>(initialAmount);
  const [frequency, setFrequency] = useState<'once' | 'monthly'>(initialFrequency);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [fullName, setFullName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [email, setEmail] = useState('');
  const [phoneCountry, setPhoneCountry] = useState('IN');
  const [phone, setPhone] = useState('');
  const [phoneValid, setPhoneValid] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('IN');
  const [stateName, setStateName] = useState('Karnataka');
  const [taxReceipt, setTaxReceipt] = useState(true);
  const [payMethod, setPayMethod] = useState<'card' | 'bank'>('card');
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

  const selectedCountryData = COUNTRIES.find(c => c.code === phoneCountry);
  const dialCodeStr = selectedCountryData ? selectedCountryData.dialCode : '';
  const nationalDigitsOnly = phone.replace(dialCodeStr, '').replace(/\D/g, '');
  const isPhoneFieldValid = nationalDigitsOnly.length === 0 || phoneValid;

  const nameError = nameTouched || fullName.length > 0
    ? (fullName.length === 0 
        ? (lang === 'EN' ? 'Full name is required' : 'पूरा नाम आवश्यक है')
        : getFullNameError(fullName))
    : '';
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const t = (key: string) => TRANSLATIONS[key]?.[lang] || key;

  const handleAmountSelect = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (val: string) => {
    setCustomAmount(val);
    const parsed = parseFloat(val);
    if (!isNaN(parsed) && parsed > 0) {
      setAmount(parsed);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!fullName.trim()) {
      setFormError(lang === 'EN' ? 'Please enter your full name' : 'कृपया अपना पूरा नाम दर्ज करें');
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError(lang === 'EN' ? 'Please enter a valid email address' : 'कृपया एक मान्य ईमेल पता दर्ज करें');
      return;
    }

    if (phone.trim()) {
      const pVal = validatePhoneNumber(phoneCountry, phone);
      if (!pVal.isValid) {
        setFormError(pVal.errorMsg);
        return;
      }
    }

    if (!stateName.trim()) {
      setFormError(lang === 'EN' ? 'Please select or enter your state / province' : 'कृपया अपना राज्य / प्रांत चुनें या दर्ज करें');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1800);
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
        id="donate-modal-fullpage"
      >
        {/* Top Offset equal to Navbar height */}
        <div className="h-[105px] sm:h-[110px] lg:h-[135px]" />

        {/* Floating "Back to Website" Button for user returns */}
        <button
          onClick={handleClose}
          className="fixed top-24 left-4 sm:left-6 z-[1010] flex items-center gap-2 bg-slate-900/90 dark:bg-white/90 text-white dark:text-slate-900 border border-white/10 dark:border-black/5 rounded-full px-4.5 py-2.5 text-xs font-black shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
          id="donate-back-btn"
        >
          <ArrowLeft size={14} className="stroke-[3px]" />
          <span>{lang === 'EN' ? 'Back to Website' : lang === 'HI' ? 'वेबसाइट पर वापस' : lang === 'KN' ? 'ವೆಬ್‌ಸೈಟ್‌ಗೆ ಹಿಂತಿರುಗಿ' : 'वेबसाइटवर परत'}</span>
        </button>

        {/* Centered Page Card with gorgeous offsets */}
        <div className="w-full max-w-lg mx-auto p-4 sm:p-6">
          <div className="relative w-full overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-2xl border border-gray-100 dark:border-slate-800 transition-colors duration-300">
            {/* Header Banner */}
            <div className="bg-amber-600 px-6 py-6 text-white relative">
              <button
                id="close-donate-modal"
                onClick={handleClose}
                className="absolute top-6 right-6 text-white/80 hover:text-white hover:scale-110 transition-transform duration-200 cursor-pointer"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <div className="flex items-center gap-3">
                <span className="p-2 bg-white/10 rounded-lg">
                  <Heart className="fill-white stroke-white" size={22} />
                </span>
                <div>
                  <p className="text-xs tracking-widest uppercase text-amber-100 font-semibold font-mono">
                    {t('donate_impact_tag')}
                  </p>
                  <h3 className="text-lg font-sans font-bold tracking-tight">
                    {t('modal_title')}
                  </h3>
                </div>
              </div>
            </div>

            <div className="px-6 py-6 text-gray-800 dark:text-slate-150">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Frequency & Quick Amounts */}
                <div className="space-y-3">
                  <div className="flex rounded-lg bg-gray-200/60 p-1">
                    <button
                      type="button"
                      id="freq-once"
                      onClick={() => setFrequency('once')}
                      className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 cursor-pointer ${
                        frequency === 'once'
                          ? 'bg-white text-amber-600 shadow-xs'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {t('donate_frequency_once')}
                    </button>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {[1500, 3000, 5000, 15000].map((val) => (
                      <button
                        key={val}
                        type="button"
                        id={`amt-${val}`}
                        onClick={() => handleAmountSelect(val)}
                        className={`py-2 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                          amount === val && !customAmount
                            ? 'bg-amber-600 text-white shadow-md shadow-amber-700/20 scale-102'
                            : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        ₹ {val.toLocaleString()}
                      </button>
                    ))}
                  </div>

                  {/* Custom Input */}
                  <div className="relative">
                    <input
                      type="number"
                      id="custom-amount-input"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      placeholder={t('donate_custom_placeholder')}
                      className="w-full bg-white border border-gray-200 rounded-lg py-2 pl-4 pr-12 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-800"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-400">
                      ₹ 
                    </span>
                  </div>
                </div>

                {/* Impact short hint based on selected value */}
                <div className="p-3.5 bg-yellow-50/70 rounded-xl border border-yellow-105 flex gap-2.5 items-start">
                  <span className="text-amber-500 mt-0.5">
                    <Shield size={16} />
                  </span>
                  <div className="text-xs text-gray-700 leading-relaxed">
                    <span className="font-bold text-gray-950">
                      ₹ {amount.toLocaleString()} {t(frequency === 'once' ? 'donate_frequency_once' : 'donate_frequency_monthly').toLowerCase()}
                    </span>{' '}
                    — {amount >= 15000 ? (
                      lang === 'EN' ? 'Sponsors complete wedding attires, gold jewelry and a ceremony for a rehabilitated daughter.' :
                      lang === 'HI' ? 'पुनर्वासित सुयोग्य कन्या के विवाह संस्कार, आभूषण और मंगल उपहारों को पूर्ण प्रायोजित करता है।' :
                      'ಮದುವೆಯಾಗುತ್ತಿರುವ ಹೆಣ್ಣುಮಳಿಗೆ ಆಭರಣಗಳು, ವಸ್ತ್ರಗಳು ಮತ್ತು ವೈವಾಹಿಕ ಪ್ರಾಯೋಜಕತ್ವವನ್ನು ನೀಡುತ್ತದೆ.'
                    ) : amount >= 5000 ? (
                      lang === 'EN' ? 'Covers full boarding, books, clothing, welfare and health checkups.' :
                      lang === 'HI' ? 'पूर्ण आवासीय भोजन, समग्र शिक्षा, मानसिक परामर्श, स्वास्थ्य जांच और वस्त्र सुविधाएं प्रदान करता है।' :
                      'ಒಂದು ತಿಂಗಳ ಉಚಿತ ವಸತಿ, ಆಹಾರ, ಶಿಕ್ಷಣ, ವೈದ್ಯಕೀಯ ತಪಾಸಣೆ ಮತ್ತು ಬಟ್ಟೆ ವೆಚ್ಚವನ್ನು ಪೂರೈಸುತ್ತದೆ.'
                    ) : amount >= 3000 ? (
                      lang === 'EN' ? 'Provides textbook bundles, notebooks, custom moral guides, and school uniforms.' :
                      lang === 'HI' ? 'अनाथ और वंचित बच्चों को स्कूली पाठ्यपुस्तकें, ज्यामिति किट और स्कूल ड्रेस सेट प्रदान करता है।' :
                      'ಶಾಲಾ ಪಠ್ಯಪುಸ್ತಕಗಳು, ಪ್ರಚಲಿತ ಜ್ಞಾನದ ಪುಸ್ತಕಗಳು ಮತ್ತು ಶಾಲಾ ಸಮವಸ್ತ್ರಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.'
                    ) : (
                      lang === 'EN' ? 'Supports fresh pure vegetarian nutritious meals daily for a child under foster care.' :
                      lang === 'HI' ? 'बच्चों के लिए दैनिक ताजा पौष्टिक शुद्ध शाकाहारी भोजन का समर्थन करता है।' :
                      'ಮಕ್ಕಳಿಗೆ ಪ್ರತಿದಿನ ಬಿಸಿ ಬಿಸಿ ಪೌಷ್ಟಿಕ ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ಊಟವನ್ನು ಪ್ರಾಯೋಜಿಸುತ್ತದೆ.'
                    )}
                  </div>
                </div>

                {/* Profile Fields */}
                <div className="space-y-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono">
                    {t('modal_heading')}
                  </p>
                  
                  {/* Full Name field */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label htmlFor="donor-fullname" className="block text-xs font-semibold text-gray-600 dark:text-slate-300">
                        {t('modal_full_name')} *
                      </label>
                      <span className="text-[10px] font-mono font-bold text-gray-400">
                        {fullName.length}/25
                      </span>
                    </div>
                    <input
                      id="donor-fullname"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) =>
  setFormData((prev) => ({
    ...prev,
    name: cleanName(e.target.value),
  }))
}
                      onBlur={handleNameBlur}
                      placeholder={lang === 'EN' ? 'Enter your full name' : 'अपना पूरा नाम दर्ज करें'}
                      className={`w-full bg-white dark:bg-slate-800 border ${nameError ? "border-red-500 focus:ring-red-500" : "border-gray-200 dark:border-slate-700 focus:ring-amber-500"} rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 text-gray-800 dark:text-slate-100`}
                    />
                    {nameError && (
                      <span className="block text-[10px] font-bold text-red-500 font-mono mt-1 pl-1">
                        {nameError}
                      </span>
                    )}
                  </div>

                  {/* Email & Phone side-by-side on desktop, stacked on mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="donor-email" className="block text-xs font-semibold text-gray-600 dark:text-slate-300 mb-1">
                        {t('modal_email')} *
                      </label>
                      <input
                        id="donor-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={lang === 'EN' ? 'Enter email address' : 'ईमेल पता दर्ज करें'}
                        className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 text-gray-800 dark:text-slate-100"
                      />
                    </div>
                    <div>
                      <PhoneInput
                        countryCode={phoneCountry}
                        phone={phone}
                        onChange={(code, num, isValid) => {
                          setPhoneCountry(code);
                          setPhone(num);
                          setPhoneValid(isValid);
                        }}
                        label={lang === 'EN' ? 'Mobile Number' : 'मोबाइल नंबर'}
                        required={false}
                        idPrefix="donor-phone"
                      />
                    </div>
                  </div>

                  {/* Country & State side-by-side on desktop, stacked on mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="donor-country" className="block text-xs font-semibold text-gray-600 dark:text-slate-300 mb-1">
                        Country *
                      </label>
                      <select
                        id="donor-country"
                        required
                        value={selectedCountry}
                       onChange={(e) => {
  let value = e.target.value.replace(/\D/g, "");

  value = value.replace(/^0+/, "");

  setCustomAmount(value);
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
                      <label htmlFor="donor-state" className="block text-xs font-semibold text-gray-600 dark:text-slate-300 mb-1">
                        State / Province *
                      </label>
                      {STATES_BY_COUNTRY[selectedCountry] ? (
                        <select
                          id="donor-state"
                          required
                          value={stateName}
                          onChange={(e) => setStateName(e.target.value)}
                          className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 text-gray-800 dark:text-slate-100 cursor-pointer"
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
                          id="donor-state"
                          required
                          value={stateName}
                          onChange={(e) => setStateName(e.target.value)}
                          placeholder="Enter state / province"
                          className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 text-gray-800 dark:text-slate-100"
                        />
                      )}
                    </div>
                  </div>

                  {taxReceipt && (
                    <p className="text-[10px] text-amber-600 dark:text-amber-500 font-mono font-bold leading-normal">
                      {lang === 'EN' ? '* Tax Exemption receipt (under Income Tax Act 80G) will be generated and dispatched.' : '* आयकर अधिनियम धारा 80G के अंतर्गत कर छूट रसीद भेजी जाएगी।'}
                    </p>
                  )}

                  {formError && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold p-3 rounded-lg font-mono">
                      {formError}
                    </div>
                  )}

                  {/* Tax slip checkbox */}
                  <label className="flex items-center gap-2.5 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      id="donor-tax-receipt"
                      checked={taxReceipt}
                      onChange={(e) => setTaxReceipt(e.target.checked)}
                      className="w-4 h-4 text-amber-600 border-gray-300 rounded-md focus:ring-amber-500"
                    />
                    <span className="text-xs text-gray-600 dark:text-slate-300 font-medium">
                      {t('modal_tax_receipt')}
                    </span>
                  </label>
                </div>

                {/* Payment Channel */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-gray-600">
                    {t('modal_pay_method')}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      id="pay-card"
                      onClick={() => setPayMethod('card')}
                      className={`flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-pointer ${
                        payMethod === 'card'
                          ? 'border-amber-600 bg-amber-50 text-amber-600 font-bold'
                          : 'border-gray-200 hover:border-gray-300 text-gray-600'
                      }`}
                    >
                      <CreditCard size={16} />
                      {t('modal_card')}
                    </button>
                    <button
                      type="button"
                      id="pay-bank"
                      onClick={() => setPayMethod('bank')}
                      className={`flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-pointer ${
                        payMethod === 'bank'
                          ? 'border-amber-600 bg-amber-50 text-amber-600 font-bold'
                          : 'border-gray-200 hover:border-gray-300 text-gray-600'
                      }`}
                    >
                      <Landmark size={16} />
                      {t('modal_bank_transfer')}
                    </button>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="donate-submit-btn"
                  disabled={isProcessing || !isNameValid || !isPhoneFieldValid}
                  className="w-full bg-amber-600 hover:bg-amber-700 active:scale-[0.99] disabled:bg-gray-400 disabled:cursor-not-allowed font-bold text-white tracking-wide py-3 px-6 rounded-xl shadow-md cursor-pointer transition-all duration-200 text-center flex items-center justify-center gap-2 hover:shadow-lg mt-2 font-sans"
                >
                  {isProcessing ? (
                    <BouncingDots dots={3} message={lang === 'EN' ? 'Processing secure gateway...' : lang === 'HI' ? 'सुरक्षित भुगतान संसाधित किया जा रहा है...' : 'ಸುರಕ್ಷಿತ ಗೇಟ್‌ವೇ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗುತ್ತಿದೆ...'} />
                  ) : (
                    <>
                      <span>
                        {t('modal_submit')} ₹ {amount.toLocaleString()}
                      </span>
                    </>
                  )}
                </button>

                <p className="text-[10px] text-gray-400 text-center leading-normal">
                  {t('modal_p1')}
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Check size={36} strokeWidth={3} className="animate-bounce" />
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">
                  {lang === 'EN' ? 'Thank you so much!' : lang === 'HI' ? 'आपका बहुत-बहुत धन्यवाद!' : 'ನಿಮಗೆ ತುಂಬಾ ಧನ್ಯವಾದಗಳು!'}
                </h4>
                <p className="text-gray-600 text-sm max-w-sm mx-auto leading-relaxed mb-8">
                  {t('modal_success')}
                </p>
                <div className="bg-white/80 border border-gray-100 rounded-xl p-4 text-left max-w-md mx-auto mb-8 space-y-2">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{lang === 'EN' ? 'Donor Name:' : lang === 'HI' ? 'दाता का नाम:' : 'ದಾನಿಗಳ ಹೆಸರು:'}</span>
                    <span className="font-semibold text-gray-800">{fullName}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{lang === 'EN' ? 'Gift Amount:' : lang === 'HI' ? 'दान राशि:' : 'ಕೊಡುಗೆ ಮೊತ್ತ:'}</span>
                    <span className="font-bold text-amber-600">₹ {amount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Type:</span>
                    <span className="capitalize font-medium text-gray-800">
                      {t(frequency === 'once' ? 'donate_frequency_once' : 'donate_frequency_monthly')}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{lang === 'EN' ? 'Section 80G Recipient:' : lang === 'HI' ? 'आयकर धारा 80G रसीद:' : '80G ಆದಾಯ ತೆರಿಗೆ ರಶೀದಿ:'}</span>
                    <span className="font-medium text-gray-800">{taxReceipt ? 'Enabled (Yes)' : 'No'}</span>
                  </div>
                </div>

                <button
                  type="button"
                  id="donation-success-close-btn"
                  onClick={handleClose}
                  className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold tracking-wide py-2.5 px-8 rounded-lg cursor-pointer transition-all duration-200"
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
