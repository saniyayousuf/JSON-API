import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "../Screens/Project";
import AddProject from "../Screens/AddPro";


export default function Approuter(){

    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Project />} />
                <Route path="add/" element={<AddProject />} />
                <Route path="add/:id" element={<AddProject />} />
            </Routes>
        </Router>
        </>
    )
}