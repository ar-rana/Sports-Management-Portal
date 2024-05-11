import React from "react";
import "../index.css";
import kiit from "../assets/Images/kiit.png";
import logo from "../assets/Images/logo.png";
//import bg from "../assets/Images/bg.jpeg";

function Home() {
  return (
    <div className="bg-green-100 max-h-window">
      {/* <div className="absolute flex h-full w-full items-center justify-center">
        <div className="z-10 h-full w-full blur-sm" />
        <div className="absolute right-6 top-6 cursor-pointer z-20">
          <span className="text-xl hover:text-2xl delay-75">❌</span>
        </div>
        <div className="absolute h-2/3 w-1/4 bg-white rounded-2xl z-20 bg-opacity-85">
          <span className="mt-8 text-green-800 flex justify-center text-2xl font-bold">
            Welcome !
          </span>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="ml-9 mt-6 rounded-xl border-2 border-black w-3/4 py-1 pl-2 bg-green-600 placeholder-white"
            />
            <input
              type="text"
              placeholder="Email"
              className="ml-9 rounded-xl border-2 border-black w-3/4 py-1 pl-2 bg-green-600 placeholder-white"
            />
            <input
              type="text"
              placeholder="Create Password"
              className="ml-9 rounded-xl border-2 border-black w-3/4 py-1 pl-2 bg-green-600 placeholder-white"
            />
            <input
              type="text"
              placeholder="Confirm Password"
              className="ml-9 rounded-xl border-2 border-black w-3/4 py-1 pl-2 bg-green-600 placeholder-white"
            />
          </div>
          <div className="flex justify-center">
            <button className="px-6 py-2 bg-red-700 text-white rounded-xl mt-8">
              <span onClick={() => alert(" singnin popup")}>Sign Up</span>
            </button>
          </div>
        </div>
      </div> */}
      <nav className="bg-green-100 md:border-0 border-b-2 border-gray-200 z-100 sticky h-18">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-10" alt="" />
          </a>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-green-100 ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black rounded md:bg-transparent md:text-black md:p-0 md:hover:text-green-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black rounded md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0"
                >
                  Tournaments
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black rounded md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0"
                >
                  Coaches
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0"
                >
                  About us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex space-x-2 px-8">
            <button className="bg-green-500 py-2 px-5 rounded-3xl text-white">
              Login
            </button>
            <button className="bg-green-500 py-2 px-5 rounded-3xl text-white">
              Sign up
            </button>
          </div>
        </div>
      </nav>

      <div className="">
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
          <img src={kiit} className="ml-[13%] h-32 my-20" />
        </div>
      </div>
    </div>
  );
}

export default Home;
