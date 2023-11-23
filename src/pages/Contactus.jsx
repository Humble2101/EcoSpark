import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import React from "react";

const Contact = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="OverlayModal pl-[12em]">
      <div className="w-[25vw] h-[60vh] bg-[#00558E] absolute left-[17em] rounded-2xl flex justify-around flex-col">
        <div>
          <p className="font-bold text-2xl text-white ml-[2em] ">Contact Us</p>
        </div>
        <div className="w-[20vw] flex text-[white] items-center text-lg ml-8">
          <FaLocationDot />
          <p className="relative left-[2em]">2nd Lorem Impsum Street</p>
        </div>
        <div className="w-[20vw] flex text-[white] items-center text-lg ml-8">
          <MdEmail />
          <p className="relative left-[2em]">example@gmail.com</p>
        </div>
        <div className="w-[20vw] flex text-[white] items-center text-lg ml-8">
          <BsFillTelephoneFill />
          <p className="relative left-[2em]">+2347087657868</p>
        </div>
        <div className="w-[15vw] flex justify-around ml-[1em]">
          <div className="bg-[#EDC954] w-[2vw] h-[4vh] rounded-full flex items-center justify-center text-xl">
            <BsFacebook className="text-black" />
          </div>
          <div className="bg-[#EDC954] w-[2vw] h-[4vh] rounded-full flex items-center justify-center text-xl">
            <RiTwitterXFill className="text-black" />
          </div>
          <div className="bg-[#EDC954] w-[2vw] h-[4vh] rounded-full flex items-center justify-center text-xl">
            <BsInstagram className="text-black" />
          </div>
          <div className="bg-[#EDC954] w-[2vw] h-[4vh] rounded-full flex items-center justify-center text-xl">
            <FaLinkedin className="text-black" />
          </div>
        </div>
      </div>
      <div
        className="ModalContent h-[80vh] w-[50vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col justify-around h-[75vh] pt-9 relative left-[15em]">
          <div className="flex flex-col justify-between h-[75vh]">
            <h3 className="font-bold text-xl text-[#00558E] flex">
              Get in Touch{" "}
              <p
                onClick={onClose}
                className="cursor-pointer flex items-center justify-end  w-[31vw] relative right-[5em] bottom-10 text-black text-2xl font-bold"
              >
                x
              </p>
            </h3>
            <p className="py-4 font-semibold">
              {/* Fell free to drop us a line below */}
            </p>
            <input
              type="name"
              placeholder="Your Name"
              className=" h-[10vh] w-[30vw] bg-[#00000029] rounded-3xl pl-[2em]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className=" h-[10vh] w-[30vw] bg-[#00000029] rounded-3xl pl-[2em]"
            />

            <textarea
              cols="30"
              rows="10"
              maxlength="100"
              className=" h-[20vh] w-[30vw] bg-[#00000029] rounded-3xl pl-[2em]"
            ></textarea>

            <button className="bg-[#EDC954] w-[7vw] h-[6vh] rounded-3xl text-lg font-bold ">
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
