import "../styles/Score.css";

export function Score({ score, bestScore }) {
  return (
    <section aria-label="Scores" className="score-group">
      <h2 className="score">
        Score
        <span className="current-score flip" aria-label="Current Score">
          {score}
        </span>
        <span className="best-score" aria-label="Best Score">
          /{bestScore}
        </span>
      </h2>
    </section>
  );
}
