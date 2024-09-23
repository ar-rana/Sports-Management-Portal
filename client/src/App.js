import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Tournaments from "./pages/Tournaments";
import Coaches from "./pages/Coaches";
import About from "./pages/About";
import Details from "./pages/Details";
import { UserContext } from "./UserContext";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState();
  const origin = process.env.SERVER;

  useEffect(() => {
    const verfyuser = async () => {
      try {
        const res = await fetch(`${origin}/verifyuserobject`, {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        });
        if (res.status === 200) {
          const data = await res.json();
          //console.log(data);
          setUser(data.user.user);
        }
      } catch (e) {
        console.log(e);
      }
    };

    verfyuser();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser, origin }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/tournaments" element={<Tournaments />} />
            <Route exact path="/coaches" element={<Coaches />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/tournament/:id" element={<Details />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
