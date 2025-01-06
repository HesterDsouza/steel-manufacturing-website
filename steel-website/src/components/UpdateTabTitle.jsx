import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchProduct } from "../api";

const baseTitle = "Future Structures";

const staticTitles = {
  "/about-us" : "About Us",
  "/products" : "Products",
  "/technology": "Technology",
  "/services" : "Services",
  "/contact" : "Contact",
  "/admin/login": "Admin Login",
  "/admin/dashboard" : "Admin Dashboard"
}

const genTitle = (pathname, search, productTitle = null) => {  
    if(staticTitles[pathname]) 
      return `${staticTitles[pathname]} | ${baseTitle}`;
  
    if(pathname.startsWith("/products/")) 
      return productTitle ? 
      `${productTitle} | Product Details | ${baseTitle}` :
      `Product Detail | ${baseTitle}`;
  
    if(pathname === "/search-results") {
      const query = new URLSearchParams(search).get("query");
      return `Search results for "${query || 'unknown'}" | ${baseTitle}`
    }
  
    return baseTitle;
  }
  
  function UpdateTabTitle(){
    const location = useLocation();
    const [productTitle, setProductTitle] = useState(null);

    useEffect(() => {
      const {pathname} = location;

      const fetchTitle = async () => {
        if(pathname.startsWith("/products/")) {
          const productId = pathname.split("/products/")[1];
          try {
            const {data} = await fetchProduct(productId);
            setProductTitle(data.title)
          } catch (error) {
            console.error("Failed to fetch product title:", error);
            setProductTitle(null);
          }
        } else setProductTitle(null);
      }

      fetchTitle();
    }, [location])
  
    useEffect(() => {
      const {pathname, search} = location;      
      const newTitle = genTitle(pathname, search, productTitle);
      document.title = newTitle;
    }, [location, productTitle])
  
    return null;
  }

  export default UpdateTabTitle;