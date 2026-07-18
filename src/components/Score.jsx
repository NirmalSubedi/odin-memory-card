import "../styles/Score.css";

export function Score({ score, bestScore }) {
  return (
    <section className="score-group">
      <h2 className="score">
        <span aria-hidden="true">Score</span>
        <span
          className="current-score"
          aria-live="polite"
          aria-atomic="true"
          aria-labelledby="current-score current-score-value"
        >
          <span aria-hidden="true">{score}</span>

          <span aria-hidden="true" className="sr-only" id="current-score">
            Current Score
          </span>
          <span aria-hidden="true" className="sr-only" id="current-score-value">
            {score}
          </span>
        </span>

        <span
          className="best-score"
          aria-live="polite"
          aria-atomic="true"
          aria-labelledby="best-score best-score-value"
        >
          <span aria-hidden="true">/</span>
          <span aria-hidden="true">{bestScore}</span>

          <span aria-hidden="true" className="sr-only" id="best-score">
            Best Score
          </span>
          <span aria-hidden="true" className="sr-only" id="best-score-value">
            {bestScore}
          </span>
        </span>
      </h2>
    </section>
  );
}
