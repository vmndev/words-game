import React, { useContext, useEffect, useState } from "react";
import classnames from "classnames";

import { ScoreContext } from "../../context/context";
import styles from "./header.module.scss";

export const GameScore = () => {
  const { score } = useContext(ScoreContext);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);

    setTimeout(() => setAnimate(false), 1000);
  }, [score]);

  const starClassname = classnames(styles.star, { [styles.animate]: animate });

  return (
    <div className={styles.headerItemWrapper}>
      <span className={styles.score}>{score}</span>
      <span className={styles.ex}>x</span>
      <span className={starClassname}>⭐️</span>
    </div>
  );
};
