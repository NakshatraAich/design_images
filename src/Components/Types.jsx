import { NavLink } from "react-router-dom";
import {taj, switch_2, glass_1} from "../assets";
import { useEffect } from "react";
import { Context } from '../App';
import { useContext } from 'react';

const Types = () => {

    const [activeTab, setActiveTab] = useContext(Context);

    const scrollToHeader = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [activeTab]);
      
        return null;
    };

    return (
        <section className="px-[25px] sm:px-[90px] xl:px-[160px] flex flex-col tracking-wider py-20">
            <h1 className="text-3xl sm:text-4xl text-textColor font-semibold">Check out wide array<br className="lg:block hidden"/> of products.</h1>
            <h2 className="text-sm sm:text-lg text-altTextColor pt-2">From switch panels to Machinery Glasses</h2>
            <div className="hidden lg:flex flex-row justify-between xl:justify-evenly gap-12 xl:px-16 pt-8">
                <div className="flex flex-col">
                    <img src={taj} width={300}/>
                    <div className="text-textColor text-xl font-semibold pt-2">Touch Switch/Panel Glasses</div>
                </div>
                <div className="flex flex-col">
                    <img src={switch_2} width={300}/>
                    <div className="text-textColor text-xl font-semibold pt-2">Modular Switch Glass Plates</div>
                </div>
                <div className="flex flex-col">
                    <img src={glass_1} width={300}/>
                    <div className="text-textColor text-xl font-semibold pt-2">Machinery Glasses</div>
                </div>
            </div>

            <NavLink to="/Products" className="w-full hidden lg:flex flex-col justify-center items-center mt-10" onClick={scrollToHeader}>
                <button className="btn btn-ghost text-brandColor border-0 w-fit px-10  text-semibold font-regular hover:font-semibold rounded-full">See More</button>
            </NavLink>
            
            <div className="lg:hidden hidden md:flex carousel justify-between xl:justify-evenly gap-12 xl:px-16 pt-8">
                <div id="item1" className="carousel-item max-w-[300px] flex flex-col justify-start">
                    <div className="flex flex-col justify-center items-start">
                        <img src={taj} className="w-full"/>
                        <div className="">
                            <div className="text-textColor text-lg sm:text-xl font-semibold pt-2">Touch Switch/Panel Glasses</div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item max-w-[300px] flex flex-col justify-start">
                    <div className="flex flex-col justify-center items-start">
                        <img src={switch_2} className="w-full"/>
                        <div className="">
                            <div className="text-textColor text-lg sm:text-xl font-semibold pt-2">Touch Switch/Panel Glasses</div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item max-w-[300px] flex flex-col justify-start">
                    <div className="flex flex-col justify-center items-start">
                        <img src={glass_1} className="w-full"/>
                        <div className="">
                            <div className="text-textColor text-lg sm:text-xl font-semibold pt-2">Machinery Glasses</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:hidden flex flex-col items-center sm:carousel carousel-vertical carousel-center justify-between xl:justify-evenly gap-12 xl:px-16 pt-8">
                <div id="item1" className="carousel-item max-w-[300px] flex flex-col justify-start">
                    <div className="flex flex-col justify-center items-start">
                        <img src={taj} className="w-full"/>
                        <div className="">
                            <div className="text-textColor text-lg sm:text-xl font-semibold pt-2">Touch Switch/Panel Glasses</div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item max-w-[300px] flex flex-col justify-start">
                    <div className="flex flex-col justify-center items-start">
                        <img src={switch_2} className="w-full"/>
                        <div className="">
                            <div className="text-textColor text-lg sm:text-xl font-semibold pt-2">Touch Switch/Panel Glasses</div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item max-w-[300px] flex flex-col justify-start">
                    <div className="flex flex-col justify-center items-start">
                        <img src={glass_1} className="w-full"/>
                        <div className="">
                            <div className="text-textColor text-lg sm:text-xl font-semibold pt-2">Machinery Glasses</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <NavLink to="/Products" className=" w-full lg:hidden flex flex-col justify-center items-center" onClick={scrollToHeader}>
                <button className="btn btn-ghost text-brandColor border-0 w-fit px-10 mt-8 text-semibold font-regular hover:font-semibold rounded-full">See More</button>
            </NavLink>

        </section>
    )
}

export default Types