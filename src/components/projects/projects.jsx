import "./projects.css";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function Projects() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div id="projects">
      <h1 className="fade title">Projects</h1>
      <div className="project-page">
        {projects?.map((project, i) => (
          <div className="project-container" key={i}>
            <h2 className="fade">{project.title}</h2>
            <div className="project-content fade">
              {i % 2 !== 0 && (
                <div className="image-container-blob image-blob-background">
                  <img src={project.image} alt="" />
                </div>
              )}
              <div className="project-description">
                {project.description.split("\\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              {i % 2 === 0 && (
                <div className="image-container-blob image-blob-background">
                  <img src={project.image} alt="" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
