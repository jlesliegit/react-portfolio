import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function TechnologySection({ category }) {
    const [technologies, setTechnologies] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("/projects.json")
            .then((response) => response.json())
            .then((data) => {
                const project = data.projects.find((proj) => proj.id === id || proj.id === Number(id));
                if(project) {
                    setTechnologies(project.technologies[category]);
                }
            });
    }, [id]);

    return (
        <div className={'grid grid-cols-3 gap-4'}>
            {technologies.map((tech) => (
                <div key={tech} className={'inline-block whitespace-nowrap w-fit px-3 py-1 bg-gray-100 text-sm text-gray-800 rounded-lg shadow-sm'}>
                    {tech}
                </div>
            ))}
        </div>
    )
}