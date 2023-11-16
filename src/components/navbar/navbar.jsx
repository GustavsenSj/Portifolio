import "./navbar.css";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    const content = document.getElementById("navbar-content");
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      content.style.display = "flex";
      document.getElementById("navbar-content").style.top =
        document
          .getElementsByClassName("hamburger-menu")[0]
          .getBoundingClientRect().height + "px";
    } else {
      content.style.display = "none";
    }
  };
  const handleClicked = (value) => {
    let yOffsetMultiplier = 0.3;
    return () => {
      let element;
      switch (value) {
        case "landing":
          element = document.getElementById("landing");
          break;
        case "about":
          element = document.getElementById("about");
          break;
        case "project":
          element = document.getElementById("projects");
          break;
        case "contact":
          element = document.getElementById("contact");
          break;
        default:
          break;
      }
      if (element) {
        if (window.innerWidth < 700) {
          yOffsetMultiplier = 0.4;
        }
        const yOffset =
          element.getBoundingClientRect().y -
          window.innerHeight * yOffsetMultiplier;
        window.scrollBy({ top: yOffset, behavior: "smooth" });
      }
    };
  };

  const NavBarElements = () => {
    return (
      <>
        <p onClick={handleClicked("landing")}>Home</p>
        <p onClick={handleClicked("about")}>About</p>
        <p onClick={handleClicked("project")}>Projects</p>
        <p onClick={handleClicked("contact")}>Contact</p>
      </>
    );
  };

  return (
    <>
      <div className="hamburger-menu">
        <div className="hamburger-container" onClick={toggleMenu}>
          <div className={`burger-line1 ${menuOpen ? "clicked" : ""}`}></div>
          <div className={`burger-line2 ${menuOpen ? "clicked" : ""}`}></div>
          <div className={`burger-line3 ${menuOpen ? "clicked" : ""}`}></div>
        </div>
        <div id="navbar-content">{menuOpen ? <NavBarElements /> : null}</div>
      </div>
      <div className="navbar-container">
        <NavBarElements />
      </div>
    </>
  );
}

export default Navbar;
