import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import bg from "../assets/Images/bg.jpeg";
import Navbar from "../components/Navbar";

const Signup = () => {
  return (
    <div>
      <div
        className="h-screen w-full flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <a href="/">
          <ArrowLeftIcon className="h-8 bg-white rounded-full absolute w-auto m-2 top-2 left-5 hover:bg-gray-300 hover:shadow-lg cursor-pointer" />
        </a>
        <div className="flex flex-col space-y-1.5 items-center bg-white rounded-2xl py-3 px-6 lg:w-[25%] xl:w-[25%] w-auto">
          <h2 className="text-green-700 text-2xl font-bold">Welcome!!</h2>
          <input
            type="text"
            placeholder="Username"
            className="rounded-xl border-[1px] border-black w-auto xl:w-[85%] py-1 pl-2 bg-green-600 placeholder-white text-white focus:ring-0 border-none"
          />
          <input
            type="text"
            placeholder="Email"
            className="rounded-xl border-[1px] border-black w-auto xl:w-[85%] py-1 pl-2 bg-green-600 placeholder-white text-white focus:ring-0 border-none"
          />
          <input
            type="text"
            placeholder="Create Password"
            className="rounded-xl border-[1px] border-black w-auto xl:w-[85%] py-1 pl-2 bg-green-600 placeholder-white text-white focus:ring-0 border-none"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="rounded-xl border-[1px] border-black w-auto xl:w-[85%] py-1 pl-2 bg-green-600 placeholder-white text-white focus:ring-0 border-none"
          />
          <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl mt-8 hover:shadow-md">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
