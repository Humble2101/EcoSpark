import React from "react";
import faironyellow from "../assets/faironyellow.jpg";
import smilegirl from "../assets/smilegirl.jpg";
import { ImCheckmark } from "react-icons/im";

function About() {
  return (
    <div className="h-[120vh] flex flex-col justify-around items-center">
      <div className="flex  justify-around items-center">
        <div className="flex w-[40vw]">
          <img
            src={faironyellow}
            alt=""
            className="w-[20vw] h-[53vh] rounded-2xl absolute bottom-[6em]"
          />
          <img
            src={smilegirl}
            alt=""
            className="w-[20vw] h-[53vh] rounded-2xl absolute top-[25em] left-[19em]"
          />
          <div className="w-[13vw] h-[17vh] rounded-2xl shadow-2xl flex flex-col items-center justify-around absolute bg-[white] top-[30em] left-[13em]">
            <p className="font-black text-2xl text-[#00558E]">2+</p>
            <p className="text-[#00558E] text-lg font-semibold">
              Years Experience
            </p>
          </div>
        </div>
        <div className="w-[40vw] flex flex-col  justify-around h-[70vh]">
          <p className="text-[#00558E] font-bold">ABOUT US</p>
          <p className="text-2xl font-bold w-[20vw]">
            We Create the Perfect <span className="text-[#00558E]">Shine</span>{" "}
            Every Time
          </p>
          <div className="flex items-center justify-between w-[25vw]">
            <span className="h-[5vh] w-[3vw] ">
              <ImCheckmark className="bg-[#00558E] text-white" />
            </span>
            <span className="font-medium">
              Loaded with Professional and Honest Cleaners
            </span>
          </div>
          <div className="flex items-center justify-between w-[25vw]">
            <span className="h-[5vh] w-[3vw] ">
              <ImCheckmark className="bg-[#00558E] text-white" />
            </span>
            <span className="w-[24vw] font-medium">
              Provide the Finest Cleaning Supplies
            </span>
          </div>
          <div className="flex items-center justify-between w-[25vw]">
            <span className="h-[5vh] w-[3vw] ">
              <ImCheckmark className="bg-[#00558E] text-white" />
            </span>
            <span className="w-[24vw] font-medium">
              100% Satisfaction Cleaning Service
            </span>
          </div>
          <div className="flex items-center justify-between w-[25vw]">
            <span className="h-[5vh] w-[3vw] ">
              <ImCheckmark className="bg-[#00558E] text-white" />
            </span>
            <span className="w-[24vw] font-medium">
              We are bonded and insured
            </span>
          </div>
        </div>
      </div>
      <div>
        <p className="w-[80vw] font-medium">
          Founded in 2021, specializing in multiple areas of Resident and
          Commercial cleaning services, ecoSpak has an eye for detail and the
          dedication to ensure that you are 100% sertisfied!
        </p>
        <p className="w-[80vw] font-medium">
          EcoSpak was founded in the hopes of providing the best quality
          cleaning services to families and firms all over Abia State. We know
          that in trying times, aclean environment can make all the difference
        </p>
      </div>
    </div>
  );
}

export default About;
