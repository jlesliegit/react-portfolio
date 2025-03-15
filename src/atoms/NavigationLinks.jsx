import {Link, NavLink} from "react-router-dom";
import {useState} from "react";
import SocialLinks from "./SocialLinks.jsx";

export default function NavigationLinks() {
    const [showIcons, setShowIcons] = useState(false);

    return(
        <div className={'flex flex-col font-light'}>
            <p>Feel free to explore my <span className={'underline font-normal'}><a href={'#'}>work</a></span> while you're here.</p>
            <p>If you'd like to connect <span className={'underline font-normal'} onClick={() => setShowIcons(!showIcons)}>get in touch</span></p>
            <div className={'mt-6'}>
            {showIcons && (<SocialLinks />)}
            </div>
        </div>
    )
}