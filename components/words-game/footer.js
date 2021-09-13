import { Record } from "./record";
import { SkipButton } from "./skip-button";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <SkipButton />
      <Record />
    </div>
  );
};
