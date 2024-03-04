import { logo_alt } from "./assets"
import { NavLink } from "react-router-dom"

const Footer = () => {

  const handleWhatsAppClick = () => {
    window.open(`whatsapp://send?phone=${919930376620}`, '_blank');
  };

  return (
    <div className="flex flex-col bg-brandColor ">
      <div className="bg-brandColor flex flex-col-reverse gap-16 lg:flex-row justify-between tracking-widest py-32 px-[50px] sm:px-[90px] xl:px-[200px]">
        <div className="flex flex-col-reverse">
          <img src={logo_alt} width={300} className="self-center"/>
          <div className="flex flex-row justify-center lg:py-4 py-12 gap-8">
            <ul className="text text-white font-medium flex flex-col gap-3">
              <li className="px-0 py-0"><NavLink to="/">Homepage</NavLink></li>
              <li className="px-0 py-0"><NavLink to="/About">About</NavLink></li>
              <li className="px-0 py-0"><NavLink to="/Products">Products</NavLink></li>
              <li className="px-0 py-0"><NavLink to="/Contact">Contact Us</NavLink></li>
            </ul>
            <ul className="text text-white font-medium flex flex-col gap-4">
              <li>
                <li>Address</li>
                <li className="text-[.75rem] font-thin">ABC Street 123, City, State,<br/> Country - 100203</li>
              </li>
              <li>
                <li>Phone Number</li>
                <li className="text-[.75rem] font-thin">+91 22xxx 33xxx</li>
              </li>
              <li>
                <li>Email</li>
                <li className="text-[.75rem] font-thin">example@example.com</li>
              </li>
              <li>
                <li><div onClick={handleWhatsAppClick}>Whatsapp</div></li>
              </li>
            </ul>
          </div>
        </div>
        <form className="flex flex-col font-Inter sm:text-sm text-xs" action="" method="POST" style={{ flex: 4/6 }}>
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
      <div className="border-t-[0.07rem] border-white h-16 flex flex-col justify-center px-2 py-4 items-center">
        <p className="text-white text-xs">Copyright © 2023, Design Image - All Rights Reserved. Icons by <u><a target="_blank" href="https://icons8.com/">Icons8</a></u></p>
      </div>
    </div>
  )
}

export default Footer
