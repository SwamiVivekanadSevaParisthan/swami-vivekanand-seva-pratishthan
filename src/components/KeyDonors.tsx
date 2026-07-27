import { LogoCloud } from "./ui/LogoCloud";

type Props = {
  lang: "EN" | "HI" | "MR" | "KN";
};

export default function KeyDonors({ lang }: Props) {
  const donorLogos = [
    {
      src: `${import.meta.env.BASE_URL}donors/bnpmindia-logo.png`,
      alt: "Bank Note Paper Mill India",
    },
    {
      src: `${import.meta.env.BASE_URL}donors/karnatakaco-operationmilkfederationbelagavi.png`,
      alt: "Nandini KMF",
    },
    {
      src: `${import.meta.env.BASE_URL}donors/credai.png`,
      alt: "CREDAI Belagavi",
    },
    {
      src: `${import.meta.env.BASE_URL}donors/akxatech.png`,
      alt: "AKXA Technologies",
    },
    {
      src: `${import.meta.env.BASE_URL}donors/hnb_engineers_pvt_ltd_logo.png`,
      alt: "HNB Engineers",
    },
    {
      src: `${import.meta.env.BASE_URL}donors/polyhydron foundation.png`,
      alt: "Polyhydron Foundation",
    },
  ];

  const translations = {
    EN: {
      badge: "Key Donors & Supporters",
      title1: "Organizations Supporting",
      title2: "Child Welfare & Education",
      desc: "We gratefully acknowledge the generous support of our donors, partners, and organizations whose contributions help us create better opportunities for children.",
    },

    HI: {
      badge: "प्रमुख दाता एवं सहयोगी",
      title1: "संस्थाएँ जो समर्थन कर रही हैं",
      title2: "बाल कल्याण एवं शिक्षा",
      desc: "हम अपने दाताओं, भागीदारों और संस्थाओं के उदार सहयोग के लिए आभार व्यक्त करते हैं जिनके योगदान से बच्चों के लिए बेहतर अवसर बन रहे हैं।",
    },

    MR: {
      badge: "प्रमुख देणगीदार आणि समर्थक",
      title1: "समर्थन करणाऱ्या संस्था",
      title2: "बालकल्याण आणि शिक्षण",
      desc: "आमच्या देणगीदार, भागीदार आणि संस्थांच्या उदार सहकार्याबद्दल आम्ही मनःपूर्वक आभारी आहोत. त्यांच्या योगदानामुळे मुलांसाठी अधिक चांगल्या संधी निर्माण होत आहेत.",
    },

    KN: {
      badge: "ಪ್ರಮುಖ ದಾನಿಗಳು ಮತ್ತು ಬೆಂಬಲಿಗರು",
      title1: "ಬೆಂಬಲ ನೀಡುತ್ತಿರುವ ಸಂಸ್ಥೆಗಳು",
      title2: "ಮಕ್ಕಳ ಕಲ್ಯಾಣ ಮತ್ತು ಶಿಕ್ಷಣ",
      desc: "ನಮ್ಮ ದಾನಿಗಳು, ಪಾಲುದಾರರು ಮತ್ತು ಸಂಸ್ಥೆಗಳ ಉದಾರ ಬೆಂಬಲಕ್ಕೆ ನಾವು ಹೃತ್ಪೂರ್ವಕ ಕೃತಜ್ಞತೆ ಸಲ್ಲಿಸುತ್ತೇವೆ. ಅವರ ಕೊಡುಗೆಗಳಿಂದ ಮಕ್ಕಳಿಗೆ ಉತ್ತಮ ಅವಕಾಶಗಳು ದೊರೆಯುತ್ತಿವೆ.",
    },
  };

  const t = translations[lang];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="px-5 py-2 rounded-full bg-[#061d3a] text-[#f59e0b] text-sm tracking-widest uppercase">
            {t.badge}
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mt-6">
            {t.title1}
            <span className="block text-[#f59e0b]">
              {t.title2}
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-slate-700 dark:text-slate-300">
            {t.desc}
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#071827]/70 backdrop-blur-md py-10 overflow-hidden">
          <LogoCloud logos={donorLogos} />
        </div>
      </div>
    </section>
  );
}