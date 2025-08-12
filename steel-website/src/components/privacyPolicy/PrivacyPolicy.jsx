import { Helmet } from "react-helmet-async";
import "./privacyPolicy.css";
import { useTranslation } from "react-i18next"

const PrivacyPolicy = () => {

  const {t} = useTranslation("components");

  return (
    <div className="privacy-policy">
      <Helmet>
        <title>Privacy Policy - Abstract Future Structures</title>
        <meta
          name="description"
          content="Privacy policy for Abstract Future Structures explaining how we handle your personal data submitted through our contact form."
        />
      </Helmet>

      <h1 tabIndex={0}>{t("privacyPolicy.heading")}</h1>
      <p>{t("privacyPolicy.intro")}</p>

      <h2 tabIndex={0}>{t("privacyPolicy.section1.title")}</h2>
      <p>{t("privacyPolicy.section1.text1")}</p>
      <ul>
        {t("privacyPolicy.section1.list", { returnObjects: true }).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <p>{t("privacyPolicy.section1.text2")}</p>

      <h2 tabIndex={0}>{t("privacyPolicy.section2.title")}</h2>
      <p>{t("privacyPolicy.section2.text1")}</p>
      <ul>
        {t("privacyPolicy.section2.list", { returnObjects: true }).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <p>{t("privacyPolicy.section2.text2")}</p>

      <h2 tabIndex={0}>{t("privacyPolicy.section3.title")}</h2>
      <p>{t("privacyPolicy.section3.text")}</p>

      <h2 tabIndex={0}>{t("privacyPolicy.section4.title")}</h2>
      <p>{t("privacyPolicy.section4.text")}</p>
      <ul>
        {t("privacyPolicy.section4.list", { returnObjects: true }).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h2 tabIndex={0}>{t("privacyPolicy.section5.title")}</h2>
      <p>{t("privacyPolicy.section5.text1")}</p>
      <ul>
        {t("privacyPolicy.section5.list", { returnObjects: true }).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <p>{t("privacyPolicy.section5.text2")}</p>

      <h2 tabIndex={0}>{t("privacyPolicy.section6.title")}</h2>
      <p>{t("privacyPolicy.section6.text")}</p>
    </div>
  );
};

export default PrivacyPolicy;