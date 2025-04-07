import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import TechnologyGrid from "./TechnologyGrid.jsx";
import Nav from "../components/Nav.jsx";

export default function DisplaySingleProject(){
    const {id} = useParams();
    const [project, setProject] = useState('');

    function getProjectData() {
        fetch("/projects.json")
            .then((response) => response.json())
            .then((data) => {
                const foundProject = data.projects.find((project) => project.id === id);
                if (foundProject) {
                    setProject(foundProject);
                } else {
                    console.log("Project not found");
                }
            });
    }

    useEffect(() => {
        getProjectData();
    }, [id]);

    return (
        <>
            <Nav link={'/projects/'} destination={'Projects'} />
        <div className={'grid grid-cols-1 mx-32 mt-20 p-5 gap-6 md:grid-cols-2'}>
            <div>
                {project.image && <img src={project.image} alt={project.title} className={'h-80 mb-6'} />}
                <div>
                    <h3 className={'mb-6'}>Technologies used</h3>
                    <TechnologyGrid />

                </div>
            </div>
            <div className={'flex flex-col col-start-2 gap-4'}>
            <h1 className={'text-2xl'}>{project.title}</h1>
            <p>{project.description}</p>
                <div className={'flex items-center gap-4'}>
                    <a href={project.liveLink} target="_blank" className={'hover:text-gray-600'}>Live project</a>
                    {project.liveProject && <a href={project.liveProject} target="_blank" className={'hover:text-gray-600'}>Live frontend</a>}
                    <a href={project.link} target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="text-3xl hover:text-gray-600"/>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}
