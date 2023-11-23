import React from "react";
import { useState } from "react";

function Forgotten() {
  const [formValues, setFormValues] = useState({
    email: "",
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
    <div className="h-[80vh] bg-[#0000001A] flex items-center justify-around flex-col">
      <div className="flex flex-col items-center justify-around h-[15vh]">
        <b className="font-bold text-2xl">FORGOTTEN PASSWORD?</b>
        <p className="font-semibold">
          Input email or number to recover account
        </p>
      </div>

      <form
        className="h-[30vh] flex flex-col items-center justify-between"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-[100%] items-center justify-between h-[13vh]">
          <label className="font-semibold relative right-[10.5em]">
            EMAIL/NUMBER
          </label>
          <input
            type="email"
            placeholder="name@email.com"
            className="w-[35vw] h-[8vh] rounded-lg pl-10"
            name="email"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>

        <button
          className="h-[8vh] w-[13vw] bg-[#EDC954] rounded-full text-lg font-bold hover:opacity-[0.9]"
          type="submit"
        >
          Send Code
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

export default Forgotten;
