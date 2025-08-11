import { useNavigate } from "react-router-dom";
import InfoCard from "../../components/infoCard/InfoCard";
import "./productsPage.css"
import Contact from "../../components/contact/Contact";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../api";
import HeroSection from "../../components/heroSection/HeroSection";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const ProductsPage = () => {
  
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const {t, i18n} = useTranslation("pages")
  
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
    navigate(`/products/${id}`)
  }

  if(loading) return <p>{t("productsPage.loading")}</p>;

  const lang = i18n.language;

  return (
    <div className="productsPage">
      <Helmet>
        <title>Our Products - Engineered for Strength, Designed for Excellence</title>
        <meta
          name="description"
          content="Explore our wide range of high-quality steel products, crafted for strength and designed for excellence. Find the perfect solution for your construction and industrial needs."
        />
        <meta
          name="keywords"
          content="steel products, construction materials, industrial steel solutions, engineered steel, durable steel, high-quality steel"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Our Products - Engineered for Strength, Designed for Excellence" />
        <meta
          property="og:description"
          content="Discover premium steel products tailored for your specific needs. Designed for strength, durability, and aesthetic excellence."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/logo2.png" />
      </Helmet>
      <HeroSection title={t("productsPage.hero.title")} subTitle={t("productsPage.hero.subtitle")}/>
      <section className="products-section">
        <h2 tabIndex={0}>{t("productsPage.productsSection.heading")}</h2>
        <div className="cards-container">
          {products.map((product) => (
            <InfoCard 
            key={product._id}
            title={product.title?.[lang] || ""}
            images={product.images}
            description={product.description?.[lang] ? [product.description[lang]] : []}
            class_name="products"
            onClick={() => handleCardClick(product._id)}
            onKeyDown={(e) => e.key === "Enter" && handleCardClick(product._id)}
          />
          ))}
        </div>
      </section>
      <Contact />
    </div>
  )
}

export default ProductsPage