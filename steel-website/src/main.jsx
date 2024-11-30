import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import HomePage from './pages/homePage/HomePage.jsx';
import AboutUsPage from './pages/aboutUsPage/AboutUsPage.jsx';
import ProductsAndTechnologyPage from './pages/productsAndTechnologyPage/ProductsAndTechnologyPage.jsx';
import ContactPage from './pages/contactPage/ContactPage.jsx';
import ProductDetail from './pages/productDetail/ProductDetail.jsx';
import ServicePage from './pages/servicePage/ServicePage.jsx';
import { HelmetProvider } from 'react-helmet-async';
import SearchResultsPage from './pages/searchResultsPage/SearchResultsPage.jsx';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/about-us',
        element: <AboutUsPage />
      },
      {
        path: '/products-and-technology',
        element: <ProductsAndTechnologyPage />
      },
      {
        path: '/products-and-technology/:productId',
        element: <ProductDetail />
      },
      {
        path: "/services",
        element: <ServicePage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/search-results',
        element: <SearchResultsPage />
      },
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
