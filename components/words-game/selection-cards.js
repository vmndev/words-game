import React, { useMemo } from "react";
import classNames from "classnames";

import styles from "./words-game.module.scss";

import { shuffle } from "../../utils";

export const SelectionCards = ({ word, model, updateModel }) => {
  const shuffledArr = useMemo(() => shuffle([...word]), [word]);

  const getNextState = ({ shuffledIndex, letter, isUsed }) => {
    const tempArr = [...model];
    if (isUsed) {
      const selectedItemIndex = tempArr.findIndex(
        (item) => item?.shuffledIndex === shuffledIndex
      );

      tempArr[selectedItemIndex] = undefined;
      return tempArr;
    }

    const nextEmptyPlace = tempArr.indexOf(undefined);

    tempArr[nextEmptyPlace] = {
      shuffledIndex,
      letter,
    };

    return tempArr;
  };

  const handleLetterSelect = ({ shuffledIndex, letter, isUsed }) => {
    const nextModelState = getNextState({ shuffledIndex, letter, isUsed });
    updateModel(nextModelState);
  };

  return (
    <div className={styles.selectionCardsWrapper}>
      {shuffledArr.map((letter, idx) => {
        const isUsed = model.some((selected) => {
          return selected?.shuffledIndex === idx;
        });

        const classes = classNames(styles.singleLetter, {
          [styles.disabled]: isUsed,
        });
        return (
          <button
            key={idx}
            className={classes}
            onClick={() =>
              handleLetterSelect({ shuffledIndex: idx, letter, isUsed })
            }
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};
