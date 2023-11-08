import "./About.css";
import sjur from "../../assets/sjur.png";
import tech from "../../assets/tech.png";

function About() {
  return (
    <div id="about">
      <div className="about">
        <div className="about-page">
          <div className="about-container">
            <h1 className="fade title">About me:</h1>
            <p className="fade">
              I am an enthusiastic and eager developer. Whom has strong desire
              to continue and grow myself both as a developer and as an
              individual. I Have always been interested in technology and enjoys
              to keep myself up to date with new technologies. I recently
              completed a bachelor&apos;s degree in computer science with a
              specialization in application development at NTNU. Here, I had the
              opportunity to work with a wide range of technologies and work
              methodologies, both independently and as part of a team. In
              addition to the core subjects of the studies, I had elective
              courses in Mobile Applications, Computer Graphics, Game
              Development, and Internship.
            </p>
          </div>
          <div className="image-container fade">
            <img src={sjur} alt="Image of Sjur" />
          </div>
        </div>
        <div className="about-page">
          <div className="image-container fade">
            <img src={tech} alt="Image of Sjur" />
          </div>
          <div className="about-container">
            <p className="fade">
              Throughout my work as a consultant and a student I hav gained
              extensive experience in various areas. I have been involved in
              several projects, developing backend REST API services in Java and
              .NET, various web applications using technologies such as React,
              Next.js, and Angular. I am also experienced in using both
              JavaScript and TypeScript. Furthermore, I have also worked on
              mobile applications using Flutter. For all these projects, I ahve
              used integrated databases, including SQL databases like PostgreSQL
              and NoSQL databases like Firebase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
