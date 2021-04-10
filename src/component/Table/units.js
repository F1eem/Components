import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { NavLink } from "react-router-dom";

export const WrapperTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid black;
  border-left: 1px solid black;
  box-shadow: 0 0 5px grey;
  align-self: start;
  min-width: 1200px;
`;
export const TableRow = styled(NavLink)`
  display: flex;
  width: 100%;
  &:hover {
    background-color: whitesmoke;
  }
  text-decoration: none;
`;
export const HeadingRow = styled.div`
  display: flex;
  width: 100%;
  &:hover {
    background-color: whitesmoke;
  }
`;
export const Arrow = styled.img`
  width: 15px;
  cursor: pointer;
`;
export const WrapperTestTable = styled.div`
  position: relative;
  width: 100%;
  ${({ wrapperStyle }) => css`
    ${wrapperStyle}
  `}
`;
export const Item = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  flex-grow: 1;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  background-color: ${({ heading }) => heading && "gainsboro"};
  color: black;
  font-size: 12px;
  font-weight: ${({ heading }) => heading && "bold"};
  cursor: ${({ pointer }) => (pointer ? "pointer" : "default")};
`;
