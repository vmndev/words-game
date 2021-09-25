import { useMemo, useRef } from "react";
import { useGameState } from "../../context/context";
import styles from "./header.module.scss";

export const GameScore = () => {
  const { score } = useGameState();
  let { current } = useRef(0);

  current = useMemo(() => score, [score]);

  return (
    <div className={styles.headerItemWrapper}>
      <span className={styles.score}>{current}</span>
      <span className={styles.ex}>x</span>
      <span className={styles.star}>⭐️</span>
    </div>
  );
};
