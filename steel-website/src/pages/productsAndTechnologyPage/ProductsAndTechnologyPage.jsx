import { useNavigate } from "react-router-dom";
import DetailsCard from "../../components/detailsCard/DetailsCard";
import InfoCard from "../../components/infoCard/InfoCard";
import "./productsAndTechnologyPage.css"
import Contact from "../../components/contact/Contact";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../api";
import HeroSection from "../../components/heroSection/HeroSection";

const ProductsAndTechnologyPage = () => {
  
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
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
  
  
  useEffect(() => {
    const getProducts = async() => {
      try {
        const {data} = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false)
      }
    }
    
    getProducts();
  }, [])
  
  const handleCardClick = (id) => {
    navigate(`/products-and-technology/${id}`)
  }

  if(loading) return <p>Loading...</p>;

  return (
    <div className="productsAndTechnologyPage">
      <HeroSection title="Products &amp; Technology" subTitle="Blending Craftsmanship and Cutting-Edge Technology"/>
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
            onClick={() => handleCardClick(product._id)}
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