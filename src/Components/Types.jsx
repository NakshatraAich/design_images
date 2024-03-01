import {taj, switch_2, switch_3} from "../assets";

const Types = () => {
  return (
    <section className="px-[160px] flex flex-col tracking-wider py-20">
        <h1 className="text-4xl text-textColor font-semibold">Lorem ipsum dolor sit amet,<br/> consectetur.</h1>
        <h2 className="text-lg text-altTextColor pt-2">Lorem ipsum dolor sit amet, consectetur.</h2>
        <div className="flex flex-row justify-evenly gap-12 px-16 pt-8">
            <div className="flex flex-col">
                <img src={taj} width={300}/>
                <div className="text-textColor text-xl font-semibold pt-2">Touch Switch/Panel Glasses</div>
                <div className="text-altTextColor text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</div>
                <button className="btn text-brandColor border-0 w-fit px-10 mt-8 text-semibold bg-alertColor hover:bg-[#2e9d71] rounded-full">See More</button>
            </div>
            <div className="flex flex-col">
                <img src={switch_2} width={300}/>
                <div className="text-textColor text-xl font-semibold pt-2">Touch Switch/Panel Glasses</div>
                <div className="text-altTextColor text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</div>
                <button className="btn text-brandColor border-0 w-fit px-10 mt-8 text-semibold bg-alertColor hover:bg-[#2e9d71] rounded-full">See More</button>
            </div>
            <div className="flex flex-col">
                <img src={switch_3} width={300}/>
                <div className="text-textColor text-xl font-semibold pt-2">Touch Switch/Panel Glasses</div>
                <div className="text-altTextColor text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</div>
                <button className="btn text-brandColor border-0 w-fit px-10 mt-8 text-semibold bg-alertColor hover:bg-[#2e9d71] rounded-full">See More</button>
            </div>
        </div>
    </section>
  )
}

export default Types