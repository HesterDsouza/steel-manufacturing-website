import "./footer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faSnapchat } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation("components")

  return (
    <footer className="footer">
      <div className="company-details">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="company-name">
          <div>
            <h2 tabIndex={0}>{t("footer.company.abstract")}</h2>
            <h2 tabIndex={0} className="arabic-name">{t("footer.company.abstract_arabic")}</h2>
          </div>
          <div>
            <h2 tabIndex={0}>{t("footer.company.future_structures")}</h2>
            <h2 tabIndex={0} className="arabic-name">{t("footer.company.future_structures_arabic")}</h2>
          </div>
        </div>
      </div>
      <div className="other-details">
        <div className="left">
          <address className="address">
            <p tabIndex={0}>
              {t("footer.address.line1")}&nbsp;&nbsp;
              {t("footer.address.line2")}<br/>
              {t("footer.address.line3")}&nbsp;&nbsp;
              {t("footer.address.line4")}<br/>
              {t("footer.address.line5")}
            </p>
          </address>
          <div className="contact">
            <div className="phone-email">
              <div className="phone">
                <p tabIndex={0}><FontAwesomeIcon className="icon" icon={faPhone}/> + 966 504768135</p>
                <p tabIndex={0}><FontAwesomeIcon className="icon" icon={faPhone}/> + 966 566062558</p>
                <p tabIndex={0}><FontAwesomeIcon className="icon" icon={faPhone}/> + 974 50445945</p>
              </div>
              <div className="email">
                <p>
                  <FontAwesomeIcon className="icon" icon={faEnvelope}/>
                  <a tabIndex={0} href="mailto:simon.pinto@abstract.qa" className="email-link">
                    simon.pinto@abstract.qa
                  </a>
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faEnvelope}/>
                  <a tabIndex={0} href="mailto:simon@abstractgroup.me" className="email-link">
                    simon@abstractgroup.me
                  </a>
                </p>
              </div>
            </div>
            <div className="social-icons">
              <p>
                <FontAwesomeIcon className="icon" icon={faSnapchat}/>
                <a tabIndex={0} target="_blank" rel="noopener noreferrer" className="snapLink" href="https://www.snapchat.com/add/futurestr24">futurestr24</a>
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.980807160583!2d46.80288087514287!3d24.589858578106952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f09b80e4b6e5b%3A0xd579d4d40b8ca38d!2s5066%20Al%20Kharj%20Rd%2C%20Al%20Aziziyah%2C%20Riyadh%2014513%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1730285639215!5m2!1sen!2sin" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              tabIndex={0}
            >
            </iframe>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p><Link to="/privacy-policy">Privacy Policy</Link></p>
        <p tabIndex={0}>{t("footer.copyright.text")} <Link to="/"> {t("footer.copyright.link")}</Link></p>
      </div>
    </footer>
  )
}

export default Footer