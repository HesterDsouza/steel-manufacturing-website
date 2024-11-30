import DetailsCard from "../../components/detailsCard/DetailsCard"
import { useParams } from "react-router-dom"
import "./productDetail.css"
import Contact from "../../components/contact/Contact"
import { useEffect, useState } from "react"
import { fetchProduct } from "../../api"
import HeroSection from "../../components/heroSection/HeroSection"

const ProductDetail = () => {

  const {productId} = useParams()
  const [productDetails, setProductDetails] = useState([])
  const [productTitle, setProductTitle] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(()=>{
    const getProductDetails = async() => {
      try {
        const {data} = await fetchProduct(productId);
        setProductTitle(data.title)
        setProductDetails(data.details)
      } catch (error) {
        setError("Product not found or failed to load");
        console.error("Error fetching product: ", error);
      } finally {
        setLoading(false)
      }
    };

    getProductDetails();
  },[productId]);

  if(loading) return <p>Loading...</p>
  if(error) return <p>{error}</p>

  const collections = productDetails.map((item) => ({
    image: item.image,
    description: item.description
  }))

  return (
    <div className="productDetail">
        <HeroSection title={productTitle}/>
        <DetailsCard collections={collections} class_name="product-detail"/>
        <Contact />
    </div>
  )
}

export default ProductDetail