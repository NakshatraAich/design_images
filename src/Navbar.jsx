import { logo } from "./assets"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[9999] navbar bg-base-100 py-5 px-[90px] flex items-center bg-white/30 backdrop-blur-lg">
        <div className="navbar-start">
            <ul className="hidden lg:flex flex-row gap-8 text-sm ">
                <li><NavLink to="/"><span className="font-semibold">Homepage</span></NavLink></li>
                <li><NavLink to="/About"><span className="font-semibold">About Us</span></NavLink></li>
                <li><NavLink to="/Products"><span className="font-semibold">Products</span></NavLink></li>
            </ul>
            <div className="drawer lg:hidden">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                    
                    </ul>
                </div>
            </div>
        </div>
        <div className="navbar-center">
            <a><img src={logo} width={190} /></a>
        </div>
        <div className="navbar-end">
            <NavLink to="/Contact" className="btn rounded-full border-0 bg-alertColor hover:bg-[#2e9d71] bg-slate-800s text-sm">
                <span className="px-8 text-brandColor font-semibold">Contact Us</span>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar