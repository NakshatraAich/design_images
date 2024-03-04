import { switch_1 } from "../assets"
import { NavLink } from "react-router-dom"

const Hero = () => {
  return (
    <section className="flex flex-col-reverse xl:flex-row px-[30px] sm:px-[90px] xl:px-[160px] justify-between items-center tracking-widest xl:py-4 pt-4 pb-16">
        <div className="flex flex-col gap-8 sm:gap-12 xl:pb-16 xl:self-center self-start">
            <div className="flex flex-col gap-2">
                <div className="text-4xl sm:text-6xl text-textColor font-semibold">Elevate with<br className="xl:block hidden"/>  Elegance</div>
                <div className="text sm:text-lg text-altTextColor font-regular">Discover design excellence in every switch<br className="xl:block hidden"/> with Design Image's glass plates.</div>
            </div>
            <NavLink to="/Products"><button className="btn px-12 h-8 w-fit text-brandColor font-semibold border-0 bg-alertColor hover:bg-[#2e9d71] rounded-full">See Our Products</button></NavLink>
        </div>
        <div className="pr-4">
            <img src={switch_1} width={570}/>
        </div>
    </section>
  )
}

export default Hero