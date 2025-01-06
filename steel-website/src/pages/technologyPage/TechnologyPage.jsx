import { Helmet } from "react-helmet-async";
import Contact from "../../components/contact/Contact"
import DetailsCard from "../../components/detailsCard/DetailsCard"
import HeroSection from "../../components/heroSection/HeroSection";
import "./technologyPage.css"

const TechnologyPage = () => {

    const techs = [
        {
          image: "/tech/lazer-cutting-machine1.jpg",
          title: "Compact Precision Laser Cutter",
          description: "A compact, high-precision cutter with a front control panel for intricate work on smaller components across industries."
        },
        {
          image: "/tech/lazer-cutting-machine2.jpg",
          title: "Heavy-Duty Laser Cutter",
          description: "An open-structure laser cutter for large steel sheets, ideal for extensive cutting in manufacturing and construction."
        },
        {
          image: "/tech/lazer-welding-machine1.jpg",
          title: "Touchscreen Laser Welder",
          description: "A modern, touchscreen-enabled welder with precise controls, designed for high-accuracy welding in automotive and aerospace sectors."
        },
        {
          image: "/tech/lazer-welding-machine2.jpg",
          title: "Multi-functional Laser Welding System",
          description: "Versatile, large-scale laser welder with extensive controls, ideal for complex, high-volume industrial welding tasks."
        },
        {
          image: "/tech/hyraulic-press-bending-machine.jpg",
          title: "Hydraulic Press Bending Machine",
          description: "Powerful hydraulic press for shaping sheet metal, with multiple clamps for precise, repeatable bending."
        },
        {
          image: "/tech/metal-shearing-machine1.jpg",
          title: "Industrial Metal Shearing Machine",
          description: "Heavy-duty shearing machine with precision blades, essential for accurate cutting in metal fabrication."
        },
        {
          image: "/tech/thread-rolling-machine1.jpg",
          title: "Industrial Thread-Rolling Machine",
          description: "Creates threads on cylindrical parts using durable rollers, powered by a motorized system for consistent results."
        },
        {
          image: "/tech/conveyor-system1.jpg",
          title: "Industrial Conveyor System",
          description: "Metal conveyor with motorized drive and safety ladder, facilitating efficient material handling in production."
        },
        {
          image: "/tech/fuel-filteration-pumping-machine1.jpg",
          title: "Filtration and Pumping System",
          description: "Red cabinet housing filtration and pumping components, essential for fluid management in industrial processes."
        }
      ];

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
        <HeroSection title="Technology" subTitle="Innovating Tomorrow with Precision and Excellence"/>
        <section className="tech-section">
            <h2 tabIndex={0}>Our Technology</h2>
            <DetailsCard collections={techs} />
        </section>
        <Contact />
    </div>
  )
}

export default TechnologyPage