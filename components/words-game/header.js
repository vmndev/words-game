import { GameLife } from "./game-life";
import { GameScore } from "./game-score";

import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <GameLife />
        <GameScore />
      </div>
    </div>
  );
};
