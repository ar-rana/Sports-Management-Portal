import React, { useState } from "react";

const Tournaments = () => {
  const [sport, setSport] = useState("");

  const onOptionChangeHandler = (e) => {
    e.preventDefault();
    setSport(e.target.value);
    alert(`sport value set to ${sport}`);
  };
  return (
    <div>
      <nav className="bg-green-600 h-16 w-full flex justify-center place-items-center  ">
        <h1 className="text-sky-50 text-3xl font-medium tracking-wide">
          Tournaments
        </h1>
      </nav>
      <div className="m-4 border-2 p-2">
        <form className="px-7" onSubmit={onOptionChangeHandler}>
          <span className="font-bold p-2 text-lg pr-4">Filter a Sport</span>
          <select onChange={(e) => setSport(e.target.value)}>
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
      </div>
      <div className="bg-white h-auto flex flex-col place-content-center justify-center">
        <div className="flex flex-col items-center my-6 space-y-3 w-auto">
          <div className="bg-green-600 w-[75%] flex flex-col sm:flex-row rounded-lg">
            <div className="space-x-2 flex">
              <span className="bg-white m-4 rounded-md font-bold p-2">
                Name of Tournament
              </span>
              <span className="bg-white m-4 rounded-md font-bold p-2" >Date</span>
            </div>
            <span className="xl:ml-auto bg-white m-4 rounded-md font-bold p-2 cursor-pointer">View Details</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
