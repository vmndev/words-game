import classNames from "classnames";
import { useContext } from "react";
import { GameContext } from "../../context/context";

import styles from "./words-game.module.scss";

export const HealthMeter = () => {
  const { mistakes, maxMistakes } = useContext(GameContext);
  const healthPercent = (100 / maxMistakes) * (maxMistakes - mistakes);

  const meterBarClasses = classNames(styles.healthMeterBar, {
    [styles.low]: healthPercent <= 30,
    [styles.medium]: healthPercent > 30 && healthPercent <= 60,
    [styles.high]: healthPercent > 60 && healthPercent <= 100,
  });

  return (
    <div className={styles.healthMeterWrapper}>
      <div
        className={meterBarClasses}
        style={{ width: `${healthPercent}%` }}
      ></div>
    </div>
  );
};
