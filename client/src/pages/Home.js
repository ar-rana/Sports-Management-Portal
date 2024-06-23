import React, { useContext, useEffect } from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import wLogo from "../assets/Images/sport_wLogo.png";
import sport from "../assets/Images/sport.png";
import { UserContext } from "../UserContext";

function Home() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      console.log("true");
    }
  }, [user]);

  return (
    <div className="">
      <div className="bg-green-100 h-screen xl:overflow-hidden md:overflow-hidden">
        <div className="sticky top-0">
          <Navbar />
        </div>
        <div className="">
          <div className="z-10">
            <div className="px-[13%] py-14 w-3/4">
              <p className="xl:text-5xl text-3xl font-bold tracking-wide text-green-500">
                Welcome To
              </p>
              <p className=" mt-2 xl:text-5xl text-3xl font-bold tracking-wide text-green-500">
                The World of Sports
              </p>
            </div>
            <div className="px-[13%] py-10 w-3/4">
              <p className="xl:text-5xl text-3xl font-bold tracking-wide">
                KIIT Sports
              </p>
            </div>
            <div>
              <img src={wLogo} className="ml-[13%] h-20 mt-12" />
            </div>
          </div>
          <img
            className="hidden z-5 xl:block md:block relative md:bottom-[300px] ml-auto md:h-[450px] xl:h-[480px] xl:bottom-[350px]"
            src={sport}
          />
        </div>
        <div className="xl:hidden md:hidden flex flex-col m-7 p-3 space-y-3 items-center">
          <div className="flex space-x-2">
            <a
              href="/"
              className="w-36 font-semibold justify-center py-2 px-3 bg-green-600 cursor-pointer hover:shadow-xl hover:bg-green-300 rounded-3xl"
            >
              Home
            </a>
            <a
              href="/tournaments"
              className="w-36 py-2 px-3 font-semibold bg-green-600 cursor-pointer hover:shadow-xl hover:bg-green-300 rounded-3xl"
            >
              Tournaments
            </a>
          </div>
          <div className="flex space-x-2">
            <a
              href="/coaches"
              className="w-36 py-2 px-3 font-semibold bg-green-600 cursor-pointer hover:shadow-xl hover:bg-green-300 rounded-3xl"
            >
              Coaches
            </a>
            <a
              href="/about"
              className="w-36 py-2 px-3 font-semibold bg-green-600 cursor-pointer hover:shadow-xl hover:bg-green-300 rounded-3xl"
            >
              About us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
