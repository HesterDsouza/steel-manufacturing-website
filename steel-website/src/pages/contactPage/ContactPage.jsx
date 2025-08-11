import "./contactPage.css";
import { useState } from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { submitContactForm } from "../../api";
import { useTranslation } from "react-i18next";

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const {t} = useTranslation("pages");

  const validateform = () => {
    if(!formData.name.trim()){
      toast.error(t("contactPage.formSection.fields.name.error.required"));
      return false
    } else if (formData.name.length > 50){
      toast.error(t("contactPage.formSection.fields.name.error.length"));
      return false;
    } else if (!/^[a-zA-Z\s.'-]+$/.test(formData.name)){
      toast.error(t("contactPage.formSection.fields.name.error.format"))
      return false
    }

    if (!formData.email.trim()){
      toast.error(t("contactPage.formSection.fields.email.error.required"))
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error(t("contactPage.formSection.fields.email.error.format"));
      return false;
    }

    // Using regex logic
    if(formData.phone){
      const cleanedPhone = formData.phone.replace(/[^\d]/g, "");
  
      if(!/^\d{6,15}$/.test(cleanedPhone)){
        toast.error(t("contactPage.formSection.fields.phone.error.format"));
        return false;
      }
    }
    
    if(!formData.message.trim()){
      toast.error(t("contactPage.formSection.fields.message.error.required"));
      return false;
    } else if (formData.message.length > 500){
      toast.error(t("contactPage.formSection.fields.email.error.length"));
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!validateform()) return;

    try {
      const response = await submitContactForm(formData);
      console.log(response.data.message)
      toast.success(t("contactPage.formSection.toast.success"))
      setFormData({name: "", email: "", phone: "", message: ""});
    } catch (error) {
      console.error("Failed to sumbit form", error)
      toast.error(t("contactPage.formSection.toast.error"))
    }
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
      <HeroSection title={t("contactPage.hero.title")} subTitle={t("contactPage.hero.subtitle")}/>
      <section className="contact-form-section">
        <h3 tabIndex={0}>{t("contactPage.formSection.heading")}</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="name">{t("contactPage.formSection.fields.name.label")} <span style={{color: "var(--burgundy", fontSize: "1.2em"}}>*</span></label>
            <input 
              type="text" id="name" name="name"
              value={formData.name} placeholder={t("contactPage.formSection.fields.name.placeholder")}
              onChange={handleChange} required
            />
          </div>
          <div className="form-item">
            <label htmlFor="email">{t("contactPage.formSection.fields.email.label")} <span style={{color: "var(--burgundy", fontSize: "1.2em"}}>*</span></label>
            <input 
              type="email" id="email" name="email" placeholder={t("contactPage.formSection.fields.email.placeholder")}
              value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-item">
            <label htmlFor="phone">{t("contactPage.formSection.fields.phone.label")}</label>
            <PhoneInput 
               id="phone" name="phone"
               placeholder={t("contactPage.formSection.fields.phone.placeholder")}
               value={formData.phone} defaultCountry="SA"
               onChange={(value) => setFormData({...formData, phone: value || ""})}
            />
          </div>
          <div className="form-item">
            <label htmlFor="message">{t("contactPage.formSection.fields.message.label")} <span style={{color: "var(--burgundy", fontSize: "1.2em"}}>*</span></label>
            <textarea 
              id="message" name="message" value={formData.message} 
              onChange={handleChange} rows="5" required
              placeholder={t("contactPage.formSection.fields.message.placeholder")} 
            ></textarea>
          </div>
          <button type="submit" className="submit-button">{t("contactPage.formSection.submit")}</button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;