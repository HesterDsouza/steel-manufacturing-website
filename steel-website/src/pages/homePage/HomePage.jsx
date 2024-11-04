import SlideShow from "../../components/slideshow/SlideShow";
import "./homePage.css"
import { useEffect, useRef, useState } from "react"

const HomePage = () => {
  const [activeSlides, setActiveSlides] = useState(Array(8).fill(0));
  const seviceIntervals = useRef([]);
  
  const slides = ["/grinding.jpg", "/welding.jpg", "/lazor-cutting.jpg", "/welding2.jpg", "/lazor-welding.jpg", "/welding3.jpg", "/lazor-cutting2.jpg"];

  const services = [
    {
      title: "Stainless Steel Railings",
      images: ["/services-slides/ss-railing1.jpg", "/services-slides/ss-railing2.jpg", "/services-slides/ss-railing3.jpg", "/services-slides/ss-railing4.jpg"],
      captions: ["Partioned / Interval Railings", "Staircase Railings", "Public Railings", "Curved Staircase Railings"]
    },
    {
      title: "Steel Utilities",
      images: ["/services-slides/ss-utilities1.jpg", "/services-slides/ss-utilities2.jpg", "/services-slides/ss-utilities3.jpg", "/services-slides/ss-utilities4.jpg"],
      captions: ["Staircases", "SS Bollards", "Spiral Stairase", "Airport Utilities"]
    },
    {
      title: "Metal Structures",
      images: ["/services-slides/metal-structure1.jpg", "/services-slides/metal-structure2.jpg", "/services-slides/metal-structure3.jpg", "/services-slides/metal-structure4.jpg"],
      captions: ["Artisan Doors", "Decorative Claddings", "SS Canopys", "Custom Design Canopys"]
    },
    {
      title: "Glass Partitions / Balustrade",
      images: ["/services-slides/glass-work1.jpg", "/services-slides/glass-work2.jpg", "/services-slides/glass-work3.jpg", "/services-slides/glass-work4.jpg"],
      captions: ["Staircase Glasses", "Glass Cabins", "Glass Door Designs", "Glass Partitions"]
    },
    {
      title: "Decorative Arches",
      images: ["/services-slides/decorative-arch1.jpg", "/services-slides/decorative-arch2.jpg", "/services-slides/decorative-arch3.jpg", "/services-slides/decorative-arch4.jpg"],
      captions: ["Fifa World Cup Entrance", "Arch Lighting", "Fifa World Cup Entrance", "Arch Structure"]
    },
    {
      title: "Ceiling",
      images: ["/services-slides/ceiling1.jpg", "/services-slides/ceiling2.jpg", "/services-slides/ceiling3.jpg","/services-slides/ceiling4.jpg"],
      captions: ["Colourful Ceilings", "SS Ceilings", "Artisan Ceilings", "Custom Design Ceilings"]
    },
    {
      title: "Interior Fit-Out",
      images: ["/services-slides/interior-fit-out1.jpg", "/services-slides/interior-fit-out2.jpg", "/services-slides/interior-fit-out3.jpg", "/services-slides/interior-fit-out4.jpg"],
      captions: ["Wadrobes", "Furnishings", "Wall Designs", "Custom Interiors"]
    },
    {
      title: "Stainless Steel Gratings",
      images: ["/services-slides/ss-grating1.jpg", "/services-slides/ss-grating2.jpg", "/services-slides/ss-grating3.jpg", "/services-slides/ss-grating4.jpg"],
      captions: ["Welded Grating", "Press-Locked Grating", "Swage-Locked Grating", "Riveted Grating"]
    }
  ];

  useEffect(() => {
    seviceIntervals.current = activeSlides.map((_, cardIndex) =>
      setInterval(() => {
        setActiveSlides((prevSlides) => {
          const updatedSlides = [...prevSlides];
          updatedSlides[cardIndex] = (updatedSlides[cardIndex] + 1) % 4;
          return updatedSlides;
        })
      }, 5000)
    );

    return () => seviceIntervals.current.forEach(clearInterval);
  }, [activeSlides])

  return (
    <div className="homePage">
      <SlideShow images={slides}/>
      <div className="hero-overlay">
          <h1>Building the Future with Steel Innovation</h1>
          <p>Your Trusted Partner in Fabrication, Design &amp; Installation</p>
      </div>
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
          {services.map((service, cardIndex) => (
            <div key={cardIndex} className="card">
              <div className="image-wrapper">
                {service.images.map((imageSrc, slideIndex) => (
                  <div key={slideIndex} className={`slide ${slideIndex === activeSlides[cardIndex] ? 'active' : ''}`}>
                    <img src={imageSrc} alt={`${service.title} Slide ${slideIndex + 1}`} />
                    <p className="caption">{service.captions[slideIndex]}</p>
                  </div>
                ))}
              </div>
              <h3>{service.title}</h3>
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
              <img src="/ethics.jpg" alt="company ethics" />
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