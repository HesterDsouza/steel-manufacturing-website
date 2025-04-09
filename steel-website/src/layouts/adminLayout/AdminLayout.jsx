import { useEffect, useState } from "react";
import "./adminLayout.css"
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import UpdateTabTitle from "../../components/UpdateTabTitle";

const AdminLayout = () => {
    const navigate = useNavigate();
    const [toastTheme, setToastTheme] = useState("dark");

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin/login');
    };

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
        return () => {
          mediaQuery.removeEventListener('change', applyTheme);
        };
      },[])

  return (
    <div className="adminLayout">
      <UpdateTabTitle />
      <ToastContainer 
        position="top-right" autoClose={4000} hideProgressBar={false}
        newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss
        draggable pauseOnHover theme={toastTheme}
      />
      <header>
        <div className="logo">
          <Link to="/" target="_blank">
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>
        <h1 tabIndex={0}>Admin Panel</h1>
        <nav>
          <Link to="/" target="_blank">Back to Website</Link>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>
      <main>
          <Outlet />
      </main>
  </div>
  )
}

export default AdminLayout