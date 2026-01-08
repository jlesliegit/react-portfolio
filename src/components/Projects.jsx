import SingleProjectBox from "../atoms/SingleProjectBox.jsx";
import { useEffect, useState } from "react";
import Nav from "./Nav.jsx";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
        setCurrentProject(data.current_project);
      });
  }, []);

  return (
    <>
      <Nav link={"/"} destination={"Home"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-10 sm:items-start">
        <div className="flex flex-col text-left gap-4 px-4 mb-10 sm:max-w-screen-md sm:w-full sm:ml-20 sm:pl-10 pt-52 max-sm:px-8">
          {currentProject.map((project) => (
            <SingleProjectBox
              key={project.id}
              title={project.project + " (Currently building)"}
              snippet={project.snippet}
              id={project.id}
              noLink={true}
            />
          ))}

          {projects.map((project) => (
            <SingleProjectBox
              key={project.id}
              title={project.title + " (Bootcamp project)"}
              snippet={project.snippet}
              id={project.id}
            />
          ))}
          <p>
            Bootcamp projects built using shared infrastructure that has since
            been decommissioned.
          </p>
        </div>
      </div>
    </>
  );
}
