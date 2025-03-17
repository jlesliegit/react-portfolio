import { useParams } from "react-router-dom";

export default function SingleProjectBox({ id, title, image, description}) {

    return (
        <div className="flex flex-col justify-center items-center opacity-50 cursor-pointer rounded-lg">
            <a href={`/projects/${id}`}>
                <img src={image} alt={title} className="w-60 h-60 object-cover" />
                <p>{title}</p>
                <p>{description}</p>
            </a>
        </div>
    );
}
