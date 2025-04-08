import SingleTechnologyItem from "./Languages.jsx";
import {useEffect, useState} from "react";
import Languages from "./Languages.jsx";
import {useParams} from "react-router-dom";
import Frameworks from "./Frameworks.jsx";
import Tools from "./Tools.jsx";

export default function TechnologyGrid() {
    const [languages, setLanguages] = useState([]);
    const [frameworks, setFrameworks] = useState([]);
    const [tools, setTools] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("/projects.json")
            .then((response) => response.json())
            .then((data) => {
                const project = data.projects.find((proj) => proj.id === id || proj.id === Number(id));
                if(project) {
                    setLanguages(project.technologies.languages)
                    setFrameworks(project.technologies.frameworks)
                    setTools(project.technologies.tools)
                }
            });
    }, [id]);

    return(
        <div className={'grid grid-cols-3 max-md:flex max-md:flex-col'}>
            <h3>Languages</h3>
            {/*State to control what is shown based on which title is clicked similar to social links*/}
            <h3>Frameworks</h3>
            <h3>Tools</h3>

            {languages.map((language) => (
                <Languages key={language} name={language} />
            ))}

            {frameworks.map((framework) => (
                <Frameworks key={framework} name={framework} />
            ))}

            {tools.map((tool) => (
                <Tools key={tool} name={tool} />
            ))}
        </div>
    )
}