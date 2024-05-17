import { StyledButton, StyledIcon } from "../../../GlobalStyles";
import { useMemoryGameStore } from "../store/useMemoryGameStore";

const GameOver = () => {
  const [resetMode] = useMemoryGameStore((state) => [state.resetMode]);
  const handleClick = () => {
    resetMode();
  };
  return (
    <>
      <h2>You Won</h2>
      <StyledButton onClick={handleClick}>
        Play Again <StyledIcon>🤹‍♂️</StyledIcon>
      </StyledButton>
    </>
  );
};

export default GameOver;
