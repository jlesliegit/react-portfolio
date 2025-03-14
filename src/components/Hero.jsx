import Title from "../atoms/Title.jsx";
import Tagline from "../atoms/Tagline.jsx";
import SocialLinks from "../atoms/SocialLinks.jsx";
import {NavLink} from "react-router-dom";
import NavigationLinks from "../atoms/NavigationLinks.jsx";

export default function Hero() {
    return(
        <div className={"grid grid-cols-3 max-sm:grid-cols-1"}>
            <div className={"flex flex-col col-start-1 ml-20 p-10 items-start pt-52 max-sm:col-start-1 max-sm:text-left max-sm:ml-10"}>
                <Title />
                <Tagline />
                <SocialLinks />
                <NavigationLinks />
            </div>
        </div>
    )
}