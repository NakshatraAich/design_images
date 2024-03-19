import { logo_alt } from "./assets"
import { NavLink } from "react-router-dom"

const Footer = () => {

  const handleWhatsAppClick = () => {
    window.open(`whatsapp://send?phone=${918000293444}`, '_blank');
  };

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
    <div className="flex flex-col bg-brandColor pt-12 sm:pt-24">
      <div className="bg-brandColor flex flex-col-reverse  xl:gap-24 gap-20 lg:flex-row  lg:justify-between items-start lg:items-start tracking-widest px-[25px] sm:px-[90px] xl:px-[200px]">
        <div className="flex basis-1/4 flex-row justify-evenly lg:justify-start gap-8 ">
          <ul className="text-xs sm:text text-white font-medium flex flex-col gap-3">
            <li className="px-0 py-0"><NavLink onClick={scrollToHeader} to="/">Homepage</NavLink></li>
            <li className="px-0 py-0"><NavLink onClick={scrollToHeader} to="/About">About</NavLink></li>
            <li className="px-0 py-0"><NavLink onClick={scrollToHeader} to="/Products">Products</NavLink></li>
            <li className="px-0 py-0"><NavLink onClick={scrollToHeader} to="/Contact">Contact Us</NavLink></li>
          </ul>
          <ul className="text-xs sm:text text-white font-medium flex flex-col gap-4">
            <li>
              <li>Address</li>
              <li className="text-[.75rem] font-thin">Shiv Glass House, Nr,<br/> Shakti tenament,Opp.Money <br/>Hotel, Isanpur, Ahmedabad-380050</li>
            </li>
            <li>
              <li>Phone Number</li>
              <li className="text-[.75rem] font-thin">+91 80002 93444</li>
            </li>
            <li>
              <li>Email</li>
              <li className="text-[.75rem] font-thin">Info@designimageindia.com</li>
            </li>
            <li>
              <li><div onClick={handleWhatsAppClick}>Whatsapp</div></li>
            </li>
          </ul>
        </div>
        <form className="flex basis-2/4 flex-col font-Inter w-full sm:text-sm text-xs" action="" method="POST">
          <h1 className="text-white text-4xl lg:text-2xl font-semibold pb-4">Send Us Your Inquiries!</h1>
          <div className='grid grid-cols-2 gap-8'>
            <input name='First Name' placeholder='First Name' type='text' className='bg-brandColor border-b-[1px] border-white placeholder-white place text-white focus:border-brandBlack outline-none pb-[10px] py-2'/>
            <input name='Last Name' placeholder='Last Name' type='text' className='bg-brandColor border-b-[1px] border-white placeholder-white text-white focus:border-brandBlack outline-none pb-[10px] py-2'/>
            <input name='Email Address' placeholder='Email Address' type='email' className='bg-brandColor border-b-[1px] placeholder-white text-white border-white focus:border-brandBlack outline-none pb-[10px] py-2'/>
            <input name='Subject' placeholder='Subject' type='text' className='bg-brandColor border-b-[1px] border-white placeholder-white text-white focus:border-brandBlack outline-none pb-[10px] py-2'/>
            <input name='Message' placeholder='Message' type='text' className='bg-brandColor border-b-[1px] border-white placeholder-white text-white focus:border-brandBlack outline-none pb-[10px] col-span-2 py-2'/>
          </div>
          <div className="flex flex-row justify-between items-center lg:justify-end mt-6">
            <button type="submit" className="bg-white text-brandColor font-semibold rounded-lg focus:outline-1 focus:outline-green-800 enabled:hover:bg-green-800 text-sm px-8 py-2 w-48">Submit</button>
          </div>
        </form>
      </div>
      <div className="w-full flex flex-row justify-center">
        <img src={logo_alt} className="max-w-[250px] m-12 sm:m-16"/>
      </div>
      <div className="border-t-[0.07rem] border-white h-16 flex flex-col justify-center px-2 py-4 items-center">
        <p className="text-white text-xs">Copyright © 2023, Design Image - All Rights Reserved. Icons by <u><a target="_blank" href="https://icons8.com/">Icons8</a></u></p>
      </div>
    </div>
  )
}

export default Footer