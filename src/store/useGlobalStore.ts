import { create } from "zustand";

export enum Games {
  MEMORY_GAME = "MEMORY_GAME",
  TIC_TAC_TOE = "TIC_TAC_TOE",
  GAME_SELECTION = "GAME_SELECTION",
}

export enum ThemeNames {
  DARK = "DARK",
  DARQULA = "DARQULA",
}

export const Theme = {
  [ThemeNames.DARK]: {
    bg: "#0d0a0b",
    bi: "linear-gradient(315deg, #0d0a0b 0%, #009fc2 74%);",
  },
  [ThemeNames.DARQULA]: {
    bg: "transparent",
    bi: "radial-gradient(circle 986.6px at 10% 20%,rgba(251, 6, 6, 0.94) 0%,rgba(3, 31, 213, 1) 82.8%,rgba(248, 101, 248, 1) 87.9%)",
  },
};

export interface GlobalStore {
  theme: { bg: string; bi: string };
  selectedGame: Games;
  updateSelectionGame: (val: Games) => void;
  updateTheme: (val: ThemeNames) => void;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
  theme: Theme[ThemeNames.DARK],
  selectedGame: Games.GAME_SELECTION,
  updateSelectionGame: (val) => set({ selectedGame: val }),
  updateTheme: (val) => set({ theme: Theme[val] }),
}));
