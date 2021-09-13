import { useEffect, useContext, useState, useRef } from "react";
import { GameContext } from "../../context/context";
import { useIsMounted } from "../../hooks/use-is-mounted";
import { GameEndScreen } from "./game-end-screen";
import { PlaceholderCards } from "./placeholder-cards";
import { SelectionCards } from "./selection-cards";
import { SkipButton } from "./skip-button";

import styles from "./words-game.module.scss";
import { Header } from "./header";
import { useAnswerState } from "../../hooks/use-answer-state";
// import { useBonusLife } from "../../hooks/use-bonus-life";

export const WordsGame = () => {
  const [isGameEnd, setIsGameEnd] = useState(false);
  const mounted = useIsMounted();
  const {
    shuffleWord,
    incrementMaxMistakes,
    mistakes,
    maxMistakes,
    resetGame,
    score,
  } = useContext(GameContext);

  //   const [isCorrect] = useAnswerState();
  //   const correctAnswersCount = useRef(0);

  //   useEffect(() => {
  //     console.log(isCorrect);
  //     if (isCorrect === "correct") {
  //       correctAnswersCount.current += 1;
  //       if (correctAnswersCount.current >= 10) {
  //         incrementMaxMistakes();
  //         correctAnswersCount.current = 0;
  //       }
  //     }
  //     if (isCorrect === "incorrect") {
  //       correctAnswersCount.current = 0;
  //     }
  //   }, [incrementMaxMistakes, isCorrect, score]);

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
        <SkipButton />
      </div>

      {!!isGameEnd && <GameEndScreen onClick={handleNewGameClick} />}
    </>
  );
};
