export function Score({ score, bestScore }) {
  return (
    <section aria-label="Scores" className="score-group">
      <p className="score">Score: {score}</p>
      <p className="best-score">Best: {bestScore}</p>
    </section>
  );
}
