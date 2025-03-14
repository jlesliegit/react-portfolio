import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export default function SocialIcons() {

    const [hover, setHover] = useState('');

    // function 

    return (
        <div className={"socialLinks flex gap-5 items-center"}>
            <a href="https://www.linkedin.com/in/jack-leslie-/" target="_blank" onMouseEnter={""}>
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="#333" />
            </a>
            <a href="https://github.com/jlesliegit" target="_blank" className={"gitHub"}>
                <FontAwesomeIcon icon={faGithub} size="2x" color="#333" />
            </a>
            <a href="mailto:jackandrewleslie@gmail.com" className={"email"}>
                <FontAwesomeIcon icon={faEnvelope} size="2x" color="#333" />
            </a>
        </div>
    );
}
