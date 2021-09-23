import { useContext, useEffect, useState } from "react";
import { GameContext, MistakesContext } from "../context/context";

export const useAnswerState = () => {
  const { word, model, shuffleWord, updateModel, incrementScore } =
    useContext(GameContext);

  const { incrementMistakes, incrementCorrectAnswersCount } =
    useContext(MistakesContext);

  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const selectedWord = model
    .filter(Boolean)
    .map((item) => item.letter)
    .join("");

  useEffect(() => {
    const allLettersUsed = word.length === selectedWord.length;
    const isCorrect = word === selectedWord;

    if (!allLettersUsed) {
      setIsCorrectAnswer(null);
      return;
    }

    if (isCorrect) {
      setIsCorrectAnswer("correct");
      shuffleWord();
      incrementScore();
      incrementCorrectAnswersCount();
      return;
    }

    setIsCorrectAnswer("incorrect");
    incrementMistakes();
    updateModel([...Array(word.length)]);
  }, [
    incrementCorrectAnswersCount,
    incrementMistakes,
    incrementScore,
    selectedWord,
    shuffleWord,
    updateModel,
    word,
  ]);

  return [isCorrectAnswer];
};
