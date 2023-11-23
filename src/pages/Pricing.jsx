import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

function Pricing() {
  const pricing = [
    {
      type: "Basic",
      amount: 50,
      come: "visit",
      desc1: "lorem lorem lorem lorem ",
      desc2: "lorem lorem lorem lorem ",
      desc3: "lorem lorem lorem lorem ",
      desc4: "lorem lorem lorem lorem ",
      desc5: "lorem lorem lorem lorem ",
    },
    {
      type: "standard",
      amount: 75,
      come: "visit",
      desc1: "lorem lorem lorem lorem ",
      desc2: "lorem lorem lorem lorem ",
      desc3: "lorem lorem lorem lorem ",
      desc4: "lorem lorem lorem lorem ",
      desc5: "lorem lorem lorem lorem ",
    },
    {
      type: "super",
      amount: 100,
      come: "visit",
      desc1: "lorem lorem lorem lorem ",
      desc2: "lorem lorem lorem lorem ",
      desc3: "lorem lorem lorem lorem ",
      desc4: "lorem lorem lorem lorem ",
      desc5: "lorem lorem lorem lorem ",
    },
  ];

  const info = pricing.map((price) => (
    <div className=" w-[100%] flex   items-center justify-around">
      <div className="w-[25vw] h-[90vh]  shadow-2xl rounded-2xl">
        <div className="ptriangle">
          <div className="sqr rounded-t-2xl text-white ">
            <div className="h-[30vh] flex flex-col items-center justify-around">
              <p className="font-semibold text-xl ">{price.type}</p>
              <p className="font-bold text-3xl">&#x24;{price.amount}</p>
              <p className="font-semibold text-xl">{price.come}</p>
            </div>
          </div>
          <div className="triangle "></div>
        </div>
        <div className="w-[25vw] flex flex-col items-center justify-center">
          <div className="w-[20vw] h-[35vh] flex flex-col font-medium items-center justify-around">
            <span className="flex w-[15vw] items-center justify-between">
              <IoCheckmarkSharp className="text-[green]" /> {price.desc1}
            </span>
            <span className="flex w-[15vw] items-center justify-between">
              <IoCheckmarkSharp className="text-[green]" /> {price.desc2}
            </span>
            <span className="flex w-[15vw] items-center justify-between">
              <IoCheckmarkSharp className="text-[green]" /> {price.desc3}
            </span>
            <span className="flex w-[15vw] items-center justify-between">
              <IoCheckmarkSharp className="text-[red]" /> {price.desc4}
            </span>
            <span className="flex w-[15vw] items-center justify-between">
              <IoCheckmarkSharp className="text-[red]" /> {price.desc5}
            </span>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="h-[130vh]">
      <div className=" flex    flex-col justify-around relative top-[2em]">
        <div className="flex flex-col justify-between h-[14vh] items-center">
          <p className=" text-[#00558E]  font-bold">PRICING PLANS</p>
          <p className="text-2xl font-black">
            We Offer the Best Price To Help You
          </p>
        </div>
      </div>

      <div className="flex relative top-[6em]">{info};</div>
    </div>
  );
}

export default Pricing;
