import { createContext, useReducer } from "react";
import { gameReducer } from "./reducer";
import { names } from "./names";

export const GameContext = createContext();

const initialWord = names[Math.floor(Math.random() * names.length)];
export const initialState = {
  word: initialWord,
  score: 0,
  mistakes: 0,
  maxMistakes: 6,
  model: [...Array(initialWord.length)],
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
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const value = {
    word: state.word,
    score: state.score,
    mistakes: state.mistakes,
    maxMistakes: state.maxMistakes,
    model: state.model,
    correctAnswersCount: state.correctAnswersCount,
    shuffleWord: () => {
      dispatch({ type: actions.SHUFFLE_WORD });
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
    resetGame: () => {
      dispatch({ type: actions.RESET_GAME });
    },
    updateModel: (model) => {
      dispatch({ type: actions.UPDATE_MODEL, payload: model });
    },
    incrementCorrectAnswersCount: () => {
      dispatch({ type: actions.INCREMENT_CORRECT_ANSWERS });
    },
    resetCorrectAnswersCount: () => {
      dispatch({ type: actions.RESET_CORRECT_ANSWERS });
    },
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
