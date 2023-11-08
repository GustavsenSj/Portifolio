import "./hero.css";
function Hero() {
  return (
    <div className="hero-container">
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
  );
}

export default Hero;
