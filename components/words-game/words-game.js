import React, { useContext } from "react";
import { GameContext } from "../../context/context";
import { useIsMounted } from "../../hooks/use-is-mounted";
import { GameEndScreen } from "./game-end-screen";
import { PlaceholderCards } from "./placeholder-cards";
import { SelectionCards } from "./selection-cards";

import styles from "./words-game.module.scss";
import { Header } from "./header";
import { Footer } from "./footer";

export const WordsGame = () => {
  const mounted = useIsMounted();
  const { word, model, updateModel } = useContext(GameContext);

  if (!mounted) return null;

  return (
    <div className={styles.gameWrapper}>
      <Header />
      <div className={styles.cardsWrapper}>
        <PlaceholderCards model={model} updateModel={updateModel} />
        <SelectionCards word={word} model={model} updateModel={updateModel} />
      </div>
      <Footer />
      <GameEndScreen />
    </div>
  );
};
