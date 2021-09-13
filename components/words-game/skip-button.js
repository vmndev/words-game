import { useContext } from "react";
import { GameContext } from "../../context/context";
import styles from "./words-game.module.scss";

export const SkipButton = () => {
  const { score, shuffleWord, decrementScore, incrementMistakes } =
    useContext(GameContext);
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
