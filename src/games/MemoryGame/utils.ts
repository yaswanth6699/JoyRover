import { GameLevels } from "./store/useMemoryGameStore";

export const randomizeNumbers = (gameLevel: GameLevels) => {
  const gridSize = {
    [GameLevels.Beginner]: 2,
    [GameLevels.Amateur]: 4,
    [GameLevels.Expert]: 6,
  };
  const grids = gridSize[gameLevel];
  const nums = Array.from({
    length: (grids * grids) / 2,
  }).map((_, index) => index + 1);
  const tempNumbers = [...nums, ...nums];
  for (let i = 0; i < tempNumbers.length; i++) {
    const rand = Math.floor(Math.random() * (i + 1));
    [tempNumbers[rand], tempNumbers[i]] = [tempNumbers[i], tempNumbers[rand]];
  }
  return { gridNums: tempNumbers, gridSize: gridSize[gameLevel] };
};
