import "./navbar.css";

function Navbar() {
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

  return (
    <div className="navbar-container">
      <p onClick={handleClicked("landing")}>Home</p>
      <p onClick={handleClicked("about")}>About</p>
      <p onClick={handleClicked("project")}>Projects</p>
      <p onClick={handleClicked("contact")}>Contact</p>
    </div>
  );
}

export default Navbar;
