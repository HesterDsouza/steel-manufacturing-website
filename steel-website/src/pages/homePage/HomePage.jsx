import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./homePage.css"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef, useState } from "react"

const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slides = ["/grinding.jpg", "/welding.jpg", "/lazor-cutting.jpg", "/welding2.jpg"];
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [slides.length]);

  const changeSlide = (n) => {
    setSlideIndex((prevIndex) => 
      (prevIndex + n + slides.length) % slides.length);
  }

  return (
    <div className="homePage">        
        <section className="slideshow-container">
          {slides.map((src, index) => (
            <div key={index} className={`slide ${index === slideIndex ? "active" : ""}`}>
              <img src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
          {/* Arrow buttons */}
          <FontAwesomeIcon className="slide-arrow prev" icon={faChevronLeft} onClick={() => changeSlide(-1)}/>
          <FontAwesomeIcon className="slide-arrow next" icon={faChevronRight} onClick={() => changeSlide(1)}/>
          <div className="hero-overlay">
            <h1>Building the Future with Steel Innovation</h1>
            <p>Your Trusted Partner in Fabrication, Design &amp; Installation</p>
          </div>
        </section>
        <section className="about-us">
          <h2>About Us</h2>
          <p>We are Qatar&apos;s leading provider of steel solutions, operating acroos multiple markets... </p>
        </section>
        <section className="services">
          <h2>Our Expertise</h2>
          <div className="cards">
            <div className="card">
              <h3>Stainless Steel Fabrication</h3>
            </div>
            <div className="card">
              <h3>Galvanized & Black Iron Steel</h3>
            </div>
            <div className="card">
              <h3>Prototyping & Design Services</h3>
            </div>
            <div className="card">
              <h3>Assembly & Installation</h3>
            </div>
          </div>
        </section>
        <section className="values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Care for Life:</strong> Safety and well-being come first.</li>
            <li><strong>Transparency:</strong> Integrity is at the heart of what we do.</li>
            <li><strong>Innovation:</strong> We are constantly improving to meet our clients&apos; needs.</li>
          </ul>
        </section>
        <section className="contact-cta">
          <h3>Ready to build with Us?</h3>
          <button>Get a Quote</button>
          <p>Email: simon.pinto@abstract.qa | Phone: +966 56 983 6636</p>
        </section>
    </div>
  )
}

export default HomePage