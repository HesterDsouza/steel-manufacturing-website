import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {

  return (
    <header className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="header-title">
        <h1>Establishment AHMAD MOHAMED AHMAD AL-MUHANNADI FOR DECORATION</h1>
        <h1 className="arabic-title">المؤسسة أحمد محمد أحمد المهندي للديكور</h1>
      </div>
      <div className="search-nav">
        <div className="searchbar">
          <input type="text" placeholder="Search"/>
          <button>Search</button>
        </div>
        <nav className="nav-links">
          <ul className="links-list">
            <li className="links-list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="links-list-item expertise-container">
              <Link className="expertise-button">Our Expertise</Link>
              <div className="expertise-dropdown">
                <ul>
                  <li>Stainless Steel</li>
                  <li>Black Iron Steel</li>
                  <li>Decorative Steel</li>
                  <li>Galvanized Steel</li>
                  <li>Aluminum & Brass</li>
                  <li>Desgin & Prototyping</li>
                  <li>Paint & Powder Coating</li>
                  <li>Assembly & Installation</li>
                </ul>
              </div>
            </li>
            <li className="links-list-item">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="links-list-item services-container">
              <Link to="/services">Services</Link>
              <div className="services-dropdown">
                <ul>
                  <li><Link>Stainless Steel / Galvanized Steel Railing</Link></li>
                  <li><Link>Stainless Steel</Link></li>
                  <li><Link>Glass</Link></li>
                  <li><Link>Decorative Arch</Link></li>
                  <li><Link>Ceiling</Link></li>
                  <li><Link>Interior Fit-Out</Link></li>
                  <li><Link>Stainless Steel Gratings</Link></li>
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