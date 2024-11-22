import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {

  // const navigate = useNavigate();

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
        <div className="searchbar">
          <input type="text" placeholder="Search"/>
          <button>Search</button>
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
                  <li><Link to="/products-and-technology/railings">Steel Railings</Link></li>
                  <li><Link to="/products-and-technology/canopies">Canopies</Link></li>
                  <li><Link to="/products-and-technology/railings">Tables</Link></li>
                  <li><Link to="/products-and-technology/railings">Racks</Link></li>
                  <li><Link to="/products-and-technology/railings">Chairs</Link></li>
                  <li><Link to="/products-and-technology/railings">Panels &amp; Arches</Link></li>
                  <li><Link to="/products-and-technology/railings">Interior Fit-Out</Link></li>
                  <li><Link to="/products-and-technology/railings">Steel Gratings</Link></li>
                  <li><Link to="/products-and-technology/railings">Glass Work</Link></li>
                  <li><Link to="/products-and-technology/railings">Artisan Ceilings</Link></li>
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