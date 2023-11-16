import "./about.css";
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
              I&apos;m a keen and eager developer with a strong desire to keep
              growing both professionally and personally. I&apos;ve always been
              fascinated by technology and make it a point to stay updated on
              the latest advancements. Recently, I earned a bachelor&apos;s
              degree in computer science with a focus on application development
              from NTNU. <br /> <br />
              Throughout my studies, I got hands-on experience with various
              technologies and work approaches, both on my own and in team
              settings. In addition to the main subjects, I took elective
              courses in Mobile Applications, Computer Graphics, Game
              Development, and completed an internship.
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
              In my roles as a consultant and student, I&apos;ve gained broad
              experience in diverse areas. I&apos;ve worked on multiple
              projects, creating backend REST API services using Java and .NET,
              as well as developing various web applications with technologies
              like React, Next.js, and Angular. I&apos;m proficient in both
              JavaScript and TypeScript. Additionally, I&apos;ve contributed to
              mobile applications using Flutter. In all these projects,
              I&apos;ve seamlessly integrated databases, utilizing SQL databases
              such as PostgreSQL and NoSQL databases like Firebase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
