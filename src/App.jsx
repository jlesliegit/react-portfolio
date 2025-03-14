import './App.css'
import {BrowserRouter} from "react-router-dom";
import Hero from "./components/Hero.jsx";

export default function App() {
  return (
      <BrowserRouter>
          <Hero />
      </BrowserRouter>
  )
}
