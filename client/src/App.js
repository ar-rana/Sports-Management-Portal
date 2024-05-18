import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Tournaments from "./pages/Tournaments";
import Coaches from "./pages/Coaches";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/tournaments" element={<Tournaments />} />
          <Route exact path="/coaches" element={<Coaches />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
