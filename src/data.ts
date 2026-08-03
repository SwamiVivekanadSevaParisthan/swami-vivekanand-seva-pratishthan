import { Project, NewsItem, EventItem, TestimonialItem, CommitteeMember, Lang } from './types';

import cheeringChildren from './assets/images/cheering_children_1782362943990.jpg';
import childrenSmiling from './assets/images/children_smiling_closeup_1782362967175.jpg';
import childrenLollipops from './assets/images/children_lollipops_standing_1782362983848.jpg';
import boyHoldingShapes from './assets/images/boy_holding_shapes_1782363002146.jpg';
import girlHoldingBooks from './assets/images/girl_holding_books_1782364947171.jpg';
import girlClassroomWriting from './assets/images/girl_classroom_writing_1782364964615.jpg';
import boysClassroomLearning from './assets/images/boys_classroom_learning_1782364978847.jpg';
import childrenCookingMeals from './assets/images/children_cooking_meals_1782382875848.jpg';
import childrenCrossingRoad from './assets/images/children_crossing_road_1782382899598.jpg';
import classroomLessonSun from './assets/images/classroom_lesson_sun_1782383078818.jpg';
import classroomInteractive from './assets/images/classroom_interactive_1782383097331.jpg';
import childrenSmilingFriends from './assets/images/children_smiling_friends_1782383114436.jpg';
import governorVisit from './assets/images/governor_visit_1782392087505.jpg';
import documentImage from "./assets/images/document.jpeg";

export const TRANSLATIONS: Record<string, Record<Lang, string>> = {
  // Navigation
  nav_home: { EN: 'Home', HI: 'मुख्य पृष्ठ', KN: 'ಮುಖಪುಟ', MR: 'मुख्य पृष्ठ' },
  nav_about: { EN: 'About Us', HI: 'हमारे बारे में', KN: 'ನಮ್ಮ ಬಗ್ಗೆ', MR: 'आमच्याबद्दल' },
  nav_projects: { EN: 'Objectives', HI: 'मुख्य उद्देश्य', KN: 'ಮುಖ್ಯ ಉದ್ದೇಶಗಳು', MR: 'मुख्य उद्दिष्टे' },
  nav_news: { EN: 'Staff & Team', HI: 'नेतृत्व और टीम', KN: 'ಸಿಬ್ಬಂದಿ आणि संघ', MR: 'कर्मचारी आणि संघ' },
  nav_publications: { EN: 'Recognition', HI: 'मान्यता एवं उपलब्धियां', KN: 'ಗೌರವ ಮತ್ತು ಸಾಧನೆಗಳು', MR: 'मान्यता आणि यश' },
  nav_involved: { EN: 'Safe Homes', HI: 'सुरक्षित बाल गृह', KN: 'ಸುರಕ್ಷಿತ ಗೃಹಗಳು', MR: 'सुरक्षित बाल गृह' },
  nav_contact: { EN: 'Contact Us', HI: 'संपर्क करें', KN: 'ಸಂಪರ್ಕಿಸಿ', MR: 'संपर्क साधा' },
  nav_donate: { EN: 'Donate', HI: 'दान करें', KN: 'ದಾನ ಮಾಡಿ', MR: 'दान करा' },
  nav_adopt: { EN: 'Adopt', HI: 'गोद लें', KN: 'ದತ್ತು ಪಡೆಯಿರಿ', MR: 'दत्तक प्रक्रिया' },
  nav_slogan: { 
    EN: 'Building a Future Filled with Hope and Possibilities', 
    HI: 'आशा और संभावनाओं से भरे भविष्य का निर्माण', 
    KN: 'ಭರವಸೆ ಮತ್ತು ಸಾಧ್ಯತೆಗಳಿಂದ ತುಂಬಿದ ಭವಿಷ್ಯದ ನಿರ್ಮಾಣ',
    MR: 'आशा आणि शक्यतांनी समृद्ध भविष्याची निर्मिती'
  },

  // Hero Section
  hero_title_accent: { 
    EN: 'Swami Vivekanand Seva Pratishthan', 
    HI: 'स्वामी विवेकानंद सेवा प्रतिष्ठान', 
    KN: 'ಸ್ವಾಮಿ ವಿವೇಕಾನಂದ ಸೇವಾ ಪ್ರತಿಷ್ಠಾನ',
    MR: 'स्वामी विवेकानंद सेवा प्रतिष्ठान'
  },
  hero_title_main: { 
    EN: 'Building a Future Filled with Hope', 
    HI: 'आशा एवं संभावनाओं से भरा भविष्य', 
    KN: 'ಭರವಸೆಯ ಭವಿಷ್ಯದ ನಿರ್ಮಾಣ',
    MR: 'आशा आणि विश्वासाचे भविष्य घडविणे'
  },
  hero_subtitle: { 
    EN: 'Dedicated to caring for orphaned, abandoned, and underprivileged children through education, shelter, healthcare, emotional support, and rehabilitation.',
    HI: 'शिक्षा, आश्रय, स्वास्थ्य सेवा, भावनात्मक समर्थन और पुनर्वास के माध्यम से अनाथ, परित्यक्त और वंचित बच्चों की देखभाल के लिए समर्पित।',
    KN: 'ಶಿಕ್ಷಣ, ಆಶ್ರಯ, ಆರೋಗ್ಯ ರಕ್ಷಣೆ, ಭಾವನಾತ್ಮಕ ಬೆಂಬಲ ಮತ್ತು ಪುನರ್ವಸತಿ ಮೂಲಕ ಅನಾಥ, ಕೈಬಿಟ್ಟ ಮತ್ತು ವಂಚಿತ ಮಕ್ಕಳ ಆರೈಕೆಗೆ ಸಮರ್ಪಿಸಲಾಗಿದೆ.',
    MR: 'शिक्षण, निवारा, आरोग्य सेवा, भावनिक आधार आणि पुनर्वसनाच्या माध्यमातून अनाथ, निराधार आणि वंचित मुलांच्या संगोपनासाठी समर्पित.'
  },
  hero_cta_donate: { EN: 'Donate Now', HI: 'अभी दान करें', KN: 'ಈಗ ದಾನ ಮಾಡಿ', MR: 'आता दान करा' },
  hero_cta_projects: { EN: 'Become a Volunteer', HI: 'स्वयंसेवक बनें', KN: 'ಸ್ವಯಂಸೇವಕರಾಗಿ', MR: 'स्वयंसेवक व्हा' },

  // Stats / Mission Section
  mission_tag: { EN: 'WHO WE ARE', HI: 'हम कौन हैं', KN: 'ನಾವು ಯಾರು', MR: 'आम्ही कोण आहोत' },
  mission_title: { 
    EN: 'Nurturing safety, dignity and opportunities since 1982',
    HI: '1982 से सुरक्षा, सम्मान और अवसरों का पोषण',
    KN: '1982 ರಿಂದ ಸುರಕ್ಷತೆ, ಗೌರವ ಮತ್ತು ಅವಕಾಶಗಳ ಪೋಷಣೆ',
    MR: '१९८२ पासून सुरक्षा, प्रतिष्ठा आणि संधींचे संगोपन'
  },
  mission_p1: {
    EN: 'Swami Vivekanand Seva Pratishthan is a humanitarian organization dedicated to the care, protection, and holistic development of orphaned, abandoned, and underprivileged children.',
    HI: 'स्वामी विवेकानंद सेवा प्रतिष्ठान एक मानवीय संगठन है जो अनाथ, परित्यक्त और वंचित बच्चों की देखभाल, सुरक्षा और समग्र विकास के लिए समर्पित है।',
    KN: 'ಸ್ವಾಮಿ ವಿವೇಕಾನಂದ ಸೇವಾ ಪ್ರತಿಷ್ಠಾನವು ಒಂದು ಮಾನವೀಯ ಸಂಘಟನೆಯಾಗಿದ್ದು, ಅನಾಥ, ಕೈಬಿಟ್ಟ ಮತ್ತು ವಂಚಿತ ಮಕ್ಕಳ ಆರೈಕೆ, ರಕ್ಷಣೆ ಮತ್ತು ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿಗೆ ಸಮರ್ಪಿಸಲಾಗಿದೆ.',
    MR: 'स्वामी विवेकानंद सेवा प्रतिष्ठान ही अनाथ, निराधार आणि वंचित मुलांच्या काळजी, संरक्षण आणि सर्वांगीण विकासासाठी समर्पित असणारी एक मानवतावादी संस्था आहे.'
  },
  mission_p2: {
    EN: 'Established in 1982 and registered under the Bombay Public Trust Act, the organization has remained committed to creating a nurturing environment where every child receives care, dignity, education, and opportunities for a brighter future. Through comprehensive welfare programs, the institution focuses on the emotional, educational, medical, and social development of children, helping them become responsible citizens and compassionate human beings.',
    HI: '1982 में स्थापित और बॉम्बे पब्लिक ट्रस्ट एक्ट के तहत पंजीकृत, यह संगठन एक ऐसा पोषण पर्यावरण बनाने के लिए प्रतिबद्ध रहा है जहाँ हर बच्चे को देखभाल, गरिमा, शिक्षा और बेहतर भविष्य के अवसर मिलें। व्यापक कल्याण कार्यक्रमों के माध्यम से, यह संस्था बच्चों के भावनात्मक, शैक्षिक, चिकित्सा और सामाजिक विकास पर ध्यान চক্ষে रखती है, जिससे वे जिम्मेदार नागरिक और दयालु इंसान बन सकें।',
    KN: '1982 ರಲ್ಲಿ ಸ್ಥಾಪನೆಗೊಂಡು ಬಾಂಬೆ ಸಾರ್ವಜನಿಕ ಟ್ರಸ್ಟ್ ಕಾಯ್ದೆಯಡಿ ನೋಂದಾಯಿಸಲ್ಪಟ್ಟ ಈ ಸಂಸ್ಥೆಯು ಪ್ರತಿ ಮಗುವಿಗೆ ಕಾಳಜಿ, ಗೌರವ, ಶಿಕ್ಷಣ ಮತ್ತು ಉತ್ತಮ ಭವಿಷ್ಯಕ್ಕಾಗಿ ಅವಕಾಶಗಳು ಸಿಗುವಂತಹ ಪೋಷಣೆಯ ವಾತಾವರಣವನ್ನು ಸೃಷ್ಟಿಸಲು ಬದ್ಧವಾಗಿದೆ. ಸಮಗ್ರ ಕಲ್ಯಾಣ ಕಾರ್ಯಕ್ರಮಗಳ ಮೂಲಕ, ಈ ಸಂಸ್ಥೆಯು ಮಕ್ಕಳ ಭಾವನಾತ್ಮಕ, ಶೈಕ್ಷಣಿಕ, ವೈದ್ಯಕೀಯ ಮತ್ತು ಸಾಮಾಜಿಕ ಅಭಿವೃದ್ಧಿಯ ಮೇಲೆ ಗಮನಹರಿಸುತ್ತದೆ, ಅವರು ಜವಾಬ್ದಾರಿಯುತ ನಾಗರಿಕರಾಗಿ ಮತ್ತು ಸಹಾನುಭೂತಿಯುಳ್ಳ ಮನುಷ್ಯರಾಗಿ ಬೆಳೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.',
    MR: '१९८२ मध्ये स्थापित आणि बॉम्बे पब्लिक ट्रस्ट ॲक्ट अंतर्गत नोंदणीकृत, ही संस्था प्रत्येक मुलाला काळजी, प्रतिष्ठा, शिक्षण आणि उज्ज्वल भविष्यासाठी संधी मिळतील असे पोषक वातावरण निर्माण करण्यासाठी कटिबद्ध आहे. सर्वसमावेशक कल्याणकारी कार्यक्रमांच्या माध्यमातून, ही संस्था मुलांच्या भावनिक, शैक्षणिक, वैद्यकीय आणि सामाजिक विकासावर लक्ष केंद्रित करते, ज्यामुळे त्यांना जबाबदार आणि संवेदनशील नागरिक बनण्यास मदत होते.'
  },

  // Counter stats
  stat_projects_label: { EN: 'Established', HI: 'स्थापना', KN: 'ಸ್ಥಾಪನೆ ವರ್ಷ', MR: 'स्थापना वर्ष' },
  stat_countries_label: { EN: 'Boys Home Capacity', HI: 'बालक गृह क्षमता', KN: 'ಹುಡುಗರ ಆಶ್ರಯ ಸಾಮರ್ಥ್ಯ', MR: 'बालक गृह क्षमता' },
  stat_beneficiaries_label: { EN: 'Girls Home Capacity', HI: 'बालिका गृह क्षमता', KN: 'ಹುಡುಗಿಯರ ಆಶ್ರಯ ಸಾಮರ್ಥ್ಯ', MR: 'बालिका गृह क्षमता' },
  stat_years_label: { EN: 'Additional Capacity', HI: 'अतिरिक्त क्षमता', KN: 'ಹೆಚ್ಚುವರಿ ಸಾಮರ್ಥ್ಯ', MR: 'अतिरिक्त क्षमता' },

  // Causes Section
  causes_tag: { EN: 'OUR OBJECTIVES', HI: 'हमारे उद्देश्य', KN: 'ನಮ್ಮ ಉದ್ದೇಶಗಳು', MR: 'आमची उद्दिष्टे' },
  causes_title: { 
    EN: 'Our Mission & Objectives for Child Welfare',
    HI: 'बाल कल्याण के लिए हमारे मिशन और उद्देश्य',
    KN: 'ಮಕ್ಕಳ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ನಮ್ಮ ಮಿಷನ್ ಮತ್ತು ಒಡನಾಡಿಗಳು',
    MR: 'बालकल्याणासाठी आमचे ध्येय आणि उद्दिष्टे'
  },
  cause_health: { EN: 'Shelter & Healthcare', HI: 'आश्रय और चिकित्सा', KN: 'ಆಶ್ರಯ ಮತ್ತು ಆರೋಗ್ಯ ರಕ್ಷಣೆ', MR: 'निवारा आणि आरोग्य सेवा' },
  cause_health_desc: {
    EN: 'Providing free, hygienic food, shelter, clothing, and timely professional medical care.',
    HI: 'निःशुल्क पौष्टिक भोजन, सुरक्षित आश्रय, वस्त्र और समय पर पेशेवर चिकित्सा देखभाल प्रदान करना।',
    KN: 'ಉಚಿತ ಪೌಷ್ಟಿಕ ಆಹಾರ, ಆಶ್ರಯ, ಬಟ್ಟೆ ಮತ್ತು ಸಕಾಲಿಕ ವೈದ್ಯಕೀಯ ಆರೈಕೆಯನ್ನು ಒದಗಿಸುವುದು.',
    MR: 'मोफत, स्वच्छ आणि पौष्टिक अन्न, निवारा, कपडे आणि वेळेवर व्यावसायिक वैद्यकीय सेवा प्रदान करणे.'
  },
  cause_protection: { EN: 'Child Safety & Care', HI: 'बाल सुरक्षा और देखभाल', KN: 'ಮಕ್ಕಳ ಸುರಕ್ಷತೆ ಮತ್ತು ಕಾಳಜಿ', MR: 'बाल सुरक्षा आणि काळजी' },
  modal_card: { EN: 'UPI (GPay / PhonePe / Paytm)', HI: 'यूपीआई (जीपे / फोनपे / पेटीएम)', KN: 'UPI (GPay / PhonePe / Paytm)', MR: 'UPI (GPay / PhonePe / Paytm)' },
  modal_bank_transfer: { EN: 'Direct Bank NEFT / IMPS Transfer', HI: 'सीधे बैंक ट्रांसफर (NEFT / IMPS)', KN: 'ನೇರ बैंक वर्गಾವಣೆ (NEFT / IMPS)', MR: 'थेट बँक NEFT / IMPS पैसे हस्तांतरण' },
  modal_submit: { EN: 'Complete Donation of ', HI: 'दान पूरा करें ', KN: 'ಕೊಡುಗೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ ', MR: 'या रक्कमेचे दान पूर्ण करा ' },
  modal_success: { EN: 'Sponsorship Completed successfully! A detailed digital receipt is being generated and sent to you.', HI: 'प्रायोजन सफलतापूर्वक पूर्ण हुआ! एक डिजिटल रसीद बनाई जा रही है और आपको भेजी जाएगी।', KN: 'ದೇಣಿಗೆ ಪ್ರಕ್ರಿಯೆ ಯಶಸ್ವಿಯಾಗಿದೆ! ಡಿಜಿಟಲ್ ರಸೀದಿಯನ್ನು ನಿಮ್ಮ ಇಮೇಲ್‌ಗೆ ಕಳುಹಿಸಲಾಗುವುದು.', MR: 'प्रायोजकत्व यशस्वीरित्या पूर्ण झाले! तपशीलवार डिजिटल पावती तयार करून तुम्हाला पाठवली जात आहे.' },
  close: { EN: 'Close', HI: 'बंद करें', KN: 'ಮುಚ್ಚಿ', MR: 'बंद करा' },

  // Adopt related labels
  adopt_title: { EN: 'Information Portal for Adoption', HI: 'दत्तक ग्रहण के लिए सूचना पोर्टल', KN: 'ದತ್ತು ಪ್ರಕ್ರಿಯೆ ಮಾಹಿತಿ ಪೋರ್ಟಲ್', MR: 'दत्तक प्रक्रियेसाठी माहिती पोर्टल' },
  adopt_desc: {
    EN: 'Connecting noble adoptive parent applicants safely with children under lawful central guidelines.',
    HI: 'केंद्रीय कानूनी दिशानिर्देशों के तहत बच्चों के साथ महान दत्तक माता-पिता आवेदकों को सुरक्षित रूप से जोड़ना।',
    KN: 'ಕೇಂದ್ರ ಕಾನೂನು ಮಾರ್ಗಸೂಚಿಗಳ ಅನ್ವಯ ದತ್ತು ಪಡೆಯಲು ಇಚ್ಛಿಸುವ ಪೋಷಕರನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಸೇರಿಸುವುದು.',
    MR: 'केंद्रीय कायदेशीर मार्गदर्शक तत्त्वांनुसार इच्छुक पालकांना कायदेशीर आणि सुरक्षित पद्धतीने मुलांशी जोडणे.'
  },
  adopt_btn: { EN: 'Proceed to Pre-Registration', HI: 'पूर्व-पंजीकरण पर आगे बढ़ें', KN: 'ಪೂರ್ವ ನೋಂದಣಿಗೆ ಮುಂದುವರಿಯಿರಿ', MR: 'पूर्व-नोंदणीसाठी पुढे जा' },
  adopt_form_title: { EN: 'Adoption Inquiry Pre-Screening', HI: 'दत्तक ग्रहण पूछताछ पूर्व-स्क्रीनिंग', KN: 'ದತ್ತು ವಿಚಾರಣೆ ಪೂರ್ವ ತಪಾಸಣೆ', MR: 'ದತ್ತಕ चौकशी पूर्व-तपासणी' },
  adopt_full_name: { EN: 'Applicant Full Name', HI: 'आवेदक का पूरा नाम', KN: 'ಅರ್ಜಿದಾರರ ಪೂರ್ಣ ಹೆಸರು', MR: 'अर्जदाराचे पूर्ण नाव' },
  adopt_phone: { EN: 'Contact Number', HI: 'संपर्क नंबर', KN: 'ಸಂಪರ್ಕ ಸಂಖ್ಯೆ', MR: 'संपर्क क्रमांक' },
  adopt_location: { EN: 'Residential State', HI: 'आवासीय राज्य', KN: 'ವಾಸಸ್ಥಳದ ರಾಜ್ಯ', MR: 'रहिवासी राज्य' },
  adopt_msg: { EN: 'Please let us know what information you would like regarding adoption.', HI: 'कृपया हमें बताएं कि आप दत्तक ग्रहण के संबंध में क्या जानकारी चाहते हैं।', KN: 'ದತ್ತು ಪ್ರಕ್ರಿಯೆಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ನಿಮಗೆ ಯಾವ ಮಾಹಿತಿ ಬೇಕು ಎಂದು ದಯವಿಟ್ಟು ನಮಗೆ ತಿಳಿಸಿ.', MR: 'कृपया दत्तक घेण्यासंबंधी तुम्हाला कोणती माहिती हवी आहे ते आम्हाला सांगा.' },
  adopt_submit: { EN: 'Submit Inquiry', HI: 'पूछताछ सबमिट करें', KN: 'ವಿಚಾರಣೆಯನ್ನು ಸಲ್ಲಿಸಿ', MR: 'चौकशी सबमिट करा' },
  adopt_success: { 
    EN: 'Thank you! Your adoption screening inquiry has been captured. Our trust officer will connect with you along with CARA guidelines.',
    HI: 'धन्यवाद! आपकी दत्तक ग्रहण जांच पूछताछ दर्ज कर ली गई है। हमारे ट्रस्ट अधिकारी कारा दिशानिर्देशों के साथ आपसे संपर्क करेंगे।',
    KN: 'ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ವಿಚಾರಣೆಯನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ. ನಮ್ಮ ಅಧಿಕಾರಿಯು CARA ಮಾರ್ಗಸೂಚಿಗಳೊಂದಿಗೆ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತಾರೆ.',
    MR: 'धन्यवाद! तुमची दत्तक चौकशी नोंदवली गेली आहे. आमचे ट्रस्ट अधिकारी CARA मार्गदर्शक तत्त्वांसह तुमच्याशी लवकरच संपर्क साधतील.'
  },
  donate_desc: {
    EN: 'Your donation directly supports nutritious food, secure shelter, clothing, medical care, and quality education.',
    HI: 'आपका दान सीधे तौर पर पौष्टिक भोजन, सुरक्षित आश्रय, कपड़े, चिकित्सा देखभाल और गुणवत्तापूर्ण शिक्षा का समर्थन करता है।',
    KN: 'ನಿಮ್ಮ ದೇಣಿಗೆಯು ನೇರವಾಗಿ ಪೌಷ್ಟಿಕ ಆಹಾರ, ಸುರಕ್ಷಿತ ಆಶ್ರಯ, ಬಟ್ಟೆ, ವೈದ್ಯಕೀಯ ಆರೈಕೆ ಮತ್ತು ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣವನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.',
    MR: 'तुमची देणगी थेट पौष्टिक आहार, सुरक्षित निवारा, कपडे, वैद्यकीय सेवा आणि दर्जेदार शिक्षणासाठी वापरली जाईल.'
  },
  modal_full_name: { EN: 'Donor Full Name', HI: 'दाता का पूरा नाम', KN: 'ದಾನಿಗಳ ಪೂರ್ಣ ಹೆಸರು', MR: 'दात्याचे पूर्ण नाव' },
  modal_email: { EN: 'Email Address', HI: 'ईमेल पता', KN: 'ಇಮೇಲ್ ವಿಳಾಸ', MR: 'ईमेल पत्ता' },
  modal_country: { EN: 'Mobile Number / Country', HI: 'मोबाइल नंबर / देश', KN: 'ಮೊಬೈल ಸಂಖ್ಯೆ / ದೇಶ', MR: 'मोबाईल क्रमांक / देश' },
  modal_tax_receipt: { EN: 'Send me tax-exemption receipt next month', HI: 'मुझे अगले महीने कर-छूट रसीद भेजें', KN: 'ಮುಂದಿನ ತಿಂಗಳು ನನಗೆ ತೆರಿಗೆ ವಿನಾಯಿತಿ ರಸೀದಿ ಕಳುಹಿಸಿ', MR: 'मला पुढील महिन्यात कर सवलत पावती पाठवा' },
  modal_pay_method: { EN: 'Select UPI / Card / NetBanking', HI: 'यूपीआई / कार्ड / नेटबैंकिंग चुनें', KN: 'UPI / ಕಾರ್ಡ್ / ನೆಟ್ ಬ್ಯಾಂಕಿಂಗ್ ಆರಿಸಿ', MR: 'UPI / कार्ड / नेट बँकिंग निवडा' },
  modal_title: { 
    EN: 'Sponsor Healthy Meals & Child Welfare', 
    HI: 'स्वस्थ भोजन और बाल कल्याण का प्रायोजन करें', 
    KN: 'ಪೌಷ್ಟಿಕ ಆಹಾರ ಮತ್ತು ಮಕ್ಕಳ ಕಲ್ಯಾಣವನ್ನು ಪ್ರಾಯೋಜಿಸಿ', 
    MR: 'पौष्टिक आहार आणि बाल संगोपनाचे प्रायोजकत्व करा' 
  },
  modal_heading: { 
    EN: 'Sponsor Profile Details', 
    HI: 'प्रायोजक प्रोफ़ाइल विवरण', 
    KN: 'ಪ್ರಾಯೋಜಕರ ಪ್ರೊಫೈಲ್ ವಿವರಗಳು', 
    MR: 'प्रायोजक प्रोफाइल तपशील' 
  },
  modal_p1: { 
    EN: 'By continuing, you are supporting our noble initiatives. Secure transactions processed with standard gateways.', 
    HI: 'आगे बढ़कर, आप हमारी महान पहलों का समर्थन कर रहे हैं। सुरक्षित लेनदेन।', 
    KN: 'ಮುಂದುವರಿಯುವ ಮೂಲಕ, ನೀವು ನಮ್ಮ ಉದಾತ್ತ ಕಾರ್ಯಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತಿದ್ದೀರಿ.', 
    MR: 'पुढे सुरू ठेवून, तुम्ही आमच्या उदात्त उपक्रमांना पाठिंबा देत आहात.' 
  },

  // Donation impact dashboard labels
  donate_impact_tag: { EN: 'SPONSORSHIP DIRECTORY', HI: 'प्रायोजन निर्देशिका', KN: 'ಪ್ರಾಯೋಜಕತ್ವದ ಕೈಪಿಡಿ', MR: 'प्रायोजकत्व निर्देशिका' },
  donate_impact_title: { 
    EN: 'See How Your Support Directly Impacts Lives', 
    HI: 'देखें कि आपका समर्थन सीधे जीवन को कैसे प्रभावित करता है', 
    KN: 'ನಿಮ್ಮ ಬೆಂಬಲವು ಮಕ್ಕಳ ಜೀವನವನ್ನು ಹೇಗೆ ಬದಲಾಯಿಸುತ್ತದೆ ಎಂದು ತಿಳಿಯಿರಿ', 
    MR: 'तुमचा पाठिंबा मुलांचे जीवन कसे बदलतो ते पहा' 
  },
  donate_frequency_once: { EN: 'Make an Impact', HI: 'प्रभाव डालें', KN: 'प्रभाव डालें', MR: 'प्रभाव डालें' },
  donate_frequency_monthly: { EN: 'Monthly Guardian', HI: 'मासिक अभिभावक', KN: 'ಮಾಸಿಕ ರಕ್ಷಕ', MR: 'मासिक पालकत्व' },
  donate_now_button: { EN: 'Sponsor This Now', HI: 'इसे अभी प्रायोजित करें', KN: 'ಈಗಲೇ ಪ್ರಾಯೋಜಿಸಿ', MR: 'आता प्रायोजित करा' },
  donate_custom_placeholder: { EN: 'Enter custom amount', HI: 'कस्टम राशि दर्ज करें', KN: 'ಕಸ್ಟಮ್ ಮೊತ್ತವನ್ನು ನಮೂದಿಸಿ', MR: 'इतर रक्कम प्रविष्ट करा' },
  
  facebook_feed_title: { EN: 'Follow Us on Facebook', HI: 'फेसबुक पर हमें फॉलो करें', KN: 'ಫೇಸ್‌ಬುಕ್‌ನಲ್ಲಿ ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ', MR: 'फेसबुकवर आमचे अनुसरण करा' },

  // Newsletter Section
  newsletter_title: { 
    EN: 'Stay Updated with Our Mission', 
    HI: 'हमारे मिशन से अपडेट रहें', 
    KN: 'ನಮ್ಮ ಮಿಷನ್‌ನೊಂದಿಗೆ ನವೀಕೃತವಾಗಿರಿ', 
    MR: 'आमच्या मिशनसह अपडेट रहा' 
  },
  newsletter_subtitle: { 
    EN: 'Subscribe to our quarterly newsletter for progress reports, events, and inspiring stories.', 
    HI: 'प्रगति रिपोर्ट, कार्यक्रमों और प्रेरक कहानियों के लिए हमारे त्रैमासिक समाचार पत्र की सदस्यता लें।',
    KN: 'ಪ್ರಗತಿ ವರದಿಗಳು, ಘಟನೆಗಳು ಮತ್ತು ಸ್ಪೂರ್ತಿದಾಯಕ ಕಥೆಗಳಿಗಾಗಿ ನಮ್ಮ ತ್ರೈಮಾಸಿಕ ಸುದ್ದಿಪತ್ರಕ್ಕೆ ಚಂದಾದಾರರಾಗಿ.',
    MR: 'प्रगती अहवाल, घडामोडी आणि प्रेरणादायी कथांसाठी आमच्या त्रैमासिक वृत्तपत्राचे सदस्य व्हा.'
  },
  newsletter_email_label: {
    EN: 'Your email address',
    HI: 'आपका ईमेल पता',
    KN: 'ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸ',
    MR: 'तुमचा ईमेल पत्ता'
  },
  newsletter_subscribe: {
    EN: 'Subscribe',
    HI: 'सदस्यता लें',
    KN: 'ಚಂದಾದಾರರಾಗಿ',
    MR: 'सदस्य व्हा'
  },
  newsletter_success: {
    EN: 'You have subscribed successfully to our quarterly newsletter.',
    HI: 'आप हमारे त्रैमासिक समाचार पत्र के लिए सफलतापूर्वक सदस्य बन गए हैं।',
    KN: 'ನಮ್ಮ ತ್ರೈಮಾಸಿಕ ಸುದ್ದಿಪತ್ರಕ್ಕೆ ನೀವು ಯಶಸ್ವಿಯಾಗಿ ಚಂದಾದಾರರಾಗಿದ್ದೀರಿ.',
    MR: 'तुम्ही आमच्या त्रैमासिक वृत्तपत्राचे यशस्वीरित्या सदस्य झाले आहात.'
  },
  footer_about_text: {
    EN: 'Swami Vivekanand Seva Pratishthan is dedicated to child welfare and empowerment in Karnataka since 1982.',
    HI: 'स्वामी विवेकानंद सेवा प्रतिष्ठान 1982 से कर्नाटक में बाल कल्याण और सशक्तिकरण के लिए समर्पित है।',
    KN: 'ಸ್ವಾಮಿ ವಿವೇಕಾನಂದ ಸೇವಾ ಪ್ರತಿಷ್ಠಾನವು 1982 ರಿಂದ ಕರ್ನಾಟಕದಲ್ಲಿ ಮಕ್ಕಳ ಕಲ್ಯಾಣ ಮತ್ತು ಸಬಲೀಕರಣಕ್ಕಾಗಿ ಸಮರ್ಪಿತವಾಗಿದೆ.',
    MR: 'स्वामी विवेकानंद सेवा प्रतिष्ठान १९८२ पासून कर्नाटकात बाल कल्याण आणि सक्षमीकरणासाठी समर्पित आहे.'
  },
  footer_quick_links: {
    EN: 'Quick Links',
    HI: 'त्वरित लिंक',
    KN: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
    MR: 'क्विक लिंक्स'
  },
  footer_contact_info: {
    EN: 'Contact Info',
    HI: 'संपर्क जानकारी',
    KN: 'ಸಂಪರ್ಕ ಮಾಹಿತಿ',
    MR: 'संपर्क तपशील'
  },
  footer_address: {
    EN: 'Swami Vivekanand Seva Pratishthan, Subhash Nagar Campus, Belagavi, Karnataka, India', 
    HI: 'स्वामी विवेकानंद सेवा प्रतिष्ठान, सुभाष नगर परिसर / मुख्य परिसर, बेलगावी, कर्नाटक, भारत', 
    KN: 'ಸ್ವಾಮಿ ವಿವೇಕಾನಂದ ಸೇವಾ ಪ್ರತಿಷ್ಠಾನ, ಸುಭಾಷ್ ನಗರ ಆವರಣ / ಮುಖ್ಯ ಆವರಣ, ಬೆಳಗಾವಿ, ಕರ್ನಾಟಕ, ಭಾರತ', 
    MR: 'स्वामी विवेकानंद सेवा प्रतिष्ठान, सुभाष नगर कॅम्पस / मुख्य परिसर, बेळगाव, कर्नाटक, भारत' 
  },
  footer_rights: { 
    EN: 'All Rights Reserved. Registered Public Charitable Trust.', 
    HI: 'सर्वाधिकार सुरक्षित। पंजीकृत सार्वजनिक धर्मार्थ ट्रस्ट।', 
    KN: 'ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ. ನೋಂದಾಯಿತ ಸಾರ್ವಜನಿಕ ಚಾರಿಟಬಲ್ ಟ್ರಸ್ಟ್.', 
    MR: 'सर्व हक्क राखीव. नोंदणीकृत सार्वजनिक चॅरिटेबल ट्रस्ट.' 
  },

  news_tag: {
    EN: 'TIMELINE & MILESTONES',
    HI: 'समयरेखा और मील के पत्थर',
    KN: 'ಇತಿಹಾಸ ಮತ್ತು ಮೈಲಿಗಲ್ಲುಗಳು',
    MR: 'इतिहास आणि टप्पे'
  },
  news_title: {
    EN: 'Our Journey of Care & Recognition',
    HI: 'देखभाल और सम्मान की हमारी यात्रा',
    KN: 'ಕಾಳಜಿ ಮತ್ತು ಮಾನ್ಯತೆಯ ನಮ್ಮ ಪಯಣ',
    MR: 'काळजी आणि सन्मानाचा आमचा प्रवास'
  },
  news_read_more: {
    EN: 'Read Full Story',
    HI: 'पूरी कहानी पढ़ें',
    KN: 'ಸಂಪೂರ್ಣ ಮಾಹಿತಿ ಓದಿ',
    MR: 'पूर्ण बातमी वाचा'
  },
  events_tag: {
    EN: 'OUR SAFE HOMES',
    HI: 'हमारे सुरक्षित गृह',
    KN: 'ನಮ್ಮ ಸುರಕ್ಷಿತ ಗೃಹಗಳು',
    MR: 'आमचे सुरक्षित गृह'
  },
  events_title: {
    EN: 'Dedicated Safe Homes & Capacities',
    HI: 'समर्पित सुरक्षित गृह और क्षमताएं',
    KN: 'ಸಮರ್ಪಿತ ಸುರಕ್ಷಿತ ಗೃಹಗಳು ಮತ್ತು ಸಾಮರ್ಥ್ಯ',
    MR: 'समर्पित सुरक्षित गृह आणि क्षमता'
  },
  event_register: {
    EN: 'Support Facilities',
    HI: 'सुविधाओं का समर्थन करें',
    KN: 'ಸೌಲಭ್ಯಗಳನ್ನು ಬೆಂಬಲಿಸಿ',
    MR: 'सोयी-सुविधांना पाठिंबा द्या'
  },

  testimonials_tag: {
    EN: 'LEADERSHIP & TRUST',
    HI: 'नेतृत्व और ट्रस्ट',
    KN: 'ನಾಯಕತ್ವ ಮತ್ತು ಟ್ರಸ್ಟ್',
    MR: 'नेतृत्व आणि ट्रस्ट'
  },
  testimonials_title: {
    EN: 'Managing Committee',
    HI: 'प्रबंध समिति',
    KN: 'ನಿರ್ವಹಣಾ ಸಮಿತಿ',
    MR: 'व्यवस्थापन समिती'
  }
};
export const PROJECTS: Project[] = [
  {
    id: 'p_kalyan_kendra',
    category: 'protection',
    raised: 150000,
    goal: 180000,
    image: childrenSmilingFriends,
    images: [childrenSmilingFriends, classroomLessonSun, boysClassroomLearning],
    title: {
      EN: 'Gangamma Chikkumbimath Bal Kalyan Kendra',
      HI: 'गंगाम्मा चिक्कुम्बीमठ बाल कल्याण केंद्र',
      KN: 'ಗಂಗಮ್ಮ ಚಿಕ್ಕುಂಬಿಮಠ ಬಾಲ ಕಲ್ಯಾಣ ಕೇಂದ್ರ',
      MR: 'गंगाम्मा चिक्कुम्बीमठ बाल कल्याण केंद्र'
    },
    location: {
      EN: 'Shahapur, Belagavi',
      HI: 'शाहपुर, बेलगावी',
      KN: 'ಶಹಾಪುರ, ಬೆಳಗಾವಿ',
      MR: 'शहापूर, बेळगाव'
    },
    description: {
      EN: `The orphanage was initially established in a rented house at Koregali, Shahapur, in 1982. It was subsequently relocated to the Dr. M.C. Modi Building in Nehru Nagar. In 1984, separate Balak Balmandir units for girls and boys were established.With the support of the Modi Trust, a building was provided behind Hotel Ramdev in Belagavi, which currently houses the Bala Kalyan Kendra for boys. In 2002, the present campus at Subhash Nagar was established, which belongs to the Swami Vivekananda Seva Pratishthan Trust.At present, boys are cared for at the Modi Building, while girls are housed at the present campus in Subhash Nagar. This Subhash Nagar campus also houses the Adoption Center, which provides care and protection to children under the age of 6 years.Gangamma Chikkumbimath Bal Kalyan KendraThe Bal Kalyan Kendra comprises four units:

1.Orphanage for boys and girls (housed separately)
2.Destitute Home for boys and girls (housed separately)
In accordance with government norms, children aged 6 to 12 years and 12 to 18 years are accommodated in separate units.The Bal Kalyan Kendra admits children between the ages of 6 and 18 years, providing them with food, shelter, clothing, education, and motherly care, affection, and warmth, helping them build new lives. To date, approximately 500 children from this center have completed their education up to Std. 10th and are contributing positively as responsible citizens of the nation.`,

      HI: `इस अनाथालय की स्थापना प्रारंभ में वर्ष 1982 में कोरेगली, शहापुर स्थित एक किराए के मकान में की गई थी। बाद में इसे नेहरू नगर स्थित डॉ. एम.सी. मोदी भवन में स्थानांतरित कर दिया गया। वर्ष 1984 में बालिकाओं एवं बालकों के लिए अलग-अलग बाल बालमंदिर की स्थापना की गई।
मोदी ट्रस्ट के सहयोग से, बेळगावी में होटल रामदेव के पीछे एक भवन प्रदान किया गया, जिसमें वर्तमान में बालकों के लिए बाल कल्याण केंद्र संचालित है। वर्ष 2002 में, सुभाष नगर स्थित वर्तमान परिसर की स्थापना की गई, जो स्वामी विवेकानंद सेवा प्रतिष्ठान ट्रस्ट से संबंधित है।
वर्तमान में, बालकों की देखभाल मोदी भवन में की जाती है, जबकि बालिकाओं को सुभाष नगर स्थित वर्तमान परिसर में रखा जाता है। इसी सुभाष नगर परिसर में दत्तक ग्रहण केंद्र भी स्थित है, जो 6 वर्ष से कम आयु के बच्चों की देखभाल एवं सुरक्षा प्रदान करता है।
गंगम्मा चिक्कुम्बीमठ बाल कल्याण केंद्र
बाल कल्याण केंद्र के अंतर्गत चार इकाइयाँ हैं:

1.बालकों एवं बालिकाओं के लिए पृथक-पृथक अनाथालय
2.बालकों एवं बालिकाओं के लिए पृथक-पृथक निराश्रित गृह (डेस्टीट्यूट होम)

सरकारी मानदंडों के अनुसार, 6 से 12 वर्ष तथा 12 से 18 वर्ष आयु वर्ग के बच्चों को अलग-अलग इकाइयों में रखा जाता है।
बाल कल्याण केंद्र 6 से 18 वर्ष तक की आयु के बच्चों को प्रवेश देता है, तथा उन्हें भोजन, आश्रय, वस्त्र, शिक्षा के साथ-साथ मातृवत देखभाल, स्नेह एवं आत्मीयता प्रदान करता है, जिससे उन्हें एक नया जीवन बनाने में सहायता मिलती है। अब तक इस केंद्र से लगभग 500 बच्चे 10वीं कक्षा तक की शिक्षा पूर्ण कर चुके हैं तथा राष्ट्र के जिम्मेदार नागरिकों के रूप में सकारात्मक योगदान दे रहे हैं।`,
      KN: `ಈ ಅನಾಥಾಶ್ರಮವನ್ನು ಆರಂಭದಲ್ಲಿ 1982ರಲ್ಲಿ ಕೊರೆಗಳಿ, ಶಹಾಪುರದಲ್ಲಿ ಬಾಡಿಗೆ ಮನೆಯಲ್ಲಿ ಸ್ಥಾಪಿಸಲಾಯಿತು. ನಂತರ ಇದನ್ನು ನೆಹರೂ ನಗರದ ಡಾ. ಎಂ.ಸಿ. ಮೋದಿ ಕಟ್ಟಡಕ್ಕೆ ಸ್ಥಳಾಂತರಿಸಲಾಯಿತು. 1984ರಲ್ಲಿ ಬಾಲಕಿಯರು ಮತ್ತು ಬಾಲಕರಿಗಾಗಿ ಪ್ರತ್ಯೇಕ ಬಾಲಕ ಬಾಲಮಂದಿರಗಳನ್ನು ಸ್ಥಾಪಿಸಲಾಯಿತು.
ಮೋದಿ ಟ್ರಸ್ಟ್‌ನ ಸಹಾಯದಿಂದ, ಬೆಳಗಾವಿಯ ಹೋಟೆಲ್ ರಾಮದೇವ್ ಹಿಂಭಾಗದಲ್ಲಿ ಒಂದು ಕಟ್ಟಡವನ್ನು ಒದಗಿಸಲಾಯಿತು, ಇದರಲ್ಲಿ ಪ್ರಸ್ತುತ ಬಾಲಕರಿಗಾಗಿ ಬಾಲ ಕಲ್ಯಾಣ ಕೇಂದ್ರವು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ. 2002ರಲ್ಲಿ, ಸುಭಾಷ್ ನಗರದಲ್ಲಿ ಪ್ರಸ್ತುತ ಕ್ಯಾಂಪಸ್ ಅನ್ನು ಸ್ಥಾಪಿಸಲಾಯಿತು, ಇದು ಸ್ವಾಮಿ ವಿವೇಕಾನಂದ ಸೇವಾ ಪ್ರತಿಷ್ಠಾನ ಟ್ರಸ್ಟ್‌ಗೆ ಸೇರಿದೆ.
ಪ್ರಸ್ತುತ, ಬಾಲಕರ ಆರೈಕೆಯನ್ನು ಮೋದಿ ಕಟ್ಟಡದಲ್ಲಿ ಮಾಡಲಾಗುತ್ತಿದೆ, ಆದರೆ ಬಾಲಕಿಯರನ್ನು ಸುಭಾಷ್ ನಗರದ ಪ್ರಸ್ತುತ ಕ್ಯಾಂಪಸ್‌ನಲ್ಲಿ ಇರಿಸಲಾಗಿದೆ. ಇದೇ ಸುಭಾಷ್ ನಗರ ಕ್ಯಾಂಪಸ್‌ನಲ್ಲಿ ದತ್ತು ಸ್ವೀಕಾರ ಕೇಂದ್ರವೂ ಸಹ ಇದ್ದು, ಇದು 6 ವರ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ ವಯಸ್ಸಿನ ಮಕ್ಕಳಿಗೆ ಆರೈಕೆ ಮತ್ತು ರಕ್ಷಣೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ.
ಗಂಗಮ್ಮ ಚಿಕ್ಕುಂಬಿಮಠ ಬಾಲ ಕಲ್ಯಾಣ ಕೇಂದ್ರ
ಬಾಲ ಕಲ್ಯಾಣ ಕೇಂದ್ರದ ಅಡಿಯಲ್ಲಿ ನಾಲ್ಕು ಘಟಕಗಳಿವೆ:

1.ಬಾಲಕರು ಮತ್ತು ಬಾಲಕಿಯರಿಗಾಗಿ ಪ್ರತ್ಯೇಕ ಅನಾಥಾಶ್ರಮ
2.ಬಾಲಕರು ಮತ್ತು ಬಾಲಕಿಯರಿಗಾಗಿ ಪ್ರತ್ಯೇಕ ನಿರ್ಗತಿಕ ಗೃಹ (ಡೆಸ್ಟಿಟ್ಯೂಟ್ ಹೋಮ್)

ಸರ್ಕಾರಿ ಮಾನದಂಡಗಳ ಪ್ರಕಾರ, 6 ರಿಂದ 12 ವರ್ಷ ಮತ್ತು 12 ರಿಂದ 18 ವರ್ಷ ವಯೋಮಾನದ ಮಕ್ಕಳನ್ನು ಪ್ರತ್ಯೇಕ ಘಟಕಗಳಲ್ಲಿ ಇರಿಸಲಾಗುತ್ತದೆ.
ಬಾಲ ಕಲ್ಯಾಣ ಕೇಂದ್ರವು 6 ರಿಂದ 18 ವರ್ಷ ವಯಸ್ಸಿನ ಮಕ್ಕಳನ್ನು ದಾಖಲಿಸಿಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು ಅವರಿಗೆ ಆಹಾರ, ಆಶ್ರಯ, ಬಟ್ಟೆ, ಶಿಕ್ಷಣದ ಜೊತೆಗೆ ಮಾತೃಸಮಾನ ಆರೈಕೆ, ವಾತ್ಸಲ್ಯ ಮತ್ತು ಪ್ರೀತಿಯನ್ನು ಒದಗಿಸುತ್ತದೆ, ಇದು ಅವರಿಗೆ ಹೊಸ ಜೀವನವನ್ನು ರೂಪಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಇಲ್ಲಿಯವರೆಗೆ ಈ ಕೇಂದ್ರದಿಂದ ಸುಮಾರು 500 ಮಕ್ಕಳು 10ನೇ ತರಗತಿಯವರೆಗೆ ಶಿಕ್ಷಣ ಪೂರ್ಣಗೊಳಿಸಿದ್ದು, ರಾಷ್ಟ್ರದ ಜವಾಬ್ದಾರಿಯುತ ನಾಗರಿಕರಾಗಿ ಸಕಾರಾತ್ಮಕವಾಗಿ ಕೊಡುಗೆ ನೀಡುತ್ತಿದ್ದಾರೆ.`,

      MR: `या अनाथाश्रमाची सुरुवात प्रथम सन 1982 मध्ये कोरेगळी, शहापूर येथील भाड्याच्या घरात करण्यात आली. त्यानंतर तो नेहरू नगर येथील डॉ. एम.सी. मोदी इमारतीत स्थलांतरित करण्यात आला. सन 1984 मध्ये मुली व मुलांसाठी स्वतंत्र बाल बालमंदिर स्थापन करण्यात आले.
मोदी ट्रस्टच्या सहाय्याने, बेळगावी येथील हॉटेल रामदेवच्या मागे एक इमारत उपलब्ध करून देण्यात आली, जिथे सध्या मुलांसाठी बाल कल्याण केंद्र कार्यरत आहे. सन 2002 मध्ये, सुभाष नगर येथील सध्याचे कॅम्पस स्थापन करण्यात आले, जे स्वामी विवेकानंद सेवा प्रतिष्ठान ट्रस्टच्या मालकीचे आहे.
सध्या, मुलांची देखभाल मोदी इमारतीत केली जाते, तर मुलींना सुभाष नगर येथील सध्याच्या कॅम्पसमध्ये ठेवले जाते. याच सुभाष नगर कॅम्पसमध्ये दत्तक ग्रहण केंद्र देखील स्थित आहे, जे 6 वर्षांखालील मुलांची काळजी व संरक्षण पुरवते.
गंगम्मा चिक्कुंबीमठ बाल कल्याण केंद्र
बाल कल्याण केंद्रांतर्गत चार विभाग आहेत:

1.मुले व मुलींसाठी स्वतंत्र अनाथाश्रम
2.मुले व मुलींसाठी स्वतंत्र निराधार गृह (डेस्टीट्यूट होम)

शासकीय निकषांनुसार, 6 ते 12 वर्षे व 12 ते 18 वर्षे वयोगटातील मुलांना स्वतंत्र विभागांमध्ये ठेवले जाते.
बाल कल्याण केंद्र 6 ते 18 वर्षे वयोगटातील मुलांना प्रवेश देते, आणि त्यांना अन्न, निवारा, वस्त्र, शिक्षण यासोबतच मातृवत काळजी, स्नेह व आपुलकी प्रदान करते, ज्यामुळे त्यांना नवीन आयुष्य घडवण्यास मदत होते. आजपर्यंत या केंद्रातील सुमारे 500 मुलांनी दहावीपर्यंतचे शिक्षण पूर्ण केले असून ते देशाचे जबाबदार नागरिक म्हणून सकारात्मक योगदान देत आहेत.।`
 
    },
    impactLabel: {
      EN: 'Supported over 500 orphaned children to complete high school and build successful lives.',
      HI: '500 से अधिक अनाथ बच्चों को हाई स्कूल पूरा करने और सफल जीवन बनाने में सहायता प्रदान की।',
      KN: '500 ಕ್ಕೂ ಹೆಚ್ಚು ಅನಾಥ ಮಕ್ಕಳಿಗೆ ಪ್ರೌಢಶಿಕ್ಷಣವನ್ನು ಪೂರ್ಣಗೊಳಿಸಲು ಮತ್ತು ಯಶಸ್ವಿ ಜೀವನವನ್ನು ರೂಪಿಸಲು ಬೆಂಬಲ ನೀಡಿದೆ.',
      MR: '५०० हून अधिक अनाथ मुलांना हायस्कूल पूर्ण करण्यासाठी आणि यशस्वी जीवन घडवण्यासाठी मदत केली।'
    }
  },
  {
    id: 'p_adoption_center',
    category: 'protection',
    raised: 115000,
    goal: 130000,
    image: classroomInteractive,
    images: [classroomInteractive, childrenCookingMeals, childrenCrossingRoad],
    title: {
      EN: 'SVSP Adoption Centre & Under-6 Care Centre',
      HI: 'एसवीएसपी दत्तक ग्रहण और 6 वर्ष से कम आयु के शिशु गृह',
      KN: 'SVSP ದತ್ತು ಕೇಂದ್ರ ಮತ್ತು 6 ವರ್ಷದೊಳಗಿನ ಮಕ್ಕಳ ಕಾಳಜಿ ಕೇಂದ್ರ',
      MR: 'एसव्हीएसपी दत्तक केंद्र आणि ६ वर्षांखालील बालसंगोपन केंद्र'
    },
    location: {
      EN: 'Subhash Nagar Campus, Belagavi',
      HI: 'सुभाष नगर परिसर, बेलगावी',
      KN: 'ಸುಭಾಷ್ ನಗರ ಆವರಣ, ಬೆಳಗಾವಿ',
      MR: 'सुभाष नगर कॅम्पस, बेळगाव'
    },
    description: {
      EN: ` The In -country and Intercountry adoption center was established at the main campus, near the S.P. Office, in 2008. It has been  approved by the Government of Karnataka and operates in full compliance with the rules and regulations prescribed by the Central Government in this regard. The center has been registered with the Central Adoption Resource Authority (CARA) since 2008.
The center provides compassionate care to abandoned, orphaned, and surrendered children, who are rescued and subsequently placed for adoption with prospective parents in accordance with CARA guidelines laid down by the  Government of India. To date, a total of 144 children have been successfully adopted, including 13 who have been placed with families abroad. 
 Alongside formal education, children at the Ashram receive value-based instruction, lessons in patriotism, and guidance in personal character development — qualities essential for their growth as responsible and proud citizens of the nation. This holistic approach facilitates their integration into mainstream society as productive members of the community.`,

      HI: `इन-कंट्री एवं इंटरकंट्री दत्तक ग्रहण केंद्र की स्थापना वर्ष 2008 में मुख्य परिसर, एस.पी. कार्यालय के निकट की गई। यह केंद्र कर्नाटक सरकार द्वारा अनुमोदित है तथा इस संबंध में भारत सरकार द्वारा निर्धारित सभी नियमों एवं विनियमों का पूर्णतः पालन करते हुए संचालित किया जाता है। यह केंद्र वर्ष 2008 से केंद्रीय दत्तक ग्रहण संसाधन प्राधिकरण (CARA) के साथ पंजीकृत है।

यह केंद्र परित्यक्त, अनाथ तथा समर्पित बच्चों को स्नेहपूर्ण देखभाल प्रदान करता है। इन बच्चों को बचाव के बाद भारत सरकार के CARA द्वारा निर्धारित दिशा-निर्देशों के अनुसार योग्य दत्तक अभिभावकों के साथ कानूनी रूप से जोड़ा जाता है। अब तक कुल 144 बच्चों को सफलतापूर्वक दत्तक ग्रहण कराया जा चुका है, जिनमें से 13 बच्चों को विदेशों में रहने वाले परिवारों के साथ भी सुरक्षित रूप से बसाया गया है।

औपचारिक शिक्षा के साथ-साथ आश्रम में बच्चों को नैतिक मूल्यों, देशभक्ति तथा व्यक्तित्व एवं चरित्र निर्माण की शिक्षा भी दी जाती है। यह समग्र दृष्टिकोण उन्हें जिम्मेदार, आत्मनिर्भर और राष्ट्र के गौरवशाली नागरिक बनने में सहायता करता है तथा समाज की मुख्यधारा में सम्मानपूर्वक सम्मिलित होने के लिए तैयार करता है। `,
      KN: `ದೇಶೀಯ (In-country) ಹಾಗೂ ಅಂತರರಾಷ್ಟ್ರೀಯ (Intercountry) ದತ್ತು ಕೇಂದ್ರವನ್ನು 2008ರಲ್ಲಿ ಮುಖ್ಯ ಆವರಣದಲ್ಲಿ, ಎಸ್.ಪಿ. ಕಚೇರಿಯ ಸಮೀಪ ಸ್ಥಾಪಿಸಲಾಯಿತು. ಈ ಕೇಂದ್ರವು ಕರ್ನಾಟಕ ಸರ್ಕಾರದಿಂದ ಮಾನ್ಯತೆ ಪಡೆದಿದ್ದು, ಭಾರತ ಸರ್ಕಾರ ನಿಗದಿಪಡಿಸಿರುವ ಎಲ್ಲಾ ನಿಯಮಗಳು ಹಾಗೂ ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಪಾಲಿಸಿಕೊಂಡು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ. ಈ ಕೇಂದ್ರವು 2008ರಿಂದ ಕೇಂದ್ರ ದತ್ತು ಸಂಪನ್ಮೂಲ ಪ್ರಾಧಿಕಾರ (CARA) ನಲ್ಲಿ ನೋಂದಾಯಿತವಾಗಿದೆ.

ಈ ಕೇಂದ್ರವು ತೊರೆದುಹೋಗಿರುವ, ಅನಾಥ ಹಾಗೂ ಸ್ವಯಂ ಸಮರ್ಪಿಸಲ್ಪಟ್ಟ ಮಕ್ಕಳಿಗೆ ಪ್ರೀತಿಪೂರ್ವಕ ಆರೈಕೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ. ರಕ್ಷಿಸಲ್ಪಟ್ಟ ನಂತರ, ಭಾರತ ಸರ್ಕಾರದ CARA ಮಾರ್ಗಸೂಚಿಗಳ ಅನುಸಾರ ಅರ್ಹ ದತ್ತು ಪೋಷಕರಿಗೆ ಕಾನೂನುಬದ್ಧವಾಗಿ ಮಕ್ಕಳನ್ನು ದತ್ತು ನೀಡಲಾಗುತ್ತದೆ. ಇದುವರೆಗೆ ಒಟ್ಟು 144 ಮಕ್ಕಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ದತ್ತು ನೀಡಲಾಗಿದ್ದು, ಅವರಲ್ಲಿ 13 ಮಕ್ಕಳನ್ನು ವಿದೇಶದಲ್ಲಿರುವ ಕುಟುಂಬಗಳಿಗೆ ಸುರಕ್ಷಿತವಾಗಿ ದತ್ತು ನೀಡಲಾಗಿದೆ.

ಔಪಚಾರಿಕ ಶಿಕ್ಷಣದ ಜೊತೆಗೆ ಆಶ್ರಮದಲ್ಲಿ ಮಕ್ಕಳಿಗೆ ನೈತಿಕ ಮೌಲ್ಯಗಳು, ದೇಶಭಕ್ತಿ ಹಾಗೂ ವ್ಯಕ್ತಿತ್ವ ಮತ್ತು ಚರಿತ್ರೆ ನಿರ್ಮಾಣದ ಶಿಕ್ಷಣವನ್ನು ನೀಡಲಾಗುತ್ತದೆ. ಈ ಸಮಗ್ರ ಶಿಕ್ಷಣವು ಅವರನ್ನು ಜವಾಬ್ದಾರಿಯುತ, ಸ್ವಾವಲಂಬಿ ಮತ್ತು ರಾಷ್ಟ್ರದ ಹೆಮ್ಮೆಯ ನಾಗರಿಕರಾಗಿ ಬೆಳೆಸುವುದರೊಂದಿಗೆ ಸಮಾಜದ ಮುಖ್ಯವಾಹಿನಿಯಲ್ಲಿ ಗೌರವಯುತವಾಗಿ ಬೆರೆತು ಬದುಕಲು ಸಜ್ಜುಗೊಳಿಸುತ್ತದೆ `,

     MR: `इन-कंट्री आणि इंटरकंट्री दत्तक केंद्राची स्थापना 2008 साली मुख्य परिसरात, एस.पी. कार्यालयाजवळ करण्यात आली. हे केंद्र कर्नाटक शासनाने मान्यताप्राप्त असून भारत सरकारने निर्धारित केलेल्या सर्व नियम व मार्गदर्शक तत्त्वांचे पूर्ण पालन करून कार्यरत आहे. हे केंद्र 2008 पासून केंद्रीय दत्तक संसाधन प्राधिकरण (CARA) येथे नोंदणीकृत आहे.

हे केंद्र परित्यक्त, अनाथ आणि स्वेच्छेने समर्पित करण्यात आलेल्या बालकांची प्रेमपूर्वक देखभाल करते. बचावानंतर या बालकांना भारत सरकारच्या CARA मार्गदर्शक तत्त्वांनुसार पात्र दत्तक पालकांकडे कायदेशीर प्रक्रियेद्वारे सुपूर्द केले जाते. आजपर्यंत एकूण 144 बालकांचे यशस्वी दत्तक ग्रहण झाले असून त्यापैकी 13 बालके परदेशातील कुटुंबांमध्ये सुरक्षितपणे दत्तक देण्यात आली आहेत.

औपचारिक शिक्षणासोबतच आश्रमात मुलांना नैतिक मूल्ये, देशभक्ती आणि व्यक्तिमत्त्व विकासाचे शिक्षण दिले जाते. हा सर्वांगीण दृष्टिकोन त्यांना जबाबदार, स्वावलंबी आणि देशाचे अभिमानास्पद नागरिक बनविण्यास मदत करतो तसेच समाजाच्या मुख्य प्रवाहात सन्मानाने स्थान मिळवून देतो.`,
    },
    impactLabel: {
      EN: 'Ensuring safe, nurturing care and CARA-compliant guidance for children under 6 years of age.',
      HI: '6 वर्ष से कम उम्र के बच्चों के लिए सुरक्षित, पोषणयुक्त देखभाल और कारा-अनुरूप मार्गदर्शन सुनिश्चित करना।',
      KN: '6 ವರ್ಷದೊಳಗಿನ ಮಕ್ಕಳಿಗೆ ಸುರಕ್ಷಿತ, ಪ್ರೀತಿಯ ಕಾಳಜಿ ಮತ್ತು CARA-ಅನುಸರಣೆಯ ಮಾರ್ಗದರ್ಶನವನ್ನು ಖಚಿತಪಡಿಸುವುದು.',
      MR: '६ वर्षांखालील बालकांसाठी सुरक्षित, प्रेमळ संगोपन आणि CARA-अनुरूप मार्गदर्शन सुनिश्चित करणे।'
    }
  },
  {
    id: 'p1',
    category: 'education',
    raised: 124000,
    goal: 150000,
    image: girlHoldingBooks,
    images: [girlHoldingBooks, girlClassroomWriting, boysClassroomLearning],
    title: {
      EN: 'Quality Formal Education System',
      HI: 'गुणवत्तापूर्ण स्कूली शिक्षा प्रणाली',
      KN: 'ಗುಣಮಟ್ಟದ ಶಾಲಾ ಶಿಕ್ಷಣ ವ್ಯವಸ್ಥೆ',
      MR: 'गुणवत्तापूर्ण शालेय शिक्षण पद्धत'
    },
    location: {
      EN: 'SVSP Ashram School, Belagavi',
      HI: 'एसवीएसपी आश्रम स्कूल, बेलगावी',
      KN: 'SVSP ಆಶ್ರಮ ಶಾಲೆ, ಬೆಳಗಾವಿ',
      MR: 'एसव्हीएसपी आश्रम शाळा, बेळगाव'
    },
    description: {
      EN: `Education is the most powerful tool for transforming lives and breaking the cycle of poverty. At SVSP, we believe that every child, regardless of their background or circumstances, deserves access to quality education that prepares them for a bright and successful future.

We provide children with admission to recognized educational institutions, necessary learning materials, school uniforms, books, digital learning resources, and continuous academic support. Our caregivers and educators encourage curiosity, creativity, critical thinking, and lifelong learning. Beyond classroom education, we focus on developing communication skills, leadership qualities, moral values, and self-confidence through extracurricular activities, sports, cultural programs, and personality development initiatives.

Recognizing that every child learns differently, we also provide additional academic guidance and mentoring whenever required. Our goal is not only to help children excel academically but also to nurture responsible citizens who can contribute positively to society.`,
      HI: 'प्रत्येक अनाथ बच्चे को शैक्षिक परीक्षाओं में शीर्ष स्थान प्राप्त करने में मदद करने के लिए मानक पाठ्यपुस्तक सेट, स्कूल यूनिफॉर्म, अतिरिक्त ट्यूशन सामग्री और स्टेशनरी प्रदान करना।',
      KN: 'ಪ್ರತಿ ಅನಾಥ ಮಗುವು ಪರೀಕ್ಷೆಗಳಲ್ಲಿ ಉತ್ತಮ ಸಾಧನೆ ಮಾಡಲು ಉಚಿತ ಪಠ್ಯಪುಸ್ತಕಗಳು, ಶಾಲಾ ಸಮವಸ್ತ್ರಗಳು, ಹೆಚ್ಚುವರಿ ಬೋಧನಾ ಸಾಮಗ್ರಿಗಳು ಮತ್ತು ಲೇಖನ ಸಾಮಗ್ರಿಗಳನ್ನು ಒದಗಿಸುವುದು.',
      MR: 'प्रत्येक अनाथ बालकाला शालेय परीक्षेत यश मिळवून देण्यासाठी शालेय गणवेश, प्रमाणित पाठ्यपुस्तके, शैक्षणिक साहित्य आणि पूरक मार्गदर्शन उपलब्ध करून देणे.'
    },
    impactLabel: {
      EN: 'Enables 50 children to attend English and Kannada medium schooling seamlessly.',
      HI: '50 बच्चों को अंग्रेजी और कन्नड़ माध्यम की स्कूली शिक्षा निर्बाध रूप से प्राप्त करने में सक्षम बनाता है।',
      KN: '50 ಮಕ್ಕಳಿಗೆ ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಕನ್ನಡ ಮಾಧ್ಯಮದ ಶಿಕ್ಷಣವನ್ನು ಸುಲಭವಾಗಿ ಪಡೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.',
      MR: '५० मुलांना इंग्रजी आणि कन्नड माध्यमाचे शिक्षण अखंडपणे घेण्यास सक्षम करते.'
    }
  },
  {
    id: 'p2',
    category: 'protection',
    raised: 98000,
    goal: 120000,
    image: cheeringChildren,
    images: [cheeringChildren, childrenSmiling, boyHoldingShapes],
    title: {
      EN: 'Child Safety & Mental Wellbeing Care',
      HI: 'बाल सुरक्षा और मानसिक कल्याण देखभाल',
      KN: 'ಮಕ್ಕಳ ಸುರಕ್ಷತೆ ಮತ್ತು ಮಾನಸಿಕ ಭಾವನಾತ್ಮಕ ಕಾಳಜಿ',
      MR: 'बाल सुरक्षा आणि मानसिक आरोग्य काळजी'
    },
    location: {
      EN: 'Vulnerable Kids Shelter, Belagavi',
      HI: 'कमजोर बच्चों का आश्रय गृह, बेलगावी',
      KN: 'ದುರ್ಬಲ ಮಕ್ಕಳ ಆಶ್ರಯ ತಾಣ, ಬೆಳಗಾವಿ',
      MR: 'संवेदनशील बाल संगोपन केंद्र, बेळगाव'
    },
    description: {
      EN: 'Ensuring safe, family-like nurturing environment for children from single-parent or highly vulnerable broken backgrounds, managed by fully trained caretakers.',
      HI: 'एकल-अभिभावक या अत्यधिक कमजोर परिवेश से आने वाले बच्चों के लिए पूर्ण प्रशिक्षित देखभालकर्ताओं द्वारा प्रबंधित सुरक्षित, पारिवारिक माहौल सुनिश्चित करना।',
      KN: 'ತರಬೇತಿ ಪಡೆದ ಪೋಷಕರಿಂದ ನಿರ್ವಹಿಸಲ್ಪಡುವ ಏಕ-ಪೋಷಕ ಅಥವಾ ಕಷ್ಟದ ಹಿನ್ನೆಲೆಯಿಂದ ಬಂದ ಮಕ್ಕಳಿಗೆ ಸುರಕ್ಷಿತ, ಕುಟುಂಬದಂತಹ ವಾತಾವರಣವನ್ನು ಖಚಿತಪಡಿಸುವುದು.',
      MR: 'एकल-पालकत्व किंवा कौटुंबिक समस्या असलेल्या पार्श्वभूमीतील मुलांसाठी प्रशिक्षित काळजीवाहूंद्वारे सुरक्षित आणि कौटुंबिक वातावरणात काळजी व संगोपन सुनिश्चित करणे.'
    },
    impactLabel: {
      EN: 'Guarantees 24/7 child abuse protection and social security.',
      HI: 'चोबीस घंटे बाल शोषण संरक्षण और सामाजिक सुरक्षा की गारंटी देता है।',
      KN: '24/7 ಮಕ್ಕಳ ರಕ್ಷಣೆ ಮತ್ತು ಸಾಮಾಜिक ಸುರಕ್ಷತೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.',
      MR: 'मुलांना २४ तास बाल शोषण संरक्षण आणि सामाजिक सुरक्षा प्रदान करते.'
    }
  },
  {
    id: 'p3',
    category: 'health',
    raised: 145000,
    goal: 155000,
    image: childrenSmilingFriends,
    images: [childrenSmilingFriends, childrenCookingMeals, childrenCrossingRoad],
    title: {
      EN: 'Free Shelter & Balanced Healthcare',
      HI: 'निःशुल्क आश्रय और संतुलित स्वास्थ्य सेवा',
      KN: 'ಉಚಿತ ಆಶ್ರಯ ಮತ್ತು ಸಮತೋಲಿತ ಆರೋಗ್ಯ ಸೇವೆ',
      MR: 'मोफत निवारा आणि संतुलित आरोग्य सेवा'
    },
    location: {
      EN: 'Boys and Girls Hostel Wardens, Subhash Nagar',
      HI: 'बालक एवं बालिका छात्रावास, सुभाष नगर',
      KN: 'ಹುಡುಗರ ಮತ್ತು ಹುಡುಗಿಯರ ವಸತಿ ನಿಲಯ, ಸುಭಾಷ್ ನಗರ',
      MR: 'मुलगे आणि मुलींचे वसतिगृह, सुभाष नगर'
    },
    description: {
      EN: 'Supplying free nutritious freshly cooked meals daily, clean well-ventilated rooms, hygiene kits, and tie-ups with professional doctors for bi-weekly checkups.',
      HI: 'प्रतिदिन मुफ्त पौष्टिक ताजा पका हुआ भोजन, स्वच्छ हवादार कमरे, स्वच्छता किट और हर दो सप्ताह में स्वास्थ्य जांच के लिए डॉक्टरों के साथ समन्वय करना।',
      KN: 'ಪ್ರತಿದಿನ ಉಚಿತ ಪೌಷ್ಟಿಕ ತಾಜಾ ಆಹಾರ, ಸ್ವಚ್ಛ ಕೊಠಡಿಗಳು, ನೈರ್ಮಲ್ಯ ಕಿಟ್‌ಗಳು ಮತ್ತು ಪ್ರತಿ ಎರಡು ವಾರಗಳಿಗೊಮ್ಮೆ ವೈದ್ಯಕೀಯ ತಪಾಸಣೆಯನ್ನು ಒದಗಿಸುವುದು.',
      MR: 'दररोज मोफत पौष्टिक आणि ताजा शाकाहारी आहार, स्वच्छ व हवेशीर खोल्या, वैयक्तिक स्वच्छता किट आणि दर दोन आठवड्यांनी डॉक्टरांच्या तपासणीची सोय करणे.'
    },
    impactLabel: {
      EN: 'Maintains healthy physical and biometric tracking for 50 kids.',
      HI: '50 बच्चों के स्वस्थ शारीरिक और बायोमेट्रिक विकास की निगरानी करता है।',
      KN: '50 ಮಕ್ಕಳ ದೈಹಿಕ ಬೆಳವಣಿಗೆಯ ಆರೋಗ್ಯಕರ ದಾಖಲೆಗಳನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ.',
      MR: '५० मुलांच्या निरोगी शारीरिक विकासाची आणि आरोग्य नोंदींची काळजी घेते.'
    }
  },
  {
    id: 'p4',
    category: 'health',
    raised: 86000,
    goal: 110000,
    image: classroomLessonSun,
    images: [classroomLessonSun, classroomInteractive],
    title: {
      EN: 'Counseling & Post-trauma Rehabilitation',
      HI: 'परामर्श और मानसिक स्वास्थ्य पुनर्वास',
      KN: 'ಆಪ್ತಸಮಾಲೋಚನೆ ಮತ್ತು ಪುನರ್ವಸತಿ ಬೆಂಬಲ',
      MR: 'समुपदेशन आणि मानसिक पुनर्वसन'
    },
    location: {
      EN: 'SVSP Mental Wellness Wing, Belagavi',
      HI: 'एसवीएसपी मानसिक स्वास्थ्य प्रभाग, बेलगावी',
      KN: 'SVSP ಮಾನಸಿಕ ಸ್ವಾಸ್ಥ್ಯ ವಿಭಾಗ, ಬೆಳಗಾವಿ',
      MR: 'एसव्हीएसपी मानसिक आरोग्य विभाग, बेळगाव'
    },
    description: {
      EN: 'Providing emotional healing, grief counseling, and behavioral development classes through visiting professional child psychologists to help overcome child trauma.',
      HI: 'बच्चों के मानसिक आघात को दूर करने के लिए पेशेवर बाल मनोवैज्ञानिकों के माध्यम से भावनात्मक उपचार, शोक परामर्श और व्यावहारिक विकास कक्षाएं प्रदान करना।',
      KN: 'ಮಕ್ಕಳ ಮಾನಸಿಕ ಆಘಾತವನ್ನು ನಿವಾರಿಸಲು ವೃತ್ತಿಪರ ಮಕ್ಕಳ ಮನೋವಿಜ್ಞಾನಿಗಳಿಂದ ಭಾವನಾತ್ಮಕ ಚಿಕಿತ್ಸೆ ಮತ್ತು ಆಪ್ತಸಮಾಲೋಚನೆಯನ್ನು ನೀಡುವುದು.',
      MR: 'विकासात्मक आणि बाल मानसशास्त्रज्ञांच्या मार्गदर्शनाखाली भावनिक आधार, समुपदेशन आणि वर्तन सुधार वर्ग याद्वारे मुलांमधील मानसिक आघात आणि तणाव दूर करणे.'
    },
    impactLabel: {
      EN: 'Rehabilitates distressed abandoned children into high self-esteem pupils.',
      HI: 'परित्यक्त बच्चों को उच्च आत्मसम्मान वाले विद्यार्थियों के रूप में तैयार करता है।',
      KN: 'ಕಷ್ಟದಲ್ಲಿರುವ ಮಕ್ಕಳಲ್ಲಿ ಆತ್ಮವಿಶ್ವಾಸವನ್ನು ತುಂಬಿ ಉತ್ತಮ ವಿದ್ಯಾರ್ಥಿಗಳನ್ನಾಗಿ ರೂಪಿಸುತ್ತದೆ.',
      MR: 'निराधार आणि पीडित बालकांमध्ये आत्मविश्वास निर्माण करून त्यांना उत्तम विद्यार्थी म्हणून पुनर्वसित करते.'
    }
  },
  {
    id: 'p5',
    category: 'protection',
    raised: 82000,
    goal: 85000,
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800',
    title: {
      EN: 'Our Role in Child Care and Adoption Facilitation',
      HI: 'बाल देखभाल एवं दत्तक ग्रहण सुविधा में हमारी भूमिका',
      KN: 'ಮಕ್ಕಳ ಆರೈಕೆ ಮತ್ತು ದತ್ತು ಪ್ರಕ್ರಿಯೆ ಸೌಲಭ್ಯದಲ್ಲಿ ನಮ್ಮ ಪಾತ್ರ',
      MR: 'बाल संगोपन आणि दत्तक प्रक्रिया सुलभीकरणातील आमची भूमिका'
   },
    location: {
      EN: 'State Central Adoption Resource Authority Connect',
      HI: 'राज्य दत्तक ग्रहण संसाधन प्राधिकरण कनेक्टिविटी',
      KN: 'ರಾಜ್ಯ ದತ್ತು ಸಂಪನ್ಮೂಲ ಪ್ರಾಧಿಕಾರ ಕಾರ್ಯಕ್ಷೇತ್ರ',
      MR: 'राज्य दत्तक संसाधन प्राधिकरण समन्वय विभाग'
    },
    description: {
  EN: `Our organization is committed to the care, protection, and rehabilitation of children who are rescued, abandoned, orphaned, surrendered, or found in vulnerable circumstances. When such children are brought under our care, our primary responsibility is to ensure their safety, well-being, healthcare, education, and overall development in a nurturing environment.

       Upon receiving a child, we complete all required documentation and report the child's details to the appropriate government authorities in accordance with the regulations and procedures established under the Central Adoption Resource Authority (CARA). We maintain and update all necessary records while ensuring that every child receives proper care and protection during their stay with us.

       It is important to note that our organization does not have any authority in selecting or matching a child with prospective adoptive parents. The matching and allocation of children for adoption are carried out strictly as per CARA guidelines and the applicable provisions of Indian adoption law.

       Our role is limited to providing accurate information and documentation regarding the child to the competent authorities and supporting the adoption process as required.

       For prospective adoptive parents, our role is to guide and assist them through the legal adoption procedure. We provide information regarding eligibility criteria, required documentation, and the registration process on the CARA portal. We also help families understand the rules, regulations, and responsibilities involved in adoption.

       As part of the adoption assessment process, a qualified social worker conducts a Home Study Report (HSR) by visiting the prospective adoptive parents' residence. The findings of this assessment, along with all relevant documents, are submitted through the prescribed channels. Once approved, the prospective adoptive parents are placed in the adoption waiting system managed through the central CARA framework.

      The matching of children and prospective adoptive parents is carried out by the competent authorities through the centralized system. Once a match is identified, we receive official communication regarding the proposed placement. We then provide the prospective parents with relevant information about the child and facilitate an introductory meeting between the child and the family.

      Every adoption is further reviewed through the appropriate legal and administrative mechanisms, including the District Child Protection and Adoption Committees wherever applicable. Careful consideration is given to ensure that the adoption serves the best interests of the child and that the prospective parents are suitable and capable of providing a stable, loving, and secure family environment.

       In cases where a child is adopted by parents residing in another district, state, or country, post-adoption follow-up is conducted through the authorized agency nearest to the adoptive family's place of residence. These agencies monitor the child's adjustment, well-being, development, and integration into the family. Periodic reports are submitted to the relevant authorities and shared with us as required under adoption regulations.

      The adoption process in India is governed by stringent legal safeguards and CARA guidelines to ensure transparency, accountability, and the welfare of every child. Every stage of the process, from child care and documentation to parent assessment, matching, placement, and post-adoption follow-up, is carefully regulated to protect the rights and best interests of both the child and the adoptive family.`,

  HI: `हमारा संगठन बचाए गए, परित्यक्त, अनाथ, समर्पित अथवा असुरक्षित परिस्थितियों में पाए गए बच्चों की देखभाल, सुरक्षा और पुनर्वास के लिए समर्पित है। हमारे संरक्षण में आने वाले प्रत्येक बच्चे की सुरक्षा, स्वास्थ्य, शिक्षा और समग्र विकास सुनिश्चित करना हमारी प्राथमिक जिम्मेदारी है।

      बच्चे को संरक्षण में लेने के बाद हम सभी आवश्यक दस्तावेज तैयार करते हैं और CARA के नियमों के अनुसार संबंधित सरकारी प्राधिकरणों को जानकारी प्रदान करते हैं। हम सभी अभिलेखों को अद्यतन रखते हुए बच्चों को उचित देखभाल और सुरक्षा प्रदान करते हैं।

      हम किसी बच्चे का चयन या मिलान संभावित दत्तक माता-पिता से नहीं करते। यह प्रक्रिया केवल CARA दिशानिर्देशों और भारतीय दत्तक ग्रहण कानूनों के अनुसार सक्षम प्राधिकरणों द्वारा की जाती है।

      हम संभावित दत्तक माता-पिता को पात्रता, दस्तावेज़, CARA पंजीकरण और कानूनी प्रक्रिया के संबंध में मार्गदर्शन प्रदान करते हैं। गृह अध्ययन रिपोर्ट (HSR) सहित सभी मूल्यांकन निर्धारित प्रक्रिया के अनुसार किए जाते हैं।

       भारत में दत्तक ग्रहण प्रक्रिया CARA के नियमों और कानूनी सुरक्षा उपायों के अंतर्गत संचालित होती है ताकि प्रत्येक बच्चे का सर्वोत्तम हित सुनिश्चित किया जा सके।`,

  KN: `ನಮ್ಮ ಸಂಸ್ಥೆ ರಕ್ಷಿಸಲ್ಪಟ್ಟ, ತೊರೆದುಹೋಗಿರುವ, ಅನಾಥ, ಸಮರ್ಪಿಸಲ್ಪಟ್ಟ ಅಥವಾ ದುರ್ಬಲ ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ಕಂಡುಬರುವ ಮಕ್ಕಳ ಆರೈಕೆ, ರಕ್ಷಣೆ ಮತ್ತು ಪುನರ್ವಸತಿಗೆ ಬದ್ಧವಾಗಿದೆ. ನಮ್ಮ ಆರೈಕೆಗೆ ಬರುವ ಪ್ರತಿಯೊಂದು ಮಗುವಿನ ಸುರಕ್ಷತೆ, ಆರೋಗ್ಯ, ಶಿಕ್ಷಣ ಮತ್ತು ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿಯನ್ನು ಖಚಿತಪಡಿಸುವುದು ನಮ್ಮ ಮುಖ್ಯ ಜವಾಬ್ದಾರಿಯಾಗಿದೆ.

       ಮಗುವನ್ನು ಸ್ವೀಕರಿಸಿದ ನಂತರ CARA ನಿಯಮಗಳ ಪ್ರಕಾರ ಅಗತ್ಯ ದಾಖಲೆಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ ಸಂಬಂಧಿತ ಸರ್ಕಾರಿ ಅಧಿಕಾರಿಗಳಿಗೆ ಮಾಹಿತಿ ನೀಡಲಾಗುತ್ತದೆ. ಮಕ್ಕಳಿಗೆ ಸಮರ್ಪಕ ಆರೈಕೆ ಮತ್ತು ರಕ್ಷಣೆಯನ್ನು ಒದಗಿಸುತ್ತಾ ಎಲ್ಲಾ ದಾಖಲೆಗಳನ್ನು ನಿರಂತರವಾಗಿ ನವೀಕರಿಸಲಾಗುತ್ತದೆ.

       ಮಕ್ಕಳನ್ನು ದತ್ತು ಪಡೆಯಲು ಬಯಸುವ ಪೋಷಕರೊಂದಿಗೆ ಹೊಂದಾಣಿಕೆ ಮಾಡುವ ಅಧಿಕಾರ ನಮ್ಮ ಸಂಸ್ಥೆಗೆ ಇಲ್ಲ. ಈ ಪ್ರಕ್ರಿಯೆಯನ್ನು CARA ಮಾರ್ಗಸೂಚಿಗಳು ಮತ್ತು ಭಾರತೀಯ ದತ್ತು ಕಾನೂನುಗಳ ಪ್ರಕಾರ ಸಂಬಂಧಿತ ಅಧಿಕಾರಿಗಳು ಮಾತ್ರ ನಿರ್ವಹಿಸುತ್ತಾರೆ.

       ದತ್ತು ಪಡೆಯಲು ಬಯಸುವ ಪೋಷಕರಿಗೆ ಅರ್ಹತೆ, ಅಗತ್ಯ ದಾಖಲೆಗಳು, CARA ನೋಂದಣಿ ಮತ್ತು ಕಾನೂನು ಪ್ರಕ್ರಿಯೆಗಳ ಬಗ್ಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡಲಾಗುತ್ತದೆ. ಗೃಹ ಅಧ್ಯಯನ ವರದಿ (HSR) ಸೇರಿದಂತೆ ಎಲ್ಲಾ ಮೌಲ್ಯಮಾಪನಗಳು ನಿಗದಿತ ವಿಧಾನದಲ್ಲಿ ನಡೆಸಲಾಗುತ್ತವೆ.

       ಭಾರತದಲ್ಲಿ ದತ್ತು ಪ್ರಕ್ರಿಯೆ ಪಾರದರ್ಶಕತೆ, ಜವಾಬ್ದಾರಿ ಮತ್ತು ಮಕ್ಕಳ ಹಿತಾಸಕ್ತಿಯನ್ನು ಕಾಪಾಡುವ ಉದ್ದೇಶದಿಂದ CARA ನಿಯಮಗಳು ಮತ್ತು ಕಾನೂನು ರಕ್ಷಣಾ ಕ್ರಮಗಳ ಅಡಿಯಲ್ಲಿ ನಡೆಸಲಾಗುತ್ತದೆ.`,

  MR: `आमची संस्था बचावलेली, अनाथ, परित्यक्त, समर्पित किंवा असुरक्षित परिस्थितीत आढळलेली मुले यांच्या संगोपन, संरक्षण आणि पुनर्वसनासाठी कार्यरत आहे. आमच्या देखरेखीखाली येणाऱ्या प्रत्येक मुलाचे आरोग्य, शिक्षण, सुरक्षा आणि सर्वांगीण विकास सुनिश्चित करणे ही आमची प्रमुख जबाबदारी आहे.

       मुलाला स्वीकारल्यानंतर CARA च्या नियमांनुसार आवश्यक कागदपत्रे पूर्ण करून संबंधित शासकीय अधिकाऱ्यांना माहिती दिली जाते. मुलांना योग्य काळजी आणि संरक्षण मिळावे यासाठी सर्व नोंदी नियमितपणे अद्ययावत ठेवल्या जातात.

       संभाव्य दत्तक पालकांसोबत मुलांची निवड किंवा जुळवणी करण्याचा अधिकार आमच्या संस्थेला नाही. ही प्रक्रिया CARA मार्गदर्शक तत्त्वे आणि भारतीय दत्तक कायद्यांनुसार सक्षम अधिकाऱ्यांमार्फतच केली जाते.

       दत्तक घेऊ इच्छिणाऱ्या पालकांना पात्रता, आवश्यक कागदपत्रे, CARA नोंदणी आणि कायदेशीर प्रक्रियेबाबत मार्गदर्शन केले जाते. गृह अभ्यास अहवाल (HSR) आणि इतर मूल्यांकन निर्धारित प्रक्रियेनुसार पूर्ण केले जातात.

       भारतातील दत्तक प्रक्रिया CARA नियम आणि कायदेशीर संरक्षणाच्या चौकटीत राबवली जाते, ज्यामुळे प्रत्येक मुलाच्या सर्वोत्तम हिताचे संरक्षण होते.`
    },
    
    impactLabel: {
      EN: 'Legally bridged 127 orphan children into compassionate stable families.',
      HI: 'कानूनी रूप से 127 अनाथ बच्चों को दयालु और सुखी परिवारों से जोड़ा गया है।',
      KN: 'ಕಾನೂನುಬದ್ಧವಾಗಿ 127 ಅನಾಥ ಮಕ್ಕಳನ್ನು ಪ್ರೀತಿಯ ಕುಟುಂಬಗಳಿಗೆ ಸೇರಿಸಲಾಗಿದೆ.',
      MR: 'आतापर्यंत १२७ अनाथ मुलांना कायदेशीररित्या संवेदनशील आणि सुखी कुटुंबांपर्यंत पोहोचवले आहे.'
    },
    }, 
{
  id: 'p6',
    category: 'education',
    raised: 69000,
    goal: 90000,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    title: {
      EN: 'Holistic Child Welfare & Future Careers',
      HI: 'समग्र बाल कल्याण और भविष्य का करियर',
      KN: 'ಸಮಗ್ರ ಮಕ್ಕಳ ಕಲ್ಯಾಣ ಮತ್ತು ಭವಿಷ್ಯದ ವೃತ್ತಿಬದುಕು',
      MR: 'समग्र बाल कल्याण आणि भविष्य'
    },
    location: {
      EN: 'Vocational and Civic Grooming Center, Karnataka',
      HI: 'व्यावसायिक एवं नागरिक कल्याण केंद्र, कर्नाटक',
      KN: 'ವೃತ್ತಿಪರ ಮತ್ತು ನಾಗರಿಕ ಕಲ್ಯಾಣ ಕೇಂದ್ರ, ಕರ್ನಾಟಕ',
      MR: 'व्यावसायिक आणि नागरी विकास केंद्र, कर्नाटक'
    },
    description: {
      EN: 'Guiding teenage boys and girls into responsible citizens by supporting technical vocational skills, computer literacies, and moral and cultural guidance.',
      HI: 'किशोर लड़कों और लड़कियों को तकनीकी कौशल, कंप्यूटर साक्षरता, और नैतिक व सांस्कृतिक मार्गदर्शन प्रदान करके जिम्मेदार नागरिक बनाना।',
      KN: 'ಹದಿಹರೆಯದ ಮಕ್ಕಳಿಗೆ ತಾಂತ್ರಿಕ ಕೌಶಲ್ಯಗಳು, ಕಂಪ್ಯೂಟರ್ ಸಾಕ್ಷರತೆ ಮತ್ತು ನೈತಿಕ ಮಾರ್ಗದರ್ಶನ ನೀಡಿ ಜವಾಬ್ದಾರಿಯುತ ನಾಗರಿಕರನ್ನಾಗಿ ರೂಪಿಸುವುದು.',
      MR: 'किशोरवयीन मुले आणि मुलींना व्यावसायिक कौशल्ये, कॉम्प्युटर साक्षरता आणि नैतिक मार्गदर्शन देऊन त्यांना स्वावलंबी व जबाबदार नागरिक बनवणे.'
    },
    impactLabel: {
      EN: 'Equips teens to enter independent jobs and technical colleges seamlessly.',
      HI: 'किशारों को स्वतंत्र नौकरियों और तकनीकी कॉलेजों में सुचारू रूप से प्रवेश दिलाता है।',
      KN: 'ಹದಿಹರೆಯದವರು ತಾಂತ್ರಿಕ ಕಾಲೇಜುಗಳಿಗೆ ಅಥವಾ ಉದ್ಯೋಗಗಳಿಗೆ ಸೇರಲು ಅನುಕೂल ಮಾಡಿಕೊಡುತ್ತದೆ.',
      MR: 'तरुणांना स्वावलंबी नोकऱ्या आणि तांत्रिक महाविद्यालयांमध्ये सहजपणे प्रवेश करण्यास सुसज्ज करते.'
    }
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    date: '1982',
    category: { EN: 'Ashram Genesis', HI: 'आश्रम स्थापना', KN: 'ಆಶ್ರಮ ಸ್ಥಾಪನೆ', MR: 'आश्रम स्थापना' },
    title: {
      EN: 'Established NGO Registration under Bombay Public Trust Act',
      HI: 'बॉम्बे पब्लिक ट्रस्ट एक्ट के तहत गैर-सरकारी संगठन का पंजीकरण',
      KN: 'ಬಾಂಬೆ ಪಬ್ಲಿಕ್ ಟ್ರಸ್ಟ್ ಕಾಯ್ದೆಯಡಿ ಎನ್‌ಜಿಒ ನೋಂದಣಿ',
      MR: 'बॉम्बे पब्लिक ट्रस्ट ॲक्ट अंतर्गत स्वयंसेवी संस्थेची (NGO) स्थापना'
    },
    excerpt: {
      EN: 'Beginning a historic milestone in Belagavi dedicated fully to marginalized homeless boys and girls.',
      HI: 'बेलगावी में बेघर और जरूरतमंद बालक-बालिकाओं के कल्याण के लिए एक समर्पित संस्था के रूप में शुरुआत।',
      KN: 'ಬೆಳಗಾವಿಯಲ್ಲಿ ನಿರಾಶ್ರಿತ ಮತ್ತು ಹಿಂದುಳಿದ ಮಕ್ಕಳ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಒಂದು ಸಮರ್ಪಿತ ಸಂಸ್ಥೆಯಾಗಿ ಐತಿಹಾಸಿಕ ಪಯಣದ ಆರಂಭ.',
      MR: 'बेळगावमध्ये बेघर आणि गरजू बालकांच्या कल्याणासाठी एका समर्पित संस्थेची ऐतिहासिक सुरुवात.'
    },
    content: {
      EN: 'Established with the noble vision of providing care, Swami Vivekanand Seva Pratishthan initiated child protection shelters, giving orphan children physical protection, clothing, and primary education.',
      HI: 'बच्चों को उचित देखभाल प्रदान करने के महान दृष्टिकोण के साथ स्थापित, स्वामी विवेकानंद सेवा प्रतिष्ठान ने बाल संरक्षण गृहों की शुरुआत की, जिससे अनाथ बच्चों को शारीरिक सुरक्षा, वस्त्र और प्राथमिक शिक्षा मिली।',
      KN: 'ಮಕ್ಕಳಿಗೆ ಉತ್ತಮ ಆರೈಕೆಯನ್ನು ನೀಡುವ ಉದಾತ್ತ ಧ್ಯೇಯದೊಂದಿಗೆ ಸ್ಥಾಪಿತವಾದ ಸ್ವಾಮಿ ವಿವೇಕಾನಂದ ಸೇವಾ ಪ್ರತಿಷ್ಠಾನವು ಮಕ್ಕಳ ಆಶ್ರಯ ತಾಣಗಳನ್ನು ಪ್ರಾರಂಭಿಸಿ, ಅವರಿಗೆ ಸೂಕ್ತ ರಕ್ಷಣೆ, ಬಟ್ಟೆ ಮತ್ತು ಪ್ರಾಥಮಿಕ ಶಿಕ್ಷಣವನ್ನು ಒದಗಿಸಿತು.',
      MR: 'अनाथ बालकांना शारीरिक सुरक्षा, कपडे आणि प्राथमिक शिक्षण देण्यासाठी स्वामी विवेकानंद सेवा प्रतिष्ठानने बाल संगोपन आणि संरक्षण गृहांची सुरुवात केली.'
    },
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'n2',
    date: '2022',
    category: { EN: 'Hon’ble Governor Visit', HI: 'माननीय राज्यपाल दौरा', KN: 'ಮಾನ್ಯ ರಾಜ್ಯಪಾಲರ ಭೇಟಿ', MR: 'माननीय राज्यपालांची भेट' },
    title: {
      EN: 'Hon’ble Governor of Karnataka visited the SVSP Ashram',
      HI: 'कर्नाटक के माननीय राज्यपाल ने एसवीएसपी आश्रम का दौरा किया',
      KN: 'ಕರ್ನಾಟಕದ ಮಾನ್ಯ ರಾಜ್ಯಪಾಲರು ಎಸ್‌ವಿಎಸ್‌ಪಿ ಆಶ್ರಮಕ್ಕೆ ಭೇಟಿ ನೀಡಿದರು',
      MR: 'कर्नाटकच्या माननीय राज्यपालांनी एसव्हीएसपी आश्रमाला भेट दिली'
    },
    excerpt: {
      EN: 'Shri Thawarchand Gehlot spent high-quality time with children and appreciated our humanitarian child protection efforts.',
      HI: 'श्री थावरचंद गहलोत ने बच्चों के साथ अमूल्य समय बिताया और हमारे इस मानवीय बाल संरक्षण कार्यों की सराहना की।',
      KN: 'ಶ್ರೀ ಥಾವರಚಂದ್ ಗೆಹ್ಲೋಟ್ ಅವರು ಮಕ್ಕಳೊಂದಿಗೆ ಅಮೂಲ್ಯ ಸಮಯವನ್ನು ಕಳೆದು, ಸಂಸ್ಥೆಯ ಮಾನವೀಯ ಮಕ್ಕಳ ರಕ್ಷಣೆ ಕಾರ್ಯಗಳನ್ನು ಶ್ಲಾಘಿಸಿದರು.',
      MR: 'श्री थावरचंद गेहलोत यांनी मुलांसोबत अनमोल वेळ घालवला आणि आमच्या मानवतावादी बाल कल्याण कार्याची प्रशंसा केली.'
    },
    content: {
      EN: 'During his noble visit, the Hon’ble Governor highlighted Swami Vivekanand Seva Pratishthan as an institutional role model for safe, transparent child adoptions and emotional rehabilitation in Karnataka.',
      HI: 'अपनी गरिमामयी यात्रा के दौरान, माननीय राज्यपाल ने कर्नाटक में सुरक्षित, पारदर्शी बाल दत्तक ग्रहण और भावनात्मक पुनर्वास के लिए स्वामी विवेकानंद सेवा प्रतिष्ठान को एक उत्कृष्ट आदर्श संस्था बताया।',
      KN: 'ತಮ್ಮ ಭೇಟಿಯ ಸಮಯದಲ್ಲಿ, ಮಾನ್ಯ ರಾಜ್ಯಪಾಲರು ಕರ್ನಾಟಕದಲ್ಲಿ ಸುರಕ್ಷಿತ, ಪಾರದರ್ಶಕ ದತ್ತು ಮತ್ತು ಮಕ್ಕಳ ಭಾವನಾತ್ಮಕ ಪುನರ್ವಸತಿಗಾಗಿ ಸ್ವಾಮಿ ವಿವೇಕಾನಂದ ಸೇವಾ ಪ್ರತಿಷ್ಠಾನವನ್ನು ಮಾದರಿ ಸಂಸ್ಥೆ ಎಂದು ಶ್ಲಾಘಿಸಿದರು.',
      MR: 'तसेच माननीय राज्यपालांनी स्वामी विवेकानंद सेवा प्रतिष्ठान ही संस्था कर्नाटकात सुरक्षित, पारदर्शक दत्तक प्रक्रिया आणि भावनिक पुनर्वसनासाठी एक उत्तम आदर्श मॉडेल असल्याचे सांगितले.'
    },
    image: governorVisit
  },
  {
    id: 'n3',
    date: '2020',
    category: { EN: 'State Recognition', HI: 'राज्य सरकार पुरस्कार', KN: 'ರಾಜ್ಯ ಪ್ರಶಸ್ತಿ ಮಾನ್ಯತೆ', MR: 'राज्य सरकारचे कौतुक' },
    title: {
      EN: 'Government of Karnataka Certificate of Appreciation',
      HI: 'कर्नाटक सरकार द्वारा बाल कल्याण हेतु प्रशंसा पत्र',
      KN: 'ಕರ್ನಾಟಕ ಸರ್ಕಾರದಿಂದ ಮಕ್ಕಳ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಶ್ಲಾಘನೀಯ ಪ್ರಮಾಣಪತ್ರ',
      MR: 'कर्नाटक सरकारकडून बाल कल्याणासाठी सन्मान आणि प्रशंसापत्र'
    },
    excerpt: {
      EN: 'Recognized in 1988 and 2020 with high merit Certificates of Appreciation for outstanding child welfare contributions.',
      HI: 'उत्कृष्ट बाल कल्याण योगदान के लिए 1988 और 2020 में उच्च योग्यता प्रशंसा पत्र से सम्मानित।',
      KN: 'ಮಕ್ಕಳ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಅತ್ಯುತ್ತಮ ಕೊಡುಗೆಗಳನ್ನು ನೀಡಿದ್ದಕ್ಕಾಗಿ 1988 ಮತ್ತು 2020 ರಲ್ಲಿ ರಾಜ್ಯ ಸರ್ಕಾರದಿಂದ ಶ್ಲಾಘನೀಯ ಪ್ರಮಾಣಪತ್ರದ ಗೌರವ.',
      MR: 'उत्कृष्ट बाल कल्याण योगदानासाठी १९८८ आणि २०२० मध्ये राज्य सरकारकडून प्रतिष्ठित प्रशंसापत्रांनी सन्मानित.'
    },
    content: {
      EN: 'Awards recognize the transparency, compliant legal CARA processes, high-hygiene food layouts, and exemplary school enrollment statistics shown by the trust through decades of service.',
      HI: 'यह सम्मान कई दशकों की निस्वार्थ सेवा, पारदर्शी कानूनी कारा दत्तक ग्रहण प्रक्रियाओं, बच्चों के उच्च-गुणवत्ता पोषण और अनुकरणीय स्कूली नामांकन आंकड़ों की मान्यता है।',
      KN: 'ದಶಕಗಳ ನಿಸ್ವಾರ್ಥ ಸೇವೆ, ಪಾರದರ್ಶಕ ಮತ್ತು ಕಾಯ್ದೆಬದ್ಧ CARA ದತ್ತು ಪ್ರಕ್ರಿಯೆಗಳು, ಮಕ್ಕಳ ಉತ್ತಮ ಪೌಷ್ಟಿಕಾಂಶ ಮತ್ತು ಶಾಲಾ ದಾಖಲಾತಿ ಸಾಧನೆಗಳಿಗಾಗಿ ಈ ಮಾನ್ಯತೆ ದೊರೆತಿದೆ.',
      MR: 'हे पुरस्कार संस्थेने अनेक दशकांपासून दाखवलेली पारदर्शकता, कायदेशीर CARA प्रक्रिया, मुलांचा पौष्टिक आहार आणि उत्कृष्ट शालेय शिक्षणाची दखल घेऊन दिले आहेत.'
    },
    image: documentImage,
  }
];

export const EVENTS: EventItem[] = [
  {
    id: 'e1',
    date: 'Residential Home',
    time: 'Capacity: 25 Boys',
    location: {
      EN: 'Belagavi Boys Ashram Ground, Belagavi',
      HI: 'बेलगावी बालक आश्रम परिसर, बेलगावी',
      KN: 'ಬೆಳಗಾವಿ ಬಾಲಕರ ಆಶ್ರಮ ಆವರಣ, ಬೆಳಗಾವಿ',
      MR: 'बेळगाव बालक आश्रम परिसर, बेळगाव'
    },
    title: {
      EN: 'Dedicated Safe Home for Boys (Capacity 25)',
      HI: 'बालकों के लिए समर्पित सुरक्षित गृह (क्षमता 25)',
      KN: 'ಬಾಲಕರಿಗಾಗಿ ಸಮರ್ಪಿತ ಸುರಕ್ಷಿತ ಆಶ್ರಯ ಗೃಹ (ಸಾಮರ್ಥ್ಯ 25)',
      MR: 'मुलांसाठी समर्पित सुरक्षित गृह (क्षमता २५)'
    },
    type: {
      EN: 'Equipped Bedrooms & Study Rooms',
      HI: 'सुसज्जित शयनकक्ष और अध्ययन कक्ष',
      KN: 'ಸುಜ್ಜಿತ ಮಲಗುವ ಕೋಣೆಗಳು ಮತ್ತು ಅಧ್ಯಯನ ಕೊಠಡಿಗಳು',
      MR: 'सुसज्जित शयनकक्ष आणि अभ्यासाची सोय'
    }
  },
  {
    id: 'e2',
    date: 'Residential Home',
    time: 'Capacity: 25 Girls',
    location: {
      EN: 'Belagavi Girls Ashram Complex, Belagavi',
      HI: 'बेलगावी बालिका आश्रम परिसर, बेलगावी',
      KN: 'ಬೆಳಗಾವಿ ಬಾಲಕಿಯರ ಆಶ್ರಮ ಆವರಣ, ಬೆಳಗಾವಿ',
      MR: 'बेळगाव बालिका आश्रम परिसर, बेळगाव'
    },
    title: {
      EN: 'Dedicated Safe Home for Girls (Capacity 25)',
      HI: 'बालिकाओं के लिए समर्पित सुरक्षित गृह (क्षमता 25)',
      KN: 'ಬಾಲಕಿಯರಿಗಾಗಿ ಸಮರ್ಪಿತ ಸುರಕ್ಷಿತ ಆಶ್ರಯ ಗೃಹ (ಸಾಮರ್ಥ್ಯ 25)',
      MR: 'मुलींसाठी समर्पित सुरक्षित गृह (क्षमता २५)'
    },
    type: {
      EN: 'Secure Separate Recreational Space',
      HI: 'सुरक्षित पृथक मनोरंजन और खेल स्थान',
      KN: 'ಸುರಕ್ಷಿತ ಪ್ರತ್ಯೇಕ ಮನರಂಜನಾ ಕೊಠಡಿ',
      MR: 'सुरक्षित स्वतंत्र क्रीडा आणि मनोरंजन कक्ष'
    }
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    author: 'Mr. Rudro Nadagouda',
    role: {
      EN: 'Administrator & Trust Lead',
      HI: 'मुख्य प्रशासक एवं ट्रस्ट प्रमुख',
      KN: 'ಮುಖ್ಯ ಆಡಳಿತಾಧಿಕಾರಿ ಮತ್ತು ಟ್ರಸ್ಟ್ ಮುಖ್ಯಸ್ಥರು',
      MR: 'मुख्य प्रशासक आणि ट्रस्ट प्रमुख'
    },
    location: {
      EN: 'Belagavi Headquarters',
      HI: 'बेलगावी मुख्यालय',
      KN: 'ಬೆಳಗಾವಿ ಪ್ರಧಾನ ಕಚೇರಿ',
      MR: 'बेळगाव मुख्यालय'
    },
    quote: {
      EN: 'Our absolute mission is to provide orphaned, abandoned, and underprivileged children with high safety, care, premium education, and opportunities for a dignified self-reliant future.',
      HI: 'हमारा मुख्य उद्देश्य अनाथ, परित्यक्त और वंचित बच्चों को उच्च सुरक्षा, स्नेहपूर्ण देखभाल, गुणवत्तापूर्ण शिक्षा और एक सम्मानित, आत्मनिर्भर भविष्य के लिए पर्याप्त अवसर प्रदान करना है।',
      KN: 'ನಮ್ಮ ಪರಮ ಧ್ಯೇಯವೆಂದರೆ ಅನಾಥ, ಕೈಬಿಟ್ಟ ಮತ್ತು ಹಿಂದುಳಿದ ಮಕ್ಕಳಿಗೆ ಉತ್ತಮ ಸುರಕ್ಷತೆ, ಕಾಳಜಿ, ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣ ಮತ್ತು ಗೌರವಯುತ ಸ್ವಾವಲಂಬಿ ಭವಿಷ್ಯಕ್ಕಾಗಿ ಉತ್ತಮ ಅವಕಾಶಗಳನ್ನು ಒದಗಿಸುವುದು.',
      MR: 'आमचे ध्येय अनाथ, निराधार आणि वंचित बालकांना उच्च दर्जाचे संरक्षण, संवेदनशील काळजी, उत्तम शिक्षण आणि प्रतिष्ठित स्वावलंबी भविष्यासाठी सर्व संधी देणे हे आहे.'
    },
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 't2',
    author: 'Smt. Gangamma Chikkumbimath Team',
    role: {
      EN: 'Welfare Caretakers Coordinator',
      HI: 'कल्याणकारी देखभालकर्ता समन्वयक',
      KN: 'ಕಲ್ಯಾಣ ಪಾಲಕರ ಸಂಯೋಜಕರು',
      MR: 'कल्याणकारी काळजीवाहू समन्वयक'
    },
    location: {
      EN: 'Ashram Children Homes, Karnataka',
      HI: 'आश्रम बाल गृह, कर्नाटक',
      KN: 'ಆಶ್ರಮ ಮಕ್ಕಳ ಗೃಹಗಳು, ಕರ್ನಾಟಕ',
      MR: 'आश्रम बाल गृह, कर्नाटक'
    },
    quote: {
      EN: 'Children benefit from freshly prepared hygienic pure vegetarian meals, regular medical checkups, emotional learning, and a highly disciplined nurturing atmosphere.',
      HI: 'बच्चों को प्रतिदिन ताजा बना हुआ स्वच्छ शुद्ध शाकाहारी भोजन, नियमित स्वास्थ्य जांच, भावनात्मक शिक्षा और एक अत्यंत अनुशासित और स्नेहपूर्ण वातावरण का लाभ मिलता है।',
      KN: 'ಮಕ್ಕಳು ಪ್ರತಿದಿನ ತಾಜಾ ಮತ್ತು ಪ್ರೀತಿಯಿಂದ ತಯಾರಿಸಿದ ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ ಊಟ, ನಿಯಮಿತ ಆರೋಗ್ಯ ತಪಾಸಣೆ, ಭಾವನಾತ್ಮಕ ಶಿಕ್ಷಣ ಮತ್ತು ಶಿಸ್ತಿನ ಜೀವನದ ಲಾಭಗಳನ್ನು ಪಡೆಯುತ್ತಾರೆ.',
      MR: 'मुलांना दररोज घरगुती पद्धतीने बनवलेला स्वच्छ शाकाहारी आहार, नियमित वैद्यकीय तपासणी, भावनिक शिक्षण आणि अत्यंत शिस्तबद्ध व पोषक वातावरण मिळते.'
    },
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300'
  }
];

export const MANAGING_COMMITTEE: CommitteeMember[] = [
  {
    id: 'mc1',
    name: {
      EN: 'Smt. Dr. Manisha R. Bhandankar',
      HI: 'श्रीमती डॉ. मनीषा आर. भंडानकर',
      KN: 'ಶ್ರೀಮತಿ ಡಾ. ಮನೀಷಾ ಆರ್. ಭಾಂಡಣಕರ್',
      MR: 'श्रीमती डॉ. मनीषा आर. भंडानकर'
    },
    role: {
      EN: 'Managing Trustee',
      HI: 'प्रबंध न्यासी',
      KN: 'ವ್ಯವಸ್ಥಾಪಕ ವಿಶ್ವಸ್ಥರು',
      MR: 'प्रबंधकीय विश्वस्त'
    },
    subtitle: {
      EN: 'Paediatrician',
      HI: 'बाल रोग विशेषज्ञ',
      KN: 'ಮಕ್ಕಳ ತಜ್ಞರು',
      MR: 'बालरोगतज्ज्ञ'
    },
    category: 'executive'
  },
  {
    id: 'mc2',
    name: {
      EN: 'Shri. Girish S. Inamdar',
      HI: 'श्री गिरीश एस. इनामदार',
      KN: 'ಶ್ರೀ ಗಿರೀಶ್ ಎಸ್. ಇನಾಮದಾರ್',
      MR: 'श्री गिरीश एस. इनामदार'
    },
    role: {
      EN: 'Secretary',
      HI: 'सचिव',
      KN: 'ಕಾರ್ಯದರ್ಶಿ',
      MR: 'सचिव'
    },
    cell: '09448391751',
    category: 'executive'
  },
  {
    id: 'mc3',
    name: {
      EN: 'Shri. Ramesh L. Ladhad',
      HI: 'श्री रमेश एल. लड्ढा',
      KN: 'ಶ್ರೀ ರಮೇಶ್ ಎಲ್. ಲದ್ದಾಡ್',
      MR: 'श्री रमेश एल. लधाड'
    },
    role: {
      EN: 'Treasurer',
      HI: 'कोषाध्यक्ष',
      KN: 'ಖಜಾಂಚಿ',
      MR: 'कोषाध्यक्ष'
    },
    cell: '09341102576',
    category: 'executive'
  },
  {
    id: 'mc4',
    name: {
      EN: 'Shri. Sevantilal C. Shaha',
      HI: 'श्री सेवतीलाल सी. शाह',
      KN: 'ಶ್ರೀ ಸೇವಂತಿಲಾಲ್ ಸಿ. ಶಾ',
      MR: 'श्री सेवतीलाल सी. शाह'
    },
    role: {
      EN: 'Founder Trustee',
      HI: 'संस्थापक न्यासी',
      KN: 'ಸ್ಥಾಪಕ ವಿಶ್ವಸ್ಥರು',
      MR: 'संस्थापक विश्वस्त'
    },
    category: 'founder'
  },
  {
    id: 'mc5',
    name: {
      EN: 'Shri. Ashok D. Adhyapak',
      HI: 'श्री अशोक डी. अध्यापक',
      KN: 'ಶ್ರೀ ಅಶೋಕ್ ಡಿ. ಅಧ್ಯಾಪಕ್',
      MR: 'श्री अशोक डी. अध्यापक'
    },
    role: {
      EN: 'Founder Trustee',
      HI: 'संस्थापक न्यासी',
      KN: 'ಸ್ಥಾಪಕ ವಿಶ್ವಸ್ಥರು',
      MR: 'संस्थापक विश्वस्त'
    },
    category: 'founder'
  },
  {
    id: 'mc6',
    name: {
      EN: 'Shri. Vijaykumar D. Kuchanure',
      HI: 'श्री विजयकुमार डी. कुचनूरे',
      KN: 'ಶ್ರೀ ವಿಜಯಕುಮಾರ್ ಡಿ. ಕುಚನೂರೆ',
      MR: 'श्री विजयकुमार डी. कुचनुरे'
    },
    role: {
      EN: 'Trustee',
      HI: 'न्यासी',
      KN: 'ವಿಶ್ವಸ್ಥರು',
      MR: 'विश्वस्त'
    },
    category: 'trustee'
  },
  {
    id: 'mc7',
    name: {
      EN: 'Smt. Sarita S. Sabnis',
      HI: 'श्रीमती सरिता एस. सबनीस',
      KN: 'ಶ್ರೀಮತಿ ಸರಿತಾ ಎಸ್. ಸಬನೀಸ್',
      MR: 'श्रीमती सरिता एस. सबनीस'
    },
    role: {
      EN: 'Trustee',
      HI: 'न्यासी',
      KN: 'ವಿಶ್ವಸ್ಥರು',
      MR: 'विश्वस्त'
    },
    category: 'trustee'
  },
  {
    id: 'mc8',
    name: {
      EN: 'Shri. Panchakshari Chonnad',
      HI: 'श्री पंचाक्षरी चोन्नाड',
      KN: 'ಶ್ರೀ ಪಂಚಾಕ್ಷರಿ ಚೋನ್ನದ್',
      MR: 'श्री पंचाक्षरी चोन्नाड'
    },
    role: {
      EN: 'Trustee',
      HI: 'न्यासी',
      KN: 'ವಿಶ್ವಸ್ಥರು',
      MR: 'विश्वस्त'
    },
    category: 'trustee'
  },
  {
    id: 'mc9',
    name: {
      EN: 'Shri. Anand S. Kadam',
      HI: 'श्री आनंद एस. कदम',
      KN: 'ಶ್ರೀ ಆನಂದ್ ಎಸ್. ಕದಂ',
      MR: 'श्री आनंद एस. कदम'
    },
    role: {
      EN: 'Trustee',
      HI: 'न्यासी',
      KN: 'ವಿಶ್ವಸ್ಥರು',
      MR: 'विश्वस्त'
    },
    category: 'trustee'
  },
  {
    id: 'mc10',
    name: {
      EN: 'State Secretary, VHP',
      HI: 'राज्य सचिव, विहिंप',
      KN: 'ರಾಜ್ಯ ಕಾರ್ಯದರ್ಶಿ, ವಿಎಚ್‌ಪಿ',
      MR: 'राज्य सचिव, विहिंप'
    },
    role: {
      EN: 'Special Invitee',
      HI: 'विशेष आमंत्रित सदस्य',
      KN: 'ವಿಶೇಷ ಆಹ್ವಾನಿತರು',
      MR: 'विशेष आमंत्रित सदस्य'
    },
    category: 'invitee'
  }
];

export const DONATION_IMPACTS = [
  {
  amount: 3000,
  title: {
    EN: 'One Meal For All Children',
    HI: 'सभी बच्चों के लिए एक भोजन',
    KN: 'ಎಲ್ಲಾ ಮಕ್ಕಳಿಗೆ ಒಂದು ಊಟ',
    MR: 'सर्व मुलांसाठी एक जेवण'
  },
  description: {
    EN: 'Sponsor one nutritious meal for all children in the centre.',
    HI: 'केंद्र के सभी बच्चों के लिए पौष्टिक भोजन प्रायोजित करें।',
    KN: 'ಕೇಂದ್ರದ ಎಲ್ಲಾ ಮಕ್ಕಳಿಗೆ ಪೌಷ್ಟಿಕ ಆಹಾರವನ್ನು ಪ್ರಾಯೋಜಿಸಿ.',
    MR: 'केंद्रातील सर्व मुलांसाठी पौष्टिक भोजन प्रायोजित करा.'
  }
},
    {
  amount: 20000,
  title: {
    EN: 'Special Meal Sponsorship',
    HI: 'विशेष भोजन प्रायोजन',
    KN: 'ವಿಶೇಷ ಊಟ ಪ್ರಾಯೋಜನೆ',
    MR: 'विशेष भोजन प्रायोजकत्व'
  },
  description: {
    EN: 'Special meal for all children on a family occasion for the next 10 years.',
    HI: 'अगले 10 वर्षों तक किसी पारिवारिक अवसर पर सभी बच्चों के लिए विशेष भोजन।',
    KN: 'ಮುಂದಿನ 10 ವರ್ಷಗಳ ಕಾಲ ಕುಟುಂಬದ ವಿಶೇಷ ಸಂದರ್ಭದಲ್ಲಿ ಎಲ್ಲಾ ಮಕ್ಕಳಿಗೆ ವಿಶೇಷ ಊಟ.',
    MR: 'पुढील १० वर्षे कौटुंबिक प्रसंगी सर्व मुलांसाठी विशेष भोजन.'
  }
},
   {
  amount: 25000,
  title: {
    EN: 'Adoption Of A Child',
    HI: 'एक बच्चे को गोद लें',
    KN: 'ಒಬ್ಬ ಮಗುವನ್ನು ದತ್ತು ತೆಗೆದುಕೊಳ್ಳಿ',
    MR: 'एका मुलाला दत्तक घ्या'
  },
  description: {
    EN: 'Support the care and development of a child for one year.',
    HI: 'एक वर्ष के लिए एक बच्चे की देखभाल और विकास का समर्थन करें।',
    KN: 'ಒಂದು ವರ್ಷದ ಕಾಲ ಮಗುವಿನ ಆರೈಕೆ ಮತ್ತು ಅಭಿವೃದ್ಧಿಗೆ ಸಹಾಯ ಮಾಡಿ.',
    MR: 'एका वर्षासाठी मुलाच्या संगोपन आणि विकासाला मदत करा.'
  }
},
  {
  amount: 10000,
  title: {
    EN: 'Education Support',
    HI: 'शिक्षा सहायता',
    KN: 'ಶೈಕ್ಷಣಿಕ ಸಹಾಯ',
    MR: 'शैक्षणिक मदत'
  },
  description: {
    EN: 'Support education expenses of one child for one academic year.',
    HI: 'एक बच्चे की एक शैक्षणिक वर्ष की शिक्षा का समर्थन करें।',
    KN: 'ಒಬ್ಬ ಮಗುವಿನ ಒಂದು ಶೈಕ್ಷಣಿಕ ವರ್ಷದ ವೆಚ್ಚವನ್ನು ಬೆಂಬಲಿಸಿ.',
    MR: 'एका मुलाच्या एका शैक्षणिक वर्षाच्या शिक्षणाला मदत करा.'
  }
  },
]; 