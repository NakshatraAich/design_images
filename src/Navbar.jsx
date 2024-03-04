import { logo } from "./assets"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav >
        <div className="sm:flex hidden fixed top-0 z-[9999] navbar bg-base-100 py-5 px-[50px] xl:px-[90px] items-center bg-white/30 backdrop-blur-lg">
            <div className="navbar-start">
                <ul className="hidden xl:flex flex-row gap-8 text-sm ">
                    <li><NavLink to="/"><span className="font-semibold">Homepage</span></NavLink></li>
                    <li><NavLink to="/About"><span className="font-semibold">About Us</span></NavLink></li>
                    <li><NavLink to="/Products"><span className="font-semibold">Products</span></NavLink></li>
                </ul>
                <div className="drawer xl:hidden">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div> 
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-white pt-16 text-base-content">
                        {/* Sidebar content here */}
                            <li><NavLink to="/"><span className="font-semibold">Homepage</span></NavLink></li>
                            <li><NavLink to="/About"><span className="font-semibold">About Us</span></NavLink></li>
                            <li><NavLink to="/Products"><span className="font-semibold">Products</span></NavLink></li>
                            <NavLink to="/Contact" className="btn rounded-full border-0 mt-4 bg-alertColor hover:bg-[#2e9d71] bg-slate-800s text-sm">
                                <span className="px-8 text-brandColor font-semibold">Contact Us</span>
                            </NavLink>                    
                        </ul>
                    </div>
                </div>
            </div>
            <div className="navbar-center">
                <a><img src={logo} width={190}/></a>
            </div>
            <div className="navbar-end xl:visible invisible">
                <NavLink to="/Contact" className="btn rounded-full border-0 bg-alertColor hover:bg-[#2e9d71] bg-slate-800s text-sm">
                    <span className="px-8 text-brandColor font-semibold">Contact Us</span>
                </NavLink>
            </div>
        </div>

        <div className="sm:hidden fixed top-0 z-[9999] w-full pt-4 flex flex-row-reverse items-center justify-between bg-white">
            <div className="invisible">
                <div  className="border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </div>
            </div>
            <div className="flex-none px-[20px] pb-4 self-center">
                <a>
                    <img src={logo} width={170}/>
                </a>   
            </div>
            <div className="dropdown dropdown-bottom bg-white">
                <div tabIndex={0} role="button" className="btn border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </div>
                <ul tabIndex={0} className="bg-white p-4 dropdown-content z-[1] menu p-2 shadow rounded-box w-52">
                    <li><NavLink to="/"><span className="font-semibold">Homepage</span></NavLink></li>
                    <li><NavLink to="/About"><span className="font-semibold">About Us</span></NavLink></li>
                    <li><NavLink to="/Products"><span className="font-semibold">Products</span></NavLink></li>
                    <NavLink to="/Contact" className="btn rounded-full border-0 mt-4 bg-alertColor hover:bg-[#2e9d71] bg-slate-800s text-sm">
                        <span className="px-8 text-brandColor font-semibold">Contact Us</span>
                    </NavLink>   
                </ul>
            </div>
        </div>    
          
    </nav>
  )
}

export default Navbar