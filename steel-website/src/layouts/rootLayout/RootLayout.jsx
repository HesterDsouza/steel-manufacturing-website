import { Outlet } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
// import "./rootLayout.css"
import Footer from "../../components/footer/Footer"

const RootLayout = () => {
  return (
    <div className="rootLayout">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout