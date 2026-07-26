import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Landmark, Check, Coins, ShieldCheck, Sparkles } from 'lucide-react';
import { Lang } from '../types';
import { TRANSLATIONS, DONATION_IMPACTS } from '../data';

interface DonationImpactProps {
  lang: Lang;
  onDonateClick: (amount?: number, frequency?: 'once' | 'monthly') => void;
}

export default function DonationImpact({ lang, onDonateClick }: DonationImpactProps) {
  const [selectedTier, setSelectedTier] = useState<number>(1); // default active index preselect
const frequency = 'once';
const [customVal, setCustomVal] = useState('');
const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  const t = (key: string) => TRANSLATIONS[key]?.[lang] || key;

 const handleCustomInput = (val: string) => {
  const cleaned = val.replace(/\D/g, '');

  if (!cleaned) {
    setCustomVal('');
    setSelectedTier(-1);
    return;
  }

  const amount = parseInt(cleaned, 10);

  if (amount <= 0) {
    setCustomVal('');
    return;
  }

  setCustomVal(amount.toString());
  setSelectedTier(-1);
};

  const currentImpactText = () => {
    if (selectedTier !== -1) {
      return DONATION_IMPACTS[selectedTier].description[lang];
    }
    const val = parseFloat(customVal);
    if (isNaN(val) || val <= 0) {
      return lang === 'EN' 
        ? 'Enter custom amount to calculate the real field support outcomes.' 
        : lang === 'HI' 
        ? 'वास्तविक योगदान का प्रभाव जानने के लिए राशि दर्ज करें।' 
        : 'ಕೊಡುಗೆಯ ನೈಜ ಫಲಿತಾಂಶಗಳನ್ನು ಲೆಕ್ಕಹಾಕಲು ಮೊತ್ತವನ್ನು ನಮೂದಿಸಿ.';
    }
    // dynamic text generation for custom values
    if (val >= 15000) {
      return lang === 'EN' 
        ? 'Sponsors complete marriage arrangements, safe gold jewelry, and festive bridal gifts for a fully-rehabilitated daughter of our center.' 
        : lang === 'HI' 
        ? 'संस्था द्वारा सुयोग्य विवाह संस्कार में स्थापित की जा रही कन्या के संपूर्ण पावन मंगल विवाह समारोह, आभूषण और सुखी गृहस्थी का समर्थन।' 
        : 'ಮದುವೆಯಾಗುತ್ತಿರುವ ಹೆಣ್ಣುಮಗಳಿಗೆ ಚಿನ್ನದ ಆಭರಣಗಳು, ವಸ್ತ್ರಗಳು ಮತ್ತು ವೈವಾಹಿಕ ಪ್ರಾಯೋಜಕತ್ವವನ್ನು ನೀಡುತ್ತದೆ.';
    } else if (val >= 5000) {
      return lang === 'EN' 
        ? 'Provides full monthly residential boarding, balanced nutrition, text books, clothing, and bi-weekly medical doctor checkups.' 
        : lang === 'HI' 
        ? 'एक बच्चे के लिए पूर्ण आवासीय भोजन, समग्र शिक्षा, मानसिक परामर्श, स्वास्थ्य जांच और वस्त्र सुविधाएं प्रदान करता है।' 
        : 'ಒಂದು ತಿಂಗಳ ಉಚಿತ ವಸತಿ, ಆಹಾರ, ಶಿಕ್ಷಣ, ವೈದ್ಯಕೀಯ ತಪಾಸಣೆ ಮತ್ತು ಬಟ್ಟೆ ವೆಚ್ಚವನ್ನು ಪೂರೈಸುತ್ತದೆ.';
    } else if (val >= 3000) {
      return lang === 'EN' 
        ? 'Supplies standard textbooks, custom moral guidebooks, school bags, geometric mathematical packs, and stitched uniforms.' 
        : lang === 'HI' 
        ? 'अनाथ और वंचित बच्चों को स्कूली पाठ्यपुस्तकें, ज्यामिति किट और स्कूल ड्रेस सेट प्रदान करता है।' 
        : 'ಶಾಲಾ ಪಠ್ಯಪುಸ್ತಕಗಳು, ಪ್ರಚಲಿತ ಜ್ಞಾನದ ಪುಸ್ತಕಗಳು ಮತ್ತು ಶಾಲಾ ಸಮವಸ್ತ್ರಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.';
    } else {
      return lang === 'EN' 
        ? 'Supports daily hot nutritious freshly prepared pure vegetarian meals for children under our foster care.' 
        : lang === 'HI' 
        ? 'हमारे बाल गृह में रह रहे बच्चों के लिए दैनिक ताजा पौष्टिक शुद्ध शाकाहारी भोजन का समर्थन करता है।' 
        : 'ಮಕ್ಕಳಿಗೆ ಪ್ರತಿದಿನ ಬಿಸಿ ಬಿಸಿ ಪೌಷ್ಟಿಕ ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ಊಟವನ್ನು ಪ್ರಾಯೋಜಿಸುತ್ತದೆ.';
    }
  };

  const getActiveAmount = (): number => {
    if (selectedTier !== -1) {
      return DONATION_IMPACTS[selectedTier].amount;
    }
    const val = parseFloat(customVal);
    return isNaN(val) || val <= 0 ? 1500 : val;
  };

  return (
    <section
      id="donation-impact-panel"
      className="bg-[#faf7f2] py-20 sm:py-28 text-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-mono font-black tracking-widest text-amber-600 uppercase bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-100">
            {t('donate_impact_tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight text-gray-950 leading-tight">
            {t('donate_impact_title')}
          </h2>
        </div>

        {/* Dynamic Panel Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Block: Preset Tier Choices */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            
            {/* Frequency Toggle Button Bar */}
            <div className="flex justify-center sm:justify-start">
              <div className="inline-flex rounded-xl bg-gray-200/50 p-1 border border-gray-150">
                <button
                  type="button"
                  id="tab-freq-once"
                  onClick={() => {}}
                  className={`px-5 py-2 text-xs font-black rounded-lg transition-all duration-200 cursor-pointer ${
                    frequency === 'once'
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {t('donate_frequency_once')}
                </button>
                
              </div>
            </div>

            {/* preset amount list grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DONATION_IMPACTS.map((tier, idx) => (
                <button
                  key={tier.amount}
                  type="button"
                  id={`tier-card-${tier.amount}`}
                  onClick={() => {
                    setSelectedTier(idx);
                    setCustomVal('');
                  }}
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 relative cursor-pointer ${
                    selectedTier === idx
                      ? 'border-amber-600 bg-white shadow-xl shadow-amber-700/5 ring-1 ring-amber-600 scale-101'
                      : 'border-gray-200 bg-white/70 hover:border-gray-300 hover:bg-white'
                  }`}
                >
                  {selectedTier === idx && (
                    <span className="absolute top-4 right-4 text-amber-600 p-1 bg-amber-50 rounded-full">
                      <Check size={14} strokeWidth={3} />
                    </span>
                  )}
                  
                  <span className="block text-3xl font-mono font-black text-gray-950 mb-1">
                    ₹ {tier.amount.toLocaleString()}
                  </span>
                  
                  <span className="block text-xs font-sans font-black text-amber-600 uppercase tracking-wider mb-2">
                    {tier.title[lang]}
                  </span>

                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                    {tier.description[lang]}
                  </p>
                </button>
              ))}
            </div>

            {/* Custom Input amount strip */}
            <div className="bg-white/90 border border-gray-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4">
              <span className="text-xs font-mono font-black text-gray-400 uppercase tracking-widest sm:border-r border-gray-200 pr-4">
                {lang === 'EN' ? 'Custom Amount' : lang === 'HI' ? 'अनुकूलित राशि' : 'ಕಸ್ಟಮ್ ಮೊತ್ತ'}
              </span>
              <div className="flex-1 relative w-full">
                <input
                  type="number"
                  id="custom-tier-input"
                  placeholder={lang === 'EN' ? 'Enter custom sum in Rupees' : lang === 'HI' ? 'रुपये में अनुकूलित राशि दर्ज करें' : 'ರೂಪಾಯಿಗಳಲ್ಲಿ ಮೊತ್ತವನ್ನು ನಮೂದಿಸಿ'}
                  value={customVal}
                  onChange={(e) => handleCustomInput(e.target.value)}
                  className="w-full bg-slate-50 border border-gray-250 rounded-xl py-2.5 px-4 text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                />
              </div>
            </div>

          </div>

          {/* Right Block: Live storytelling description panel */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden flex flex-col justify-between">
            
            {/* Header top banner */}
            <div className="bg-amber-600 p-6 text-white text-center sm:text-left space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2.5">
                <Sparkles size={16} className="text-yellow-300 fill-yellow-300" />
                <span className="font-mono text-[10px] uppercase font-black tracking-widest text-amber-100">
                  {lang === 'EN' ? 'Real Field Outcome' : lang === 'HI' ? 'वास्तविक बाल संरक्षण परिणाम' : 'ನೈಜ ಮಕ್ಕಳ ಕಲ್ಯಾಣ ಫಲಿತಾಂಶ'}
                </span>
              </div>
              <h4 className="text-2xl font-black font-sans tracking-tight">
                ₹ {getActiveAmount().toLocaleString()}
              </h4>
              <p className="text-xs text-white/80 font-medium">
                {t('donate_frequency_once')}
              </p>
            </div>

            {/* Inner dynamic content body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="p-4 bg-amber-50/50 rounded-2xl border border-amber-100/50">
                  <h5 className="text-xs font-sans font-black uppercase text-amber-600 tracking-wider mb-1.5 flex items-center gap-2">
                    <ShieldCheck size={14} />
                    <span>{selectedTier !== -1 ? DONATION_IMPACTS[selectedTier].title[lang] : (lang === 'EN' ? 'Targeted Contribution' : lang === 'HI' ? 'लक्षित योगदान' : 'ಉದ್ದೇಶಿತ ಕಾಣಿಕೆ')}</span>
                  </h5>
                  <p className="text-gray-700 text-sm leading-relaxed font-sans font-medium">
                    {currentImpactText()}
                  </p>
                </div>

                <div className="space-y-2 text-xs text-gray-500 leading-relaxed font-sans">
                  <div className="flex items-center gap-2">
                    <Check size={12} className="text-amber-600" strokeWidth={3} />
                    <span>{lang === 'EN' ? 'Secures safe nutrition and housing' : lang === 'HI' ? 'सुरक्षित पोषण और गृह प्रदान करता है' : 'ಸುರಕ್ಷಿತ ಪೌಷ್ಟಿಕ ಆಹಾರ ಮತ್ತು ವಸತಿಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={12} className="text-amber-600" strokeWidth={3} />
                    <span>{lang === 'EN' ? 'Tax-deductible under Indian 80G Scheme' : lang === 'HI' ? 'आयकर धारा 80G के तहत छूट' : 'ಆದಾಯ ತೆರಿಗೆ ಸೆಕ್ಷನ್ 80G ಅಡಿ ವಿನಾಯಿತಿ'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={12} className="text-amber-600" strokeWidth={3} />
                    <span>{lang === 'EN' ? 'Transparent CARA legal registration reports' : lang === 'HI' ? 'पारदर्शी कानूनी कारा पंजीकरण रिपोर्ट' : 'ಪಾರದರ್ಶಕ ಮತ್ತು ಮಕ್ಕಳ ಪ್ರಗತಿಯ ವರದಿಗಳು'}</span>
                  </div>
                </div>
              </div>

              {/* Confirm payment CTA button */}
              <button
                type="button"
                id="impact-cta-btn"
                onClick={() => {
  const amount = getActiveAmount();

  if (amount < 50) {
    alert('Minimum amount is ₹50');
    return;
  }

  setShowPaymentPopup(true);
}}
                className="w-full bg-amber-600 hover:bg-amber-700 active:scale-[0.98] text-white py-4 px-6 rounded-2xl font-black uppercase tracking-wider text-xs shadow-md shadow-amber-700/15 cursor-pointer transition-all duration-200 text-center flex items-center justify-center gap-2 hover:shadow-lg animate-pulse"
              >
                <Heart size={14} className="fill-white" />
                <span>{t('donate_now_button')}</span>
              </button>

            </div>

          </div>

        </div>

      </div>
      {showPaymentPopup && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative">

      <button
        onClick={() => setShowPaymentPopup(false)}
        className="absolute top-4 right-4 text-2xl font-bold"
      >
        ×
      </button>

      <h2 className="text-2xl font-bold mb-5">
        Bank Details
      </h2>

      <div className="space-y-3 text-gray-700">

        <p><strong>Swami Vivekanand Seva Pratishthan</strong></p>

        <p>
          Union Bank Of India<br />
          Branch: Market Yard, Belagavi
        </p>

        <p>
          <strong>A/c No:</strong> 370301010041675
        </p>

        <p>
          <strong>IFSC:</strong> UBIN0537039
        </p>

        <p className="text-sm">
          Contribution to trust is exempted under section 80G of Income Tax Act 1961.
        </p>

        <p className="text-sm">
          Please call us once you have completed the payment for further formalities from our end.
        </p>

      </div>
    </div>
  </div>
)}
    </section>
  );
}
