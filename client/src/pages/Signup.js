import React, { useEffect, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import bg from "../assets/Images/bg.jpeg";
import Navbar from "../components/Navbar";
import { Form } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fixPassword, setfixPasssword] = useState("");
  const [position, setPosition] = useState("");
  const [warning, setWarning] = useState("");
  const [rollno, setRollno] = useState("");

  const origin = "http://localhost:5000";
  useEffect(() => {}, []);

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function checkPassword() {
    if (password !== fixPassword || fixPassword.length < 8) {
      setWarning(
        "password does not match/passowrd must be atleast 8 characters"
      );
      return false;
    } else {
      setWarning("");
      return true;
    }
  }

  const warningState = () => {
    const checkemail = validateEmail(email);
    const validpassword = checkPassword();
    if (!name) {
      setWarning("enter a name");
      return false;
    }
    if (!position) {
      setWarning("select a position");
      return false;
    }
    if (position === "Student" && !rollno) {
      setWarning("enter your roll no.");
      return false;
    }
    if (!checkemail) {
      setWarning("enter a valid email");
      return false;
    }
    if (!validpassword) {
      return false;
    } else {
      setWarning("");
      return true;
    }
  };

  const signUp = async () => {
    let res;
    if (position === "Student") {
      res = await fetch(origin + "/signup", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          name: name,
          email: email,
          rollno: rollno,
          password: fixPassword,
          position: position,
        }),
        headers: { "Content-Type": "application/json" },
      });
    } else {
      res = await fetch(origin + "/signup", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          name: name,
          email: email,
          password: fixPassword,
          position: position,
        }),
        headers: { "Content-Type": "application/json" },
      });
    }
    const data = await res.json();
    console.log("data: ", data)
    console.log("res: ", res)
  };

  const onSubmithandler = (e) => {
    e.preventDefault();
    const offer = warningState();
    alert("onSubmithandler triggered!!!");
    if (offer) {
      console.log("in offer block");
      signUp();
    }
  };
  return (
    <div>
      <div
        className="h-screen w-full flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <a href="/" title="Home">
          <ArrowLeftIcon className="h-8 bg-white rounded-full absolute w-auto m-2 top-2 left-5 hover:bg-gray-300 hover:shadow-lg cursor-pointer" />
        </a>
        <div className="flex flex-col space-y-1.5 items-center bg-white rounded-2xl py-3 px-6 lg:w-[25%] xl:w-[25%] w-auto m-6">
          <h2 className="text-green-700 text-2xl font-bold">Welcome!!</h2>
          <form
            className="flex flex-col space-y-1.5 items-center w-full"
            onSubmit={onSubmithandler}
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className="rounded-xl border-[1px] border-black w-full xl:w-[85%] py-1 pl-2 bg-green-600 placeholder-white text-white focus:ring-0 border-none"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              className="rounded-xl border-[1px] border-black w-full xl:w-[85%] py-1 pl-2 bg-green-600 placeholder-white text-white focus:ring-0 border-none"
            />
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create Password"
              className="rounded-xl border-[1px] border-black w-full xl:w-[85%] py-1 pl-2 bg-green-600 placeholder-white text-white focus:ring-0 border-none"
            />
            <input
              type="text"
              value={fixPassword}
              onChange={(e) => setfixPasssword(e.target.value)}
              placeholder="Confirm Password"
              className="rounded-xl border-[1px] border-black w-full xl:w-[85%] py-1 pl-2 bg-green-600 placeholder-white text-white focus:ring-0 border-none"
            />
            <p className="font-bold text-wrap">
              Select your position in the university:
            </p>
            <select
              className="w-[65%] border-2 font-bold bg-green-200 rounded-md p-1"
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Student">Student</option>
              <option value="Faculty">Faculty</option>
            </select>
            {position === "Student" && (
              <input
                type="text"
                value={rollno}
                onChange={(e) => setRollno(e.target.value)}
                placeholder="Roll Number"
                className={`rounded-xl border-[1px] border-black w-full xl:w-[85%] py-1 pl-2 bg-green-600 placeholder-white text-white focus:ring-0 border-none`}
              />
            )}
            <p className="text-red-500 text-sm">{warning}</p>
            <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl mt-8 hover:shadow-md">
              SignUp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
