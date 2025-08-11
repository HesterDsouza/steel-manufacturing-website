import { useNavigate } from "react-router-dom";
import InfoCard from "../../components/infoCard/InfoCard";
import SlideShow from "../../components/slideshow/SlideShow";
import "./homePage.css"
import { useEffect, useRef, useState } from "react"
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const [activeSlides, setActiveSlides] = useState(Array(8).fill(0));
  const seviceIntervals = useRef([]);
  const navigate  = useNavigate();
  const {t} = useTranslation("pages")
  
  const slides = ["/grinding.jpg", "/welding.jpg", "/lazer-cutting.jpg", "/welding2.jpg", "/lazer-welding.jpg", "/welding3.jpg", "/lazer-cutting2.jpg"];

  const services = [
    {
      images: ["/services-slides/ss-railing1.jpg", "/services-slides/ss-railing2.jpg", "/services-slides/ss-railing3.jpg", "/services-slides/ss-railing4.jpg"],
    },
    {
      images: ["/services-slides/ss-utilities1.jpg", "/services-slides/ss-utilities2.jpg", "/services-slides/ss-utilities3.jpg", "/services-slides/ss-utilities4.jpg"],
    },
    {
      images: ["/services-slides/metal-structure1.jpg", "/services-slides/metal-structure2.jpg", "/services-slides/metal-structure3.jpg", "/services-slides/metal-structure4.jpg"],
    },
    {
      images: ["/services-slides/glass-work1.jpg", "/services-slides/glass-work2.jpg", "/services-slides/glass-work3.jpg", "/services-slides/glass-work4.jpg"],
    },
    {
      images: ["/services-slides/decorative-arch1.jpg", "/services-slides/decorative-arch2.jpg", "/services-slides/decorative-arch3.jpg", "/services-slides/decorative-arch4.jpg"],
    },
    {
      images: ["/services-slides/ceiling1.jpg", "/services-slides/ceiling2.jpg", "/services-slides/ceiling3.jpg","/services-slides/ceiling4.jpg"],
    },
    {
      images: ["/services-slides/interior-fit-out1.jpg", "/services-slides/interior-fit-out2.jpg", "/services-slides/interior-fit-out3.jpg", "/services-slides/interior-fit-out4.jpg"],
    },
    {
      images: ["/services-slides/ss-grating1.jpg", "/services-slides/ss-grating2.jpg", "/services-slides/ss-grating3.jpg", "/services-slides/ss-grating4.jpg"],
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
          <h1 tabIndex={0}>{t("homePage.hero.title")}</h1>
          <p tabIndex={0}>{t("homePage.hero.subtitle")}</p>
      </div>
      <section className="about-us">
        <h2 tabIndex={0}>{t("homePage.aboutUs.title")}</h2>
        <p tabIndex={0}>{t("homePage.aboutUs.para1")}</p>
        <p tabIndex={0}>{t("homePage.aboutUs.para2")}</p>
      </section>
      <section className="services">
        <h2 tabIndex={0}>{t("homePage.services.title")}</h2>
        <p tabIndex={0}>{t("homePage.services.description")}</p>
        <div className="cards">
          {services.map((service, index) => (
            <InfoCard 
              key={index}
              title={t(`homePage.services.items.${index}.title`)}
              images={service.images}
              description={t(`homePage.services.items.${index}.captions`, { returnObjects: true })}
              onClick={() => navigate("/products")}
              class_name="homepage"
            />
          ))}
        </div>
      </section>
      <section className="values">
        <h2 tabIndex={0}>{t("homePage.values.title")}</h2>
        {t("homePage.values.items", { returnObjects: true }).map((value, index) => (
          <div className="value-box" key={index}>
            <div className="value-img">
              <img tabIndex={0} src={`/value_img_${index + 1}.jpg`} alt={value.title} />
            </div>
            <div className="value-content">
              <h3 tabIndex={0}>{value.title}</h3>
              <ul>
                {value.points.map((point, i) => (
                  <li tabIndex={0} key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default HomePage