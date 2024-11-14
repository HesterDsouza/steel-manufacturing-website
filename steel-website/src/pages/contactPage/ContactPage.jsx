import "./contactPage.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Mr. Simon Pinto",
      message: formData.message
    }

    emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey,
    ).then(
      (response) => {
        console.log("Message sent successfully!", response.status, response.text);
        setIsSent(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      },
      (error) => {
        console.error("Failed to send message", error);
        setIsError(true);
      }
    )
  }
  return (
    <div className="contact-page">
      <section className="hero-section">
          <div className="hero-content">
              <h1>Contact Us</h1>
              <p>Reach Out to Build, Innovate, and Transform Together.</p>
          </div>
      </section>
      
      {/* Contact Form */}
      <section className="contact-form-section">
        <h3>Send Us a Message</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-item">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-item">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="form-item">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
          {isSent && 
            <p className="success-message"> Thank you! Your message has been sent.</p>             
          }
          {isError &&
            <p className="error-message">An error occured. Message was not sent.</p>
          }
        </form>
      </section>

        {/* Company Details */}
        {/* <section className="company-details-section">
          <div className="company-details">
            <h3>Our Contact Details</h3>
            <div className="contact-info">
              <p><FontAwesomeIcon icon={faPhone} /> + 966 56 983 6636</p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:simon.pinto@abstract.qa">simon.pinto@abstract.qa</a>
              </p>
            </div>
            <address>
              <p>Headquarters: 5066 Al-kharj 16285-85931</p>
              <p>Postal Code: 16285</p>
              <p>Cr. No.: 100241115881445</p>
              <p>Tin No.: 3123715103</p>
              <p>MARWA LIGHT INDUSTRIES NO. 321, AL KHARJ, AL RIYADH,</p>
              <p>KINGDOM OF SAUDI ARABIA</p>
            </address>
          </div>
        </section> */}

      {/* Map */}
      {/* <section className="map-section">
        <h3>Find Us Here</h3>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.980807160583!2d46.80288087514287!3d24.589858578106952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f09b80e4b6e5b%3A0xd579d4d40b8ca38d!2s5066%20Al%20Kharj%20Rd%2C%20Al%20Aziziyah%2C%20Riyadh%2014513%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1730285639215!5m2!1sen!2sin" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Company Location">
          </iframe>
        </div>
      </section> */}
    </div>
  );
};

export default ContactPage;
