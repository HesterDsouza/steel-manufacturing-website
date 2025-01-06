import { Link } from "react-router-dom"
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact-section">
        <h2 tabIndex={0}>Let&apos;s Work Together</h2>
        <p tabIndex={0}>
          If you&apos;re looking for exceptional craftsmanship, innovative designs, and reliable service, look no further. Contact us today to discuss your project and explore how we can bring your vision to life.
          Whether it&apos;s a small custom piece or a large industrial project, our team is ready to turn your ideas into reality.
        </p>
        <Link to="/contact">
          <button className="contact-button">
            Contact Us
          </button>
        </Link>
      </section>
  )
}

export default Contact