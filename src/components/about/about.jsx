import "./About.css";
import sjur from "../../assets/sjur.png";
function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h2 className="fade">About me:</h2>
        <p className="fade">
          I am an enthusiastic and eager developer. Whom has strong desire to
          continue and grow myself both as a developer and as an individual. I
          Have always been interested in technology and enjoys to keep myself up
          to date with new technologies. I recently completed a bachelor&apos;s
          degree in computer science with a specialization in application
          development at NTNU. Here, I had the opportunity to work with a wide
          range of technologies and work methodologies, both independently and
          as part of a team. In addition to the core subjects of the studies, I
          had elective courses in Mobile Applications, Computer Graphics, Game
          Development, and Internship.
        </p>
      </div>
      <div className="image-container fade">
        <img src={sjur} alt="Image of Sjur" />
      </div>
    </div>
  );
}

export default About;
