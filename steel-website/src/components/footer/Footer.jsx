import "./footer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="company-details">
        <div className="logo">
          <img src="/logo2.png" alt="logo" />
        </div>
        <div className="company-name">
          <h2>Establishment AHMAD MOHAMED AHMAD AL-MUHANNADI FOR DECORATION</h2>
        </div>
      </div>
      <address className="address">
        <p>
          Headquarters: 5066 Al-kharj 16285-85931
          Postal Code: 16285<br/>
          Cr. No.: 100241115881445
          Tin No.: 3123715103<br/>
          MARWA LIGHT INDUSTRIES NO. 321, AL KHARJ, AL RIYADH, KINGDOM OF SAUDI ARABIA
        </p>
      </address>
      <div className="contact">
        <p><FontAwesomeIcon className="icon" icon={faPhone}/> + 966 56 983 6636</p>
        <p><FontAwesomeIcon className="icon" icon={faEnvelope}/> simon.pinto@abstract.qa</p>
      </div>
    </footer>
  )
}

export default Footer