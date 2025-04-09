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
    const [activeTab, setActiveTab] = useState(null);
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
        setActiveTab(activeTab === "languages" ? null : "languages");
        setShowLanguages(!showLanguages);
        setShowFrameworks(false);
        setShowTools(false);
    }

    function handleFrameworkChange(){
        setActiveTab(activeTab === "frameworks" ? null : "frameworks");
        setShowFrameworks(!showFrameworks);
        setShowTools(false);
        setShowLanguages(false);
    }

    function handleToolsChange(){
        setActiveTab(activeTab === "tools" ? null : "tools");
        setShowTools(!showTools);
        setShowFrameworks(false);
        setShowLanguages(false);
    }

    return(
        <div>
        <div className={'grid grid-cols-3 max-md:flex max-md:flex-col mb-4 border-1 border-gray-200 rounded-lg'}>
            <div className={`flex justify-center py-2 rounded-lg
            ${
                activeTab === "languages" ? "bg-[#3780E9] text-white max-sm:drop-shadow-lg" : "bg-white"
            }`}>
                <h3 onClick={handleLanguageChange}>Languages</h3>
            </div>

            <div className={`flex justify-center py-2 rounded-lg
                ${
                    activeTab === "frameworks" ? "bg-[#3780E9] text-white max-sm:drop-shadow-lg" : "bg-white"
                }`}>
                <h3 onClick={handleFrameworkChange}>Frameworks</h3>
            </div>

            <div className={`flex justify-center py-2 rounded-lg
                ${
                    activeTab === "tools" ? "bg-[#3780E9] text-white max-sm:drop-shadow-lg" : "bg-white"
                }`}>
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
                <div className={'grid grid-cols-2'}>
                    {frameworks.map((framework) => (
                        <Technologies key={framework} name={framework} />
                    ))}
                </div>
            }

            {showTools &&
                <div className={'grid grid-cols-3 gap-4'}>
                {tools.map((tool) => (
                        <Technologies key={tool} name={tool} />
                    ))}
                </div>
            }
        </div>
    )
}