import { Link } from "react-router-dom"
import "./servicePage.css"

const ServicePage = () => {
  return (
    <div className="servicePage">
        <section className="hero-section">
          <div className="hero-content">
              <h1>Services</h1>
              <p>Precision, quality, and craftsmanship in every project, tailored to bring your vision to life.</p>
          </div>
      </section>
      <section className="expertise">
        <h2>Our Expertise</h2>
        <p>
          At Establishment Ahmad Mohamed Ahmad Al-Muhannadi for Decoration, we bring decades of experience to the table, ensuring every project is executed with utmost precision, professionalism, and care. 
          Our expertise spans a diverse range of services and materials, allowing us to cater to a wide array of client needs. Whether you are seeking functional solutions or artistic designs, 
          we have the capabilities to deliver exceptional results that exceed expectations.
        </p>
        <ul>
          <li><strong>Stainless Steel:</strong> Renowned for its durability and sleek appearance, stainless steel is ideal for railings, decorative pieces, and custom architectural elements. Our team is skilled in crafting bespoke solutions that marry functionality and style.</li>
          <li><strong>Black Iron Steel:</strong> Combining strength with versatility, black iron steel is perfect for robust structures, industrial projects, and decorative accents with a contemporary edge.</li>
          <li><strong>Decorative Steel:</strong> We excel in creating intricate designs and patterns on steel, turning simple materials into works of art that enhance interior and exterior spaces.</li>
          <li><strong>Galvanized Steel:</strong> Our galvanized steel services provide corrosion-resistant solutions for long-lasting installations, ensuring reliability and performance in any environment.</li>
          <li><strong>Aluminum & Brass:</strong> Lightweight yet durable, aluminum and brass are ideal for projects requiring a touch of elegance, including custom fittings, panels, and artistic decor.</li>
          <li><strong>Design & Prototyping:</strong> From concept to reality, our design and prototyping services help clients visualize their projects before production, ensuring precision and alignment with their vision.</li>
          <li><strong>Paint & Powder Coating:</strong> Our finishing services provide a wide range of color and texture options, enhancing the aesthetics and durability of metal surfaces.</li>
          <li><strong>Assembly & Installation:</strong> We provide end-to-end solutions, including seamless assembly and installation, ensuring every project is delivered with impeccable precision and attention to detail.</li>
        </ul>
      </section>
      <section className="commitment">
        <h2>Our Commitment to Excellence</h2>
        <p>
          Our commitment to excellence is at the heart of everything we do. We work closely with our clients to understand their unique requirements, translating ideas into reality with unparalleled craftsmanship. 
          From large-scale industrial installations to bespoke decorative projects, our team is dedicated to delivering results that not only meet but exceed expectations.
        </p>
        <p>
          We pride ourselves on staying ahead of industry trends, adopting the latest technologies and techniques to ensure our services remain cutting-edge. 
          Our team includes highly skilled craftsmen, engineers, and designers who collaborate seamlessly to produce extraordinary outcomes.
        </p>
      </section>
      <section className="contact-section">
        <h2>Let&apos;s Work Together</h2>
        <p>
          If you&apos;re looking for exceptional craftsmanship, innovative designs, and reliable service, look no further. Contact us today to discuss your project and explore how we can bring your vision to life.
          Whether it&apos;s a small custom piece or a large industrial project, our team is ready to turn your ideas into reality.
        </p>
        <Link to="/contact">
          <button className="contact-button">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  )
}

export default ServicePage