import { useContext, useMemo } from "react";
import { DispatchContext, GameContext } from "../context/context";

export const useMistakeData = () => {
  const { mistakes, maxMistakes } = useContext(GameContext);
  const { incrementMistakes, incrementMaxMistakes } =
    useContext(DispatchContext);

  return useMemo(() => {
    return {
      mistakes,
      maxMistakes,
      incrementMistakes,
      incrementMaxMistakes,
    };
  }, [mistakes, maxMistakes, incrementMistakes, incrementMaxMistakes]);
};
