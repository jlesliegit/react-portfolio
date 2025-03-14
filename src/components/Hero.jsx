import Title from "../atoms/Title.jsx";
import Tagline from "../atoms/Tagline.jsx";
import SocialLinks from "../atoms/SocialLinks.jsx";
import {NavLink} from "react-router-dom";
import NavigationLinks from "../atoms/NavigationLinks.jsx";

export default function Hero() {
    return(
        <div className={"grid grid-cols-4"}>
            <div className={"flex flex-col gap-3 col-start-2 items-start pt-52"}>
                <Title />
                <Tagline />
                <SocialLinks />
                <NavigationLinks />
            </div>
        </div>
    )
}