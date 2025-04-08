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
    const [showLanguages, setShowLanguages] = useState(false);
    const [showFrameworks, setShowFrameworks] = useState(false);
    const [showTools, setShowTools] = useState(false);
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
        <div>
        <div className={'grid grid-cols-3 max-md:flex max-md:flex-col mb-4'}>
            <h3 onClick={() => setShowLanguages(!showLanguages)}>Languages</h3>
            <h3 onClick={() => setShowFrameworks(!showFrameworks)}>Frameworks</h3>
            <h3 onClick={() => setShowTools(!showTools)}>Tools</h3>
        </div>
            {showLanguages &&
                <div className={'flex flex-col gap-2'}>
                {languages.map((language) => (
                    <Languages key={language} name={language} />
                ))}
                </div>
            }

            {showFrameworks &&
                <div className={'flex flex-col gap-2'}>
                    {frameworks.map((framework) => (
                        <Frameworks key={framework} name={framework} />
                    ))}
                </div>
            }

            {showTools &&
                <div className={'flex flex-col gap-2'}>
                    {tools.map((tool) => (
                        <Tools key={tool} name={tool} />
                    ))}
                </div>
            }



        </div>
    )
}