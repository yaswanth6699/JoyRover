import { IoMdArrowRoundBack } from "react-icons/io";
import { Container, StyledTitle } from "../../GlobalStyles";
import { Games, useGlobalStore } from "../../store/useGlobalStore";
import InGame from "./Components/InGame";
import { GameModes, useTicToeStore } from "./store/useTicToeStore";

function TicToe() {
  const [mode] = useTicToeStore((state) => [state.mode]);
  const [updateSelectionGame] = useGlobalStore((state) => [
    state.updateSelectionGame,
  ]);
  const renderComponent = {
    [GameModes.INGAME]: <InGame />,
  };
  return (
    <Container>
      <StyledTitle>
        <div onClick={() => updateSelectionGame(Games.GAME_SELECTION)}>
          <IoMdArrowRoundBack />
        </div>
        Tic Toe
      </StyledTitle>
      {renderComponent[mode]}
    </Container>
  );
}

export default TicToe;
