import Navbar from "./Navbar"
import Footer from "./Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import { useState } from "react"
import React from "react"

export const Context = React.createContext();

export default function App() {
  
  const [activeTab, setActiveTab] = useState('Touch Switch/Switch Panels');

  return (
      <Context.Provider value={[activeTab, setActiveTab] }>
        <Navbar/>
        <div className="py-4 sm:py-10"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
        <Footer/>
      </Context.Provider>
    )
}