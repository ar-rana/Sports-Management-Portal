import React from "react";
import logo from "../assets/Images/logo.png";
import CoachCard from "../components/CoachCard";

const Coaches = () => {
  const loop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div>
      <div>
        <nav className="flex justify-center items-center bg-green-600 h-20 px-4 place-items-center">
          <div>
            <p className="text-white font-bold text-4xl">Coaches</p>
          </div>
          <div className="absolute top-5 left-6">
            <a href="/">
              <img src={logo} className="xl:h-12 md:h-12 h-10 rounded-md" />
            </a>
          </div>
        </nav>
        
        <div className="flex flex-wrap my-10 mx-20 justify-start items-center">
          {loop.map((each, index) => (
            <CoachCard key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coaches;
