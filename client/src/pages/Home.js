import React, { useContext, useEffect, useState } from "react";
import "../index.css";
import wLogo from "../assets/Images/sport_wLogo.png";
import logo from "../assets/Images/logo.png";
import Modal from "react-modal";
import { XMarkIcon } from "@heroicons/react/24/solid";
import sport from "../assets/Images/sport.png";
import { UserContext } from "../UserContext";

function Home() {
  const { user, setUser } = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");

  const origin = "http://localhost:5000";

  useEffect(() => {
    if (user) {
      console.log("user hai: ", user);
    }
  }, [user]);

  const login = async () => {
    let res;
    res = await fetch(`${origin}/login`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404) {
      alert(data.message);
    }
    if (res.status === 401) {
      setWarning(data.message);
    }
    if (res.status === 200) {
      setUser(data.user);
      setEmail("");
      setPassword("");
      setOpen(false);
      console.log(data.message);
    }
  };

  const warningState = () => {
    if (!email || !password) {
      setWarning("Enter all Fields");
      return false;
    } else {
      setWarning("");
      return true;
    }
  };

  const LoginSubmitHandler = (e) => {
    e.preventDefault();
    const offer = warningState();
    alert("submit hadler triggered");
    if (offer) {
      console.log("in offer block - login");
      login();
    }
  };

  const logout = async () =>{
    const res = await fetch(`${origin}/logout`, {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" }
    })
    const data = await res.json();
    console.log(data);
  }

  return (
    <div className="">
      <div className="bg-green-100 h-screen xl:overflow-hidden md:overflow-hidden">
      {/*  use navbar component here */}
        <nav className="bg-green-100 md:border-0 border-b-2 border-gray-200 z-100 sticky h-18 top-0"> 
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src={logo}
                className="xl:h-16 md:h-16 h-10 rounded-lg"
                alt=""
              />
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
            {user ? (
              <a onClick={logout} href="/" className="bg-green-500 py-2 px-5 rounded-3xl text-white hover:shadow-md cursor-pointer">
                Logout
              </a>
            ) : (
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
            )}
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
              <img src={wLogo} className="ml-[13%] h-20 mt-12" />
            </div>
          </div>
          <img
            className="hidden z-5 xl:block md:block relative md:bottom-[200px] ml-auto md:h-[500px] xl:h-[600px] xl:bottom-[300px]"
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-black bg-gray-200 w-full p-2 rounded-lg"
                  type="text"
                  placeholder="Enter Email"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-black bg-gray-200 w-full p-2 rounded-lg"
                  type="text"
                  placeholder="Enter Password"
                />
                <p className="text-red-500 text-sm">{warning}</p>
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
