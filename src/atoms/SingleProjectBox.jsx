import { useState } from "react";

export default function SingleProjectBox({ id, title, image, description }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`flex flex-col text-center justify-center items-center cursor-pointer rounded-lg transition-all duration-300 ${
                isHovered ? "grayscale-0 drop-shadow-md" : "grayscale"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <a href={`/projects/${id}`}>
                <img src={image} alt={title} className="w-fit h-64 mb-6" />
                <p className={'text-[#7600dc] font-bold'}>{title}</p>
            </a>
        </div>
    );
}
