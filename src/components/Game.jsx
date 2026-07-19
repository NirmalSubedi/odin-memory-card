import { useEffect, useState } from "react";
import {
  CardGroup,
  Card,
  Score,
  Loader,
  Difficulty,
  Notice,
} from "./index.jsx";
import { increaseDifficulty, shuffle, getCardData } from "../utils/index.js";

const START_DIFFICULTY = "easy";
const difficultyConfig = {
  easy: {
    cardOffset: 0,
    cardAmount: 15,
  },
  medium: {
    cardOffset: 15,
    cardAmount: 20,
  },
  hard: {
    cardOffset: 15 + 20,
    cardAmount: 25,
  },
};

export function Game() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [difficulty, setDifficulty] = useState(START_DIFFICULTY);
  const [items, setItems] = useState([]);

  const maxScore = items.length;
  const isGameWon = score === maxScore;

  useEffect(() => {
    let ignore = false;

    (async function getData() {
      if (!Object.hasOwn(difficultyConfig, difficulty)) return;

      const option = difficultyConfig[difficulty];
      const cardData = await getCardData(option.cardAmount, option.cardOffset);
      if (ignore) return;

      setItems(shuffle(cardData));
    })();

    return () => (ignore = true);
  }, [difficulty]);

  const onIncreaseScore = () => {
    const nextScore = score + 1;

    setScore(nextScore);
    if (nextScore > bestScore) {
      setBestScore(nextScore);
    }
    nextScore === maxScore ? onGameOver() : shuffle(items);
  };

  const onRestartGame = () => {
    setScore(0);
    setIsGameOver(false);

    const nextDifficulty = increaseDifficulty(difficulty);
    const isNewDifficulty = nextDifficulty !== difficulty;

    if (isGameWon && isNewDifficulty) return setDifficulty(nextDifficulty);

    shuffle(items);
    items.forEach((item) => (item.id = crypto.randomUUID()));
  };

  const onGameOver = () => {
    setIsGameOver(true);
  };

  return (
    <>
      <Difficulty {...{ difficulty, isVisible: score === 0 }} />
      <Score {...{ score, bestScore }} />
      <Notice
        {...{
          subject: isGameWon ? "Victory!" : "Game Over!",
          message: `Click Any Card To ${isGameWon ? "Continue" : "Restart"}`,
          isVisible: isGameOver,
        }}
      />
      <CardGroup {...{ isGameOver, onRestartGame }}>
        {items.map((item) => (
          <Card
            key={item.id}
            {...{
              ...item,
              isGameOver,
              onGameOver,
              onIncreaseScore,
            }}
          />
        ))}
        {items.length === 0 && <Loader text="Loading Cards" />}
      </CardGroup>
    </>
  );
}
