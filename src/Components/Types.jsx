import {taj, switch_2, glass_1} from "../assets";

const Types = () => {

    return (
        <section className="px-[50px] sm:px-[90px] xl:px-[160px] flex flex-col tracking-wider py-20">
            <h1 className="text-2xl sm:text-4xl text-textColor font-semibold">Check out wide array<br className="lg:block hidden"/> of products.</h1>
            <h2 className="text-sm sm:text-lg text-altTextColor pt-2">From switch panels to machinery view glasses</h2>
            <div className="hidden lg:flex flex-row justify-between xl:justify-evenly gap-12 xl:px-16 pt-8">
                <div className="flex flex-col">
                    <img src={taj} width={300}/>
                    <div className="text-textColor text-xl font-semibold pt-2">Touch Switch/Panel Glasses</div>
                    <button className="btn text-brandColor border-0 w-fit px-10 mt-8 text-semibold bg-alertColor hover:bg-[#2e9d71] rounded-full">See More</button>
                </div>
                <div className="flex flex-col">
                    <img src={switch_2} width={300}/>
                    <div className="text-textColor text-xl font-semibold pt-2">Modular Switch Glass Plates</div>
                    <button className="btn text-brandColor border-0 w-fit px-10 mt-8 text-semibold bg-alertColor hover:bg-[#2e9d71] rounded-full">See More</button>
                </div>
                <div className="flex flex-col">
                    <img src={glass_1} width={300}/>
                    <div className="text-textColor text-xl font-semibold pt-2">Touch Switch/Panel Glasses</div>
                    <button className="btn text-brandColor border-0 w-fit px-10 mt-8 text-semibold bg-alertColor hover:bg-[#2e9d71] rounded-full">See More</button>
                </div>
            </div>

            <div className="lg:hidden flex flex-col justify-between xl:justify-evenly gap-12 xl:px-16 pt-8">
                <div id="item1" className="w-full flex flex-col justify-start">
                    <div className="flex flex-col justify-center items-center">
                        <img src={taj} width={300}/>
                        <div className="">
                            <div className="text-textColor text-lg sm:text-xl font-semibold pt-2">Touch Switch/Panel Glasses</div>
                            <button className="btn text-brandColor border-0 w-fit px-10 mt-8 text-semibold bg-alertColor hover:bg-[#2e9d71] rounded-full">See More</button>
                        </div>
                    </div>
                </div>
                <div id="item2" className="w-full flex flex-col justify-start">
                    <div className="flex flex-col justify-center items-center">
                        <img src={switch_2} width={300}/>
                        <div className="">
                            <div className="text-textColor text-lg sm:text-xl font-semibold pt-2">Touch Switch/Panel Glasses</div>
                            <button className="btn text-brandColor border-0 w-fit px-10 mt-8 text-semibold bg-alertColor hover:bg-[#2e9d71] rounded-full">See More</button>
                        </div>
                    </div>
                </div>
                <div id="item3" className="w-full flex flex-col justify-start">
                    <div className="flex flex-col justify-center items-center">
                        <img src={glass_1} width={300}/>
                        <div className="">
                            <div className="text-textColor text-lg sm:text-xl font-semibold pt-2">Touch Switch/Panel Glasses</div>
                            <button className="btn text-brandColor border-0 w-fit px-10 mt-8 text-semibold bg-alertColor hover:bg-[#2e9d71] rounded-full">See More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Types