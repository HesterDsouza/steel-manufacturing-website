import DetailsCard from "../../components/detailsCard/DetailsCard"
import { useParams } from "react-router-dom"
import "./productDetail.css"
import Contact from "../../components/contact/Contact"
import { useEffect, useState } from "react"
import { fetchProduct } from "../../api"
import HeroSection from "../../components/heroSection/HeroSection"
import { Helmet } from "react-helmet-async"

const ProductDetail = () => {

  const {productId} = useParams()
  const [productDetails, setProductDetails] = useState([])
  const [productTitle, setProductTitle] = useState("")
  const [productDescription, setProductDescription] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(()=>{
    const getProductDetails = async() => {
      try {
        const {data} = await fetchProduct(productId);
        setProductTitle(data.title)
        setProductDescription(data.description || "")
        setProductDetails(data.details || [])
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
        <Helmet>
          <title>{productTitle} - Premium Steel Products</title>
          <meta
            name="description"
            content={`Discover details about ${productTitle}. ${productDescription}`}
          />
          <meta
            name="keywords"
            content={`steel products, ${productTitle}, construction materials, durable steel, high-quality steel`}
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content={`${productTitle} - Premium Steel Products`} />
          <meta
            property="og:description"
            content={`Explore the features and specifications of ${productTitle}. ${productDescription}`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:image" content={productDetails[0]?.image || "/logo2.png"} />
        </Helmet>
        <HeroSection title={productTitle} subTitle={productDescription} />
        <DetailsCard collections={collections} class_name="product-detail"/>
        <Contact />
    </div>
  )
}

export default ProductDetail