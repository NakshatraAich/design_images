import { logo_alt } from "../assets"

const Stretch = () => {
  return (
    <section className="px-[50px] sm:px-[90px] xl:px-[160px] py-8 sm:py-16 lg:py-32 bg-brandColor flex flex-col xl:flex-row items-center xl:gap-20 justify-between tracking-widest">
        <img src={logo_alt} width={400} className="xl:block hidden"/>
        <div className="text sm:text-xl lg:text-3xl text-white font-semibold">
        Leading innovators in glass plates for modular switches. Trusted for quality, value, and service.<br className="xl:block hidden"/>
        </div>
    </section>
  )
}

export default Stretch