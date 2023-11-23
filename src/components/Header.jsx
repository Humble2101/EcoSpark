import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import logo from "../assets/logo.png";

function Header() {
  const [toggleMenu, settoggleMenu] = useState("h-0");

  const clickMenu = () => {
    if (toggleMenu === "h-0") {
      settoggleMenu("h-[40vh]");
    } else {
      settoggleMenu("h-0");
    }
  };
  return (
    <div className=" h-[25vh] w-[100%] flex flex-col">
      <div className="header-contact lg:h-[12vh] md:h-[7vh] flex h-[7vh]">
        <div className="w-[50%] md:w-[60%] bg-[#EDC954] flex items-center justify-center">
          <div className="w-[60%] flex items-center justify-between font-semibold">
            <div className=" lg:flex items-center justify-between md:w-[15vw] hidden">
              <FaLocationDot /> <span>2nd lorem impsum street</span>
            </div>
            <div className="email flex items-center justify-between w-[13vw]">
              <MdEmail /> <a href="www.gmail.com">example@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="w-[50%] md:w-[40%] bg-[#00558E] flex items-center justify-center">
          <div className="icons w-[50%] lg:w-[20%] md:w-[35%] flex justify-between items-center">
            <BsFacebook className="text-white" />
            <RiTwitterXFill className="text-white" />
            <BsInstagram className="text-white" />
            <FaLinkedin className="text-white" />
          </div>
        </div>
      </div>
      <div className="header2 lg:h-[12vh] md:h-[8vh] shadow-2xl flex md:justify-around justify-between bg-white h-[7vh]">
        <div className="flex items-center w-[30vw]">
          <img src={logo} alt="" className="hidden md:block" />
          <img src={logo} alt="" className="md:hidden w-[70%] pl-4" />
        </div>
        <nav className="lg:w-[40vw] w-[40vw] md:w-[50vw] md:flex items-center justify-between font-semibold hidden">
          <NavLink to="/" className="nav">
            Home
          </NavLink>
          <NavLink to="/about" className="nav">
            About
          </NavLink>
          <NavLink to="/services" className="nav">
            Services
          </NavLink>
          <NavLink to="/pricing" className="nav">
            Pricing
          </NavLink>
          <NavLink to="/">Contact</NavLink>
          <NavLink to="/signin" className="nav">
            Signin
          </NavLink>
          <NavLink to="/signup" className="nav">
            Signup
          </NavLink>
        </nav>
        <div className="flex items-center justify-center md:w-[30%] md:hidden">
          <BiMenu
            onClick={clickMenu}
            className="text-2xl mt-1 mr-2 font-black"
          />
        </div>
      </div>
      <nav
        className={`${toggleMenu}     w-[40vw] md:w-[40vw] md:h-0  items-center
       md:justify-between grid justify-items-center  bg-[#00558E]  md:
       bg-none md:static absolute  transition-all 
      duration-500 overflow-y-hidden md:overflow-y-visible left-[15em] md:hidden top-[5.8em]  ml-2`}
      >
        <NavLink to="/" className="font-bold text-xl">
          Home
        </NavLink>
        <NavLink to="/about" className="font-bold text-xl">
          About
        </NavLink>
        <NavLink to="/services" className="font-bold text-xl">
          Services
        </NavLink>
        <NavLink to="/pricing" className="font-bold text-xl">
          Pricing
        </NavLink>
        <NavLink to="/contact" className="font-bold text-xl">
          Contact
        </NavLink>
        <NavLink to="/signup" className="font-bold text-xl">
          Sign Up
        </NavLink>
        <NavLink to="/signin" className="font-bold text-xl">
          Sign in
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
