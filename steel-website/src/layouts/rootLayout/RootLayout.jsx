import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
// import "./rootLayout.css"
import Footer from "../../components/footer/Footer"
import { useEffect } from "react";

const RootLayout = () => {

  const location = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[location])
  return (
    <div className="rootLayout">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout