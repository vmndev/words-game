import { useIsMounted } from "../../hooks/use-is-mounted";
import { GameEndScreen } from "./game-end-screen";
import { PlaceholderCards } from "./placeholder-cards";
import { SelectionCards } from "./selection-cards";

import styles from "./words-game.module.scss";
import { Header } from "./header";
import { Footer } from "./footer";

export const WordsGame = () => {
  const mounted = useIsMounted();

  if (!mounted) return null;

  return (
    <div className={styles.gameWrapper}>
      <Header />
      <div className={styles.cardsWrapper}>
        <PlaceholderCards />
        <SelectionCards />
      </div>
      <Footer />
      <GameEndScreen />
    </div>
  );
};
