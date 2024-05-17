import styled from "styled-components";
import { GlobalStore } from "./store/useGlobalStore";

interface ThemeProps {
  theme: GlobalStore["theme"];
}

export const Theme = styled.div<ThemeProps>`
  background-color: ${(props) => props.theme.bg};
  background-image: ${(props) => props.theme.bi};
  transition: background-color ease 2s;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Row = styled("div")`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const Column = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface StyledButtonProps {
  fontSize?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px 35px;
  background: #4d869c;
  border: none;
  color: white;
  border-radius: 5px;
  margin: 0 10px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "2rem")};
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

export const StyledTitle = styled.h1`
  color: white;
  font-size: 3rem;
  text-align: center;
  display: flex;
  gap: 5px;
  div {
    cursor: pointer;
  }
`;

export const StyledIcon = styled.span`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const StyledHeader = styled("div")`
  position: relative;
  z-index: 1000;
  h3 {
    position: absolute;
    top: 25px;
    left: 25px;
    font-size: 2rem;
    cursor: pointer;
    color: white;
    margin: 0;
  }
  div {
    position: absolute;
    top: 25px;
    right: 25px;
  }
`;

export const StyledInfo = styled("div")`
  right: 20px;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  .info-drawer {
    color: #000;
    font-size: 1.5rem;
    line-height: 2rem;
    background: #fefbf6;
    h4 {
      margin: 0 0 10px 0;
    }
  }
`;
