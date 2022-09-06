// import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import DogList from "./DogList";
import NavBar from "./NavBar";
import Home from "./Home";
import Services from "./Services";

function App() {
 
  return (
    <div>
    <NavBar />
    <Routes>
      <Route path="/doglist" element={<DogList />}/>
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services/>} />
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
