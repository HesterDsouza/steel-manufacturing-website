import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  return (
    <header className="navbar">        
      <div className="logo">
        <img src="/logo.jpg" alt="logo" />
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>Our Expertise</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/projects-and-technology">Projects & Technology</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>        
    </header>
  )
}

export default Navbar