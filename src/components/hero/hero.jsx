import "./hero.css";
function Hero() {
  return (
    <div id="landing">
      <div className="hero-container">
        <div className="blob shape1"></div>
        <div className="blob shape2"></div>
        <div className="blob shape3"></div>
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
      </div>
    </div>
  );
}

export default Hero;
