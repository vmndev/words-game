import { actions, initialGameState, initialMistakesState } from "./context";
import { names } from "./names";

export const gameReducer = (state, action) => {
  const nextWord = names[Math.floor(Math.random() * names.length)];
  switch (action.type) {
    case actions.SHUFFLE_WORD:
      return {
        ...state,
        ...{
          word: nextWord,
          model: [...Array(nextWord.length)],
        },
      };
    case actions.UPDATE_MODEL:
      return { ...state, model: action.payload };
    case actions.RESET_GAME:
      return initialGameState;
    case actions.INCREMENT_SCORE:
      return { ...state, score: state.score + 1 };
    case actions.DECREMENT_SCORE:
      return { ...state, score: state.score - 1 };
    case actions.INCREMENT_MISTAKES:
      return { ...state, mistakes: state.mistakes + 1 };
    case actions.INCREMENT_MAX_MISTAKES:
      return { ...state, maxMistakes: state.maxMistakes + 1 };
    case actions.INCREMENT_CORRECT_ANSWERS:
      return { ...state, correctAnswersCount: state.correctAnswersCount + 1 };
    case actions.RESET_CORRECT_ANSWERS:
      return { ...state, correctAnswersCount: 0 };
    case actions.RESET_MISTAKES:
      return initialMistakesState;
    default:
      return state;
  }
};
