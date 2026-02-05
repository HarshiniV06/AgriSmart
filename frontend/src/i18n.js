import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      appName: "AgriSmart",

      navbar: {
        home: "Home",
        help: "Help",
        login: "Login",
        signup: "Sign Up",
        logout: "Logout"
      },

      home: {
        heroTitle: "Smart Farming Starts Here",
        heroSubtitle:
          "AgriSmart helps farmers make data-driven decisions using AI — from crop selection to yield prediction.",
        platformTitle: "Farmer Support Platform",
        platformSubtitle:
          "Access intelligent tools designed to improve productivity, reduce losses, and maximize yield."
      },

      modules: {
        crop: {
          title: "Crop Recommendation",
          desc: "Select the best crop for your soil and climate"
        },
        fertilizer: {
          title: "Fertilizer Advisory",
          desc: "Choose the right fertilizer and dosage"
        },
        disease: {
          title: "Disease Detection",
          desc: "Detect crop diseases using leaf images"
        },
        pest: {
          title: "Pest Detection",
          desc: "Identify harmful pests early and protect crops"
        },
        yield: {
          title: "Yield Prediction",
          desc: "Estimate crop yield and maximize production"
        }
      },

      common: {
        getStarted: "Get Started",
        learnMore: "Learn More",
        explore: "Explore",
        submit: "Submit",
        back: "Back"
      },

      auth: {
        email: "Email",
        password: "Password",
        name: "Name"
      },

      footer: {
        rights: "All rights reserved.",
        tagline: "Empowering farmers with AI-driven insights"
      }
    }
  },

  te: {
    translation: {
      appName: "అగ్రి స్మార్ట్",

      navbar: {
        home: "హోమ్",
        help: "సహాయం",
        login: "లాగిన్",
        signup: "సైన్ అప్",
        logout: "లాగ్ అవుట్"
      },

      home: {
        heroTitle: "స్మార్ట్ వ్యవసాయం ఇక్కడ ప్రారంభమవుతుంది",
        heroSubtitle:
          "AgriSmart AI ద్వారా రైతులకు మెరుగైన నిర్ణయాలు తీసుకోవడంలో సహాయపడుతుంది.",
        platformTitle: "రైతుల సహాయ వేదిక",
        platformSubtitle:
          "ఉత్పాదకతను పెంచేందుకు రూపొందించిన స్మార్ట్ సాధనాలు"
      },

      modules: {
        crop: {
          title: "పంట సిఫార్సు",
          desc: "మీ నేలకు సరిపోయే పంటను ఎంచుకోండి"
        },
        fertilizer: {
          title: "ఎరువు సూచనలు",
          desc: "సరైన ఎరువు మరియు మోతాదు ఎంచుకోండి"
        },
        disease: {
          title: "వ్యాధి గుర్తింపు",
          desc: "ఆకుల చిత్రాల ద్వారా వ్యాధిని గుర్తించండి"
        },
        pest: {
          title: "పురుగు గుర్తింపు",
          desc: "పంటలకు హానికరమైన పురుగులను గుర్తించండి"
        },
        yield: {
          title: "దిగుబడి అంచనా",
          desc: "పంట దిగుబడిని అంచనా వేయండి"
        }
      },

      common: {
        getStarted: "ప్రారంభించండి",
        learnMore: "మరింత తెలుసుకోండి",
        explore: "అన్వేషించండి",
        submit: "సమర్పించు",
        back: "వెనక్కి"
      }
    }
  },

  ta: {
    translation: {
      appName: "அக்ரி ஸ்மார்ட்",

      modules: {
        crop: {
          title: "பயிர் பரிந்துரை",
          desc: "மண்ணுக்கு ஏற்ற பயிரை தேர்வு செய்யவும்"
        },
        fertilizer: {
          title: "உரம் ஆலோசனை",
          desc: "சரியான உரம் மற்றும் அளவை தேர்வு செய்யவும்"
        },
        disease: {
          title: "நோய் கண்டறிதல்",
          desc: "இலை படங்களில் இருந்து நோயை கண்டறியவும்"
        },
        pest: {
          title: "பூச்சி கண்டறிதல்",
          desc: "பயிர்களை சேதப்படுத்தும் பூச்சிகளை கண்டறியவும்"
        },
        yield: {
          title: "மகசூல் கணிப்பு",
          desc: "பயிர் மகசூலை கணிக்கவும்"
        }
      },

      common: {
        explore: "ஆராயுங்கள்"
      }
    }
  },

  kn: {
    translation: {
      appName: "ಅಗ್ರಿ ಸ್ಮಾರ್ಟ್",

      modules: {
        crop: {
          title: "ಬೆಳೆ ಶಿಫಾರಸು",
          desc: "ನಿಮ್ಮ ಮಣ್ಣಿಗೆ ಸೂಕ್ತ ಬೆಳೆ ಆಯ್ಕೆಮಾಡಿ"
        },
        fertilizer: {
          title: "ರಸಗೊಬ್ಬರ ಸಲಹೆ",
          desc: "ಸರಿಯಾದ ರಸಗೊಬ್ಬರ ಆಯ್ಕೆಮಾಡಿ"
        },
        disease: {
          title: "ರೋಗ ಪತ್ತೆ",
          desc: "ಆಕು ಚಿತ್ರಗಳಿಂದ ರೋಗ ಪತ್ತೆಮಾಡಿ"
        },
        pest: {
          title: "ಹುಳು ಪತ್ತೆ",
          desc: "ಬೆಳೆಗಳಿಗೆ ಹಾನಿ ಮಾಡುವ ಹುಳುಗಳನ್ನು ಪತ್ತೆಮಾಡಿ"
        },
        yield: {
          title: "ಉತ್ಪಾದನೆ ಊಹೆ",
          desc: "ಬೆಳೆ ಉತ್ಪಾದನೆ ಊಹಿಸಿ"
        }
      },

      common: {
        explore: "ಅನ್ವೇಷಿಸಿ"
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
