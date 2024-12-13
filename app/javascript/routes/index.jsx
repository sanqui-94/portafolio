import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Strategies from "../components/Strategies";
import Strategy from "../components/Strategy";
import NewStrategy from "../components/NewStrategy";
import ObliqueStrategies from "../components/oblique/ObliqueStrategies";

export default (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/strategies" element={<ObliqueStrategies />} />
            <Route path="/all-strategies" element={<Strategies />} />
            <Route path="/strategies/:id" element={<Strategy />} />
            <Route path="/strategy" element={<NewStrategy />} />
        </Routes>
    </Router>
);