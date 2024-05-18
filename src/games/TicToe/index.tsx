import { Container, StyledTitle } from "../../GlobalStyles";
import InGame from "./Components/InGame";
import { GameModes, useTicToeStore } from "./store/useTicToeStore";

function TicToe() {
  const [mode] = useTicToeStore((state) => [state.mode]);
  const renderComponent = {
    [GameModes.INGAME]: <InGame />,
  };
  return (
    <Container>
      <StyledTitle>Tic Toe</StyledTitle>
      {renderComponent[mode]}
    </Container>
  );
}

export default TicToe;
