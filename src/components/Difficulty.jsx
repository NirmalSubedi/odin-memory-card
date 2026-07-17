import "../styles/Difficulty.css";

export function Difficulty({ difficulty, isVisible }) {
  return (
    <section
      className={`difficulty ${difficulty}${isVisible ? "" : " sr-only"}`}
      aria-labelledby="difficulty difficulty-name"
    >
      <span id="difficulty" hidden>
        Difficulty
      </span>
      <span id="difficulty-name" className="difficulty-name" aria-hidden="true">
        {difficulty}
      </span>
    </section>
  );
}
