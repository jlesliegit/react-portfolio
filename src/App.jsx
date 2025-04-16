import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import SingleProjectBox from "./atoms/SingleProjectBox.jsx";
import DisplaySingleProject from "./components/DisplaySingleProject.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Hero />} />
        <Route path={"/projects/"} element={<Projects />} />
        <Route path={"/projects/:id"} element={<DisplaySingleProject />} />
      </Routes>
    </BrowserRouter>
  );
}
