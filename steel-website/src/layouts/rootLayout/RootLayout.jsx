import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import { useEffect, useState } from "react";
import {Helmet} from "react-helmet-async"
// import UpdateTabTitle from "../../components/UpdateTabTitle.jsx"
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";

const RootLayout = () => {

  const location = useLocation();
  const [toastTheme, setToastTheme] = useState("dark");
  const {i18n} = useTranslation();

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[location])

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? "rtl" : "ltr"
  },[i18n])

  useEffect(() => {
    const applyTheme = () => {
      const isDarkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = isDarkmode ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      setToastTheme(theme);
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
      <Helmet>
        {/* <title>Steel Manufacturer - Fabrication, Design and Installation</title> */}
        <meta
          name="description"
          content="Your trusted partner in steel fabrication, design, and installation. Explore our innovative solutions for stainless steel railings, metal structures, and more."
        />
        <meta
          name="keywords"
          content="steel manufacturer, stainless steel, fabrication, installation, metal structures, Qatar steel solutions"
        />
        {/* <meta name="author" content="Hester Dsouza" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Open Graph for social media sharing */}
        <meta property="og:title" content="Steel Manufacturer - Fabrication, Design, and Installation" />
        <meta
          property="og:description"
          content="We provide top-quality steel solutions, from stainless steel railings to custom metal structures. Your trusted partner in innovation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/logo2.png" />
      </Helmet>
      <ToastContainer 
        position="top-right" autoClose={4000} hideProgressBar={false}
        newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss
        draggable pauseOnHover theme={toastTheme}
      />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout