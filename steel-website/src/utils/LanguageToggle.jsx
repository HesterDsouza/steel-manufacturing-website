import  {useTranslation} from "react-i18next";

const LanguageToggle = () => {
    const {i18n} = useTranslation();

    const toggleLang = () => {
        const lang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(lang);
    }

  return (
    <div className="toggle-lang-wrapper">
        <button className="toggle-lang-btn" onClick={toggleLang}>
            {i18n.language === "en" ? "العربية" : "English"}
        </button>
    </div>
  )
}

export default LanguageToggle