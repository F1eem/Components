import styled from "@emotion/styled";

export const Month = styled.div`
  cursor: pointer;
  padding: 5px;
  width: 40px;
  &:hover {
    background-color: ${({ inPeriod, select }) =>
      select ? "green" : inPeriod ? "yellow" : "ghostwhite"};
  }
  background-color: ${({ inPeriod, select }) =>
    select ? "green" : inPeriod ? "lightgreen" : "white"};
`;
export const WrapperMonth = styled.div`
  display: flex;
  width: 170px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const WrapperYear = styled.div`
  display: flex;
  width: 170px;
  justify-content: space-between;
  align-items: center;
`;
