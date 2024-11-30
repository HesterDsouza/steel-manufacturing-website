import "./contactPage.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import HeroSection from "../../components/heroSection/HeroSection";

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
      <HeroSection title="Contact Us" subTitle="Reach Out to Build, Innovate, and Transform Together."/>
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
    </div>
  );
};

export default ContactPage;
