import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import HomePage from './pages/homePage/HomePage.jsx';
import AboutUsPage from './pages/aboutUsPage/AboutUsPage.jsx';
import ProductsPage from './pages/productsPage/ProductsPage.jsx';
import ContactPage from './pages/contactPage/ContactPage.jsx';
import ProductDetail from './pages/productDetail/ProductDetail.jsx';
import ServicePage from './pages/servicePage/ServicePage.jsx';
import { HelmetProvider } from 'react-helmet-async';
import SearchResultsPage from './pages/searchResultsPage/SearchResultsPage.jsx';
import AdminLayout from './layouts/adminLayout/AdminLayout.jsx';
import AdminLogin from './pages/admin/AdminLogin.jsx';
import AdminPage from './pages/admin/AdminPage.jsx';
import TechnologyPage from './pages/technologyPage/TechnologyPage.jsx';

const adminLoader = () => {
  const token = localStorage.getItem('token');
  return !token ? redirect("/admin/login") : null
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about-us', element: <AboutUsPage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:productId', element: <ProductDetail /> },
      { path: '/technology', element: <TechnologyPage /> },
      { path: '/services', element: <ServicePage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/search-results', element: <SearchResultsPage /> },
    ]
  },
  {
    element: <AdminLayout />,
    children: [
      { path: "/admin/login", element: <AdminLogin /> },
      { path: "/admin/dashboard", element: <AdminPage />, loader: adminLoader }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
