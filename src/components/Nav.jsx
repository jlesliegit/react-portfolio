import { Link } from "react-router-dom";

export default function Nav({ destination, link }) {
  return (
    <div className={"p-4 font-bold text-lg"}>
      <Link className={"hover:text-gray-600 cursor-pointer"} to={link}>
        {destination}
      </Link>
    </div>
  );
}
