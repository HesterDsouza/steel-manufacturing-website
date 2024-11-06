import "./productsAndTechnologyPage.css"

const ProductsAndTechnologyPage = () => {
  
  const products = [
    {
      image: "",
      title: "",
      description: ""
    },
    {
      image: "",
      title: "",
      description: ""
    },
  ];

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
      <section className="products-section">
        <h2>Our Products</h2>
        <div className="cards-container">
          {products.map((product, index) => (
            <div key={index} className="card">
              <img src={product.image} alt={product.title} className="card-img" />
              <div className="card-content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="tech-section">
        <h2>Our Technology</h2>
        <div className="cards-container">
        {techs.map((tech, index) => (
            <div key={index} className="card">
              <img src={tech.image} alt={tech.title} className="card-img"/>
              <div className="card-content">
                <h3>{tech.title}</h3>
                <p>{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductsAndTechnologyPage