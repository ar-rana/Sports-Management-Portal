import React from "react";
import logo from "../assets/Images/logo.png";

const Navbar = () => {
  return (
    <div className="bg-green-100">
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
            <a
              className="bg-green-500 py-2 px-5 rounded-3xl text-white hover:shadow-md"
              href="#"
            >
              Login
            </a>
            <a
              className="bg-green-500 py-2 px-5 rounded-3xl text-white hover:shadow-md"
              href="/signup"
            >
              Sign up
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
