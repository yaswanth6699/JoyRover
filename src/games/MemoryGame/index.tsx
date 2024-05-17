import { Container, StyledTitle } from "../../GlobalStyles";
import GameOver from "./components/GameOver";
import InGame from "./components/InGame";
import LevelSelection from "./components/LevelSelection";
import { GameModes, useMemoryGameStore } from "./store/useMemoryGameStore";
function MemoryGame() {
  const [mode] = useMemoryGameStore((state) => [state.mode]);

  const renderComponent = {
    [GameModes.LEVEL]: <LevelSelection />,
    [GameModes.INGAME]: <InGame />,
    [GameModes.GAMEOVER]: <GameOver />,
  };

  return (
    <Container>
      <StyledTitle>Memory Game</StyledTitle>
      {renderComponent[mode]}
    </Container>
  );
}

export default MemoryGame;
