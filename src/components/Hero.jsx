import Title from "../atoms/Title.jsx";
import Tagline from "../atoms/Tagline.jsx";
import About from "./About.jsx";
import NavigationLinks from "../atoms/NavigationLinks.jsx";

export default function Hero() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-10 sm:items-start">
            <div className="flex flex-col gap-4 px-4 mb-10 sm:max-w-screen-md sm:w-full sm:ml-20 sm:pl-10 items-start pt-52 max-sm:px-8">
                <div>
                    <Title />
                    <Tagline />
                </div>
                <About />
                <NavigationLinks />
            </div>
        </div>
    );
}
