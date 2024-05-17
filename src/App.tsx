import GameSelection from "./GameSelection";
import { Container, Theme as StyledTheme } from "./GlobalStyles";
import Header from "./components/Header";
import MemoryGame from "./games/MemoryGame";
import TicToe from "./games/TicToe";
import { Games, useGlobalStore } from "./store/useGlobalStore";

const App = () => {
  const [selectedGame, theme] = useGlobalStore((state) => [
    state.selectedGame,
    state.theme,
  ]);
  const renderGame = {
    [Games.MEMORY_GAME]: <MemoryGame />,
    [Games.TIC_TAC_TOE]: <TicToe />,
    [Games.GAME_SELECTION]: <GameSelection />,
  };
  return (
    <StyledTheme theme={theme} className={"active"}>
      <Header />
      <Container>{renderGame[selectedGame]}</Container>
    </StyledTheme>
  );
};

export default App;
