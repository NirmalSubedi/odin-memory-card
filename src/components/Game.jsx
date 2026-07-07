import { useState } from "react";
import { CardGroup, Card, Score } from "./index.jsx";
import { shuffle } from "../utils/index.js";

export function Game({ items }) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const onIncreaseScore = () => {
    const nextScore = score + 1;
    const maximumItems = items.length;

    setScore(nextScore);
    if (nextScore > bestScore && nextScore === maximumItems) {
      setBestScore(nextScore);
    }
    nextScore === maximumItems ? onGameOver() : shuffle(items);
  };

  const onRestartGame = () => {
    setScore(0);
    setIsGameOver(false);
    shuffle(items);
    items.forEach((item) => (item.id = crypto.randomUUID()));
  };

  const onGameOver = () => {
    setIsGameOver(true);
  };

  return (
    <>
      <Score {...{ score, bestScore }} />
      <CardGroup>
        {items?.map((item) => (
          <Card
            key={item.id}
            {...{
              ...item,
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
