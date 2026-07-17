import "../styles/Card.css";
import { useState } from "react";

export function Card({ img, altText = "", desc, onGameOver, onIncreaseScore }) {
  const [wasClicked, setWasClicked] = useState(false);

  const handleClick = () => {
    if (wasClicked) {
      onGameOver();
    } else {
      onIncreaseScore();
      setWasClicked(true);
    }
  };

  return (
    <button className="card" onClick={handleClick}>
      <img className="card-image" src={img} alt={altText} />
      <h3 className="card-description">{desc}</h3>
    </button>
  );
}
