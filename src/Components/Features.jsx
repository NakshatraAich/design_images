import { bulb, award, customer } from "../assets";

const Features = () => {
  return (
    <section className="flex xl:flex-row flex-col justify-between px-[25px] sm:px-[90px] xl:px-[160px] tracking-widest py-32 bg-[#D9D9D9] gap-12">
        <div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-textColor leading-30 pb-2 sm:pb-5">Why Design Images?</h1>
            <h2 className="text-sm sm:text-lg text-altTextColor"> Elevate your experience with innovative designs, uncompromising quality, and customer-centric service.</h2>
        </div>
        <div className="flex flex-col justify-between gap-8">
            <div className="flex flex-row items-center gap-4">
                <img src={ bulb } className="rotate-180 w-[100px] h-[64px]"/> 
                <div className="text-altTextColor text-sm sm:text-lg"><span className="font-bold">Innovative Designs:</span> <br/> Design Image offers a range of cutting-edge designs for glass plates, setting new standards in the industry for aesthetics and functionality.</div>  
            </div>
            <div className="flex flex-row items-center gap-4">
                <img src={ award } className="w-[100px] h-[64px]"/> 
                <div className="text-altTextColor text-sm sm:text-lg"><span className="font-bold">Superior Quality:</span> <br/> With a relentless focus on quality control and materials, Design Image ensures that every glass plate produced meets the highest standards of durability and performance.</div>  
            </div>
            <div className="flex flex-row items-center gap-4">
                <img src={ customer } className="w-[100px] h-[64px]"/> 
                <div className="text-altTextColor text-sm sm:text-lg"><span className="font-bold">Customer-Centric Approach:</span> <br/> Design Image prioritizes customer satisfaction, providing excellent service and support to ensure a seamless experience from selection to installation.</div>  
            </div>
        </div>
    </section>
  )
}

export default Features