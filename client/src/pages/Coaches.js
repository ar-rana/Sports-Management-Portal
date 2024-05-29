import React from "react";
import logo from "../assets/Images/logo.png";
import demo from "../assets/Images/demo.png";

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
              <img src={logo} className="xl:h-16 md:h-16 h-10 rounded-md" />
            </a>
          </div>
        </nav>
        
        <div className="flex flex-wrap my-10 mx-20 justify-start items-center">
          {loop.map((each, index) => (
            <>
              <div key={index} className="m-3 p-5 items-center">
                <div>
                  <img src={demo} className="h-40" />
                </div>
                <div className="rounded-2xl bg-green-300 p-3 items-center">
                  <h4>Name & Sport</h4>
                </div>
              </div>
            </>
          ))}
          {/* <div className="flex flex-col">
            <div>
              <img src={demo} className="w-28" />
            </div>
            <div className="rounded-2xl bg-green-300 w-28 h-6">
              Name & Sport
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Coaches;
