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
export const GameEndScreen = ({ onClick = () => {} }) => {
  const emoji = emojiArr[Math.floor(Math.random() * emojiArr.length)];
  return (
    <div className={styles.gameEnd}>
      <span className={styles.emoji}>{emoji}</span>
      <button onClick={onClick}>משחק חדש</button>
    </div>
  );
};
