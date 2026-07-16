import Pokemon from "../assets/1.svg";
import { useEffect, useState } from "react";
import { CardGroup, Card, Score, Loader, Difficulty } from "./index.jsx";
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

const initialItems = Array.from({ length: 15 }, () => ({
  desc: "Crabominable",
  img: Pokemon,
  id: crypto.randomUUID(),
}));

export function Game() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [difficulty, setDifficulty] = useState(START_DIFFICULTY);
  // const [items, setItems] = useState([]);
  const [items, setItems] = useState(initialItems);

  // useEffect(() => {
  //   let ignore = false;

  //   (async function getData() {
  //     if (!Object.hasOwn(difficultyConfig, difficulty)) return;

  //     const option = difficultyConfig[difficulty];
  //     const cardData = await getCardData(option.cardAmount, option.cardOffset);
  //     if (ignore) return;

  //     setItems(cardData);
  //   })();

  //   return () => (ignore = true);
  // }, [difficulty]);

  const onIncreaseScore = () => {
    const nextScore = score + 1;
    const maxScore = items.length;

    setScore(nextScore);
    if (nextScore > bestScore) {
      setBestScore(nextScore);
    }
    nextScore === maxScore ? onGameOver() : shuffle(items);
  };

  const onRestartGame = () => {
    setScore(0);
    setIsGameOver(false);

    const maxScore = items.length;
    const nextDifficulty = increaseDifficulty(difficulty);
    const isNewDifficulty = nextDifficulty !== difficulty;

    if (score >= maxScore && isNewDifficulty)
      return setDifficulty(nextDifficulty);

    shuffle(items);
    items.forEach((item) => (item.id = crypto.randomUUID()));
  };

  const onGameOver = () => {
    setIsGameOver(true);
  };

  return (
    <>
      <Difficulty {...{ difficultyName: difficulty }} />
      <Score {...{ score, bestScore }} />
      <CardGroup {...{ isGameOver, onRestartGame }}>
        {items?.map((item) => (
          <Card
            key={item.id}
            {...{
              ...item,
              isGameOver,
              endGame: onGameOver,
              increaseScore: onIncreaseScore,
            }}
          />
        ))}
        {items.length === 0 && <Loader text="Loading Cards" />}
      </CardGroup>
    </>
  );
}
