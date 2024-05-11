import React from "react";
import "../index.css";
import kiit from "../assets/Images/kiit.png";
import logo from "../assets/Images/logo.png";
import bg from "../assets/Images/bg.jpeg";

function Index() {
  return (
    <div className="bg-green-100">
      <div
        id="popup"
        className="absolute flex h-full w-full items-center justify-center"
      >
        <div className={`bg-url(${bg}) z-10 h-full w-full blur-sm`} />
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
              <span onClick={()=> alert(" singnin popup")}>Sign Up</span>
            </button>
          </div>
        </div>
      </div>
      <nav className="flex justify-between h-16 pl-12 items-center bg-green-100">
        <div>
          <img src={logo} className="h-10" />
        </div>
        <div>
          <ul className="flex space-x-12 font-semibold">
            <li className="pl-20 hover:text-gray-400 hover:font-bold delay-150 cursor-pointer">
              Home
            </li>
            <li className=" hover:text-gray-400 hover:font-bold delay-150 cursor-pointer">
              Tournaments
            </li>
            <li className=" hover:text-gray-400 hover:font-bold delay-150 cursor-pointer">
              Coaches
            </li>
            <li className=" hover:text-gray-400 hover:font-bold delay-150 cursor-pointer">
              About us
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
      </nav>
      <div>
        <div className="px-40 py-14 w-3/4">
          <p className="text-5xl font-bold tracking-wide text-green-500 leading-16 ">
            Welcome To The World of Sports
          </p>
        </div>
        <div className="px-40 py-10 w-3/4">
          <p className="text-5xl font-bold tracking-wide leading-16">
            KIIT Sports
          </p>
        </div>
        <div>
          <img src={kiit} className="px-40 h-32" />
        </div>
      </div>
    </div>
  );
}

export default Index;
