import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import HomePage from './pages/homePage/HomePage.jsx';
import AboutUsPage from './pages/aboutUsPage/AboutUsPage.jsx';
import ProductsAndTechnologyPage from './pages/productsAndTechnologyPage/ProductsAndTechnologyPage.jsx';
// import App from './App.jsx'

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
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
