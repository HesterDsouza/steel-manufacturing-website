import { useEffect } from "react";
import "./adminLayout.css"
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/admin/login';
    };

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
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default AdminLayout