import {useState} from "react";

export default function Title() {
    const [load, setLoad] = useState("");

    return (
        <h1 className={"text-4xl font-bold duration-150"}>Jack Leslie</h1>
    )
}