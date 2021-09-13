import { useEffect, useContext, useState, useRef } from "react";
import { GameContext } from "../../context/context";
import { useIsMounted } from "../../hooks/use-is-mounted";
import { GameEndScreen } from "./game-end-screen";
import { PlaceholderCards } from "./placeholder-cards";
import { SelectionCards } from "./selection-cards";

import styles from "./words-game.module.scss";
import { Header } from "./header";
import { Footer } from "./footer";

export const WordsGame = () => {
  const [isGameEnd, setIsGameEnd] = useState(false);
  const mounted = useIsMounted();
  const { shuffleWord, mistakes, maxMistakes, resetGame } =
    useContext(GameContext);

  useEffect(() => {
    if (mistakes >= maxMistakes) {
      setIsGameEnd(true);
    }
  }, [maxMistakes, mistakes, resetGame]);

  const handleNewGameClick = () => {
    resetGame();
    shuffleWord();
    setIsGameEnd(false);
  };

  if (!mounted) return null;

  return (
    <>
      <Header />
      <div className={styles.gameWrapper}>
        <div className={styles.cardsWrapper}>
          <PlaceholderCards />
          <SelectionCards />
        </div>
        <Footer />
      </div>
      {!!isGameEnd && <GameEndScreen onClick={handleNewGameClick} />}
    </>
  );
};
