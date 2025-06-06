import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import TechnologyGrid from "../atoms/TechnologyGrid.jsx";
import Nav from "./Nav.jsx";

export default function DisplaySingleProject() {
  const { id } = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    function getProjectData() {
      fetch("/projects.json")
        .then((response) => response.json())
        .then((data) => {
          const foundProject = data.projects.find(
            (project) => project.id === id,
          );
          if (foundProject) {
            setProject(foundProject);
          } else {
            console.log("Project not found");
          }
        });
    }

    getProjectData();
  }, [id]);

  return (
    <>
      <Nav link="/projects/" destination="Projects" />
      <div className="grid grid-cols-1 gap-6 mt-10 px-5 md:px-12 lg:px-48 xl:px-80">
        <div>
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-[85%] h-[85%] object-contain mb-2"
            />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">{project.title}</h1>
          <div className={`grid md:grid-cols-2 gap-4`}>
            <p>{project.description}</p>
            <div className="grid gap-8 md:grid-cols-1">
              <div className={"flex justify-center items-center gap-4"}>
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="hover:text-gray-600"
                >
                  Live project
                </a>
                {project.liveProject && (
                  <a
                    href={project.liveProject}
                    target="_blank"
                    className="hover:text-gray-600"
                  >
                    Live frontend
                  </a>
                )}
                <a href={project.link} target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-3xl hover:text-gray-600"
                  />
                </a>
              </div>
              <TechnologyGrid technologies={project.technologies} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
