import "../styles/Difficulty.css";

export function Difficulty({ difficultyName }) {
  return (
    <section
      className={`difficulty ${difficultyName}`}
      aria-labelledby="difficulty difficulty-name"
    >
      <span id="difficulty" hidden>
        Difficulty
      </span>
      <span id="difficulty-name" className="difficulty-name" aria-hidden="true">
        {difficultyName}
      </span>
    </section>
  );
}
