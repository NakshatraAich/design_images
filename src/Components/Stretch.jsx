import { logo_alt } from "../assets"

const Stretch = () => {
  return (
    <section className="px-[25px] sm:px-[90px] xl:px-[160px] py-8 sm:py-16 lg:py-32 bg-brandColor flex flex-col xl:flex-row items-center xl:gap-20 justify-between tracking-widest">
        <img src={logo_alt} width={400} className="xl:block hidden"/>
        <div className="text sm:text-xl lg:text-3xl text-white font-semibold">
        Design Image Is a manufacturer of glass plates for modular switches in India. We are pioneers in the industry.<br className="xl:block hidden"/>
        </div>
    </section>
  )
}

export default Stretch