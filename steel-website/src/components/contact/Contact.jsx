import { Link } from "react-router-dom"
import "./contact.css"
import { useTranslation } from "react-i18next"

const Contact = () => {
  const {t} = useTranslation("components")

  return (
    <section className="contact-section">
        <h2 tabIndex={0}>{t("contact.section.heading")}</h2>
        <p tabIndex={0}>
          {t("contact.section.paragraph")}
        </p>
        <Link to="/contact">
          <button className="contact-button">
            {t("contact.section.button")}
          </button>
        </Link>
      </section>
  )
}

export default Contact