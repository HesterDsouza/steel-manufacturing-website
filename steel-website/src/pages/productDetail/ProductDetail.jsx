import DetailsCard from "../../components/detailsCard/DetailsCard"
import { Link, useParams } from "react-router-dom"
import "./productDetail.css"

const ProductDetail = () => {

  const {productId} = useParams()

  const products = {
    railings: [
      {
        image: "/products/railings/railing1.JPG",
        description: "Black metal railings of a white spiral staircase, showcasing a modern and elegant design."
      },
      {
        image: "/products/railings/railing2.JPG",
        description: "Intricate metal railings of a stairway featuring geometric designs, showcasing modern craftsmanship and artistic detail."
      },
    ],
    canopies: [
      {
        image: "/products/canopies/canopy1.JPG",
        description: "A modern Nespresso kiosk showcasing coffee machines and capsules with prominent branding and a decorative coffee-themed wall."
      },
      {
        image: "/products/canopies/canopy2.JPG",
        description: "A rectangular, open café kiosk with a wooden structure, metal grids, hanging lights, and seating around a counter."
      },
    ],
  }

  const productDetails = products[productId.toLowerCase()];

  if(!productDetails){
    return <p>Product not found</p>
  }

  const productTitle = productId.charAt(0).toUpperCase() + productId.slice(1)

  const collections = productDetails.map((item) => ({
    image: item.image,
    title: "",
    description: item.description,
  }))

  return (
    <div className="productDetail">
        <h1>{productTitle}</h1>
        <DetailsCard collections={collections} class_name="product-detail"/>
        <section className="contact-section">
            <h2>Let&apos;s Work Together</h2>
            <p>
            If you&apos;re looking for exceptional craftsmanship, innovative designs, and reliable service, look no further. Contact us today to discuss your project and explore how we can bring your vision to life.
            Whether it&apos;s a small custom piece or a large industrial project, our team is ready to turn your ideas into reality.
            </p>
            <Link to="/contact">
                <button className="contact-button">
                    Contact Us
                </button>
            </Link>
      </section>
    </div>
  )
}

export default ProductDetail