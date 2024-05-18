import React from "react";
import kiit from "../assets/Images/kiit.png";
import logo from "../assets/Images/logo.png";
import demo from "../assets/Images/demo.png";

const Coaches = () => {
  return (
    <div>
      <div>
        <nav className="flex justify-between items-center bg-green-600 h-20 px-4">
          <div className="ml-4">
            <a href="/">
              <img src={logo} className="h-10" />
            </a>
          </div>
          <div>
            <p className="text-white font-bold text-4xl">Coaches</p>
          </div>
          <div className="mr-2">
            <img src={kiit} className="h-20" />
          </div>
        </nav>
        <section className="flex my-10 mx-20 justify-between items-center">
          <div className=" flex flex-col">
            <div>
              <img src={demo} className="w-28" />
            </div>
            <div className="rounded-2xl bg-green-300 w-28 h-6">
              Name & Sport
            </div>
          </div>
          <div>
            <div>
              <img src={demo} className="w-28" />
            </div>
            <div className="rounded-2xl bg-green-300 w-28 h-6"></div>
          </div>
          <div>
            <div>
              <img src={demo} className="w-28" />
            </div>
            <div className="rounded-2xl bg-green-300 w-28 h-6"></div>
          </div>
          <div>
            <div>
              <img src={demo} className="w-28" />
            </div>
            <div className="rounded-2xl bg-green-300 w-28 h-6"></div>
          </div>
          <div>
            <div>
              <img src={demo} className="w-28" />
            </div>
            <div className="rounded-2xl bg-green-300 w-28 h-6"></div>
          </div>
        </section>
        <section className="flex my-10 mx-20 justify-between items-center">
          <div>
            <div>
              <img src={demo} className="w-28" />
            </div>
            <div className="rounded-2xl bg-green-300 w-28 h-6"></div>
          </div>
          <div>
            <div>
              <img src={demo} className="w-28" />
            </div>
            <div className="rounded-2xl bg-green-300 w-28 h-6"></div>
          </div>
          <div>
            <div>
              <img src={demo} className="w-28" />
            </div>
            <div className="rounded-2xl bg-green-300 w-28 h-6"></div>
          </div>
          <div>
            <div>
              <img src={demo} className="w-28" />
            </div>
            <div className="rounded-2xl bg-green-300 w-28 h-6"></div>
          </div>
          <div>
            <div>
              <img src={demo} className="w-28" />
            </div>
            <div className="rounded-2xl bg-green-300 w-28 h-6"></div>
          </div>
        </section>
        <section className="flex my-10 mx-20 justify-between items-center">
          <div>
            <div>
              <img src={demo} className="w-28" />
            </div>
            <div className="rounded-2xl bg-green-300 w-28 h-6"></div>
          </div>
          <div>
            <div>
              <img src={demo} className="w-28" />
            </div>
            <div className="rounded-2xl bg-green-300 w-28 h-6"></div>
          </div>
          <div>
            <div>
              <img src={demo} className="w-28" />
            </div>
            <div className="rounded-2xl bg-green-300 w-28 h-6"></div>
          </div>
          <div>
            <div>
              <img src={demo} className="w-28" />
            </div>
            <div className="rounded-2xl bg-green-300 w-28 h-6"></div>
          </div>
          <div>
            <div>
              <img src={demo} className="w-28" />
            </div>
            <div className="rounded-2xl bg-green-300 w-28 h-6"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Coaches;
