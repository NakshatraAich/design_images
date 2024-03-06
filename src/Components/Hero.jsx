import { switch_1 } from "../assets"
import { NavLink } from "react-router-dom"

const Hero = () => {
  return (
    <section className="flex flex-col-reverse xl:flex-row px-[30px] sm:px-[90px] xl:px-[160px] justify-between items-center tracking-widest pt-20 pb-20">
        <div className="flex flex-col gap-8 sm:gap-12 xl:self-center self-start">
            <div className="flex flex-col gap-4">
                <div className="text-4xl sm:text-6xl text-textColor font-semibold">Welcome to<br className="xl:block hidden"/>  Design Image</div>
                <div className="text sm:text-lg text-altTextColor font-regular">Discover design excellence <br className="xl:block hidden"/> and ingenuity.</div>
            </div>
            <NavLink to="/Products"><button className="btn px-12 w-fit text-white font-semibold border-0 bg-brandColor hover:bg-[#1d4e29] rounded-full">See Our Products</button></NavLink>
        </div>
        <div className="pr-4">
            <img src={switch_1} width={570}/>
        </div>
    </section>
  )
}

export default Hero