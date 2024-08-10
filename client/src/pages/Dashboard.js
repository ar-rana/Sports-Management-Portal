import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";
import { Bars2Icon } from "@heroicons/react/24/solid";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  // if (!user) {
  //   return <Navigate to="/"/>
  // }
  return (
    // <div>
    //   <div className="sticky top-0">
    //     <Navbar />
    //   </div>
    //   <div className="">
    //     <div className="bg-green-600 h-full w-[200px] inline">
    //     </div>
    //   </div>
    // </div>
    <div className="">
      <div className="sticky top-0 w-full">
        <Navbar />
      </div>
      <div className="flex">
        <div className="bg-green-600 h-screen w-[200px] space-y-3">
          <div className="flex flex-col">
            <button className="m-3 p-1 font-semibold rounded-[25px] cursor-pointer hover:bg-gray-100">
              Registered Tournaments
            </button>
            <button className="m-3 p-1 font-semibold rounded-[25px] cursor-pointer hover:bg-gray-100">
              Created Tournaments
            </button>
            <button className="m-3 p-1 font-semibold rounded-[25px] cursor-pointer hover:bg-gray-100">
              Misc
            </button>
          </div>
        </div>
        <Bars2Icon className="h-8 ml-2 mt-1 text-black cursor-pointer hover:bg-gray-200 rounded-lg" />
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Dashboard;
