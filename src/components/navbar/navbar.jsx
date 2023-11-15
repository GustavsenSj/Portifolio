import "./navbar.css";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClicked = (value) => {
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
      console.log(element);
      if (element) {
        const yOffset =
          element.getBoundingClientRect().top -
          element.getBoundingClientRect().height * 0.25;

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
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="hamburger-container">
          <div className={`burger-line1 ${menuOpen ? "clicked" : ""}`}></div>
          <div className={`burger-line2 ${menuOpen ? "clicked" : ""}`}></div>
          <div className={`burger-line3 ${menuOpen ? "clicked" : ""}`}></div>
        </div>
        {menuOpen ? <NavBarElements /> : null}
      </div>
      <div className="navbar-container">
        <NavBarElements />
      </div>
    </>
  );
}

export default Navbar;
