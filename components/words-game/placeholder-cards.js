import { useCallback } from "react";
import { useGameState, useGameUpdater } from "../../context/context";
import styles from "./words-game.module.scss";

export const PlaceholderCards = () => {
  const { model } = useGameState();
  const { updateModel } = useGameUpdater();
  const isModelEmpty = model.filter(Boolean).length === 0;

  const clearAll = useCallback(() => {
    updateModel([...Array(model.length)]);
  }, [model, updateModel]);

  const handlePlaceholderClick = useCallback(
    ({ shuffledIndex }) => {
      const tempArr = [...model];
      const selectedItemIndex = tempArr.findIndex(
        (item) => item?.shuffledIndex === shuffledIndex
      );

      tempArr[selectedItemIndex] = undefined;
      updateModel(tempArr);
    },
    [model, updateModel]
  );

  return (
    <div className={styles.placeholdersWrapper}>
      {model.map((item, idx) => {
        return (
          <span
            key={idx}
            className={styles.selectedLettersItem}
            onClick={() => {
              if (!item) return;
              const { shuffledIndex } = item;
              handlePlaceholderClick({
                shuffledIndex,
              });
            }}
          >
            {item && item.letter}
          </span>
        );
      })}
      {!isModelEmpty && (
        <div className={styles.selectionClearButton} onClick={clearAll}>
          <span>✘</span>
        </div>
      )}
    </div>
  );
};
