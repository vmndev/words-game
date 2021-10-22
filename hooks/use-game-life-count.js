import { useCallback, useEffect, useMemo, useState } from "react";
import { useGameState, useGameUpdater } from "../context/context";
import { useAnswerState } from "./use-answer-state";

export function useGameLifeCount() {
  const { mistakes, maxMistakes } = useGameState();
  const { incrementMaxMistakes } = useGameUpdater();
  const [isCorrect] = useAnswerState();
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const handleIncrementMaxMistakes = useCallback(
    () => incrementMaxMistakes(),
    [incrementMaxMistakes]
  );

  useEffect(() => {
    if (isCorrect === "correct") {
      setCorrectAnswersCount(count => count+1)
      if (correctAnswersCount >= 10) {
        handleIncrementMaxMistakes();
        setCorrectAnswersCount(0);
      }
    }
    if (isCorrect === "incorrect") {
      setCorrectAnswersCount(0);
    }
  }, [correctAnswersCount, handleIncrementMaxMistakes, isCorrect]);

  return useMemo(
    () => ({
      mistakesCount: maxMistakes - mistakes,
      correctAnswersCount: correctAnswersCount,
    }),
    [correctAnswersCount, maxMistakes, mistakes]
  );
}
