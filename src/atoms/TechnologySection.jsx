import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function TechnologySection({ category }) {
    const [technologies, setTechnologies] = useState([]);
    const smallSection = technologies.length <= 2;
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
    }, [id, category]);

    return (
        <div className={`flex ${smallSection ? 'items-center gap-2' : 'flex-wrap justify-start gap-4'}`}>
            {technologies.map((technology) => (
                <div key={technology} className={'inline-block whitespace-nowrap w-fit px-3 py-1 bg-gray-100 text-sm text-gray-800 rounded-lg shadow-sm'}>
                    {technology}
                </div>
            ))}
        </div>
    )
}