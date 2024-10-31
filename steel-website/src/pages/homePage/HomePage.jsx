import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./homePage.css"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef, useState } from "react"

const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slides = ["/grinding.jpg", "/welding.jpg", "/lazor-cutting.jpg", "/welding2.jpg", "/lazor-welding.jpg"];
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
          <p>We are Qatar&apos;s leading provider of steel solutions, operating across multiple countries in selected markets headquarted in Qatar.</p>
          <p>We are an inclusive and responsible business that is helping to build for a better society.</p>
        </section>
        <section className="services">
          <h2>Our Services</h2>
          <p>
          Our team includes experts in Fabrication &amp; Installation of SS products like: 
            <p>
              Handrail Balustrade, Water feature, Kitchen SS Table, SS Grating with modern machinary &amp; modern technology.
            </p>
          </p>
          <div className="cards">
            <div className="card">
              <div className="img-wrapper">
                <slide><img src="" alt="" /></slide>
                <slide><img src="" alt="" /></slide>
                <slide><img src="" alt="" /></slide>
              </div>
              <h3>Stainless Steel Fabrication</h3>
            </div>
            <div className="card">
              <div className="img-wrapper">
                <slide><img src="" alt="" /></slide>
                <slide><img src="" alt="" /></slide>
                <slide><img src="" alt="" /></slide>
              </div>
              <h3>Galvanized & Black Iron Steel</h3>
            </div>
            <div className="card">
              <div className="img-wrapper">
                <slide><img src="" alt="" /></slide>
                <slide><img src="" alt="" /></slide>
                <slide><img src="" alt="" /></slide>
              </div>
              <h3>Prototyping & Design Services</h3>
            </div>
            <div className="card">
              <div className="img-wrapper">
                <slide><img src="" alt="" /></slide>
                <slide><img src="" alt="" /></slide>
                <slide><img src="" alt="" /></slide>
              </div>
              <h3>Assembly & Installation</h3>
            </div>
          </div>
        </section>
        <section className="values">
          <h2>Our Values</h2>
          <div className="value-boxes">
            <div className="value-box">
              <div className="value-img">
                <img src="/customer-commitment.jpg" alt="customer commitment" />
              </div>
              <div className="value-content">
                <h3>Customer Commitment</h3>
                <ul>
                  <li>We help you, our customers, to be successful in your business</li>
                  <li>We strive to understand your needs and your customers&apos; needs</li>
                  <li>We are here to help our customers turn their visions into reality</li>
                </ul>
              </div>
            </div>
            <div className="value-box">
              <div className="value-img">
                <img src="/integrity.jpg" alt="company ethics" />
              </div>
              <div className="value-content">
                <h3>Ethical and Transparent</h3>
                <ul>
                  <li>Our business ethos is to maintain a high degree of integrity and transparency</li>
                  <li>We never accept shortcuts</li>
                  <li>Everyone can speak their mind</li>
                </ul>
              </div>
            </div>
            <div className="value-box">
              <div className="value-img">
                <img src="/care-for-life.jpg" alt="care for life" />
              </div>
              <div className="value-content">
                <h3>Care for Life</h3>
                <ul>
                  <li>We work safely, or not at all</li>
                  <li>We never walk on by if unsafe practices are being observed</li>
                  <li>We support health and well being</li>
                </ul>
              </div>
            </div>
            <div className="value-box">
              <div className="value-img">
                <img src="/be-better.jpg" alt="be better" />
              </div>
              <div className="value-content">
                <h3>Be Better</h3>
                <ul>
                  <li>We always strive to better ourselves</li>
                  <li>We take pride in quality and innovation</li>
                  <li>We leverage diversity to deliver the optimal solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="contact-cta">
          <h3>Ready to build with Us?</h3>
          <button>Get a Quote</button>
          <p>Email: simon.pinto@abstract.qa | Phone: +966 56 983 6636</p>
        </section> */}
    </div>
  )
}

export default HomePage