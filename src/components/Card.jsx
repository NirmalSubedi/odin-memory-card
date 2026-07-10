import { useState } from "react";

export function Card({
  img,
  altText,
  desc,
  isGameOver,
  endGame,
  increaseScore,
  restartGame,
}) {
  const [wasClicked, setWasClicked] = useState(false);

  const handleClick = () => {
    if (isGameOver) {
      restartGame();
    } else if (wasClicked) {
      endGame();
    } else {
      increaseScore();
      setWasClicked(true);
    }
  };

  return (
    <button className="card" onClick={handleClick}>
      <img className="card-image" src={img} alt={altText} />
      <p className="card-description">{desc}</p>
    </button>
  );
}
