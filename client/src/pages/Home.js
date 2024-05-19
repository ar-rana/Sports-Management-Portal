import React, { useState } from "react";
import "../index.css";
import kiit from "../assets/Images/kiit.png";
import logo from "../assets/Images/logo.png";
import Modal from "react-modal";
import { XMarkIcon } from "@heroicons/react/24/solid";
import sport from "../assets/Images/sport.png";

function Home() {
  const [open, setOpen] = useState(false);

  const LoginSubmitHandler = () => {
    alert("submit hadler triggered");
  };

  return (
    <div className="">
      <div className="bg-green-100 h-screen overflow-hidden">
        <nav className="bg-green-100 md:border-0 border-b-2 border-gray-200 z-100 sticky h-18 top-0">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={logo} className="h-10" alt="" />
            </a>
            <div className="hidden w-full md:block md:w-auto">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-green-100 ">
                <li>
                  <a
                    href="/"
                    className="block py-2 px-3 text-black rounded md:bg-transparent md:text-black md:p-0 md:hover:text-green-500"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/tournaments"
                    className="block py-2 px-3 text-black rounded md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0"
                  >
                    Tournaments
                  </a>
                </li>
                <li>
                  <a
                    href="/coaches"
                    className="block py-2 px-3 text-black rounded md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0"
                  >
                    Coaches
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0"
                  >
                    About us
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex space-x-2 px-8">
              <button
                className="bg-green-500 py-2 px-5 rounded-3xl text-white hover:shadow-md cursor-pointer"
                onClick={() => setOpen((prevstate) => !prevstate)}
              >
                Login
              </button>
              <a
                className="bg-green-500 py-2 px-5 rounded-3xl text-white hover:shadow-md"
                href="/signup"
              >
                Sign up
              </a>
            </div>
          </div>
        </nav>
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
              <img src={kiit} className="ml-[13%] h-32 " />
            </div>
          </div>
          <img
            className="hidden z-5 xl:block md:block relative md:bottom-[200px] ml-auto md:h-[500px] xl:h-[600px] xl:bottom-[300px]"
            src={sport}
          />
        </div>
      </div>
      {open && (
        <Modal
          className="max-w-lg h-auto w-[90%] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-2 border-gray-400 rounded-xl shadow-md"
          isOpen={open}
          onRequestClose={() => setOpen(false)}
        >
          <div className="p-1">
            <div className="border-b border-gray-200">
              <div
                onClick={() => setOpen(false)}
                className="hoverEffect p-0 w-9 h-9 flex items-center justify-center"
              >
                <XMarkIcon
                  className="h-[22px] text-gray-600 cursor-pointer hover:bg-gray-200 rounded-full"
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
            <div className="flex flex-col p-4">
              <form className="space-y-2" onSubmit={LoginSubmitHandler}>
                <input
                  className="text-black bg-gray-200 w-full p-2 rounded-lg"
                  type="text"
                  placeholder="Enter Email"
                />
                <input
                  className="text-black bg-gray-200 w-full p-2 rounded-lg"
                  type="text"
                  placeholder="Enter Password"
                />
                <button
                  type="submit"
                  className="bg-green-500 p-2 rounded-lg font-medium"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Home;
