import SingleProjectBox from "../atoms/SingleProjectBox.jsx";
import {useEffect, useState} from "react";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/projects.json")
            .then((response) => response.json())
            .then((data) => setProjects(data.projects))
    }, []);

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-16 mt-20 max-sm:grid-cols-1">
                {projects.map((project) => (
                    <SingleProjectBox
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}