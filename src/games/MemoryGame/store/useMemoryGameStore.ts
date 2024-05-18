import { create } from "zustand";

export enum GameModes {
  LEVEL = "LEVEL",
  INGAME = "IN_GAME",
  GAMEOVER = "GAME_OVER",
}

export enum GameLevels {
  Beginner = "Beginner",
  Amateur = "Amateur",
  Expert = "Expert",
}

type MemoryStoreVals = {
  gameLevel: GameLevels;
  mode: GameModes;
  matchedCards: Set<number>;
  turnedCards: Set<number>;
};

type MemoryStoreSetters = {
  updateTurnedCards: (val: number) => void;
  updateMatchedCards: (val: number) => void;
  updateMode: (mode: GameModes) => void;
  resetTurnedCards: () => void;
  updateGameLevel: (level: MemoryStoreVals["gameLevel"]) => void;
  resetMode: () => void;
  resetGame: () => void;
};

type MemoryStore = MemoryStoreVals & MemoryStoreSetters;

export const initialState: MemoryStoreVals = {
  gameLevel: GameLevels.Beginner,
  mode: GameModes.LEVEL,
  matchedCards: new Set(),
  turnedCards: new Set(),
};

export const useMemoryGameStore = create<MemoryStore>((set, get) => ({
  ...initialState,
  updateTurnedCards: (val: number) =>
    set({ turnedCards: new Set([...get().turnedCards, val]) }),
  resetTurnedCards: () => set({ turnedCards: new Set() }),
  updateMatchedCards: (val: number) =>
    set({ matchedCards: new Set([...get().matchedCards, val]) }),
  updateMode: (mode) => set({ mode: mode }),
  updateGameLevel: (level) => set({ gameLevel: level }),
  resetMode: () => set({ ...initialState, mode: GameModes.LEVEL }),
  resetGame: () =>
    set({
      ...initialState,
      mode: GameModes.INGAME,
      gameLevel: get().gameLevel,
    }),
}));
