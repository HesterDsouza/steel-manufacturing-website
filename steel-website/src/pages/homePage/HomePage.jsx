import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./homePage.css"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef, useState } from "react"

const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slides = ["/grinding.jpg", "/welding.jpg", "/lazor-cutting.jpg", "/welding2.jpg", "/lazor-welding.jpg", "/welding4.jpg", "/lazor-cutting2.jpg"];
  const intervalRef = useRef(null);

  const [activeSlides, setActiveSlides] = useState(Array(8).fill(0));
  const intervalRefs = useRef([]);

  const serviceTitles = [
    "Stainless Steel Railings",
    "Steel Utilities",
    "Metal Structures",
    "Glass Partitions / Balustrade",
    "Decorative Arches",
    "Ceiling",
    "Interior Fit-Out",
    "Stainless Steel Gratings"
  ];

  const captions = [
    ["Partioned / Interval Railings", "Staircase Railings", "Public Railings", "Curved Staircase Railings"],
    ["Staircases", "SS Bollards", "Spiral Stairase", "Airport Utilities"],
    ["Artisan Doors", "Decorative Claddings", "SS Canopys", "Custom Design Canopys"],
    ["Staircase Glasses", "Glass Cabins", "Glass Door Designs", "Glass Partitions"],
    ["Fifa World Cup Entrance", "Arch Lighting", "Fifa World Cup Entrance", "Arch Structure"],
    ["Colourful Ceilings", "SS Ceilings", "Artisan Ceilings", "Custom Design Ceilings"],
    ["Wadrobes", "Furnishings", "Wall Designs", "Custom Interiors"],
    ["Welded Grating", "Press-Locked Grating", "Swage-Locked Grating", "Riveted Grating"]
  ];

  const images = [
    ["/services-slides/ss-railing1.jpg", "/services-slides/ss-railing2.jpg", "/services-slides/ss-railing3.jpg", "/services-slides/ss-railing4.jpg"],
    ["/services-slides/ss-utilities1.jpg", "/services-slides/ss-utilities2.jpg", "/services-slides/ss-utilities3.jpg", "/services-slides/ss-utilities4.jpg"],
    ["/services-slides/metal-structure1.jpg", "/services-slides/metal-structure2.jpg", "/services-slides/metal-structure3.jpg", "/services-slides/metal-structure4.jpg"],
    ["/services-slides/glass-work1.jpg", "/services-slides/glass-work2.jpg", "/services-slides/glass-work3.jpg", "/services-slides/glass-work4.jpg"],
    ["/services-slides/decorative-arch1.jpg", "/services-slides/decorative-arch2.jpg", "/services-slides/decorative-arch3.jpg", "/services-slides/decorative-arch4.jpg"],
    ["/services-slides/ceiling1.jpg", "/services-slides/ceiling2.jpg", "/services-slides/ceiling3.jpg","/services-slides/ceiling4.jpg"],
    ["/services-slides/interior-fit-out1.jpg", "/services-slides/interior-fit-out2.jpg", "/services-slides/interior-fit-out3.jpg", "/services-slides/interior-fit-out4.jpg"],
    ["/services-slides/ss-grating1.jpg", "/services-slides/ss-grating2.jpg", "/services-slides/ss-grating3.jpg", "/services-slides/ss-grating4.jpg"]
  ]

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

  useEffect(() => {
    intervalRefs.current = activeSlides.map((_, cardIndex) =>
      setInterval(() => {
        setActiveSlides((prevSlides) => {
          const updatedSlides = [...prevSlides];
          updatedSlides[cardIndex] = (updatedSlides[cardIndex] + 1) % 4;
          return updatedSlides;
        })
      }, 3000)
    );

    return () => intervalRefs.current.forEach(clearInterval);
  }, [activeSlides])

  return (
    <div className="homePage">
      <section className="slideshow-container">
        {slides.map((src, index) => (
          <div key={index} className={`slide ${index === slideIndex ? "active" : ""}`}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        {/* Arrow buttons */}
        <FontAwesomeIcon className="slide-arrow prev" icon={faChevronLeft} onClick={() => changeSlide(-1)} />
        <FontAwesomeIcon className="slide-arrow next" icon={faChevronRight} onClick={() => changeSlide(1)} />
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
          Our team includes experts in Fabrication &amp; Installation of SS products like:<br />
          Handrail Balustrade, Water feature, Kitchen SS Table, SS Grating with modern machinary &amp; modern technology.
        </p>
        <div className="cards">
          {serviceTitles.map((title, cardIndex) => (
            <div key={cardIndex} className="card">
              <div className="image-wrapper">
                {images[cardIndex].map((imageSrc, slideIndex) => (
                  <div key={slideIndex} className={`slide ${slideIndex === activeSlides[cardIndex] ? 'active' : ''}`}>
                    <img src={imageSrc} alt={`${title} Slide ${slideIndex + 1}`} />
                    <p className="caption">{captions[cardIndex][slideIndex]}</p>
                  </div>
                ))}
              </div>
              <h3>{title}</h3>
            </div>
          ))}
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