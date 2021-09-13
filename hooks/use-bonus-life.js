import { useContext, useEffect, useRef } from "react";
import { GameContext } from "../context/context";

export const useBonusLife = () => {
  const {
    word,
    model,
    shuffleWord,
    incrementScore,
    incrementMistakes,
    incrementMaxMistakes,
    updateModel,
    mistakes,
    maxMistakes,
    resetGame,
    correctAnswersCount,
    resetCorrectAnswersCount,
    incrementCorrectAnswersCount,
  } = useContext(GameContext);

  const correctCount = useRef(0);

  useEffect(() => {
    if (correctAnswersCount >= 3) {
      correctCount.current = 0;
      resetCorrectAnswersCount();
    }
    correctCount.current++;
  }, [correctAnswersCount, resetCorrectAnswersCount]);

  return correctCount.current === 3;
};
