import { useNavigate } from "react-router-dom";
import InfoCard from "../../components/infoCard/InfoCard";
import SlideShow from "../../components/slideshow/SlideShow";
import "./homePage.css"
import { useEffect, useRef, useState } from "react"
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  const [activeSlides, setActiveSlides] = useState(Array(8).fill(0));
  const seviceIntervals = useRef([]);
  const navigate  = useNavigate();
  
  const slides = ["/grinding.jpg", "/welding.jpg", "/lazer-cutting.jpg", "/welding2.jpg", "/lazer-welding.jpg", "/welding3.jpg", "/lazer-cutting2.jpg"];

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
      <Helmet>
        <title>Future Structures - Building the Future with Innovation</title>
        <meta
          name="description"
          content="Discover our innovative steel solutions. We specialize in stainless steel railings, metal structures, and more. Trusted partners in fabrication and design."
        />
        <meta
          name="keywords"
          content="steel manufacturing, stainless steel railings, steel solutions, metal structures, fabrication, design, Qatar steel"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Steel Manufacturer - Building the Future with Innovation" />
        <meta
          property="og:description"
          content="Explore our range of innovative steel solutions including stainless steel railings, metal structures, and advanced fabrication technology."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/logo2.png" />
      </Helmet>
      <SlideShow images={slides}/>
      <div className="hero-overlay">
          <h1 tabIndex={0}>Building the Future with Steel Innovation</h1>
          <p tabIndex={0}>Your Trusted Partner in Fabrication, Design &amp; Installation</p>
      </div>
      <section className="about-us">
        <h2 tabIndex={0}>About Us</h2>
        <p tabIndex={0}>We are Qatar&apos;s leading provider of steel solutions, operating across multiple countries in selected markets headquarted in Qatar.</p>
        <p tabIndex={0}>We are an inclusive and responsible business that is helping to build for a better society.</p>
      </section>
      <section className="services">
        <h2 tabIndex={0}>Our Services</h2>
        <p tabIndex={0}>
          Our team includes experts in Fabrication &amp; Installation of SS products like:<br />
          Handrail Balustrade, Water feature, Kitchen SS Table, SS Grating with modern machinary &amp; modern technology.
        </p>
        <div className="cards">
          {services.map((service, index) => (
            <InfoCard 
              key={index}
              title={service.title}
              images={service.images}
              description={service.captions}
              onClick={() => navigate("/products")}
              class_name="homepage"
            />
          ))}
        </div>
      </section>
      <section className="values">
        <h2 tabIndex={0}>Our Values</h2>
        <div className="value-boxes">
          <div className="value-box">
            <div className="value-img">
              <img tabIndex={0} src="/customer-commitment.jpg" alt="customer commitment" />
            </div>
            <div className="value-content">
              <h3 tabIndex={0}>Customer Commitment</h3>
              <ul>
                <li tabIndex={0}>We help you, our customers, to be successful in your business</li>
                <li tabIndex={0}>We strive to understand your needs and your customers&apos; needs</li>
                <li tabIndex={0}>We are here to help our customers turn their visions into reality</li>
              </ul>
            </div>
          </div>
          <div className="value-box">
            <div className="value-img">
              <img tabIndex={0} src="/ethics.jpg" alt="company ethics" />
            </div>
            <div className="value-content">
              <h3 tabIndex={0}>Ethical and Transparent</h3>
              <ul>
                <li tabIndex={0}>Our business ethos is to maintain a high degree of integrity and transparency</li>
                <li tabIndex={0}>We never accept shortcuts</li>
                <li tabIndex={0}>Everyone can speak their mind</li>
              </ul>
            </div>
          </div>
          <div className="value-box">
            <div className="value-img">
              <img tabIndex={0} src="/care-for-life.jpg" alt="care for life" />
            </div>
            <div className="value-content">
              <h3 tabIndex={0}>Care for Life</h3>
              <ul>
                <li tabIndex={0}>We work safely, or not at all</li>
                <li tabIndex={0}>We never walk on by if unsafe practices are being observed</li>
                <li tabIndex={0}>We support health and well being</li>
              </ul>
            </div>
          </div>
          <div className="value-box">
            <div className="value-img">
              <img tabIndex={0} src="/be-better.jpg" alt="be better" />
            </div>
            <div className="value-content">
              <h3 tabIndex={0}>Be Better</h3>
              <ul>
                <li tabIndex={0}>We always strive to better ourselves</li>
                <li tabIndex={0}>We take pride in quality and innovation</li>
                <li tabIndex={0}>We leverage diversity to deliver the optimal solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage