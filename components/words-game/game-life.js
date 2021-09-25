import { useGameLifeCount } from "../../hooks/use-game-life-count";
import styles from "./header.module.scss";

export const GameLife = () => {
  const { mistakesCount, correctAnswersCount } = useGameLifeCount();

  return (
    <div className={styles.headerItemWrapper}>
      <span className={styles.corrects}>
        <span
          className={styles.correctsBar}
          style={{ height: `${correctAnswersCount * 10}%` }}
        ></span>
      </span>
      <span className={styles.score}>{mistakesCount}</span>
      <span className={styles.ex}>x</span>
      <span className={styles.heart}>🫀</span>
    </div>
  );
};
