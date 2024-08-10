import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";
import { Bars2Icon } from "@heroicons/react/24/solid";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [ismenuOpen, setMenuOpen] = useState(false);

  const menuSlip = () => {
    setMenuOpen((prevwidth) => !prevwidth);
  };

  // if (!user) {
  //   return <Navigate to="/"/>
  // }
  return (
    <div className="">
      <div className="h-screen overflow-x-hidden overflow-y-hidden">
        <div className="sticky top-0 w-full">
          <Navbar />
        </div>

        <div className="flex flex-grow">
          <div
            style={{ width: `${ismenuOpen ? 200 : 0}px` }}
            className="bg-green-600 h-screen space-y-3 flex flex-col z-10 relative transition-all duration-300"
          >
            <div className={`flex flex-col ${ismenuOpen ? 'animate-fade' : 'hidden'}`}>
              <button className="m-3 p-1 font-semibold rounded-[25px] cursor-pointer hover:bg-gray-100">
                Registered Tournaments
              </button>
              <button className="m-3 p-1 font-semibold rounded-[25px] cursor-pointer hover:bg-gray-100">
                Created Tournaments
              </button>
              {/* <div className="flex-grow"></div> This ensures that the space above the Misc button grows to push it to the bottom */}
              <button className="m-3 mt-72 p-1 font-semibold rounded-[25px] cursor-pointer hover:bg-gray-100">
                Misc
              </button>
            </div>
          </div>
          <Bars2Icon
            className="z-20 h-8 ml-2 mt-1 text-black cursor-pointer hover:bg-gray-100 rounded-lg"
            onClick={menuSlip}
          />
          <div className="flex-1 space-x-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
