import React, { useContext, useEffect, useState } from "react";
import { GameContext, MistakesContext } from "../../context/context";
import { useIsMounted } from "../../hooks/use-is-mounted";
import styles from "./game-end-screen.module.scss";

const emojiArr = [
  "😒",
  "😞",
  "😔",
  "😟",
  "😕",
  "🙁",
  "😣",
  "😖",
  "😫",
  "😩",
  "🥺",
  "😢",
  "😭",
  "😤",
  "😠",
  "😡",
  "🤬",
  "🤯",
  "😳",
  "🥵",
  "🥶",
  "😱",
  "😨",
  "😰",
  "😥",
  "😓",
];
export const GameEndScreen = () => {
  const emoji = emojiArr[Math.floor(Math.random() * emojiArr.length)];
  const mounted = useIsMounted();
  const [isGameEnd, setIsGameEnd] = useState(false);
  const { resetGame, shuffleWord } = useContext(GameContext);
  const { mistakes, maxMistakes, resetMistakes } = useContext(MistakesContext);

  useEffect(() => {
    if (mounted && mistakes >= maxMistakes) {
      setIsGameEnd(true);
    }
  }, [maxMistakes, mistakes, resetGame]);

  const handleNewGameClick = () => {
    resetGame();
    resetMistakes();
    shuffleWord();
    setIsGameEnd(false);
  };

  return isGameEnd ? (
    <div className={styles.gameEnd}>
      <span className={styles.emoji}>{emoji}</span>
      <button onClick={handleNewGameClick}>משחק חדש</button>
    </div>
  ) : null;
};
