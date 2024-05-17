import { useMemoryGameStore } from "./store/useMemoryGameStore";

export const randomizeNumbers = () => {
  const { gridSize, getGridSize } = useMemoryGameStore.getState();
  getGridSize();
  const nums = Array.from({
    length: (gridSize * gridSize) / 2,
  }).map((_, index) => index + 1);
  const tempNumbers = [...nums, ...nums];
  for (let i = 0; i < tempNumbers.length; i++) {
    const rand = Math.floor(Math.random() * (i + 1));
    [tempNumbers[rand], tempNumbers[i]] = [tempNumbers[i], tempNumbers[rand]];
  }
  return tempNumbers;
};
