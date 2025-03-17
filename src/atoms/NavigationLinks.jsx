import {Link, NavLink} from "react-router-dom";
import {useState} from "react";
import SocialLinks from "./SocialLinks.jsx";

export default function NavigationLinks() {
    const [showIcons, setShowIcons] = useState(false);

    return(
        <div className={'flex flex-col font-light'}>
            <p>Feel free to explore my <span className={'underline underline-offset-4 font-normal'}><a href={'/projects/'}>work</a></span> while you're here.</p>
            <p>If you'd like to connect <span className={'underline underline-offset-4 font-normal cursor-pointer'} onClick={() => setShowIcons(!showIcons)}>get in touch</span></p>
            <div className={'mt-6'}>
            {showIcons && (<SocialLinks />)}
            </div>
        </div>
    )
}