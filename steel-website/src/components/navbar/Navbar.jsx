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
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);

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

  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  }

  const closeDropDown = () => {
    setDropDownOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(!e.target.closest(".services-container")) closeDropDown();
    }

    document.addEventListener("mousedown", handleClickOutside)

    return() => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleDropDownKeyDown = (e) => {
    if(dropDownOpen) {
      switch(e.key) {
        case "ArrowDown":
          e.preventDefault()
          setFocusedIndex((prev) => (prev + 1) % products.length);
          break;

        case "ArrowUp":
          e.preventDefault()
          setFocusedIndex((prev) => (prev - 1 + products.length) % products.length);
          break;
        
        case "Enter":
          e.preventDefault()
          if(focusedIndex >= 0){
            const product = products[focusedIndex];
            navigate(`/products/${product._id}`);
            setDropDownOpen(false);
          }
          break;

        case "Escape":
          e.preventDefault()
          setDropDownOpen(false);
          break;

        default: break;
      }
    }
  }

  return (
    <header className="navbar">
      <div className="logo-title">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="header-title">
          <Link to="/">
            <h1>Future Structures</h1>
            <h1 className="arabic-title">الهياكل المستقبلية</h1>
          </Link>
        </div>
      </div>
      <div className="search-nav">
        <div className="search">
          <div className="searchbar">
            <input 
              id="search"
              name="search"
              type="text" 
              placeholder="Search"
              value={searchQuery}
              minLength={1}
              maxLength={50}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            {searchQuery && (
              <FontAwesomeIcon tabIndex={0} className="clearSearch" onClick={clearSearch} onKeyDown={(e) => e.key === "Enter" && clearSearch} icon={faClose}/>
            )}
            <button 
              className="search-btn" 
              onClick={handleSearch} 
              disabled={searchLoading}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            >
              {searchLoading ? "Searching..." : "Search"}
            </button>
          </div>
          {error && <p className="searchError">{error}</p>}
        </div>
        <nav className="nav-links">
          <ul className="links-list">
            {/* <li className="links-list-item">
              <Link to="/">Home</Link>
            </li> */}
            <li className="links-list-item">
              <Link to="/products">Products</Link>
            </li>
            <li className="links-list-item">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="links-list-item services-container" onKeyDown={handleDropDownKeyDown} onClick={toggleDropDown}>
              <Link to="/services" aria-expanded={dropDownOpen} aria-controls="services-dropdown">
                Services
              </Link>
              <div className="services-dropdown">
                <ul>
                  {products.map((product, index) => (
                    <li key={product._id}
                        className={focusedIndex === index ? "focused" : ""}
                        onFocus={() => setFocusedIndex(index)}                        
                    >
                      <Link to={`/products/${product._id}`}>{product.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="links-list-item">
              <Link to="/technology">Technology</Link>
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