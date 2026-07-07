import { useState } from "react";

export function Card({ img, altText, desc, endGame, increaseScore }) {
  const [wasClicked, setWasClicked] = useState(false);

  const handleClick = () => {
    if (wasClicked) {
      endGame();
    } else {
      increaseScore();
      setWasClicked(true);
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <img className="card-image" src={img} alt={altText} />
      <p className="card-description">{desc}</p>
    </div>
  );
}
