import React, { createContext, useMemo, useReducer } from "react";
import { gameReducer, mistakesReducer, scoreReducer } from "./reducer";
import { names } from "./names";

export const GameContext = createContext();
export const ScoreContext = createContext();
export const MistakesContext = createContext();

const initialWord = names[Math.floor(Math.random() * names.length)];
export const initialGameState = {
  word: initialWord,
  model: [...Array(initialWord.length)],
};

export const initialScoreState = {
  score: 0,
};

export const initialMistakesState = {
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
};

export const ScoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(scoreReducer, initialScoreState);

  const value = useMemo(
    () => ({
      score: state.score,
      incrementScore: () => {
        dispatch({ type: actions.INCREMENT_SCORE });
      },
      decrementScore: () => {
        dispatch({ type: actions.DECREMENT_SCORE });
      },
    }),
    [state, dispatch]
  );

  return (
    <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
  );
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  const value = useMemo(
    () => ({
      word: state.word,
      model: state.model,
      shuffleWord: () => {
        dispatch({ type: actions.SHUFFLE_WORD });
      },
      resetGame: () => {
        dispatch({ type: actions.RESET_GAME });
      },
      updateModel: (model) => {
        dispatch({ type: actions.UPDATE_MODEL, payload: model });
      },
    }),
    [state, dispatch]
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const MistakesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mistakesReducer, initialMistakesState);

  const value = useMemo(
    () => ({
      mistakes: state.mistakes,
      maxMistakes: state.maxMistakes,
      correctAnswersCount: state.correctAnswersCount,
      incrementMistakes: () => {
        dispatch({ type: actions.INCREMENT_MISTAKES });
      },
      incrementMaxMistakes: () => {
        dispatch({ type: actions.INCREMENT_MAX_MISTAKES });
      },
      resetMistakes: () => {
        dispatch({ type: actions.RESET_MISTAKES });
      },
      incrementCorrectAnswersCount: () => {
        dispatch({ type: actions.INCREMENT_CORRECT_ANSWERS });
      },
      resetCorrectAnswersCount: () => {
        dispatch({ type: actions.RESET_CORRECT_ANSWERS });
      },
    }),
    [state, dispatch]
  );

  return (
    <MistakesContext.Provider value={value}>
      {children}
    </MistakesContext.Provider>
  );
};
