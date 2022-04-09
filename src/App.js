import React from "react";
import { Routes, Route } from "react-router-dom";
import Career from "./pages/Career";
import Coding from "./pages/Coding";
import Contact from "./pages/Contact";
import Status from "./pages/Status";
import Voice from "./pages/Voice";
import Welcome from "./pages/Welcome";
import Writing from "./pages/Writing";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/Career" element={<Career />} />
      <Route path="/Coding" element={<Coding />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Status" element={<Status />} />
      <Route path="/Voice" element={<Voice />} />
      <Route path="/Writing" element={<Writing />} />
      <Route path="/Welcome" element={<Welcome />} />
    </Routes>
  );
}
