import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Tournaments from "./pages/Tournaments";
import Coaches from "./pages/Coaches";
import About from "./pages/About";
import Details from "./pages/Details";
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState();
  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/tournaments" element={<Tournaments />} />
            <Route exact path="/coaches" element={<Coaches />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/tournament/:id" element={<Details />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
