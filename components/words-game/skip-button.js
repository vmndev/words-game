import React, { useContext } from "react";
import {
  GameContext,
  MistakesContext,
  ScoreContext,
} from "../../context/context";
import styles from "./footer.module.scss";

export const SkipButton = () => {
  const { shuffleWord } = useContext(GameContext);
  const { score, decrementScore } = useContext(ScoreContext);
  const { incrementMistakes } = useContext(MistakesContext);
  const handleOnClick = () => {
    shuffleWord();

    if (score > 0) {
      decrementScore();
      return;
    }

    incrementMistakes();
  };

  return (
    <button className={styles.skipButton} onClick={handleOnClick}>
      !הבא
    </button>
  );
};
