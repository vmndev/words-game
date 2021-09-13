import { useContext, useEffect } from "react";
import { GameContext } from "../../context/context";
import { useLocalStorage } from "../../hooks/use-localstorage";

import styles from "./header.module.scss";

export const Record = () => {
  const { correctAnswersCount } = useContext(GameContext);
  const [topScore, setTopScore] = useLocalStorage("top-score", 0);

  useEffect(() => {
    if (correctAnswersCount > topScore) {
      setTopScore(correctAnswersCount);
    }
  }, [correctAnswersCount, setTopScore, topScore]);

  return (
    <div className={styles.headerItemWrapper}>
      <div className={styles.record}>{topScore} :שיא</div>
    </div>
  );
};
