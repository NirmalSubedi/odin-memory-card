import "./styles/App.css";
import Pokemon from "./assets/1.svg";
import { Game } from "./components/index.jsx";
import { getPokemonData } from "./utils/index.js";

const items = [
  {
    desc: "Crabominable",
    img: Pokemon,
    id: crypto.randomUUID(),
  },
  {
    desc: "Crabominable",
    img: Pokemon,
    id: crypto.randomUUID(),
  },
  {
    desc: "Crabominable",
    img: Pokemon,
    id: crypto.randomUUID(),
  },
  {
    desc: "Crabominable",
    img: Pokemon,
    id: crypto.randomUUID(),
  },
  {
    desc: "Crabominable",
    img: Pokemon,
    id: crypto.randomUUID(),
  },
  {
    desc: "Crabominable",
    img: Pokemon,
    id: crypto.randomUUID(),
  },
];

function App() {
  return (
    <>
      <header className="banner">
        <h1>Memory Card</h1>
        <p className="instructions">Click each card once</p>
      </header>
      <Game {...{ items }} />
    </>
  );
}

export default App;
