import { StyledHeader } from "../GlobalStyles";
import {
  initialState,
  useMemoryGameStore,
} from "../games/MemoryGame/store/useMemoryGameStore";
import {
  initialState as ticToeInitialState,
  useTicToeStore,
} from "../games/TicToe/store/useTicToeStore";
import { Games, useGlobalStore } from "../store/useGlobalStore";
import Info from "./Info";

const Header = () => {
  const [updateSelectionGame] = useGlobalStore((state) => [
    state.updateSelectionGame,
  ]);

  const handleReset = () => {
    updateSelectionGame(Games.GAME_SELECTION);
    useMemoryGameStore.setState(initialState);
    useTicToeStore.setState(ticToeInitialState);
  };

  return (
    <StyledHeader>
      <h3 onClick={handleReset}>JoyRover</h3>
      <Info />
    </StyledHeader>
  );
};

export default Header;
