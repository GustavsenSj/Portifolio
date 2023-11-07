import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hero from "./components/hero/hero.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import About from "./components/about/about.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <About />
  </React.StrictMode>
);
