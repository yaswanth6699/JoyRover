import { IoMdArrowRoundBack } from "react-icons/io";
import { Container, StyledTitle } from "../../GlobalStyles";
import { Games, useGlobalStore } from "../../store/useGlobalStore";
import GameOver from "./components/GameOver";
import InGame from "./components/InGame";
import LevelSelection from "./components/LevelSelection";
import { GameModes, useMemoryGameStore } from "./store/useMemoryGameStore";
function MemoryGame() {
  const [mode] = useMemoryGameStore((state) => [state.mode]);
  const [updateSelectionGame] = useGlobalStore((state) => [
    state.updateSelectionGame,
  ]);
  const renderComponent = {
    [GameModes.LEVEL]: <LevelSelection />,
    [GameModes.INGAME]: <InGame />,
    [GameModes.GAMEOVER]: <GameOver />,
  };

  return (
    <Container>
      <StyledTitle>
        <div onClick={() => updateSelectionGame(Games.GAME_SELECTION)}>
          <IoMdArrowRoundBack />
        </div>
        Memory Game
      </StyledTitle>
      {renderComponent[mode]}
    </Container>
  );
}

export default MemoryGame;
