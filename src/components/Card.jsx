import "../styles/Card.css";
import { useState } from "react";

export function Card({ img, altText = "", desc, onGameOver, onIncreaseScore }) {
  const [wasClicked, setWasClicked] = useState(false);
  const [activeAnimation, setActiveAnimation] = useState("");

  const onStaleClick = () => {
    setActiveAnimation("stale");
  };

  const onFreshClick = () => {
    setActiveAnimation("fresh");
  };

  const handleAnimationEnd = () => {
    setActiveAnimation("");
    if (activeAnimation === "stale") {
      onGameOver();
    } else if (activeAnimation === "fresh") {
      onIncreaseScore();
    }
  };

  const handleClick = () => {
    if (wasClicked) {
      onStaleClick();
    } else {
      onFreshClick();
      setWasClicked(true);
    }
  };

  return (
    <button
      className={`card ${activeAnimation}`}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
    >
      <img className="card-image" src={img} alt={altText} />
      <h3 className="card-description">{desc}</h3>
    </button>
  );
}
