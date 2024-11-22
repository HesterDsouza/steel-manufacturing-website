import { useNavigate } from "react-router-dom";
import DetailsCard from "../../components/detailsCard/DetailsCard";
import InfoCard from "../../components/infoCard/InfoCard";
import "./productsAndTechnologyPage.css"
import Contact from "../../components/contact/Contact";

const ProductsAndTechnologyPage = () => {
  
  const navigate = useNavigate();

  const products = [
    {
      title: "SS Products",
      images: ["/products/ss/ss1.jpg","/products/ss/ss4.jpg","/products/ss/ss11.jpg","/products/ss/ss13.jpg",],
      description: []
    },
    {
      title: "Railings",
      images: ["/products/railings/railing4.JPG","/products/railings/railing6.JPG","/products/railings/railing14.JPG", "/products/railings/railing15.JPG"],
      description: []
    },
    {
      title: "Canopies",
      images: ["/products/canopies/canopy3.JPG","/products/canopies/canopy8.JPG","/products/canopies/canopy11.JPG","/products/canopies/canopy14.JPG"],
      description: []
    },
    {
      title: "Tables",
      images: ["/products/tables/table1.JPG","/products/tables/table5.JPG","/products/tables/table8.JPG","/products/tables/table14.JPG"],
      description: []
    },
    {
      title: "Racks",
      images: ["/products/racks/rack1.JPG","/products/racks/rack3.JPG","/products/racks/rack5.JPG","/products/racks/rack6.JPG"],
      description: []
    },
    {
      title: "Chairs",
      images: ["/products/chairs/chair2.JPG", "/products/chairs/chair3.JPG", "/products/chairs/chair4.JPG","/products/chairs/chair8.JPG"],
      description: []
    },
    {
      title: "Panels & Arches",
      images: ["/products/deco-panels/deco-panel2.JPG","/products/deco-panels/deco-panel6.JPG","/products/deco-panels/decorative-arch1.jpg","/products/deco-panels/decorative-arch3.jpg"],
      description: []
    },
    {
      title: "Interior Fit-Outs",
      images: ["/products/home-decos/home-deco4.JPG","/products/home-decos/home-deco5.JPG","/products/home-decos/home-deco17.JPG","/products/home-decos/home-deco20.JPG"],
      description: []
    },
    {
      title: "SS Gratings",
      images: ["/products/gratings/ss-grating1.jpg", "/products/gratings/ss-grating5.jpg","/products/gratings/ss-grating6.jpg","/products/gratings/ss-grating7.jpg"],
      description: []
    },
    {
      title: "Glass Work",
      images: ["/products/glass/glass-work.jpg","/products/glass/glass-work1.jpg"],
      description: []
    },
    {
      title: "Artisan Ceilings",
      images: ["/products/ceiling/ceiling1.jpg", "/products/ceiling/ceiling2.jpg"],
      description: []
    }
  ];

  const handleCardClick = (title) => {
    navigate(`/products-and-technology/${title.toLowerCase()}`)
  }

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
    <div className="productsAndTechnologyPage">
      <section className="hero-section">
          <div className="hero-content">
              <h1>Products &amp; Technology</h1>
              <p>Blending Craftsmanship and Cutting-Edge Technology</p>
          </div>
      </section>
      <section className="products-section">
        <h2>Our Products</h2>
        <div className="cards-container">
          {products.map((product, index) => (
            <InfoCard 
            key={index}
            title={product.title}
            images={product.images}
            description={product.description}
            class_name="products"
            onClick={() => handleCardClick(product.title)}
          />
          ))}
        </div>
      </section>
      <section className="tech-section">
        <h2>Our Technology</h2>
        <DetailsCard collections={techs} />
      </section>
      <Contact />
    </div>
  )
}

export default ProductsAndTechnologyPage