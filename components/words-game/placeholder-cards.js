import styles from "./words-game.module.scss";

export const PlaceholderCards = ({ model, updateModel }) => {
  const isModelEmpty = model.filter(Boolean).length === 0;

  const clearAll = () => {
    updateModel([...Array(model.length)]);
  };

  const handlePlaceholderClick = ({ shuffledIndex }) => {
    const tempArr = [...model];
    const selectedItemIndex = tempArr.findIndex(
      (item) => item?.shuffledIndex === shuffledIndex
    );

    tempArr[selectedItemIndex] = undefined;
    updateModel(tempArr);
  };

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
