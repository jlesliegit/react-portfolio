import { useState } from "react";

export default function SingleProjectBox({ id, title, image, description }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`flex flex-col justify-center items-center cursor-pointer rounded-lg transition-all duration-300 ${
                isHovered ? "grayscale-0" : "grayscale"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <a href={`/projects/${id}`}>
                <img src={image} alt={title} className="w-60 h-60 object-cover mb-2" />
                <p className={'text-[#7600dc] font-bold'}>{title}</p>
                <p>{description}</p>
            </a>
        </div>
    );
}
