import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hero from "./components/hero/hero.jsx";
import Navbar from "./components/navbar/navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <div className="scroll-mask"></div> */}
    <Navbar />
    <Hero />
  </React.StrictMode>
);
