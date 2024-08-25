import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import { Bars2Icon } from "@heroicons/react/24/solid";
import DashNav from "../components/DashNav";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [ismenuOpen, setMenuOpen] = useState(false);
  const [dashState, setDashState] = useState("created_tournaments");
  const navigate = useNavigate();

  const menuSlip = () => {
    setMenuOpen((prevwidth) => !prevwidth);
  };

  // if (!auth) {
  //   return navigate("/", { replace: true });
  //return <Navigate to="/"/>
  //}
  if (user) {
    return (
      <div className="">
        <div className="h-screen overflow-x-hidden">
          <div className="sticky top-0 w-full">
            <Navbar />
          </div>

          <div className="flex flex-grow">
            <div
              style={{ width: `${ismenuOpen ? 200 : 0}px` }}
              className="bg-green-600 absolute h-screen space-y-3 flex flex-col z-10 transition-all duration-300"
            >
              <div
                className={`flex flex-col z-16 pt-8 ${
                  ismenuOpen ? "animate-fade" : "hidden"
                }`}
              >
                <button
                  className="m-3 p-1 font-semibold rounded-[25px] cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setDashState("created_tournaments");
                  }}
                >
                  Created Tournaments
                </button>
                <button
                  className="m-3 p-1 font-semibold rounded-[25px] cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setDashState("registered_tournaments");
                  }}
                >
                  Registered Tournaments
                </button>
                {/* <div className="flex-grow"></div> This ensures that the space above the Misc button grows to push it to the bottom */}
                <button className="m-3 mt-72 p-1 font-semibold rounded-[25px] cursor-pointer hover:bg-gray-100">
                  Misc
                </button>
              </div>
            </div>
            <Bars2Icon
              className="absolute z-20 h-8 ml-2 mt-1 text-black cursor-pointer bg-green-400 hover:bg-gray-100 rounded-lg"
              onClick={menuSlip}
            />
            <br />
            <div className="flex-1">
              <div className="xl:m-10 md:m-10 sm:m-0 sm:border-none xl:border-solid xl:border-4 md:border-solid md:border-4 border-black h-[100%] p-4">
                <div className="mt-8 w-full overflow-y-scroll scrollbar scroll-smooth ml-auto pr-4">
                  <DashNav dashState={dashState} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return navigate('/', {replace: true});
  }
};

export default Dashboard;
