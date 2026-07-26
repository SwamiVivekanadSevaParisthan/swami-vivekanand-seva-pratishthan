import React from 'react';
import { motion } from 'motion/react';
import { 
  Home, 
  HeartPulse, 
  Utensils, 
  Compass, 
  Sparkles, 
  GraduationCap, 
  Sprout, 
  Car, 
  ShowerHead, 
  Calendar,
  Waves,
  Stethoscope
} from 'lucide-react';
import { Lang } from '../types';

interface FacilitiesAndHealthcareProps {
  lang: Lang;
}

export default function FacilitiesAndHealthcare({ lang }: FacilitiesAndHealthcareProps) {
  
  // Section content translations
  const t = {
    tag: {
      EN: 'NURTURING ENVIRONMENT',
      HI: 'लालन-पालन पर्यावरण',
      KN: 'ಪೋಷಣೆಯ ವಾತಾವರಣ',
      MR: 'लालन-पालन पर्यावरण'
    },
    title: {
      EN: 'Facilities & Healthcare',
      HI: 'सुविधाएं और स्वास्थ्य देखभाल',
      KN: 'ಸೌಲಭ್ಯಗಳು ಮತ್ತು ಆರೋಗ್ಯ ರಕ್ಷಣೆ',
      MR: 'सोयी-सुविधा आणि आरोग्य सेवा'
    },
    subtitle: {
      EN: 'Ensuring a safe, joyful, and healthy childhood with comprehensive care and modern amenities.',
      HI: 'व्यापक देखभाल और आधुनिक सुविधाओं के साथ एक सुरक्षित, आनंदमय और स्वस्थ बचपन सुनिश्चित करना।',
      KN: 'ಸಮಗ್ರ ಕಾಳಜಿ ಮತ್ತು ಆಧುನಿಕ ಸೌಲಭ್ಯಗಳೊಂದಿಗೆ ಸುರಕ್ಷಿತ, ಸಂತೋಷದಾಯಕ ಹಾಗೂ ಆರೋಗ್ಯಕರ ಬಾಲ್ಯವನ್ನು ಖಚಿತಪಡಿಸುವುದು.',
      MR: 'सर्वसमावेशक काळजी आणि आधुनिक सुविधांसह सुरक्षित, आनंददायी आणि निरोगी बालपण सुनिश्चित करणे.'
    },
    facilitiesTitle: {
      EN: 'Facilities for the Children',
      HI: 'बच्चों के लिए सुविधाएं',
      KN: 'ಮಕ್ಕಳಿಗೆ ಸೌಲಭ್ಯಗಳು',
      MR: 'मुलांसाठी सोयी-सुविधा'
    },
    healthcareTitle: {
      EN: 'Regular Healthcare Partner',
      HI: 'नियमित स्वास्थ्य देखभाल भागीदार',
      KN: 'ನಿಯಮಿತ ಆರೋಗ್ಯ ಕಾಳಜಿ ಪಾಲುದಾರ',
      MR: 'नियमित आरोग्य सेवा भागीदार'
    },
    healthcareDesc: {
      EN: "The KLE's Prabhakar Kore Hospital, Belagavi's prominent healthcare institution, provides free health checkups and treatment for the children of this center. The center also has an active MOU with the Department of Physiotherapy, KLE Hospital, extending regular physiotherapy support to children as per their individual needs.",
      HI: "केएलई का प्रभाकर कोरे अस्पताल, बेलगावी का प्रमुख स्वास्थ्य संस्थान, इस केंद्र के बच्चों के लिए मुफ्त स्वास्थ्य जांच और उपचार प्रदान करता है। इस केंद्र का केएलई अस्पताल के फिजियोथेरेपी विभाग के साथ एक सक्रिय समझौता ज्ञापन (MOU) भी है, जो बच्चों को उनकी व्यक्तिगत आवश्यकताओं के अनुसार नियमित फिजियोथेरेपी सहायता प्रदान करता है।",
      KN: "ಬೆಳಗಾವಿಯ ಪ್ರಮುಖ ಆರೋಗ್ಯ ಸಂಸ್ಥೆಯಾದ ಕೆಎಲ್‌ಇಯ ಪ್ರಭಾಕರ್ ಕೋರೆ ಆಸ್ಪತ್ರೆಯು ಈ ಕೇಂದ್ರದ ಮಕ್ಕಳಿಗೆ ಉಚಿತ ಆರೋಗ್ಯ ತಪಾಸಣೆ ಮತ್ತು ಚಿಕಿತ್ಸೆ ಒದಗಿಸುತ್ತದೆ. ಈ ಕೇಂದ್ರವು ಕೆಎಲ್‌ಇ ಆಸ್ಪತ್ರೆಯ ಫಿಸಿಯೋಥೆರಪಿ ವಿಭಾಗದೊಂದಿಗೆ ಸಕ್ರಿಯ ಒಡಂಬಡಿಕೆಯನ್ನು (MOU) ಹೊಂದಿದ್ದು, ಮಕ್ಕಳ ವೈಯಕ್ತಿಕ ಅಗತ್ಯಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ನಿಯಮಿತ ಫಿಸಿಯೋಥೆರಪಿ ಬೆಂಬಲವನ್ನು ನೀಡುತ್ತದೆ.",
      MR: "बेळगावची नामांकित आरोग्य संस्था, केएलईचे प्रभाकर कोरे रुग्णालय, या केंद्रातील मुलांसाठी मोफत आरोग्य तपासणी आणि उपचार प्रदान करते. या केंद्राचा केएलई रुग्णालयाच्या फिजिओथेरपी विभागासोबत एक सक्रिय सामंजस्य करार (MOU) देखील आहे, जो मुलांच्या वैयक्तिक गरजेनुसार त्यांना नियमित फिजिओथेरपी मदत पुरवतो।"
    }
  };

  // Facilities items with specific translations matching the exact uploaded image text
  const facilitiesItems = [
    {
      id: 'living',
      icon: <Home className="text-teal-600 dark:text-teal-400" size={20} />,
      title: {
        EN: 'Accommodations & Amenities',
        HI: 'आवास और दैनिक सुविधाएं',
        KN: 'ವಸತಿ ಮತ್ತು ಸೌಕರ್ಯಗಳು',
        MR: 'निवास आणि दैनिक सुविधा'
      },
      desc: {
        EN: 'A well-equipped kitchen, dining hall, living rooms, bed-covers, wardrobes, well-equipped bathroom, toilet, hot water for bathing, and clean water for drinking are arranged for the children.',
        HI: 'बच्चों के लिए एक सुसज्जित रसोईघर, भोजन कक्ष, रहने के कमरे, बिस्तर की चादरें, वार्डरोब, सुसज्जित स्नानघर, शौचालय, स्नान के लिए गर्म पानी और पीने के लिए स्वच्छ पानी की व्यवस्था की गई है।',
        KN: 'ಮಕ್ಕಳಿಗೆ ಸುಸಜ್ಜಿತ ಅಡುಗೆಮನೆ, ಭೋಜನ ಶಾಲೆ, ವಾಸದ ಕೊಠಡಿಗಳು, ಹಾಸಿಗೆಯ ಹೊದಿಕೆಗಳು, ವಾರ್ಡ್ರೋಬ್‌ಗಳು, ಸುಸಜ್ಜಿತ ಸ್ನಾನದ ಗೃಹ, ಶೌಚಾಲಯ, ಸ್ನಾನಕ್ಕೆ ಬಿಸಿ ನೀರು ಮತ್ತು ಕುಡಿಯಲು ಶುದ್ಧ ನೀರನ್ನು ವ್ಯವಸ್ಥೆಗೊಳಿಸಲಾಗಿದೆ.',
        MR: 'मुलांसाठी सुसज्जित स्वयंपाकघर, भोजन कक्ष, दिवाणखाने, चादरी, कपाटे, सुसज्जित स्नानगृह, शौचालय, अंघोळीसाठी गरम पाणी आणि पिण्यासाठी स्वच्छ पाण्याची व्यवस्था करण्यात आली आहे.'
      }
    },
    {
      id: 'education',
      icon: <GraduationCap className="text-teal-600 dark:text-teal-400" size={20} />,
      title: {
        EN: 'Education & Spiritual Development',
        HI: 'शिक्षा और आध्यात्मिक विकास',
        KN: 'ಶಿಕ್ಷಣ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ವಿಕಾಸ',
        MR: 'शिक्षण आणि आध्यात्मिक विकास'
      },
      desc: {
        EN: 'Dedicated prayer hall, different rooms for practice, and qualified teachers for education are arranged to guide children towards a brighter future.',
        HI: 'बच्चों को एक उज्ज्वल भविष्य की ओर निर्देशित करने के लिए समर्पित प्रार्थना कक्ष, अभ्यास के लिए विभिन्न कमरे और शिक्षा के लिए योग्य शिक्षकों की व्यवस्था की गई है।',
        KN: 'ಮಕ್ಕಳನ್ನು ಉಜ್ವಲ ಭವಿಷ್ಯದತ್ತ ಮುನ್ನಡೆಸಲು ಸಮರ್ಪಿತ ಪ್ರಾರ್ಥನಾ ಮಂದಿರ, ಅಭ್ಯಾಸಕ್ಕಾಗಿ ವಿವಿಧ ಕೊಠಡಿಗಳು ಮತ್ತು ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಅರ್ಹ ಶಿಕ್ಷಕರನ್ನು ನಿಯೋಜಿಸಲಾಗಿದೆ.',
        MR: 'मुलांना उज्ज्वल भविष्याकडे नेण्यासाठी समर्पित प्रार्थना सभागृह, सरावासाठी विविध खोल्या आणि शिक्षणासाठी पात्र शिक्षकांची व्यवस्था करण्यात आली आहे.'
      }
    },
    {
      id: 'culture',
      icon: <Calendar className="text-teal-600 dark:text-teal-400" size={20} />,
      title: {
        EN: 'Festivals & Enrichment Travel',
        HI: 'त्योहार और संवर्धन यात्राएं',
        KN: 'ಹಬ್ಬಗಳು ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಪ್ರವಾಸಗಳು',
        MR: 'सण आणि शैक्षणिक सहली'
      },
      desc: {
        EN: 'Children undertake travel twice a year. All Hindu and national festivals are celebrated with much joy and fervor. Birth anniversaries of great men are observed with special foods and festive decorations.',
        HI: 'बच्चे वर्ष में दो बार यात्रा पर जाते हैं। सभी हिंदू और राष्ट्रीय त्योहार बड़े उत्साह और हर्षोल्लास के साथ मनाए जाते हैं। परिसर को विशेष भोजन और उत्सव की सजावट से सजाकर महापुरुषों की जयंतियां मनाई जाती हैं।',
        KN: 'ಮಕ್ಕಳು ವರ್ಷಕ್ಕೆ ಎರಡು ಬಾರಿ ಪ್ರವಾಸ ಕೈಗೊಳ್ಳುತ್ತಾರೆ. ಎಲ್ಲಾ ಹಿಂದೂ ಮತ್ತು ರಾಷ್ಟ್ರೀಯ ಹಬ್ಬಗಳನ್ನು ಅತ್ಯಂತ ಸಂತೋಷ ಮತ್ತು ಉತ್ಸಾಹದಿಂದ ಆಚರಿಸಲಾಗುತ್ತದೆ. ಮಹಾಪುರುಷರ ಜಯಂತಿಗಳನ್ನು ವಿಶೇಷ ಭೋಜನ ಮತ್ತು ಹಬ್ಬದ ಅಲಂಕಾರಗಳೊಂದಿಗೆ ಆಚರಿಸಲಾಗುತ್ತದೆ.',
        MR: 'मुले वर्षातून दोनदा सहलीला जातात. सर्व हिंदू आणि राष्ट्रीय सण मोठ्या उत्साहाने आणि आनंदाने साजरे केले जातात. महापुरुषांच्या जयंत्या विशेष भोजन आणि उत्सवी सजावटीसह आवारात साजऱ्या केल्या जातात.'
      }
    },
    {
      id: 'env_commute',
      icon: <Sprout className="text-teal-600 dark:text-teal-400" size={20} />,
      title: {
        EN: 'School Commute & Eco-Learning',
        HI: 'स्कूल आवागमन और पर्यावरण शिक्षण',
        KN: 'ಶಾಲೆಗೆ ಪ್ರಯಾಣ ಮತ್ತು ಪರಿಸರ ಕಲಿಕೆ',
        MR: 'शाळेचा प्रवास आणि पर्यावरण शिक्षण'
      },
      desc: {
        EN: 'Necessary vehicles have been arranged for school commute. Children learn key Environmental Protection lessons by cultivating their own organic vegetables and flowers in an on-premises garden.',
        HI: 'स्कूल आने-जाने के लिए आवश्यक वाहनों की व्यवस्था की गई है। बच्चे परिसर के भीतर एक छोटे बगीचे में अपनी जैविक सब्जियाँ और फूल उगाकर पर्यावरण संरक्षण के महत्वपूर्ण पाठ सीखते हैं।',
        KN: 'ಶಾಲೆಗೆ ಹೋಗಿ ಬರಲು ಅಗತ್ಯ ವಾಹನಗಳ ವ್ಯವಸ್ಥೆ ಮಾಡಲಾಗಿದೆ. ಆವರಣದೊಳಗಿನ ಸಣ್ಣ ತೋಟದಲ್ಲಿ ತಮ್ಮದೇ ಆದ ಸಾವಯವ ತರಕಾರಿ ಮತ್ತು ಹೂವುಗಳನ್ನು ಬೆಳೆಸುವ ಮೂಲಕ ಮಕ್ಕಳು ಪರಿಸರ ಸಂರಕ್ಷಣೆಯ ಪ್ರಮುಖ ಪಾಠಗಳನ್ನು ಕಲಿಯುತ್ತಾರೆ.',
        MR: 'शाळेत जाण्या-येण्यासाठी आवश्यक वाहनांची व्यवस्था करण्यात आली आहे. आवारातील एका लहान बागेत स्वतःच्या सेंद्रिय भाज्या आणि फुले पिकवून मुले पर्यावरण संरक्षणाचे महत्त्वाचे धडे शिकतात.'
      }
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section
      id="facilities-healthcare"
      className="bg-transparent py-20 sm:py-28 text-text-secondary transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <span className="text-xs font-mono font-black tracking-widest text-[#00828a] uppercase bg-teal-50 dark:bg-slate-900 px-3.5 py-1.5 rounded-full border border-teal-100 dark:border-slate-800">
            {t.tag[lang]}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight text-text-primary leading-tight">
            {t.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto font-medium leading-relaxed">
            {t.subtitle[lang]}
          </p>
        </div>

        {/* Master Grid containing both Child Facilities & Regular Healthcare */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Children's Facilities (Grid of 4 items) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-sans font-black text-text-primary tracking-tight mb-2 flex items-center gap-2.5">
                <span className="p-1.5 rounded-lg bg-teal-50 dark:bg-slate-950 text-[#00828a] border border-teal-100 dark:border-slate-900 inline-flex">
                  <Waves size={18} />
                </span>
                {t.facilitiesTitle[lang]}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              {facilitiesItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="bg-bg-card border border-border-primary rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col space-y-3 relative overflow-hidden group"
                  id={`facility-card-${item.id}`}
                >
                  {/* Subtle top indicator line on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-350 origin-left"></div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-slate-950 text-[#00828a] border border-teal-100 dark:border-slate-900 group-hover:scale-110 transition-transform duration-300 shrink-0">
                      {item.icon}
                    </div>
                    <h4 className="text-sm sm:text-base font-sans font-black text-text-primary tracking-tight">
                      {item.title[lang]}
                    </h4>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed flex-1 font-medium">
                    {item.desc[lang]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Dedicated Healthcare Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -5 }}
            className="lg:col-span-4 bg-gradient-to-br from-bg-card via-bg-card to-teal-50/20 dark:to-slate-950/10 border border-teal-200/60 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            id="healthcare-premium-card"
          >
            {/* Ambient Background Glow Badge */}
            <div className="absolute -right-12 -bottom-12 text-teal-500/5 dark:text-teal-400/5 pointer-events-none group-hover:scale-110 transition-transform duration-500">
              <HeartPulse size={280} />
            </div>

            <div className="space-y-6 relative z-10">
              <span className="text-[10px] font-mono font-black tracking-widest text-teal-600 dark:text-teal-400 uppercase bg-teal-50 dark:bg-slate-900 border border-teal-100 dark:border-slate-800 px-3.5 py-1.5 rounded-full inline-block">
                {t.healthcareTitle[lang]}
              </span>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-teal-50 dark:bg-slate-950 border border-teal-100 dark:border-slate-900 text-teal-600 dark:text-teal-400 w-fit group-hover:rotate-6 transition-transform duration-300">
                  <Stethoscope size={36} className="stroke-[1.8]" />
                </div>
                
                <h4 className="text-xl sm:text-2xl font-sans font-black text-text-primary tracking-tight leading-snug">
                  KLE's Prabhakar Kore Hospital
                </h4>
                
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-medium">
                  {t.healthcareDesc[lang]}
                </p>
              </div>
            </div>

            {/* Bottom Hospital Partnership badge */}
            <div className="mt-8 pt-6 border-t border-teal-100 dark:border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono font-bold text-text-tertiary relative z-10 gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1.5 text-teal-600 dark:text-teal-400">
                  <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping"></span>
                  {lang === 'EN' ? 'ACTIVE PARTNERSHIP' : lang === 'HI' ? 'सक्रिय भागीदारी' : lang === 'KN' ? 'ಸಕ್ರಿಯ ಸಹಭಾಗಿತ್ವ' : 'सक्रिय भागीदारी'}
                </span>
                <span className="text-[10px] bg-teal-50 dark:bg-slate-900 border border-teal-100 dark:border-slate-800 text-teal-600 dark:text-teal-400 px-2 py-0.5 rounded">
                  {lang === 'EN' ? 'PHYSIOTHERAPY MOU' : lang === 'HI' ? 'फिजियोथेरेपी समझौता ज्ञापन' : lang === 'KN' ? 'ಫಿಸಿಯೋಥೆರಪಿ ಒಡಂಬಡಿಕೆ' : 'फिजिओथेरपी सामंजस्य करार'}
                </span>
              </div>
              <span>BELAGAVI, KA</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
