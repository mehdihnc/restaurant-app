import React from "react";
import Delivery from "../img/delivery.png";
import Herobg from '../img/heroBg.png'
import I1 from "../img/i1.png"
import { heroData } from "../utils/data";





const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2  gap-2 w-full" id="home">
      <div className=" py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Livraison à domicile
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="bike"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          Le meilleur traiteur à{" "}
          <span className="text-orange-600 lg:text-[5rem] text-[3rem]">
            Aurillac
          </span>
        </p>

        <p className="text-base text-textColor  text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error illum
          nisi assumenda iusto animi molestiae debitis ut numquam sunt, ullam,
          nam incidunt, corporis possimus fugit laborum rerum cum eum quod?
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 md:w-auto w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Commander
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img src={Herobg} className="ml-auto h-420 w-full lg:w-auto lg:h-650" alt="hero-bg" />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-25 py-4 gap-4 flex-wrap">
            {heroData && heroData.map(n =>(
                <div key={n.id} className="   lg-190 min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex  flex-col items-center justify-center drop-shadow-lg">
                <img src={n.imageSrc} className=" w-20  lg:w-40 -mt-10 lg:-mt-20" alt="icecream" />
                <p className=" text-base lg:text-xl text-textColor font-semibold mt-2 lg:mt-4">{n.name}</p>
                <p className=" text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">{n.decp}</p>
                <p className="text-sm font-semibold text-headingColor">{n.price}<span className="text-xs text-red-600">€</span></p>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
