import {useEffect, useState} from "react";
import Technologies from "./Technologies.jsx";
import { useParams} from "react-router-dom";

export default function TechnologyGrid() {
    const [languages, setLanguages] = useState([]);
    const [frameworks, setFrameworks] = useState([]);
    const [tools, setTools] = useState([]);
    const [showLanguages, setShowLanguages] = useState(false);
    const [showFrameworks, setShowFrameworks] = useState(false);
    const [showTools, setShowTools] = useState(false);
    const [isActive, setIsActive] = useState(false);
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

    function handleLanguageChange(){
        setShowLanguages(!showLanguages);
        setShowFrameworks(false);
        setShowTools(false);
        setIsActive(!isActive);
    }

    function handleFrameworkChange(){
        setShowFrameworks(!showFrameworks);
        setShowTools(false);
        setShowLanguages(false);
    }

    function handleToolsChange(){
        setShowTools(!showTools);
        setShowFrameworks(false);
        setShowLanguages(false);
    }

    return(
        <div>
        <div className={'grid grid-cols-3 gap-6 max-md:flex max-md:flex-col mb-4'}>
            <div className={'flex justify-center py-2 rounded-lg bg-blue-300'}>
                <h3 onClick={handleLanguageChange}>Languages</h3>
            </div>

            <div className={'flex justify-center py-2 bg-blue-300 rounded-lg'}>
                <h3 onClick={handleFrameworkChange}>Frameworks</h3>
            </div>

            <div className={'flex justify-center py-2 bg-blue-300 rounded-lg'}>
            <h3 onClick={handleToolsChange}>Tools</h3>
            </div>
        </div>
            {showLanguages &&
                <div className={'flex flex-col justify-center gap-4'}>
                {languages.map((language) => (
                    <Technologies key={language} name={language} />
                ))}
                </div>
            }

            {showFrameworks &&
                <div className={'flex flex-col gap-2'}>
                    {frameworks.map((framework) => (
                        <Technologies key={framework} name={framework} />
                    ))}
                </div>
            }

            {showTools &&
                <div className={'flex flex-col gap-2'}>
                    {tools.map((tool) => (
                        <Technologies key={tool} name={tool} />
                    ))}
                </div>
            }
        </div>
    )
}