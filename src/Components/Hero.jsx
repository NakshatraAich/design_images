import { switch_1 } from "../assets"

const Hero = () => {
  return (
    <section className="flex flex-row px-[160px] justify-between items-center tracking-widest py-4">
        <div className="flex flex-col gap-12 pb-16">
            <div className="flex flex-col gap-2">
                <div className="text-6xl text-textColor font-semibold">Lorem ipsum<br/> dolor sit amet.</div>
                <div className="text-lg text-altTextColor font-regular">Lorem ipsum dolor sit amet. Lorem ipsum <br/> dolor sit amet.</div>
            </div>
            <button className="btn text-brandColor font-semibold border-0 bg-alertColor hover:bg-[#2e9d71] rounded-full w-[200px]">See Our Products</button>
        </div>
        <div className="pr-4">
            <img src={switch_1} width={570}/>
        </div>
    </section>
  )
}

export default Hero