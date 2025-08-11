import { Helmet } from "react-helmet-async";
import Contact from "../../components/contact/Contact"
import DetailsCard from "../../components/detailsCard/DetailsCard"
import HeroSection from "../../components/heroSection/HeroSection";
import "./technologyPage.css"
import { useTranslation } from "react-i18next";

const TechnologyPage = () => {

  const {t} = useTranslation("pages");

  const techImages = [
    "/tech/lazer-cutting-machine1.jpg",
    "/tech/lazer-cutting-machine2.jpg",
    "/tech/lazer-welding-machine1.jpg",
    "/tech/lazer-welding-machine2.jpg",
    "/tech/hyraulic-press-bending-machine.jpg",
    "/tech/metal-shearing-machine1.jpg",
    "/tech/thread-rolling-machine1.jpg",
    "/tech/conveyor-system1.jpg",
    "/tech/fuel-filteration-pumping-machine1.jpg"
  ];

  const techs = t("technologyPage.techs", {returnObjects: true}).map((tech, index) => (
    {...tech, image: techImages[index]}
  ))

  return (
    <div className="technologyPage">
        <Helmet>
          <title>Technology - Advancing Precision & Excellence</title>
          <meta
            name="description"
            content="Explore our cutting-edge technologies that include laser cutters, welders, hydraulic press machines, and more, shaping the future of industrial excellence."
          />
          <meta
            name="keywords"
            content="technology, laser cutting machines, welding systems, hydraulic press, metal shearing machines, industrial thread rolling, advanced manufacturing"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="Technology - Advancing Precision & Excellence" />
          <meta
            property="og:description"
            content="Discover the technologies driving innovation at our company, including state-of-the-art equipment for manufacturing and industrial applications."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:image" content="/logo2.png" />
        </Helmet>
        <HeroSection title={t("technologyPage.hero.title")} subTitle={t("technologyPage.hero.subtitle")}/>
        <section className="tech-section">
            <h2 tabIndex={0}>{t("technologyPage.section.heading")}</h2>
            <DetailsCard collections={techs} />
        </section>
        <Contact />
    </div>
  )
}

export default TechnologyPage