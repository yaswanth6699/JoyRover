import { useEffect } from "react";
import { GameModes, useMemoryGameStore } from "../store/useMemoryGameStore";
import { PlainBox, StyledBox, StyledTile } from "../styles";

const Tile = ({
  num,
  index,
  gridNumbers,
}: {
  num: number;
  index: number;
  gridNumbers: number[];
}) => {
  const [
    turnedCards,
    updateTurnedCards,
    resetTurnedCards,
    updateMatchedCards,
    matchedCards,
    updateMode,
  ] = useMemoryGameStore((state) => [
    state.turnedCards,
    state.updateTurnedCards,
    state.resetTurnedCards,
    state.updateMatchedCards,
    state.matchedCards,
    state.updateMode,
  ]);

  const handleTile = (val: number) => {
    if (turnedCards.size > 1) return;
    updateTurnedCards(val);
  };

  const handleUpdateMatchedCards = () => {
    const [card1, card2] = turnedCards;
    if (gridNumbers[card1] === gridNumbers[card2])
      updateMatchedCards(gridNumbers[card1]);
  };

  useEffect(() => {
    if (turnedCards.size < 2) return;
    const timer = setTimeout(() => {
      handleUpdateMatchedCards();
      resetTurnedCards();
    }, 1000);

    return () => clearInterval(timer);
  }, [turnedCards]);

  useEffect(() => {
    if (matchedCards.size === gridNumbers.length / 2) {
      updateMode(GameModes.GAMEOVER);
    }
  }, [matchedCards]);

  return matchedCards.has(num) ? (
    <PlainBox />
  ) : turnedCards.has(index) ? (
    <StyledBox>{num}</StyledBox>
  ) : (
    <StyledTile onClick={() => handleTile(index)} />
  );
};

export default Tile;
