import { useMemo } from "react";
import { StyledButton } from "../../../GlobalStyles";
import { useMemoryGameStore } from "../store/useMemoryGameStore";
import { GridContainer } from "../styles";
import { randomizeNumbers } from "../utils";
import Tile from "./Tile";

function InGame() {
  const [gameLevel, resetGame] = useMemoryGameStore((state) => [
    state.gameLevel,
    state.resetGame,
  ]);
  const { gridNums, gridSize } = useMemo(
    () => randomizeNumbers(gameLevel),
    [gameLevel]
  );

  return (
    <>
      <GridContainer size={gridSize}>
        {gridNums.map((num, index, arr) => (
          <Tile num={num} index={index} gridNumbers={arr} />
        ))}
      </GridContainer>
      <StyledButton onClick={() => resetGame()} fontSize={"1.5rem"}>
        Reset Game
      </StyledButton>
    </>
  );
}

export default InGame;
