import { Game } from "./components/index.jsx";

const items = [
  {
    desc: "1",
    id: crypto.randomUUID(),
  },
  {
    desc: "2",
    id: crypto.randomUUID(),
  },
  {
    desc: "3",
    id: crypto.randomUUID(),
  },
];

function App() {
  return (
    <>
      <h1>Memory Card</h1>
      <header>Click each card once.</header>
      <Game {...{ items }} />
    </>
  );
}

export default App;
