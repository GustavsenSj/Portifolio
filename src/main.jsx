import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hero from "./components/hero/hero.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import About from "./components/about/about.jsx";
import Projects from "./components/projects/projects.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <div className="warning">
      <p>
        ⚠️ Your browser does not support Scroll-Linked Animations. This website
        might not work as intended. please use Chrome 115 or newer.⚠️
      </p>
    </div>
    <Hero />
    <About />
    <Projects />
  </React.StrictMode>
);
