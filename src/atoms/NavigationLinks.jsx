import {Link, NavLink} from "react-router-dom";

export default function NavigationLinks() {
    return(
        <div className={'flex flex-col'}>
            <Link to={'/about'} className={'hover:font-bold'}>About me</Link>
            <Link to={'/projects'} className={'hover:font-bold'}>Projects</Link>
        </div>
    )
}