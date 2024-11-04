import "./footer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="company-details">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="company-name">
          <h2>Establishment AHMAD MOHAMED AHMAD AL-MUHANNADI FOR DECORATION</h2>
        </div>
      </div>
      <div className="other-details">
        <div className="left">
          <address className="address">
            <p>
              Headquarters: 5066 Al-kharj 16285-85931
              Postal Code: 16285<br/>
              Cr. No.: 100241115881445
              Tin No.: 3123715103<br/>
              MARWA LIGHT INDUSTRIES NO. 321, AL KHARJ, AL RIYADH, <br/>KINGDOM OF SAUDI ARABIA
            </p>
          </address>
          <div className="contact">
            <div className="phone-email">
              <p><FontAwesomeIcon className="icon" icon={faPhone}/> + 966 56 983 6636</p>
              {/* <p>
                <FontAwesomeIcon className="icon" icon={faEnvelope}/>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=simon.pinto@abstract.qa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="email-link"
                >
                  simon.pinto@abstract.qa
                </a>
              </p> */}
              <p>
                <FontAwesomeIcon className="icon" icon={faEnvelope}/>
                <a href="mailto:simon.pinto@abstract.qa" className="email-link">
                  simon.pinto@abstract.qa
                </a>
              </p>
            </div>
            {/* <div className="social-icons">
              <p><FontAwesomeIcon className="icon social" icon={faFacebook}/></p>
              <p><FontAwesomeIcon className="icon social" icon={faInstagram}/></p>
              <p><FontAwesomeIcon className="icon social" icon={faXTwitter}/></p>
            </div> */}
          </div>
        </div>
        <div className="right">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.980807160583!2d46.80288087514287!3d24.589858578106952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f09b80e4b6e5b%3A0xd579d4d40b8ca38d!2s5066%20Al%20Kharj%20Rd%2C%20Al%20Aziziyah%2C%20Riyadh%2014513%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1730285639215!5m2!1sen!2sin" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer