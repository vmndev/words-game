import { useGameUpdater } from "../../context/context";
import styles from "./footer.module.scss";

export const SkipButton = () => {
  const { handleSkip } = useGameUpdater();

  return (
    <button className={styles.skipButton} onClick={handleSkip}>
      !הבא
    </button>
  );
};
