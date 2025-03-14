import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export default function SocialIcons() {

    return (
        <div className={"socialLinks flex gap-5 items-center justify-center"}>
            <a href="https://www.linkedin.com/in/jack-leslie-/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className={"text-3xl hover:text-gray-600"}/>
            </a>
            <a href="https://github.com/jlesliegit" target="_blank" >
                <FontAwesomeIcon icon={faGithub} className={"text-3xl hover:text-gray-600"}/>
            </a>
            <a href="mailto:jackandrewleslie@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className={"text-3xl hover:text-gray-600"}/>
            </a>
        </div>
    );
}
