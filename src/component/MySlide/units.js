import styled from "@emotion/styled";

export const WrapperSlide = styled.div`
  width: ${({ slideWidth }) => slideWidth + "px"};
  height: 250px;
  overflow: hidden;
  position: relative;
`;

export const WrapperItems = styled.div`
  position: relative;
  display: flex;
  left: ${({ position }) => position + "px"};
  transition: left 0.5s;
  cursor: pointer;
`;

export const NavButton = styled.button`
  font-weight: bold;
  cursor: pointer;
  border: 0.5px solid gainsboro;
  box-shadow: 0 0 5px 1px gainsboro;
  outline: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 100px;
  z-index: 2;
  margin: 0 10px;
  right: ${({ right }) => right && 0};
  &:hover {
    background-color: orange;
    color: white;
  }
`;
