import { StyledHeader } from "../GlobalStyles";
import { Games, useGlobalStore } from "../store/useGlobalStore";
import Info from "./Info";

const Header = () => {
  const [updateSelectionGame] = useGlobalStore((state) => [
    state.updateSelectionGame,
  ]);

  return (
    <StyledHeader>
      <h3 onClick={() => updateSelectionGame(Games.GAME_SELECTION)}>
        JoyRover
      </h3>
      <Info />
    </StyledHeader>
  );
};

export default Header;
