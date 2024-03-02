import Navbar from "./Navbar"
import Footer from "./Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Contact from "./pages/Contact"

export default function App() {
  return (
      <div>
        <Navbar/>
        <div className="py-14"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
        <Footer/>
      </div>
    )
}