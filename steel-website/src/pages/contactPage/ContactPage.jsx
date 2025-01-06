import "./contactPage.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import HeroSection from "../../components/heroSection/HeroSection";
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateform = () => {
    if(!formData.name.trim()){
      toast.error("Name is required");
      return false
    } else if (formData.name.length > 50){
      toast.error("Name is too long");
      return false;
    } else if (!/^[a-zA-Z\s.'-]+$/.test(formData.name)){
      toast.error("Name can only contain letters, spaces, apostrophes, periods, and hyphens")
      return false
    }

    if (!formData.email.trim()){
      toast.error("Email is required.")
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Invalid email address");
      return false;
    }

    const cleanedPhone = formData.phone?.replace(/^\+\d{1,4}/,"");

    if(cleanedPhone && !/^\d{8,15}$/.test(cleanedPhone)){
      toast.error("Invalid phone number");
      return false;
    }
    
    if(!formData.message.trim()){
      toast.error("Message is required.");
      return false;
    } else if (formData.message.length > 500){
      toast.error("Message is too long");
    }

    return true;
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validateform()) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Mr. Simon Pinto",
      message: formData.message,
      phone: formData.phone
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log("Message sent successfully!", response.status, response.text);
      toast.success("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    },
    (error) => {
      console.error("Failed to send message", error);
      toast.error("Something went wrong! Please use the footer link to reach us directly.")
    })
  }
  
  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us - Future Structures</title>
        <meta name="description" content="Reach out to us at Future Structures to discuss your projects. Our team is here to help you build, innovate, and transform with our expertise in metal solutions." />
        <meta name="keywords" content="Future Structures, contact us, metal solutions, custom metal fabrication, design and prototyping, assembly, installation" />
        <meta name="author" content="Future Structures" />
        <link rel="canonical" href="https://www.futurestructures.com/contact" />
      </Helmet>
      <HeroSection title="Contact Us" subTitle="Reach Out to Build, Innovate, and Transform Together."/>
      <section className="contact-form-section">
        <h3 tabIndex={0}>Send Us a Message</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="name">Full Name: <span style={{color: "var(--burgundy", fontSize: "1.2em"}}>*</span></label>
            <input 
              type="text" id="name" name="name"
              value={formData.name} placeholder="Enter your name"
              onChange={handleChange} required
            />
          </div>
          <div className="form-item">
            <label htmlFor="email">Email Address: <span style={{color: "var(--burgundy", fontSize: "1.2em"}}>*</span></label>
            <input 
              type="email" id="email" name="email" placeholder="Enter your email address"
              value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-item">
            <label htmlFor="phone">Phone Number:</label>
            <PhoneInput 
               id="phone" name="phone"
               placeholder="Enter phone number"
               value={formData.phone} defaultCountry="SA"
               onChange={(value) => setFormData({...formData, phone: value})}
            />
          </div>
          <div className="form-item">
            <label htmlFor="message">Message: <span style={{color: "var(--burgundy", fontSize: "1.2em"}}>*</span></label>
            <textarea 
              id="message" name="message" value={formData.message} 
              onChange={handleChange} rows="5" required
              placeholder="Type a Message and we will get back to you..." 
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;