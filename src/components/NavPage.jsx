import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Timetable from "../pages/Timetable";
import Reserve from "../pages/Reserve";
import History from "../pages/History";
import Gallery from "../pages/Gallery";

const NavPage = () => {
  return (
      <section>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </section>
  );
};

export default NavPage;
