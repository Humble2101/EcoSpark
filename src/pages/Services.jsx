import { GiFamilyHouse } from "react-icons/gi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LuArmchair } from "react-icons/lu";
import { GiRedCarpet } from "react-icons/gi";
import { GiCrackedGlass } from "react-icons/gi";
import { LuConstruction } from "react-icons/lu";

import React from "react";

function Services() {
  return (
    <div className="h-[130vh] bg-[#0000001A] flex flex-col items-center justify-around">
      <div className="flex flex-col justify-between h-[12vh] items-center">
        <p className=" text-[#00558E]  font-bold">WHAT WE DO</p>
        <p className="text-2xl font-black">
          Outstandong <span className="text-[#00558E]">Service</span> Makes the
          Difference
        </p>
      </div>
      <div className="flex flex-wrap w-[80vw] h-[100vh] justify-around">
        <div className="h-[40vh] w-[22vw] shadow-2xl rounded-2xl flex flex-col items-center justify-around">
          <GiFamilyHouse className="text-8xl text-[#00558E]" />
          <p className="font-bold text-lg">House Cleaning</p>
          <p className="w-[16vw] font-medium">
            Taking the initiate to give your home a perfect touch
          </p>
        </div>
        <div className="h-[40vh] w-[22vw] shadow-2xl rounded-2xl flex flex-col items-center justify-around">
          <HiOutlineBuildingOffice2 className="text-8xl text-[#00558E]" />
          <p className="font-bold text-lg">Office Cleaning</p>
          <p className="w-[16vw] Office-medium">
            Ensures that all offices, entrances and rooms are kept clean on
            daily basis.
          </p>
        </div>
        <div className="h-[40vh] w-[22vw] shadow-2xl rounded-2xl flex flex-col items-center justify-around">
          <LuArmchair className="text-8xl text-[#00558E]" />
          <p className="font-bold text-lg">Furniture Cleaning</p>
          <p className="w-[16vw] font-medium">
            Providing a deep and thorough cleaning pf your upholstery.
          </p>
        </div>
        <div className="h-[40vh] w-[22vw] shadow-2xl rounded-2xl flex flex-col items-center justify-around">
          <LuConstruction className="text-8xl text-[#00558E]" />
          <p className="font-bold text-lg">Construction Cleaning</p>
          <p className="w-[16vw] font-medium">
            intensive cleaning of both the interior and exterior of a property.
          </p>
        </div>
        <div className="h-[40vh] w-[22vw] shadow-2xl rounded-2xl flex flex-col items-center justify-around">
          <GiRedCarpet className="text-8xl text-[#00558E]" />
          <p className="font-bold text-lg">Carpet Cleaning</p>
          <p className="w-[16vw] font-medium">
            removal of stains dirty and allergens from carpets by name of
            vaccuming and the likes.
          </p>
        </div>
        <div className="h-[40vh] w-[22vw] shadow-2xl rounded-2xl flex flex-col items-center justify-around">
          <GiCrackedGlass className="text-8xl text-[#00558E]" />
          <p className="font-bold text-lg">Glass Cleaning</p>
          <p className="w-[16vw] font-medium">
            Perfect washing and cleaning of glasses windows and surfaces to
            remove dust and other substances.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
