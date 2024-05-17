import { useMemo } from "react";
import { StyledButton } from "../../../GlobalStyles";
import { useMemoryGameStore } from "../store/useMemoryGameStore";
import { GridContainer } from "../styles";
import { randomizeNumbers } from "../utils";
import Tile from "./Tile";

function InGame() {
  const [gridSize, resetGame] = useMemoryGameStore((state) => [
    state.gridSize,
    state.resetGame,
  ]);
  const gridNums = useMemo(() => randomizeNumbers(), []);

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
