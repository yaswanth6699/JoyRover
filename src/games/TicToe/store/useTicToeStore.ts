import { create } from "zustand";

export enum GameModes {
  INGAME = "IN_GAME",
}

export enum PlayerMoves {
  X = "X",
  O = "O",
}

export enum GameStatus {
  X_TURN = "PLAYER X TURN",
  O_TURN = "PLAYER O TURN",
  X_WINNER = "PLAYER X WINNER",
  O_WINNER = "PLAYER O WINNER",
  DRAW = "MATCH DRAW",
}

interface TTInitialState {
  mode: GameModes;
  playerMove: PlayerMoves;
  moves: Map<number, PlayerMoves>;
  gameStatus: GameStatus;
  gameOver: boolean;
}

interface TTActions {
  updatePlayerMove: () => void;
  updateMode: (mode: GameModes) => void;
  trackMoves: (index: number, move: PlayerMoves) => void;
  updateGameStatus: (status: GameStatus) => void;
  updateWin: () => void;
  resetGame: () => void;
}

const WinningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const initialState: TTInitialState = {
  mode: GameModes.INGAME,
  playerMove: PlayerMoves.X,
  moves: new Map(),
  gameStatus: GameStatus.X_TURN,
  gameOver: false,
};

type TicToeStore = TTActions & TTInitialState;

export const useTicToeStore = create<TicToeStore>((set) => ({
  ...initialState,
  updatePlayerMove: () =>
    set((state) => ({
      playerMove:
        state.playerMove === PlayerMoves.O ? PlayerMoves.X : PlayerMoves.O,
    })),
  updateMode: (mode) => set({ mode }),
  trackMoves: (index, move) =>
    set((state) => ({
      moves: new Map(state.moves).set(index, move),
    })),
  updateGameStatus: (status) => set({ gameStatus: status }),
  updateWin: () =>
    set((state) => {
      let newGameStatus = state.gameStatus;
      const moves = state.moves;

      for (let i = 0; i < WinningPatterns.length; i++) {
        const vals = WinningPatterns[i];
        const isXwon =
          vals.filter((item) => moves.get(item) === PlayerMoves.X).length === 3;
        const isOwon =
          vals.filter((item) => moves.get(item) === PlayerMoves.O).length === 3;
        if (isXwon) {
          newGameStatus = GameStatus.X_WINNER;
          break;
        } else if (isOwon) {
          newGameStatus = GameStatus.O_WINNER;
          break;
        }
      }
      const isDraw =
        moves.size === 9 &&
        newGameStatus !== GameStatus.X_WINNER &&
        newGameStatus !== GameStatus.O_WINNER;
      if (isDraw) {
        newGameStatus = GameStatus.DRAW;
      }
      const gameOver =
        newGameStatus === GameStatus.O_WINNER ||
        newGameStatus === GameStatus.X_WINNER ||
        newGameStatus === GameStatus.DRAW;
      return { gameStatus: newGameStatus, gameOver };
    }),
  resetGame: () =>
    set({
      ...initialState,
      mode: GameModes.INGAME,
    }),
}));
