import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hero from "./components/hero/hero.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import About from "./components/about/about.jsx";
import Projects from "./components/projects/projects.jsx";
import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <div className="warning">
      <p>
        ⚠️ Your browser does not support Scroll-Linked Animations. This website
        might not work as intended. To cater for this a{" "}
        <a href="https://github.com/flackr/scroll-timeline">polyfill</a> has
        been loaded. ⚠️
      </p>
    </div>
    <Hero />
    <About />
    <Projects />
  </React.StrictMode>
);
