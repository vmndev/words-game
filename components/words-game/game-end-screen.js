import { useEffect, useState } from "react";
import { useGameState, useGameUpdater } from "../../context/context";
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
  const { mistakes, maxMistakes } = useGameState();
  const { resetGame, shuffleWord } = useGameUpdater();

  useEffect(() => {
    if (mounted && mistakes >= maxMistakes) {
      setIsGameEnd(true);
    }
  }, [maxMistakes, mistakes, mounted, resetGame]);

  const handleNewGameClick = () => {
    resetGame();
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
