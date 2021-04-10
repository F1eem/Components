import styled from "@emotion/styled";

export const WrapperItem = styled.div`
  min-width: ${({ itemWidth }) => itemWidth - 10 + "px"};
  height: 240px;
  margin: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
export const SlideItemImg = styled.img`
  width: 150px;
`;
export const Header = styled.div`
  font-size: 16px;
`;
export const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
