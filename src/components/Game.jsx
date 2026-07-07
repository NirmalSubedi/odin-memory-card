import { useState } from "react";
import { CardGroup, Card, Score } from "./index.jsx";

export function Game({ items }) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const onIncreaseScore = () => setScore(score + 1);
  const onRestartGame = () => setIsGameOver(false);
  const onGameOver = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
    setIsGameOver(true);
  };

  return (
    <>
      <Score {...{ score, bestScore }} />
      <CardGroup>
        {items?.map((item) => (
          <Card
            {...{
              item,
              isGameOver,
              endGame: onGameOver,
              increaseScore: onIncreaseScore,
              restartGame: onRestartGame,
            }}
          />
        ))}
      </CardGroup>
    </>
  );
}
