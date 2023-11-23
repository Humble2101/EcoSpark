import React from "react";
import { VscThumbsup } from "react-icons/vsc";
import { BsShieldCheck } from "react-icons/bs";
import housecleaner from "../assets/housecleaner.jpg";
import smilingmanspray from "../assets/smilingmanspray.jpg";
import team from "../assets/team.jpg";
import youngafrican from "../assets/youngafrican.jpg";
import sittingroom from "../assets/sittingroom.jpg";
import cleaning from "../assets/cleaning.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { IoStar } from "react-icons/io5";
import flexibletime from "../assets/flexibletime.png";
import screened from "../assets/screened.png";
import competitive from "../assets/competitive.png";
import Cjayz from "../assets/Cjayz.jpg";
import iceman from "../assets/iceman.jpg";
import obed from "../assets/obed.jpg";
import Kingsley from "../assets/Kingsley.jpeg";
import jenny from "../assets/jenny.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* the first container with the "Professional Cleaning Service for Your Home and the girl smiling" */}
      <div className="lg:h-[100vh] h-[70vh] flex w-[100%] lg:flex-row flex-col ">
        <div className="lg:w-[40vw] w-[100%] lg:h-[60vh] h-[15vh] flex items-center justify-center ">
          <div className="lg:w-[35vw] w-[90%] lg:h-[40vh] h-[10vh] flex  justify-between flex-col lg:mt-20">
            <b className="text-[#00558E] md:text-2xl text-xs">WE ARE ECOSPAK</b>
            <p className="font-bold md:text-4xl font-serif">
              Professional Cleaning Service For Your Home
            </p>
            {/* desktop view */}
            <p className="font-semibold text-sm lg:text-base md:block hidden justify-center md:text-2xl">
              Let our certified staff sweat the details so you dont have to.
            </p>
            <button className="h-[8vh] lg:w-[13vw] md:w-[12vw] w-[30vw] bg-[#EDC954] rounded-full text-lg font-semibold md:text-xl md:font-bold lg:block hidden ">
              Get Started
            </button>
          </div>
        </div>
        <div className="lg:w-[60vw] md:w-[100%] w-[100%] flex items-center justify-center ">
          <img
            src={housecleaner}
            alt="housecleaner"
            className="rounded-tl-[100px] rounded-bl-[250px] lg:rounded-bl-[300px] rounded-tr-[100px] rounded-br-[250px] md:rounded-br-none lg:rounded-tr-none lg:w-[60vw] md:w-[90vw] w-[90vw] h-[40vh] lg:h-[90vh] md:h-[60vh] md:relative lg:top-0 md:top-[6em]"
          />
        </div>
        {/* mobile view  */}
        <div className="h-[13vh] md:w-[80vw] w-[100%] flex items-center justify-between flex-col md:hidden">
          <p className="font-semibold text-sm md:hidden flex justify-center text-center md:w-[80vw] w-[100%]">
            Let our certified staff sweat the details so you dont have to.
          </p>
          <button className="h-[6vh] md:w-[20vw] w-[30vw] bg-[#EDC954] rounded-full text-lg font-semibold block md:hidden">
            Get Started
          </button>
        </div>
      </div>

      {/* the second container with "why choose our service provider and the smiling guy holding a spray" */}

      <div className="flex items-center justify-around md:flex-row flex-col lg:h-[100vh] md:h-[125vh]">
        <div className="h-[70vh] flex items-center flex-col md:pr-0 md:w-[40vw] lg:flex md:hidden">
          <div className=" md:w-[40vw] md:h-[20vh] flex flex-col justify-between md:hidden lg:flex">
            <p className="text-md md:text-xl font-bold text-[#00558E] flex items-center justify-center md:block md:pl-7 ">
              WHY CHOOSE US?
            </p>
            <p className="md:text-4xl text-[xl] font-bold md:w-[30vw] w-[90vw] flex items-center justify-center md:block md:pl-7 ">
              Why Choose Our Service Provider
            </p>
          </div>
          <div className="flex items-center justify-around flex-col md:h-[50vh] h-[40vh] md:pr-[150px] w-[100%]">
            <div className="flex justify-between items-center md:w-[30vw] w-[95vw]">
              {/* the icons */}
              <div className="md:w-[21vw] text-sm font-semibold items-center flex flex-col w-[80vw]">
                <VscThumbsup className="text-5xl font-bold text-[#00558E] h-[10vh]" />
                Satisfaction Gauranteed
              </div>
              <div className="md:w-[21vw] text-sm font-semibold items-center flex flex-col w-[80vw] pt-5">
                <img src={screened} alt="" />
                Screened & Trained Team
              </div>
            </div>
            <div className="flex justify-between md:w-[30vw] w-[90vw] items-center">
              <div className="md:w-[21vw] text-sm font-semibold items-center flex flex-col w-[80vw]">
                <img src={flexibletime} alt="" />
                Flexible Arival Time
              </div>
              <div className="md:w-[21vw] text-sm font-semibold items-center flex flex-col w-[80vw]">
                <img src={competitive} alt="" />
                Competitive Pricing
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:bottom-0 md:hidden lg:flex">
          <img
            src={smilingmanspray}
            alt="spray"
            className="md:rounded-[40px] md:w-[60vw]"
          />
        </div>
        <div className="hidden lg:hidden md:flex h-[100vh] w-[100%] items-center justify-center flex-col">
          <div className=" w-[100%] h-[20vh] flex flex-col justify-center">
            <p className="text-md text-xl font-bold text-[#00558E] flex items-center justify-center ">
              WHY CHOOSE US?
            </p>
            <p className="text-4xl  font-bold w-[90vw] flex items-center justify-center">
              Why Choose Our Service Provider
            </p>
          </div>
          <div className="relative md:bottom-0 md:flex lg:hidden w-[90%] justify-center">
            <img
              src={smilingmanspray}
              alt="spray"
              className="md:rounded-[40px] md:w-[98%]"
            />
          </div>
          <div className="md:flex text-md items-center justify-around  md:h-[50vh]  w-[100%] lg:hidden hidden">
            {/* the icons */}
            <div className="md:w-[21vw] text-md font-semibold items-center flex flex-col">
              <VscThumbsup className="text-5xl font-bold text-[#00558E] h-[15vh]" />
              <p className="relative bottom-[3em]"> Satisfaction Gauranteed</p>
            </div>
            <div className="md:w-[21vw] text-md font-semibold items-center flex flex-col w-[80vw] pt-5 text-center">
              <img src={screened} alt="" />
              Screened & Trained Team
            </div>

            <div className="md:w-[21vw] text-md font-semibold items-center flex flex-col w-[80vw]">
              <img src={flexibletime} alt="" />
              Flexible Arival Time
            </div>
            <div className="md:w-[21vw] text-md font-semibold items-center flex flex-col w-[80vw]">
              <img src={competitive} alt="" />
              Competitive Pricing
            </div>
          </div>
        </div>
        <div className="bg-[#00558E] md:h-[15vh] h-[10vh] lg:w-[10vw] md:w-[25vw] w-[30vw] md:absolute relative bottom-[230px] md:left-[480px] lg:top-[1050px] md:top-[1400px] rounded-2xl flex items-center justify-center flex-col text-white left-[120px]">
          <p className="font-black lg:text-3xl text-3xl md:text-5xl">500+</p>
          <p className="font-semibold md:text-xl">Customers</p>
        </div>
      </div>
      {/* third container for our expert team */}
      <div className="h-[63vh] lg:h-[180vh] md:h-[105vh]">
        <div className="h-[20vh] md:h-[50vh] bg-[#00558E] items-center flex justify-center relative md:bottom-0 bottom-[4.6em]">
          <div className="flex flex-col items-center relative md:bottom-20">
            <p className="text-[#EDC954] font-bold md:text-2xl">Our Team</p>
            <p className="text-white font-bold text-2xl md:text-5xl">
              Our Expert Team
            </p>
          </div>
        </div>
        {/* desktop view */}
        <div className="relative md:bottom-[200px]">
          <div className="lg:flex flex-wrap items-center justify-around h-[125vh] hidden ">
            <div>
              <img src={team} alt="team" className="w-[28vw] rounded-3xl" />
              <p className="flex items-center justify-center font-medium text-3xl">
                Humble Johns
              </p>
              <p className="flex items-center justify-center font-semibold text-[gray]">
                House Cleaning
              </p>
            </div>
            <div>
              <img
                src={Cjayz}
                alt="team"
                className="w-[28vw] h-[48vh] rounded-3xl"
              />
              <p className="flex items-center justify-center font-medium text-3xl">
                CJay
              </p>
              <p className="flex items-center justify-center font-semibold text-[gray]">
                Office Cleaning
              </p>
            </div>
            <div>
              <img
                src={iceman}
                alt="team"
                className="w-[28vw] h-[48vh]  rounded-3xl"
              />
              <p className="flex items-center justify-center font-medium text-3xl">
                Iceman
              </p>
              <p className="flex items-center justify-center font-semibold text-[gray]">
                Furniture Cleaning
              </p>
            </div>
            <div>
              <img
                src={obed}
                alt="team"
                className="w-[28vw] h-[48vh]  rounded-3xl"
              />
              <p className="flex items-center justify-center font-medium text-3xl">
                Obed Marcel
              </p>
              <p className="flex items-center justify-center font-semibold text-[gray]">
                Construction Cleaning
              </p>
            </div>
            <div>
              <img
                src={jenny}
                alt="team"
                className="w-[28vw] h-[48vh]  rounded-3xl"
              />
              <p className="flex items-center justify-center font-medium text-3xl">
                Jenny Osita
              </p>
              <p className="flex items-center justify-center font-semibold text-[gray]">
                Carpet Cleaning
              </p>
            </div>
            <div>
              <img
                src={Kingsley}
                alt="team"
                className="w-[28vw] h-[48vh]  rounded-3xl"
              />
              <p className="flex items-center justify-center font-medium text-3xl">
                George Frank
              </p>
              <p className="flex items-center justify-center font-semibold text-[gray]">
                Glass Cleaning
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center relative top-16">
            <Link
              to="/team"
              className="h-[10vh] md:w-[20vw] w-[30vw] bg-[#EDC954] rounded-full text-2xl font-bold  flex items-center justify-center "
            >
              Join Our Team
            </Link>
          </div>
          <div className="carousel w-full lg:hidden relative bottom-[10em]">
            <div id="item1" className="carousel-item w-full">
              <img src={team} className="w-full h-[70%]" />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img src={Cjayz} className="w-full h-[70%]" />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img src={iceman} className="w-full h-[70%]" />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img src={obed} className="w-full h-[70%]" />
            </div>
            <div id="item5" className="carousel-item w-full">
              <img src={jenny} className="w-full h-[70%]" />
            </div>
            <div id="item6" className="carousel-item w-full">
              <img src={Kingsley} className="w-full h-[70%]" />
            </div>
          </div>
          <div className="md:flex justify-center w-full py-2 gap-2 hidden lg:hidden relative bottom-[26em] ">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
            <a href="#item5" className="btn btn-xs">
              5
            </a>
            <a href="#item6" className="btn btn-xs">
              6
            </a>
          </div>
        </div>
      </div>
      {/* ecopark working space */}
      <div className="md:h-[100vh] h-[70vh] flex flex-col items-center justify-around bg-slate-200">
        <div className="w-[100%] md:h-[13vh] h-[11vh] flex flex-col  justify-between">
          <p className="text-lg text-[#00558E] font-medium px-16">
            HOW WE WORK
          </p>
          <p className="text-xl font-bold px-16 w-[90%]">
            ecoSpak Working Process
          </p>
        </div>
        <div className="lg:flex justify-around w-[100%] hidden">
          <img
            src={youngafrican}
            alt="youngafrican"
            className="w-[25vw] h-[35vh] rounded-2xl"
          />
          <img
            src={cleaning}
            alt="cleaning"
            className="w-[25vw] h-[35vh] rounded-2xl"
          />
          <img
            src={sittingroom}
            alt="furniture"
            className="w-[25vw] h-[35vh] rounded-2xl"
          />
        </div>
        <div className="flex items-center justify-center  ">
          <div className="w-[80vw] lg:flex items-center justify-around hidden">
            <div className="bg-[#EDC954] w-[5vw] h-[11vh] rounded-full flex items-center justify-center font-bold text-2xl">
              1
            </div>
            <div className="w-[25vw] flex items-center justify-around">
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
            </div>
            <div className="bg-[#EDC954] w-[5vw] h-[11vh] rounded-full flex items-center justify-center font-bold text-2xl">
              2
            </div>
            <div className="w-[25vw] flex items-center justify-around">
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
              <div className="text-2xl font-black">.</div>
            </div>
            <div className="bg-[#EDC954] w-[5vw] h-[11vh] rounded-full flex items-center justify-center font-bold text-2xl">
              3
            </div>
          </div>
        </div>
        <div className="lg:flex text-lg font-medium  w-[86vw]  justify-between hidden">
          <span>Choose a Cleaning Plan</span>
          <span>We Clean</span>
          <span>Back to Comfortable</span>
        </div>
        <div className="carousel w-full lg:hidden relative top-4">
          <div id="items1" className="carousel-item w-full flex flex-col">
            <img src={youngafrican} className="w-full h-[70%]" />
            <span className="flex item-center justify-center text-lg">
              Choose a Cleaning Plan
            </span>
          </div>
          <div id="items2" className="carousel-item w-full flex flex-col">
            <img src={cleaning} className="w-full h-[70%]" />
            <span className="flex item-center justify-center text-lg">
              We Clean
            </span>
          </div>
          <div id="items3" className="carousel-item w-full flex flex-col">
            <img src={sittingroom} className="w-full h-[70%]" />
            <span className="flex item-center justify-center text-lg">
              Back to Comfortable
            </span>
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2 lg:hidden relative bottom-[10em]">
          <a href="#items1" className="btn btn-xs">
            1
          </a>
          <a href="#items2" className="btn btn-xs">
            2
          </a>
          <a href="#items3" className="btn btn-xs">
            3
          </a>
        </div>
      </div>
      {/* testimonials */}
      <div className="lg:h-[100vh] md:h-[64vh] h-[150vh] flex flex-col justify-around pl-4">
        <div className="h-[15vh] flex flex-col justify-around items-center">
          <p className="text-2xl text-[#00558E] font-medium ">Testimonials</p>
          <p className="text-3xl font-black">What Says Our Happy Clients</p>
        </div>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="md:w-[40vw] w-[93vw] shadow-2xl h-[60vh] md:h-[40vh] lg:h-[60vh] flex flex-col justify-around">
            <div className=" flex justify-around items-center">
              <div className="flex items-center md:w-[30vw]  lg:w-[25vw] w-[60vw] justify-around">
                <img
                  src={team}
                  alt=""
                  className="lg:h-[15vh] md:h-[10vh] lg:w-[7vw] md:w-[12vw] w-[20vw] h-[10vh] rounded-full"
                />
                <div>
                  <p className="font-bold">Patrick Okoye</p>
                  <p className="font-semibold">Client</p>
                </div>
              </div>
              <BiSolidQuoteAltRight className="text-2xl text-slate-500" />
            </div>
            <div className="flex md:w-[20vw] w-[50vw] justify-around px-8">
              <IoStar className="text-[#EDC954] text-2xl" />
              <IoStar className="text-[#EDC954] text-2xl" />
              <IoStar className="text-[#EDC954] text-2xl" />
              <IoStar className="text-[#EDC954] text-2xl" />
              <IoStar className="text-[#EDC954] text-2xl" />
            </div>
            <div className="md:px-10 font-semibold">
              <p className="md:w-[30vw] w-[90vw]">
                "Booking the after party cleaning was one of the best things
                I've ever done.
              </p>
              <p className="md:w-[30vw] w-[85vw]">
                I would never manage to deal with the mess alone in one weekend.
              </p>
              <p className="md:w-[30vw] w-[85vw]">
                Thank you ecoSpak, you are the best!."
              </p>
            </div>
          </div>
          <div className="md:w-[40vw] w-[93vw] shadow-2xl h-[60vh] md:h-[40vh] lg:h-[60vh] flex flex-col justify-around">
            <div className=" flex justify-around items-center">
              <div className="flex items-center  w-md:[25vw] w-[63vw] justify-around">
                <img
                  src={team}
                  alt=""
                  className="lg:h-[15vh] md:h-[10vh] lg:w-[7vw] md:w-[12vw] w-[20vw] h-[10vh] rounded-full"
                />
                <div className="ml-4 md:ml-0">
                  <p className="font-bold">Patrick Okoye</p>
                  <p className="font-semibold">Client & CEO of Food Ride</p>
                </div>
              </div>
              <BiSolidQuoteAltRight className="text-2xl text-slate-500" />
            </div>
            <div className="flex md:w-[20vw] w-[50vw] justify-around px-8">
              <IoStar className="text-[#EDC954] text-2xl" />
              <IoStar className="text-[#EDC954] text-2xl" />
              <IoStar className="text-[#EDC954] text-2xl" />
              <IoStar className="text-[#EDC954] text-2xl" />
              <IoStar className="text-[#EDC954] text-2xl" />
            </div>
            <div className="md:px-10 font-semibold">
              <p className="md:w-[30vw] w-[85vw]">
                "Cheap price and excellent service.
              </p>

              <p className="md:w-[30vw] w-[85vw]">
                We booked the cleaning for our home and office, and the crew did
                an amazing job putting everything back to normal."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
