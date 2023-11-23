import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";

function Signin() {
  const [formValues, setFormValues] = useState({
    email: "",
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
    <div className="h-[110vh] bg-[#0000001A] flex items-center justify-center flex-col">
      <div className="flex flex-col items-center justify-around h-[15vh]">
        <b className="font-bold text-2xl">Welcome Back</b>
        <p className="font-semibold">Sign in to continue to your account</p>
      </div>

      <form
        className="h-[60vh] flex flex-col items-center justify-between"
        onSubmit={handleSubmit}
      >
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
          <Link
            to="/forgotten"
            className="font-semibold relative right-[10em] text-[#EDC954] "
          >
            Forgotten Password
          </Link>
        </div>
        <div className="flex flex-col items-center justify-around h-[12vh] relative right-[11em]">
          <div>
            <input
              type="radio"
              name="person"
              className="w-[3vw] h-[3vh] relative right-[0.7em]"
              id="person"
              value={formValues.id}
              onChange={handleChange}
            />
            <label className="font-semibold font-serif">User</label>
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
            <label className="font-semibold font-serif">Worker</label>
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

      <div className="h-[16vh] flex flex-col items-center justify-around">
        <p className="font-semibold text-xl">Or sign in with</p>
        <div className="w-[8vw] flex items-center justify-around">
          <img src={facebook} alt="" className="h-[6vh] w-[3vw] rounded-full" />
          <img src={google} alt="" className="h-[6vh] w-[3vw] rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default Signin;
