import "./styles/App.css";
// import Pokemon from "./assets/1.svg";
import { Game } from "./components/index.jsx";
import { getCardData } from "./utils/index.js";

const CARD_AMOUNT = 15;
const items = [];
items.push(...(await getCardData(CARD_AMOUNT)));

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
