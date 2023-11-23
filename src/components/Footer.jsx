import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import React from "react";
import ecospark from "../assets/ecospark.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div
        className=" h-[60vh]
      lg:h-[70vh] w-[100%] bg-[#00558E]"
      >
        <div className="border-b-2 border-white h-[60vh] flex items-center justify-around">
          <div className="flex flex-col w-[40vw] items-center justify-around h-[40vh]">
            <img src={ecospark} alt="" className="lg:w-[10vw] w-[22vw]" />
            <p className="font-semibold text-xl text-white lg:w-[21vw] w-[30vw]">
              We Clean <span className="text-[#EDC954]">Corners</span>, We Do
              Not Cut Them.
            </p>
            <div className="flex md:w-[30vw] w-[35vw] justify-between">
              <div className="bg-[#EDC954] lg:w-[5vw] w-[8vw] md:w-[7vw] lg:h-[11vh] md:h-[5.5vh] h-[4vh] rounded-full flex items-center justify-center text-2xl">
                <BsFacebook className="text-black" />
              </div>
              <div className="bg-[#EDC954] lg:w-[5vw] w-[8vw] md:w-[7vw] lg:h-[11vh] md:h-[5.5vh] h-[4vh] rounded-full flex items-center justify-center text-2xl">
                <RiTwitterXFill className="text-black" />
              </div>
              <div className="bg-[#EDC954] lg:w-[5vw] w-[8vw] md:w-[7vw] lg:h-[11vh] md:h-[5.5vh] h-[4vh] rounded-full flex items-center justify-center text-2xl">
                <BsInstagram className="text-black" />
              </div>
              <div className="bg-[#EDC954] lg:w-[5vw] w-[8vw] md:w-[7vw] lg:h-[11vh] md:h-[5.5vh] h-[4vh] rounded-full flex items-center justify-center text-2xl">
                <FaLinkedin className="text-black" />
              </div>
            </div>
          </div>
          <div className="md:w-[25vw] w-[33vw]">
            <p className="text-white text-2xl font-semibold">Quick Links</p>
            <nav className="flex flex-col justify-around lg:h-[40vh]  md:h-[30vh] h-[44vh] text-white">
              <NavLink to="/" className="navs">
                Home
              </NavLink>
              <NavLink to="/about" className="navs">
                About
              </NavLink>
              <NavLink to="/services" className="navs">
                Services
              </NavLink>
              <NavLink to="/pricing" className="navs">
                Pricing
              </NavLink>
              <NavLink to="/contact" className="navs">
                Contact Us
              </NavLink>
              <NavLink to="/signin" className="navs">
                Signin
              </NavLink>
              <NavLink to="/signup" className="navs">
                Signup
              </NavLink>
            </nav>
          </div>
          <div className="w-[25vw]">
            <p className="text-white text-2xl font-semibold">Services</p>
            <nav className="flex flex-col justify-around lg:h-[40vh] md:h-[30vh] h-[44vh] text-white">
              <p>House Cleaning</p>
              <p>Office Cleaning</p>
              <p>Furniture Cleaning </p>
              <p> Construction Cleaning</p>
              <p>Carpet Cleaning</p>
              <p>Glass Cleaning</p>
            </nav>
          </div>
        </div>
        <div className="flex items-center justify-center py-[1em]">
          <p className="text-white text-lg">
            Copyright &#169; 2023 ecoSpak. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
