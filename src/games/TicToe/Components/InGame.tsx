import { StyledButton } from "../../../GlobalStyles";
import { useTicToeStore } from "../store/useTicToeStore";
import { StyledBox, StyledStatus, TicToeContainer } from "../styles";

const InGame = () => {
  const [
    playerMove,
    updatePlayerMove,
    moves,
    trackMoves,
    updateWin,
    gameStatus,
    resetGame,
    gameOver,
  ] = useTicToeStore((state) => [
    state.playerMove,
    state.updatePlayerMove,
    state.moves,
    state.trackMoves,
    state.updateWin,
    state.gameStatus,
    state.resetGame,
    state.gameOver,
  ]);

  const handleClick = (index: number) => {
    if (moves.has(index) || gameOver) return;
    updatePlayerMove();
    trackMoves(index, playerMove);
    updateWin();
  };
  return (
    <>
      <StyledStatus>{gameStatus}</StyledStatus>
      <TicToeContainer>
        {Array.from({ length: 9 }).map((_, index) => (
          <StyledBox onClick={() => handleClick(index)}>
            {moves.has(index) ? moves.get(index) : null}
          </StyledBox>
        ))}
      </TicToeContainer>
      <StyledButton onClick={resetGame} fontSize={"1.5rem"}>
        Reset Game
      </StyledButton>
    </>
  );
};

export default InGame;
