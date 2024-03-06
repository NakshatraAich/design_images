import { logo_alt as logo, menu } from "./assets"
import { NavLink } from "react-router-dom"

const Navbar = () => {

    const scrollToHeader = () => {
        const headerElement = document.getElementById('header'); // Replace 'footer' with the actual id of your footer element
      
        if (headerElement) {
          window.scrollTo({
            top: headerElement.offsetTop,
            behavior: 'smooth',
          });
        }
    };

    return (
        <nav className="header">
            <div className="sm:flex w-full hidden fixed top-0 z-[9999] bg-brandColor navbar py-4 px-[50px] xl:px-[90px] items-center">
                <div className="navbar-start text-white">
                    <ul className="hidden xl:flex flex-row gap-8 text-sm ">
                        <li><NavLink to="/" onClick={scrollToHeader}><span className="font-medium">Homepage</span></NavLink></li>
                        <li><NavLink to="/About" onClick={scrollToHeader}><span className="font-medium">About Us</span></NavLink></li>
                        <li><NavLink to="/Products" onClick={scrollToHeader}><span className="font-medium">Products</span></NavLink></li>
                    </ul>
                    <div className="drawer xl:hidden">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
                                <img src={menu} className="w-5"/>
                            </label>
                        </div> 
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-white pt-16 text-altTextColor">
                            {/* Sidebar content here */}
                                <li><NavLink onClick={scrollToHeader} to="/"><span className="font-semibold">Homepage</span></NavLink></li>
                                <li><NavLink onClick={scrollToHeader} to="/About"><span className="font-semibold">About Us</span></NavLink></li>
                                <li><NavLink onClick={scrollToHeader} to="/Products"><span className="font-semibold">Products</span></NavLink></li>
                                <NavLink to="/Contact" className="btn rounded-full border-0 mt-4 bg-alertColor hover:bg-[#2e9d71] bg-slate-800s text-sm">
                                    <span className="px-8 text-brandColor font-semibold">Contact Us</span>
                                </NavLink>                    
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navbar-center">
                    <a><img src={logo} width={170}/></a>
                </div>
                <div className="navbar-end xl:visible invisible">
                    <NavLink to="/Contact" className="btn rounded-full border-0 bg-white hover:bg-[#2e9d71] bg-slate-800s text-sm">
                        <span className="px-8 text-brandColor font-semibold">Contact Us</span>
                    </NavLink>
                </div>
            </div>
            <div className="bg-brandColor sm:hidden fixed top-0 z-[9999] w-full pt-4 pb-4 flex flex-row-reverse items-center justify-between">
                <div className="invisible">
                    <div  className="border-0 px-4">
                        <img src={menu} className="w-5"/>
                    </div>
                </div>
                <div className="flex-none px-[20px] align-self-center">
                    <a>
                        <img src={logo} width={150}/>
                    </a>   
                </div>
                <div className="dropdown dropdown-bottom bg-brandColor">
                    <div tabIndex={0} role="button" className="btn border-0">
                        <img src={menu} className="w-5"/>
                    </div>
                    <ul tabIndex={0} className="bg-white p-4 dropdown-content z-[1] menu shadow rounded-box w-52">
                        <li><NavLink onClick={scrollToHeader} to="/"><span className="font-semibold">Homepage</span></NavLink></li>
                        <li><NavLink onClick={scrollToHeader} to="/About"><span className="font-semibold">About Us</span></NavLink></li>
                        <li><NavLink onClick={scrollToHeader} to="/Products"><span className="font-semibold">Products</span></NavLink></li>
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