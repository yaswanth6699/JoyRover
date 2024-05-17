import styled from "styled-components";

export const StyledTile = styled.div`
  height: 80px;
  width: 80px;
  background: #7ab2b2;
  cursor: pointer;
  border-radius: 10px;
`;

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  background: #eef7ff;
  font-size: 2.5rem;
  font-weight: 700;
  border-radius: 10px;
`;

export const PlainBox = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 10px;
`;

interface GridSize {
  size: number;
}

export const GridContainer = styled("div")<GridSize>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.size}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.size}, 1fr)`}
  width: fit-content;
  gap: 8px;
  margin-bottom:30px;
`;
