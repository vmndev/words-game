import { useContext, useMemo } from "react";
import { GameContext, MistakesContext } from "../context/context";

export const useMistakeData = () => {
  const { mistakes, maxMistakes, incrementMistakes, incrementMaxMistakes } =
    useContext(MistakesContext);
  console.log(mistakes);
  return useMemo(() => {
    return {
      mistakes,
      maxMistakes,
      incrementMistakes,
      incrementMaxMistakes,
    };
  }, [mistakes, maxMistakes, incrementMistakes, incrementMaxMistakes]);
};
