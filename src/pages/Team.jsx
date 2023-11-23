import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function TeamForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    date: "",
    number: "",
    address: "",
    password: "",
    person: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, id, value } = e.target;
    setFormValues({ ...formValues, [name]: value, [id]: [value] });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    console.log("Form values:", formValues);
  };
  return (
    <div className="h-[210vh] bg-[#0000001A] flex items-center justify-center flex-col">
      <div className="flex flex-col items-center justify-around h-[15vh]">
        <b className="font-bold text-2xl">Join our Expert Team</b>
        <p className="font-semibold">Register to Join Our Expert Team</p>
      </div>

      <form
        className="h-[180vh] flex flex-col items-center justify-between"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-[100%] items-center justify-between h-[13vh]">
          <label className="font-semibold relative right-[12em]">
            FULL NAME
          </label>
          <input
            type="name"
            placeholder=""
            className="w-[35vw] h-[8vh] rounded-lg pl-10"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-[100%] items-center justify-between h-[13vh]">
          <label className="font-semibold relative right-[13.5em]">EMAIL</label>
          <input
            type="email"
            placeholder="name@email.com"
            className="w-[35vw] h-[8vh] rounded-lg pl-10"
            name="email"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col w-[100%] items-center justify-between h-[13vh]">
          <label className="font-semibold relative right-[11em]">
            DATE OF BIRTH
          </label>
          <input
            type="date"
            className="w-[35vw] h-[8vh] rounded-lg pl-10"
            name="date"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-[100%] items-center justify-between h-[13vh]">
          <label className="font-semibold relative right-[12em]">
            TELEPHONE
          </label>
          <input
            type="number"
            placeholder="+234"
            className="w-[35vw] h-[8vh] rounded-lg pl-10"
            name="telephone"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-[100%] items-center justify-between h-[13vh]">
          <label className="font-semibold relative right-[12em]">ADDRESS</label>
          <input
            type="address"
            placeholder="lorem street"
            className="w-[35vw] h-[8vh] rounded-lg pl-10"
            name="address"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-[100%] items-center justify-between h-[19vh]">
          <label className="font-semibold relative right-[12em]">
            PASSWORD
          </label>
          <input
            type="password"
            placeholder="input your password"
            className="w-[35vw] h-[8vh] rounded-lg pl-10"
            name="password"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-[100%] items-center justify-between h-[19vh]">
          <label className="font-semibold relative right-[10em]">
            CONFIRM PASSWORD
          </label>
          <input
            type="password"
            placeholder="confirm password"
            className="w-[35vw] h-[8vh] rounded-lg pl-10"
            name="password"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex  items-center justify-around h-[15vh]">
          <div>
            <input
              type="radio"
              name="person"
              className="w-[3vw] h-[3vh]"
              id="person"
              value={formValues.id}
              onChange={handleChange}
            />
            <label className="font-semibold font-serif">MALE</label>
          </div>
          <div>
            <input
              type="radio"
              name="person"
              className="w-[3vw] h-[3vh]"
              id="person"
              value={formValues.id}
              onChange={handleChange}
            />
            <label className="font-semibold font-serif">FEMALE</label>
          </div>
          <div>
            <input
              type="radio"
              name="person"
              className="w-[3vw] h-[3vh]"
              id="person"
              value={formValues.id}
              onChange={handleChange}
            />
            <label className="font-semibold font-serif">OTHER</label>
          </div>
        </div>
        <button
          className="h-[8vh] w-[13vw] bg-[#EDC954] rounded-full text-lg font-bold hover:opacity-[0.9]"
          type="submit"
        >
          Get Started
        </button>
      </form>
      {isSubmitted && (
        <p className="text-xl font-bold text-[#EDC954] flex items-center justify-center">
          Form is submitted.
        </p>
      )}
    </div>
  );
}

export default TeamForm;
