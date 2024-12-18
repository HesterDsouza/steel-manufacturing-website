import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App