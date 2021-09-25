import { useCallback, useEffect, useMemo, useRef } from "react";
import { useGameState, useGameUpdater } from "../context/context";
import { useAnswerState } from "./use-answer-state";

export function useGameLifeCount() {
  const { mistakes, maxMistakes } = useGameState();
  const { incrementMaxMistakes } = useGameUpdater();
  const [isCorrect] = useAnswerState();
  const correctAnswersCount = useRef(0);

  const handleIncrementMaxMistakes = useCallback(
    () => incrementMaxMistakes(),
    [incrementMaxMistakes]
  );

  useEffect(() => {
    if (isCorrect === "correct") {
      correctAnswersCount.current += 1;
      if (correctAnswersCount.current >= 10) {
        handleIncrementMaxMistakes();
        correctAnswersCount.current = 0;
      }
    }
    if (isCorrect === "incorrect") {
      correctAnswersCount.current = 0;
    }
  }, [handleIncrementMaxMistakes, isCorrect]);

  return useMemo(
    () => ({
      mistakesCount: maxMistakes - mistakes,
      correctAnswersCount: correctAnswersCount.current,
    }),
    [maxMistakes, mistakes]
  );
}
