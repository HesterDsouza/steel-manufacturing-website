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

  useEffect(() => {
    const applyTheme = () => {
      const isDarkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = isDarkmode ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
    };

    // Apply theme on page load
    applyTheme();

    //  Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', applyTheme);

    // Cleanup listener
    return () => {
      mediaQuery.removeEventListener('change', applyTheme);
    };
  },[])
  return (
    <div className="rootLayout">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout