import { useState } from "react";

export default function SingleProjectBox({ id, title, snippet }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`flex flex-col text-left cursor-pointer rounded-lg border border-gray-200 p-2 transition-all duration-300 ${
                isHovered ? "grayscale-0 drop-shadow-md" : "grayscale"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <a href={`/projects/${id}`}>
                <p className={'text-[#7600dc] font-bold'}>{title}</p>
                <p>{snippet}</p>
            </a>
        </div>
    );
}
