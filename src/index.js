import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Competences from "./components/Competences";
import Projets from "./components/Projets";
import "./index.css";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="competences" competences={<Competences />} />
      <Route path="projets" projets={<Projets />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
