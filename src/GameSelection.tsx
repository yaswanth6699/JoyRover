import { Column, Row, StyledButton, StyledTitle } from "./GlobalStyles";
import { Games, useGlobalStore } from "./store/useGlobalStore";

const GameSelection = () => {
  const [updateSelectionGame] = useGlobalStore((state) => [
    state.updateSelectionGame,
  ]);

  return (
    <div>
      <Column>
        <StyledTitle>
          Feeling bored or stressed?
          <br /> Take a break and have some fun!
        </StyledTitle>
        <Row>
          <StyledButton onClick={() => updateSelectionGame(Games.MEMORY_GAME)}>
            Memory Game
          </StyledButton>
          <StyledButton onClick={() => updateSelectionGame(Games.TIC_TAC_TOE)}>
            Tic Tac Toe
          </StyledButton>
        </Row>
      </Column>
    </div>
  );
};

export default GameSelection;
