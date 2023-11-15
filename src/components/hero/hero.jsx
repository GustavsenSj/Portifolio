import "./hero.css";

function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    const yOffset =
      element.getBoundingClientRect().top -
      element.getBoundingClientRect().height * 0.25;
    window.scrollBy({ top: yOffset, behavior: "smooth" });
  };
  return (
    <div id="landing">
      <div className="hero-container">
        {/* <div className="blob-container">
          <div className="blob shape1"></div>
          <div className="blob shape2"></div>
          <div className="blob shape3"></div>
        </div> */}
        <div className="hero-text fade">
          <h1 className="line1">
            Hi, and welcome! <br />
          </h1>
          <h1 className="line2">
            My name is Sjur and i am a full-stack developer
          </h1>
        </div>
        <div className="contact-me-container">
          <div className="contact-me fade">
            <p>Contact me</p>
          </div>
        </div>
        <div className="arrow-container fade">
          <svg
            height="50px"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
            onClick={scrollToAbout}
            style={{ cursor: "pointer" }}
          >
            <polygon
              fill="#ffffff96"
              id="arrow"
              points="0.046,2.582 2.13,0.498 12.967,11.334 23.803,0.498 25.887,2.582 12.967,15.502"
            />
            <polygon
              fill="#ffffff96"
              id="arrow"
              points="0.046,13.582 2.13,11.498 12.967,22.334 23.803,11.498 25.887,13.582 12.967,26.502"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Hero;
