import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Award, Shield, UserCheck, Users, Mail, ChevronDown, ChevronUp, BarChart3, ClipboardList } from 'lucide-react';
import { Lang } from '../types';
import { TRANSLATIONS, MANAGING_COMMITTEE } from '../data';

interface TestimonialsProps {
  lang: Lang;
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const [numbersData, setNumbersData] = useState<any>({});
const [staffData, setStaffData] = useState<any>({});

useEffect(() => {
  const loadData = async () => {
    const numbersDoc = await getDoc(doc(db, "siteContent", "numbersSpeak"));
    const staffDoc = await getDoc(doc(db, "siteContent", "staffInfo"));

    if (numbersDoc.exists()) {
      setNumbersData(numbersDoc.data());
      console.log("Numbers:", numbersDoc.data());
    }

    if (staffDoc.exists()) {
      setStaffData(staffDoc.data());
      console.log("Staff:", staffDoc.data());
    }
  };

  loadData();
}, []);
 

  const t = (key: string) => TRANSLATIONS[key]?.[lang] || key;

  const [showStaffAndStats, setShowStaffAndStats] = useState(false);

  const statsTranslations = {
    btnShow: {
      EN: 'Show Staff & Organization Statistics',
      HI: 'कर्मचारी और संगठन के आंकड़े दिखाएं',
      KN: 'ಸಿಬ್ಬಂದಿ ಮತ್ತು ಸಂಸ್ಥೆಯ ಅಂಕಿಅಂಶಗಳನ್ನು ತೋರಿಸಿ',
      MR: 'कर्मचारी आणि संस्थेची आकडेवारी दाखवा'
    },
    btnHide: {
      EN: 'Hide Staff & Organization Statistics',
      HI: 'कर्मचारी और संगठन के आंकड़े छिपाएं',
      KN: 'ಸಿಬ್ಬಂದಿ ಮತ್ತು ಸಂಸ್ಥೆಯ ಅಂಕಿಅಂಶಗಳನ್ನು ಮರೆಮಾಡಿ',
      MR: 'कर्मचारी आणि संस्थेची आकडेवारी लपवा'
    },
    statsTitle: {
      EN: 'Numbers Speak',
      HI: 'आंकड़े बोलते हैं',
      KN: 'ಅಂಕಿಅಂಶಗಳು ಹೇಳುತ್ತವೆ',
      MR: 'आकडेवारी बोलते'
    },
    staffTitle: {
      EN: 'Information about Staff',
      HI: 'कर्मचारियों के बारे में जानकारी',
      KN: 'ಸಿಬ್ಬಂದಿ ಮಾಹಿತಿ',
      MR: 'कर्मचाऱ्यांविषयी माहिती'
    },
    statsSubtitle: {
      EN: 'Milestones of Rehabilitation & Care',
      HI: 'पुनर्वास और देखभाल के महत्वपूर्ण मील के पत्थर',
      KN: 'ಪುನರ್ವಸತಿ ಮತ್ತು ಕಾಳಜಿಯ ಮೈಲಿಗಲ್ಲುಗಳು',
      MR: 'पुनर्वसन आणि काळजीचे महत्त्वाचे टप्पे'
    },
    staffSubtitle: {
      EN: 'Our Dedicated Caregivers & Operational Staff',
      HI: 'हमारे समर्पित देखभालकर्ता और परिचालन कर्मचारी',
      KN: 'ನಮ್ಮ ಸಮರ್ಪಿತ ಆರೈಕೆದಾರರು ಮತ್ತು ಕಾರ್ಯಾಚರಣಾ ಸಿಬ್ಬಂದಿ',
      MR: 'आमचे समर्पित काळजीवाहू आणि ऑपरेशन्स कर्मचारी'
    },
    thSNo: {
      EN: 'S. No.',
      HI: 'क्र.सं.',
      KN: 'ಕ್ರ.ಸಂ.',
      MR: 'अनु.क्र.'
    },
    thMetric: {
      EN: 'Metric / Particulars',
      HI: 'मापदंड / विवरण',
      KN: 'ವಿವರ',
      MR: 'तपशील'
    },
    thCount: {
      EN: 'Count',
      HI: 'संख्या',
      KN: 'ಸಂಖ್ಯೆ',
      MR: 'संख्या'
    },
    thPost: {
      EN: 'Post',
      HI: 'पद',
      KN: 'ಹುದ್ದೆ',
      MR: 'पद'
    },
    thNoStaff: {
      EN: 'No. of Staff',
      HI: 'कर्मचारियों की संख्या',
      KN: 'ಸಿಬ್ಬಂದಿ ಸಂಖ್ಯೆ',
      MR: 'कर्मचारी संख्या'
    }
  };

  const numbersSpeakData = [
    {
      sNo: '1',
      metric: {
        EN: 'Daughters of the center who have been happily married and their wedding arrangements made by the center.',
        HI: 'केंद्र की बेटियां जिनका सुखद विवाह हुआ और विवाह की व्यवस्था केंद्र द्वारा की गई',
        KN: 'ಸಂಸ್ಥೆಯ ವತಿಯಿಂದಲೇ ವಿವಾಹ ಮಹೋತ್ಸವ ನಡೆಸಿ ಯಶಸ್ವಿಯಾಗಿ ವೈವಾಹಿಕ ಜೀವನಕ್ಕೆ ಕಾಲಿಟ್ಟ ಹೆಣ್ಣುಮಕ್ಕಳು',
        MR: 'संस्थेच्या मुली ज्यांचा सुखाचा विवाह झाला आणि लग्नाची सर्व व्यवस्था संस्थेने केली'
      },
      count: '08'
    },
    {
      sNo: '2',
      metric: {
        EN: 'No. of girls in the nursery',
        HI: 'नर्सरी में लड़कियों की संख्या',
        KN: 'ಶಿಶುವಿಹಾರದಲ್ಲಿರುವ ಬಾಲಕಿಯರ ಸಂಖ್ಯೆ',
        MR: 'शिशुगृहातील मुलींची संख्या'
      },
      count: '14'
    },
    {
      sNo: '3',
      metric: {
        EN: 'No. of girls in the KG section and above',
        HI: 'केजी सेक्शन और उससे ऊपर की लड़कियों की संख्या',
        KN: 'ಕೆಜಿ ಮತ್ತು ಅದಕ್ಕಿಂತ ಮೇಲಿನ ತರಗತಿಗಳ ಬಾಲಕಿಯರ ಸಂಖ್ಯೆ',
        MR: 'के.जी. आणि त्यावरील वर्गातील मुलींची संख्या'
      },
      count: '36'
    },
    {
      sNo: '',
      metric: {
        EN: 'Total no. of girls',
        HI: 'लड़कियों की कुल संख्या',
        KN: 'ಒಟ್ಟು ಬಾಲಕಿಯರ ಸಂಖ್ಯೆ',
        MR: 'एकूण मुलींची संख्या'
      },
      count: '50',
      isTotal: true
    },
    {
      sNo: '4',
      metric: {
        EN: 'No. of boys in the nursery',
        HI: 'नर्सरी में लड़कों की संख्या',
        KN: 'ಶಿಶುವಿಹಾರದಲ್ಲಿರುವ ಬಾಲಕರ ಸಂಖ್ಯೆ',
        MR: 'शिशुगृहातील मुलांची संख्या'
      },
      count: '18'
    },
    {
      sNo: '5',
      metric: {
        EN: 'No. of boys in the KG section and above',
        HI: 'केजी सेक्शन और उससे ऊपर के लड़कों की संख्या',
        KN: 'ಕೆಜಿ ಮತ್ತು ಅದಕ್ಕಿಂತ ಮೇಲಿನ ತರಗತಿಗಳ ಬಾಲಕರ ಸಂಖ್ಯೆ',
        MR: 'के.जी. आणि त्यावरील वर्गातील मुलांची संख्या'
      },
      count: '42'
    },
    {
      sNo: '',
      metric: {
        EN: 'Total no. of boys',
        HI: 'लड़कों की कुल संख्या',
        KN: 'ಒಟ್ಟು ಬಾಲಕರ ಸಂಖ್ಯೆ',
        MR: 'एकूण मुलांची संख्या'
      },
      count: '60',
      isTotal: true
    },
    {
      sNo: '6',
      metric: {
        EN: 'Total no. of children returned to their families/parents',
        HI: 'अपने परिवारों/माता-पिता को लौटाए गए बच्चों की कुल संख्या',
        KN: 'ತಮ್ಮ ಕುಟುಂಬಗಳು/ಪೋಷಕರ ಬಳಿ ಮರಳಿದ ಒಟ್ಟು ಮಕ್ಕಳ ಸಂಖ್ಯೆ',
        MR: 'आपल्या कुटुंबियांकडे/पालकांकडे परत गेलेल्या मुलांची एकूण संख्या'
      },
      count: '145'
    },
    {
      sNo: '7',
      metric: {
        EN: 'Total no. of children rehabilitated',
        HI: 'पुनर्वासित बच्चों की कुल संख्या',
        KN: 'ಒಟ್ಟು ಪುನರ್ವಸತಿ ಪಡೆದ ಮಕ್ಕಳ ಸಂಖ್ಯೆ',
        MR: 'एकूण पुनर्वसन झालेल्या मुलांची संख्या'
      },
      count: '384'
    }
  ];
    
  
    const staffTableData = [
    { sNo: '1.', role: { EN: 'Manager', HI: 'प्रबंधक', KN: 'ವ್ಯವಸ್ಥಾಪಕರು', MR: 'व्यवस्थापक' }, count: '01' },
    { sNo: '2.', role: { EN: 'Asst. Manager', HI: 'सहायक प्रबंधक', KN: 'ಸಹಾಯಕ ವ್ಯವಸ್ಥಾಪಕರು', MR: 'सहायक व्यवस्थापक' }, count: '01' },
    { sNo: '3.', role: { EN: 'Social Workers', HI: 'सामाजिक कार्यकर्ता', KN: 'ಸಾಮಾಜಿಕ ಕಾರ್ಯಕರ್ತರು', MR: 'सामाजिक कार्यकर्ते' }, count: '02' },
    { sNo: '4.', role: { EN: 'Doctor', HI: 'चिकित्सक', KN: 'ವೈದ್ಯರು', MR: 'डॉक्टर' }, count: '01' },
    { sNo: '5.', role: { EN: 'House Mothers', HI: 'हाउस मदर्स (गृह माता)', KN: 'ಮನೆ ತಾಯಂದಿರು', MR: 'गृहमाता' }, count: '02' },
    { sNo: '6.', role: { EN: 'Superintendent', HI: 'अधीक्षक', KN: 'ಅಧೀಕ್ಷಕರು', MR: 'अधीक्षक' }, count: '01' },
    { sNo: '7.', role: { EN: 'Homework Teacher', HI: 'गृहकार्य शिक्षक', KN: 'ಮನೆಕೆಲಸದ ಶಿಕ್ಷಕರು', MR: 'गृहपाठ शिक्षक' }, count: '01' },
    { sNo: '8.', role: { EN: 'Nurse', HI: 'नर्स (परिचारिका)', KN: 'ಶುಶ್ರೂಷಕಿ', MR: 'परिचारिका (नर्स)' }, count: '01' },
    { sNo: '9.', role: { EN: 'Clerk', HI: 'लिपिक (क्लर्क)', KN: 'ಗುಮಾಸ್ತರು', MR: 'लिपिक' }, count: '01' },
    { sNo: '10.', role: { EN: 'Ayahs', HI: 'आया', KN: 'ಆಯಾಗಳು', MR: 'आया' }, count: '02' },
    { sNo: '11.', role: { EN: 'Cooks', HI: 'रसोइया', KN: 'ಅಡುಗೆಯವರು', MR: 'स्वयंपाकी' }, count: '02' },
    { sNo: '12.', role: { EN: 'Helpers', HI: 'सहायक (हेल्पर्स)', KN: 'ಸಹಾಯಕರು', MR: 'मदतनीस' }, count: '02' },
    { sNo: '13.', role: { EN: 'Watchman', HI: 'चौकीदार (वॉचमैन)', KN: 'ಕಾವಲುಗಾರ', MR: 'रक्षक (वॉचमन)' }, count: '01' }
  ];

  // Group members by category
  const executives = MANAGING_COMMITTEE.filter(m => m.category === 'executive');
  const founders = MANAGING_COMMITTEE.filter(m => m.category === 'founder');
  const trustees = MANAGING_COMMITTEE.filter(m => m.category === 'trustee');
  const invitees = MANAGING_COMMITTEE.filter(m => m.category === 'invitee');

  
  const sectionVariants: any = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};
  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };
const numberRows = [
  {
    sno: 1,
    metric: "Daughters of the center who have been happily married and their wedding arrangements made by the center.",
    count: numbersData.marriedDaughters || 0
  },
  {
    sno: 2,
    metric: "No. of girls in the nursery",
    count: numbersData.girlsNursery || 0
  },
  {
    sno: 3,
    metric: "No. of girls in the KG section and above",
    count: numbersData.girlsKGAbove || 0
  },
  {
    sno: "",
    metric: "Total no. of girls",
    count: numbersData.totalGirls || 0
  },
  {
    sno: 4,
    metric: "No. of boys in the nursery",
    count: numbersData.boysNursery || 0
  },
  {
    sno: 5,
    metric: "No. of boys in the KG section and above",
    count: numbersData.boysKGAbove || 0
  },
  {
    sno: "",
    metric: "Total no. of boys",
    count: numbersData.totalBoys || 0
  },
  {
    sno: 6,
    metric: "Total no. of children returned to their families/parents",
    count: numbersData.childrenReturned || 0
  },
  {
    sno: 7,
    metric: "Total no. of children rehabilitated",
    count: numbersData.childrenRehabilitated || 0
  }
];

const staffRows = [
  { sno: 1, post: "Manager", count: staffData.manager || 0 },
  { sno: 2, post: "Asst. Manager", count: staffData.assistantManager || 0 },
  { sno: 3, post: "Social Workers", count: staffData.socialWorkers || 0 },
  { sno: 4, post: "Doctor", count: staffData.doctor || 0 },
  { sno: 5, post: "House Mothers", count: staffData.houseMothers || 0 },
  { sno: 6, post: "Superintendent", count: staffData.superintendent || 0 },
  { sno: 7, post: "Homework Teacher", count: staffData.homeworkTeacher || 0 },
  { sno: 8, post: "Nurse", count: staffData.nurse || 0 },
  { sno: 9, post: "Clerk", count: staffData.clerk || 0 },
  { sno: 10, post: "Ayahs", count: staffData.ayahs || 0 },
  { sno: 11, post: "Cooks", count: staffData.cooks || 0 },
  { sno: 12, post: "Helpers", count: staffData.helpers || 0 },
  { sno: 13, post: "Watchman", count: staffData.watchman || 0 }
];


return (
    <section
      id="testimonials-carousel"
      className="bg-transparent py-20 sm:py-28 text-text-secondary transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title tagline */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <span className="text-xs font-mono font-black tracking-widest text-amber-600 uppercase bg-amber-50 dark:bg-slate-900 px-3.5 py-1.5 rounded-full border border-amber-100 dark:border-slate-800">
            {t('testimonials_tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight text-text-primary leading-tight">
            {t('testimonials_title')}
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto font-medium">
            {lang === 'EN' && 'The dedicated leaders and visionaries guiding Swami Vivekanand Seva Pratishthan to foster child welfare, protection, and education.'}
            {lang === 'HI' && 'स्वामी विवेकानंद सेवा प्रतिष्ठान का मार्गदर्शन करने वाले समर्पित नेता और दूरदर्शी जो बाल कल्याण, सुरक्षा और शिक्षा को बढ़ावा देते हैं।'}
            {lang === 'KN' && 'ಸ್ವಾಮಿ ವಿವೇಕಾನಂದ ಸೇವಾ ಪ್ರತಿಷ್ಠಾನವನ್ನು ಮುನ್ನಡೆಸುತ್ತಿರುವ ಮತ್ತು ಮಕ್ಕಳ ಕಲ್ಯಾಣ, ರಕ್ಷಣೆ ಹಾಗೂ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಿರುವ ಸಮರ್ಪಿತ ನಾಯಕರು.'}
            {lang === 'MR' && 'स्वामी विवेकानंद सेवा प्रतिष्ठानचे मार्गदर्शन करणारे समर्पित नेते आणि दूरदर्शी जे बाल कल्याण, संरक्षण आणि शिक्षणाला चालना देतात.'}
          </p>
        </div>

        {/* Executives Section (Managing Trustee, Secretary, Treasurer) */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h3 className="text-center text-xs font-mono font-bold uppercase tracking-widest text-amber-600 mb-8 flex items-center justify-center gap-2">
            <Award size={14} />
            {lang === 'EN' ? 'Executive Committee' : lang === 'HI' ? 'कार्यकारिणी समिति' : lang === 'KN' ? 'ಕಾರ್ಯಕಾರಿ ಸಮಿತಿ' : 'कार्यकारिणी समिती'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {executives.map((member) => (
              <motion.div
                key={member.id}
                id={`member-card-${member.id}`}
                variants={itemVariants}
                className="bg-bg-card border border-border-primary rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden group"
              >
                {/* Visual accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-500 to-amber-600"></div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-amber-50 dark:bg-slate-950 text-amber-600 border border-amber-100 dark:border-slate-900 group-hover:scale-110 transition-transform duration-300">
                      <UserCheck size={24} />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">
                        {member.role[lang]}
                      </span>
                      <h4 className="text-lg font-sans font-black text-text-primary tracking-tight">
                        {member.name[lang]}
                      </h4>
                    </div>
                  </div>

                  {member.subtitle && (
                    <p className="text-sm font-medium text-text-secondary border-l-2 border-amber-200 dark:border-slate-800 pl-3">
                      {member.subtitle[lang]}
                    </p>
                  )}
                </div>

                {member.cell && (
                  <div className="mt-6 pt-4 border-t border-border-primary flex items-center gap-2 text-xs font-mono font-semibold text-text-secondary bg-bg-secondary/40 px-3 py-2 rounded-lg">
                    <Phone size={14} className="text-amber-600" />
                    <span>{lang === 'EN' ? 'Cell' : lang === 'HI' ? 'मोबाइल' : lang === 'KN' ? 'ಮೊಬೈಲ್' : 'भ्रमणध्वनी'}: {member.cell}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founder Trustees */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h3 className="text-center text-xs font-mono font-bold uppercase tracking-widest text-amber-600 mb-8 flex items-center justify-center gap-2">
            <Shield size={14} />
            {lang === 'EN' ? 'Founder Trustees' : lang === 'HI' ? 'संस्थापक न्यासी' : lang === 'KN' ? 'ಸ್ಥಾಪಕ ವಿಶ್ವಸ್ಥರು' : 'संस्थापक विश्वस्त'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {founders.map((member) => (
              <motion.div
                key={member.id}
                id={`member-card-${member.id}`}
                variants={itemVariants}
                className="bg-bg-card border border-border-primary rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden group flex items-center gap-4"
              >
                <div className="p-2.5 rounded-lg bg-amber-50/50 dark:bg-slate-900 text-amber-600 border border-amber-100/50 dark:border-slate-800">
                  <Award size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-600 block">
                    {member.role[lang]}
                  </span>
                  <h4 className="text-base font-sans font-bold text-text-primary tracking-tight">
                    {member.name[lang]}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Board of Trustees & Invitees */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          
          {/* Trustees */}
          <div className="md:col-span-8 flex flex-col">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 mb-6 flex items-center gap-2 pl-1">
              <Users size={14} />
              {lang === 'EN' ? 'Trustees' : lang === 'HI' ? 'न्यासी' : lang === 'KN' ? 'ವಿಶ್ವಸ್ಥರು' : 'विश्वस्त'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
              {trustees.map((member) => (
                <motion.div
                  key={member.id}
                  id={`member-card-${member.id}`}
                  variants={itemVariants}
                  className="bg-bg-card border border-border-primary rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <div>
                    <h4 className="text-sm font-sans font-bold text-text-primary">
                      {member.name[lang]}
                    </h4>
                    <span className="text-[10px] font-mono font-semibold text-text-secondary uppercase tracking-wider">
                      {member.role[lang]}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Special Invitee */}
          <div className="md:col-span-4 flex flex-col">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 mb-6 flex items-center gap-2 pl-1">
              <UserCheck size={14} />
              {lang === 'EN' ? 'Special Invitee' : lang === 'HI' ? 'विशेष आमंत्रित सदस्य' : lang === 'KN' ? 'ವಿಶೇಷ ಆಹ್ವಾನಿತರು' : 'विशेष आमंत्रित सदस्य'}
            </h3>

            <div className="h-[calc(100%-2rem)] flex-grow">
              {invitees.map((member) => (
                <motion.div
                  key={member.id}
                  id={`member-card-${member.id}`}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-bg-card to-amber-50/20 dark:to-slate-900/10 border border-amber-200/60 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-center relative overflow-hidden group"
                >
                  <div className="absolute -right-6 -bottom-6 text-amber-100/30 dark:text-slate-800/20 pointer-events-none group-hover:scale-110 transition-transform duration-300">
                    <Users size={120} />
                  </div>
                  
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-600 block mb-1">
                    {member.role[lang]}
                  </span>
                  <h4 className="text-base font-sans font-black text-text-primary tracking-tight">
                    {member.name[lang]}
                  </h4>
                  <p className="text-xs text-text-secondary mt-2">
                    {lang === 'EN' && 'Advising board on state-level community relations and operations coordination.'}
                    {lang === 'HI' && 'राज्य स्तर पर सामुदायिक संबंधों और संचालन समन्वय पर बोर्ड को सलाह देना।'}
                    {lang === 'KN' && 'ರಾಜ್ಯ ಮಟ್ಟದ ಸಮುದಾಯ ಸಂಬಂಧಗಳು ಮತ್ತು ಕಾರ್ಯಾಚರಣೆಗಳ ಸಂಯೋಜನೆಯ ಕುರಿತು ಮಂಡಳಿಗೆ ಸಲಹೆ ನೀಡುವುದು.'}
                    {lang === 'MR' && 'राज्य पातळीवरील समुदाय संबंध आणि ऑपरेशन्स समन्वयावर बोर्डाला सल्ला देणे.'}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>

        {/* Staff and Stats Section Toggle Button */}
        <div className="mt-16 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowStaffAndStats(!showStaffAndStats)}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-sans font-black text-sm uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 cursor-pointer select-none border border-amber-400/20"
            id="toggle-staff-stats-btn"
          >
            {showStaffAndStats ? (
              <>
                <ChevronUp size={18} className="stroke-[2.5]" />
                {statsTranslations.btnHide[lang]}
              </>
            ) : (
              <>
                <ChevronDown size={18} className="stroke-[2.5]" />
                {statsTranslations.btnShow[lang]}
              </>
            )}
          </motion.button>
        </div>

        {/* Expandable Staff and Stats Grid */}
        <AnimatePresence>
          {showStaffAndStats && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden mt-12"
              id="staff-stats-expandable-container"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
                
                {/* Numbers Speak Column */}
                <div className="lg:col-span-7 bg-bg-card border border-border-primary rounded-2xl p-6 sm:p-8 shadow-md">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-amber-50 dark:bg-slate-900 border border-amber-100 dark:border-slate-800 text-amber-600 dark:text-amber-400 rounded-xl">
                      <BarChart3 size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-sans font-black text-text-primary tracking-tight">
                        {statsTranslations.statsTitle[lang]}
                      </h3>
                      <p className="text-xs text-text-secondary font-medium uppercase tracking-wider mt-0.5">
                        {statsTranslations.statsSubtitle[lang]}
                      </p>
                    </div>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-border-primary">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-amber-50/50 dark:bg-slate-900/60 border-b border-border-primary">
                          <th className="py-4 px-4 text-xs font-mono font-black text-text-primary uppercase tracking-wider w-16 text-center">
                            {statsTranslations.thSNo[lang]}
                          </th>
                          <th className="py-4 px-4 text-xs font-sans font-black text-text-primary uppercase tracking-wider">
                            {statsTranslations.thMetric[lang]}
                          </th>
                          <th className="py-4 px-4 text-xs font-mono font-black text-text-primary uppercase tracking-wider w-24 text-center">
                            {statsTranslations.thCount[lang]}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border-primary">
  {numberRows.map((row, index) => (
  <tr key={index} className="text-text-secondary">
    <td className="py-3 px-4 text-xs font-mono text-center font-bold">
      {row.sno}
    </td>

    <td className="py-3 px-4 text-xs sm:text-sm font-medium leading-relaxed">
     {row.metric}
    </td>

    <td className="py-3 px-4 text-xs sm:text-sm font-mono text-center font-black text-[#00828a] dark:text-teal-400">
      {row.count}
    </td>
  </tr>
))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Staff Info Column */}
                <div className="lg:col-span-5 bg-bg-card border border-border-primary rounded-2xl p-6 sm:p-8 shadow-md">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-amber-50 dark:bg-slate-900 border border-amber-100 dark:border-slate-800 text-amber-600 dark:text-amber-400 rounded-xl">
                      <ClipboardList size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-sans font-black text-text-primary tracking-tight">
                        {statsTranslations.staffTitle[lang]}
                      </h3>
                      <p className="text-xs text-text-secondary font-medium uppercase tracking-wider mt-0.5">
                        {statsTranslations.staffSubtitle[lang]}
                      </p>
                    </div>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-border-primary">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-amber-50/50 dark:bg-slate-900/60 border-b border-border-primary">
                          <th className="py-4 px-4 text-xs font-mono font-black text-text-primary uppercase tracking-wider w-16 text-center">
                            {statsTranslations.thSNo[lang]}
                          </th>
                          <th className="py-4 px-4 text-xs font-sans font-black text-text-primary uppercase tracking-wider">
                            {statsTranslations.thPost[lang]}
                          </th>
                          <th className="py-4 px-4 text-xs font-mono font-black text-text-primary uppercase tracking-wider w-28 text-center">
                            {statsTranslations.thNoStaff[lang]}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border-primary">
  {staffRows.map((row) => (
  <tr key={row.sno} className="hover:bg-amber-50/10 dark:hover:bg-slate-900/10">
    <td className="py-3 px-4 text-xs font-mono text-center font-medium">
      {row.sno}
    </td>

    <td className="py-3 px-4 text-xs sm:text-sm font-black text-text-primary">
     {row.post}
    </td>

    <td className="py-3 px-4 text-xs sm:text-sm font-mono text-center font-black text-[#00828a] dark:text-teal-400">
      {String(row.count).padStart(2, "0")}
    </td>
  </tr>
))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
