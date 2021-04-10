import styled from "@emotion/styled";

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${({ bgColor }) => bgColor};
  font-size: 12px;
  outline: none;
  padding: 3px;
  cursor: pointer;
  width: 90px;
`;
