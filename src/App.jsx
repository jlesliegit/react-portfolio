import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Hero from "./components/Hero.jsx";

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Hero/>} />
          </Routes>
      </BrowserRouter>
  )
}
