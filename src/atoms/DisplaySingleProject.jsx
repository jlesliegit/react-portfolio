import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function DisplaySingleProject(){
    const {id} = useParams();
    const [project, setProject] = useState('');

    function getProjectData() {
        fetch("/projects.json")
            .then((response) => response.json())
            .then((data) => {
                const foundProject = data.projects.find((proj) => proj.id === id);
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
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            {project.image && <img src={project.image} alt={project.title} />}
            {project.link && (
                <p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Project Link
                    </a>
                </p>
            )}
        </div>
    );
}
