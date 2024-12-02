import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import "./navbar.css"
import { fetchProducts } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async() => {
      try {
        const {data} = await fetchProducts();
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products", error);
      }
    }

    getProducts();
  }, [])

  const handleSearch = async() => {
    const trimmedQuery = searchQuery.trim();

    if(!trimmedQuery || trimmedQuery.length === 0 || trimmedQuery.length > 50 || /[^a-zA-Z\s]/.test(trimmedQuery)){
      setError("Please enter words between 1 and 50 chracters");
      return;
    }

    setSearchLoading(true);
    setError("");

    try {
      navigate(`/search-results?query=${trimmedQuery}`)
    } catch (error) {
      setError("Error searching products");
      console.error("Error searching products: ", error)
    } finally {
      setSearchLoading(false)
    }
  }

  const clearSearch = () => {
    setSearchQuery("");
    setError("");
  }

  return (
    <header className="navbar">
      <div className="logo-title">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="header-title">
          <h1>Establishment AHMAD MOHAMED AHMAD AL-MUHANNADI FOR DECORATION</h1>
          <h1 className="arabic-title">المؤسسة أحمد محمد أحمد المهندي للديكور</h1>
        </div>
      </div>
      <div className="search-nav">
        <div className="search">
          <div className="searchbar">
            <input 
              type="text" 
              placeholder="Search"
              value={searchQuery}
              minLength={1}
              maxLength={50}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <FontAwesomeIcon className="clearSearch" onClick={clearSearch} icon={faClose}/>
            )}
            <button className="search-btn" onClick={handleSearch} disabled={searchLoading}>
              {searchLoading ? "Searching..." : "Search"}
            </button>
          </div>
          {error && <p className="searchError">{error}</p>}
        </div>
        <nav className="nav-links">
          <ul className="links-list">
            <li className="links-list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="links-list-item">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="links-list-item services-container">
              <Link to="/services">Services</Link>
              <div className="services-dropdown">
                <ul>
                  {products.map((product) => (
                    <li key={product._id}>
                      <Link to={`/products-and-technology/${product._id}`}>{product.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="links-list-item">
              <Link to="/products-and-technology">Products & Technology</Link>
            </li>
            <li className="links-list-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar