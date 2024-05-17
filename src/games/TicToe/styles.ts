import styled from "styled-components";

export const TicToeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: fit-content;
  margin: 1.6rem 0;
`;

export const StyledBox = styled("div")`
  border: 2px solid #7ab2b2;
  height: 120px;
  width: 120px;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const StyledStatus = styled.p`
  font-size: 1.2rem;
  margin: 0;
  color: white;
`;
