import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const Tournaments = () => {
  const [sport, setSport] = useState("");
  const loop = [1, 2, 3, 4, 5];

  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert(`Sport value set to ${sport}`);
  };

  const registerTournament =()=>{
    alert("registration triggered")
  };

  return (
    <div>
      <nav className="bg-green-600 h-16 w-full flex justify-center place-items-center  ">
        <a href="/" title="Home">
          <ArrowLeftIcon className="h-8 bg-white rounded-full absolute w-auto m-2 top-2 left-5 hover:bg-gray-300 hover:shadow-lg cursor-pointer" />
        </a>
        <h1 className="text-sky-50 text-3xl font-medium tracking-wide">
          Tournaments
        </h1>
      </nav>
      <div className="m-4 border-2 p-2 flex items-center">
        <form className="px-7" onSubmit={onSubmitHandler}>
          <span className="font-bold p-2 text-lg pr-4">Filter a Sport</span>
          <select
            name="sports"
            onChange={(e) => setSport(e.target.value)}
            value={sport}
          >
            <option value="">Select</option>
            <option value="Football">Football</option>
            <option value="Cricket">Cricket</option>
            <option value="Swimming">Swimming</option>
            <option value="Badminton">Badminton</option>
          </select>
          <br />
          <br />
          <input
            className="bg-green-600 rounded-3xl w-[120px] font-bold text-white hover:shadow-md h-10"
            type="submit"
            value="Search"
          />
        </form>
        <button onClick={registerTournament} className="bg-green-600 rounded-3xl w-auto h-auto font-bold text-white hover:shadow-md py-1.5 xl:ml-auto md:ml-auto px-4">
          Register a Tournament
        </button>
      </div>
      <div className="bg-white h-auto flex flex-col place-content-center justify-center">
        <div className="flex flex-col items-center my-6 space-y-3 w-auto">
          {loop.map((each, index) => (
            <>
              <div key={index} className="bg-green-600 w-[75%] flex flex-col sm:flex-row rounded-lg">
                <div className="space-x-2 flex">
                  <span className="bg-white m-4 rounded-md font-bold p-2">
                    Name of Tournament
                  </span>
                  <span className="bg-white m-4 rounded-md font-bold p-2">
                    Date
                  </span>
                </div>
                <span className="xl:ml-auto md:ml-auto bg-white m-4 rounded-md font-bold p-2 cursor-pointer">
                  View Details
                </span>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
