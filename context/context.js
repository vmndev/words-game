import React, { createContext, useMemo, useReducer } from "react";
import { gameReducer } from "./reducer";
import { names } from "./names";

export const GameContext = createContext();
export const DispatchContext = createContext();

const initialWord = names[Math.floor(Math.random() * names.length)];
export const initialGameState = {
  word: initialWord,
  model: [...Array(initialWord.length)],
  score: 0,
  mistakes: 0,
  maxMistakes: 6,
  correctAnswersCount: 0,
};

export const actions = {
  SHUFFLE_WORD: "SHUFFLE_WORD",
  INCREMENT_SCORE: "INCREMENT_SCORE",
  DECREMENT_SCORE: "DECREMENT_SCORE",
  INCREMENT_MISTAKES: "INCREMENT_MISTAKES",
  INCREMENT_MAX_MISTAKES: "INCREMENT_MAX_MISTAKES",
  RESET_GAME: "RESET_GAME",
  UPDATE_MODEL: "UPDATE_MODEL",
  INCREMENT_CORRECT_ANSWERS: "INCREMENT_CORRECT_ANSWERS",
  RESET_CORRECT_ANSWERS: "RESET_CORRECT_ANSWERS",
  RESET_MISTAKES: "RESET_MISTAKES",
  HANDLE_SKIP: "HANDLE_SKIP",
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  return (
    <GameContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </GameContext.Provider>
  );
};

export const useGameState = () => {
  const gameState = React.useContext(GameContext);
  if (typeof gameState === "undefined") {
    throw new Error("useGameState must be used within a GameProvider");
  }
  return gameState;
};

export const useGameUpdater = () => {
  const dispatch = React.useContext(DispatchContext);

  if (typeof dispatch === "undefined") {
    throw new Error("useGameUpdater must be used within a GameProvider");
  }

  return useMemo(
    () => ({
      shuffleWord: () => {
        dispatch({ type: actions.SHUFFLE_WORD });
      },
      resetGame: () => {
        dispatch({ type: actions.RESET_GAME });
      },
      updateModel: (model) => {
        dispatch({ type: actions.UPDATE_MODEL, payload: model });
      },
      incrementScore: () => {
        dispatch({ type: actions.INCREMENT_SCORE });
      },
      decrementScore: () => {
        dispatch({ type: actions.DECREMENT_SCORE });
      },
      incrementMistakes: () => {
        dispatch({ type: actions.INCREMENT_MISTAKES });
      },
      incrementMaxMistakes: () => {
        dispatch({ type: actions.INCREMENT_MAX_MISTAKES });
      },
      resetMistakes: () => {
        dispatch({ type: actions.RESET_MISTAKES });
      },
      // incrementCorrectAnswersCount: () => {
      //   dispatch({ type: actions.INCREMENT_CORRECT_ANSWERS });
      // },
      // resetCorrectAnswersCount: () => {
      //   dispatch({ type: actions.RESET_CORRECT_ANSWERS });
      // },
      handleSkip: () => {
        dispatch({ type: actions.SHUFFLE_WORD });
        dispatch({ type: actions.INCREMENT_MISTAKES });
        dispatch({ type: actions.HANDLE_SKIP });
      },
    }),
    [dispatch]
  );
};
