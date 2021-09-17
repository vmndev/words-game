import React from "react";
import { useContext, useEffect, useState, useRef } from "react";
import classnames from "classnames";

import { MistakesContext, ScoreContext } from "../../context/context";
import { useAnswerState } from "../../hooks/use-answer-state";

import styles from "./header.module.scss";

export const GameLife = () => {
  const { score } = useContext(ScoreContext);
  const { mistakes, maxMistakes, incrementMaxMistakes } =
    useContext(MistakesContext);

  const [isCorrect] = useAnswerState();
  const correctAnswersCount = useRef(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);

    setTimeout(() => setAnimate(false), 1000);
  }, [mistakes]);

  useEffect(() => {
    if (isCorrect === "correct") {
      correctAnswersCount.current += 1;
      if (correctAnswersCount.current >= 10) {
        incrementMaxMistakes();
        correctAnswersCount.current = 0;
      }
    }
    if (isCorrect === "incorrect") {
      correctAnswersCount.current = 0;
    }
  }, [incrementMaxMistakes, isCorrect, score]);

  const classname = classnames(styles.heart, { [styles.animate]: animate });

  return (
    <div className={styles.headerItemWrapper}>
      <span className={styles.corrects}>
        <span
          className={styles.correctsBar}
          style={{ height: `${correctAnswersCount.current * 10}%` }}
        ></span>
      </span>
      <span className={styles.score}>{maxMistakes - mistakes}</span>
      <span className={styles.ex}>x</span>
      <span className={classname}>🫀</span>
    </div>
  );
};
