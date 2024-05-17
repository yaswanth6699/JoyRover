import { Row, StyledButton, StyledIcon } from "../../../GlobalStyles";
import { GridSizes, gridSizes } from "../constants";
import {
  GameLevels,
  GameModes,
  useMemoryGameStore,
} from "../store/useMemoryGameStore";

const LevelSelection = () => {
  const [updateGameLevel, updateMode] = useMemoryGameStore((state) => [
    state.updateGameLevel,
    state.updateMode,
  ]);
  const handleButton = (item: GridSizes) => {
    updateGameLevel(item.label as GameLevels);
    updateMode(GameModes.INGAME);
  };
  return (
    <Row>
      {gridSizes.map((item) => (
        <StyledButton onClick={() => handleButton(item)}>
          {item.label} <StyledIcon>{item.icon}</StyledIcon>
        </StyledButton>
      ))}
    </Row>
  );
};

export default LevelSelection;
