import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Hero/>} />
              <Route path={"/projects/"} element={<Projects />} />
          </Routes>
      </BrowserRouter>
  )
}
