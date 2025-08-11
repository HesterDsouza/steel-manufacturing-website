import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import "./navbar.css"
import { fetchProducts } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import LanguageToggle from "../../utils/LanguageToggle";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n.js";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const navigate = useNavigate();
  const {t} = useTranslation("components");

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
      setError(t("navbar.search.error"));
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
            <div className="abstract">
              <h1>{t("navbar.branding.abstract")}</h1>
              <h1 className="arabic-title">{t("navbar.branding.abstract_arabic")}</h1>
            </div>
            <div className="future_structures">
              <h1>{t("navbar.branding.future_structures")}</h1>
              <h1 className="arabic-title">{t("navbar.branding.future_structures_arabic")}</h1>
            </div>
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
              placeholder = {t("navbar.search.placeholder")}
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
              {searchLoading ? t("navbar.search.button_loading") : t("navbar.search.button")}
            </button>
            <LanguageToggle />
          </div>
          {error && <p className="searchError">{error}</p>}
        </div>
        <nav className="nav-links">
          <ul className="links-list">
            {/* <li className="links-list-item">
              <Link to="/">Home</Link>
            </li> */}
            <li className="links-list-item products-container" onKeyDown={handleDropDownKeyDown} onClick={toggleDropDown}>
              <Link to="/products" aria-expanded={dropDownOpen} aria-controls="products-dropdown">
                {t("navbar.nav.products")}
              </Link>
              <div className="products-dropdown">
                <ul>
                  {products.map((product, index) => (
                    <li key={product._id}
                        className={focusedIndex === index ? "focused" : ""}
                        onFocus={() => setFocusedIndex(index)}                        
                    >
                      <Link to={`/products/${product._id}`}>
                        {i18n.language === "en" ? product.title?.en : product.title?.ar}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="links-list-item">
              <Link to="/about-us">{t("navbar.nav.about_us")}</Link>
            </li>
            <li className="links-list-item">
              <Link to="/services" >
                {t("navbar.nav.services")}
              </Link>
            </li>
            <li className="links-list-item">
              <Link to="/technology">{t("navbar.nav.technology")}</Link>
            </li>
            <li className="links-list-item">
              <Link to="/contact">{t("navbar.nav.contact")}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar