import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function SingleProjectBox({ title, image, description, link }) {
    return (
        <div>
            <img src={image} alt={title} />
            <p>{title}</p>
            <p>{description}</p>
            <a href={link} target="_blank">
                <FontAwesomeIcon icon={faGithub} className="text-3xl hover:text-gray-600"/>
            </a>
        </div>
    );
}