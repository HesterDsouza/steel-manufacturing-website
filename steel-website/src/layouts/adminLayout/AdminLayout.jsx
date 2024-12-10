import { useEffect } from "react";
import "./adminLayout.css"
import { Link, Outlet, useNavigate } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const AdminLayout = () => {
    const navigate = useNavigate();
    // const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin/login');
    };

    useEffect(() => {
      const validateToken = () => {
        const token = localStorage.getItem("token");
        if (!token) navigate("/admin/login")
      }

      validateToken();
    }, [navigate])

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
        return () => {
          mediaQuery.removeEventListener('change', applyTheme);
        };
      },[])

  return (
    <div className="adminLayout">
        <header>
            <div className="logo">
                <img src="/logo.png" alt="logo" />
            </div>
            <h1>Admin Panel</h1>
            <nav>
                <Link to="/">Back to Website</Link>
                <button className="logout" onClick={handleLogout}>
                    Logout
                </button>
            </nav>
        </header>
        <ToastContainer 
          position="top-right" autoClose={3000} hideProgressBar={false}
          newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss
          draggable pauseOnHover
        />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default AdminLayout