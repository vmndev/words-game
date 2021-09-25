import { useEffect } from "react";
import { useGameState } from "../../context/context";
import { useLocalStorage } from "../../hooks/use-localstorage";

import styles from "./header.module.scss";

export const Record = () => {
  const { score } = useGameState();
  const [topScore, setTopScore] = useLocalStorage("top-score", 0);

  useEffect(() => {
    if (score > topScore) {
      setTopScore(score);
    }
  }, [score, setTopScore, topScore]);

  return (
    <div className={styles.headerItemWrapper}>
      <div className={styles.record}>{topScore} :שיא</div>
    </div>
  );
};
