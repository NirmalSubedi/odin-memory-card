import "../styles/CardGroup.css";

export function CardGroup({ children, isGameOver, onRestartGame }) {
  const handleClick = () => isGameOver && onRestartGame();

  return (
    <main className="card-group" onClick={handleClick}>
      {children}
    </main>
  );
}
