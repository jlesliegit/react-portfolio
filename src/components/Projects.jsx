import SingleProjectBox from "../atoms/SingleProjectBox.jsx";
import {useEffect, useState} from "react";
import Nav from "./Nav.jsx";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/projects.json")
            .then((response) => response.json())
            .then((data) => setProjects(data.projects))
    }, []);

    return (
        <>
            <Nav link={'/'} destination={'Home'} />
        <div className="flex justify-center px-6 mb-10">
            <div className="grid md:grid-cols-1 gap-16 mt-20 max-sm:grid-cols-1">
                {projects.map((project) => (
                    <SingleProjectBox
                        key={project.id}
                        title={project.title}
                        image={project.image}
                        alt={project.alt}
                        id={project.id}
                    />
                ))}
            </div>
        </div>
        </>
    );
}