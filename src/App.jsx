import "./styles/App.css";
import { Game } from "./components/index.jsx";

function App() {
  return (
    <>
      <header className="banner">
        <h1>Memory Card</h1>
        <p className="instructions">Select each card once</p>
      </header>
      <Game />
    </>
  );
}

export default App;
