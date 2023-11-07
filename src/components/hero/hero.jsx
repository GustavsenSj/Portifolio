import "./hero.css";
import { useState, useEffect } from "react";
function Hero() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
      console.log(window.scrollY);
    });
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className={scroll ? "fade-out" : "fade-inn"}>Hi, and welcome!</h1>
        <h1 className={scroll ? "fade-out" : "fade-inn"}>
          My name is Sjur and i am a full-stack developer
        </h1>
      </div>
      <div className={`${"contact-me"} ${scroll ? "fade-out" : "fade-in"}`}>
        <p>Contact me</p>
      </div>
    </div>
  );
}

export default Hero;
