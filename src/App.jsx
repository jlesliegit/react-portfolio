import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Hero/>} />
              <Route path={"/about"} element={<About/>} />
          </Routes>
      </BrowserRouter>
  )
}
