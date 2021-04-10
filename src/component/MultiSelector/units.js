import styled from "@emotion/styled";

export const DelButton = styled.img`
  width: 10px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  cursor: pointer;
`;
export const SelectedItem = styled.div`
  display: flex;
  background-color: ghostwhite;
  padding: 5px;
  margin: 1px;
  cursor: default;
`;
export const WrapperSelectedItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;
export const WrapperInput = styled.div`
  border: 1px solid grey;
`;
export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
export const WrapperItems = styled.div`
  background-color: white;
  box-shadow: 0 0 3px grey;
  margin-top: 3px;
  position: absolute;
  z-index: 5;
`;
export const DropBox = styled.div`
  margin: 0 5px;
  width: 300px;
`;
export const InputItem = styled.input`
  outline: none;
  padding: 10px;
  border: none;
`;
export const SendButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px;
  background-color: white;
  border-radius: 10px;
  &:hover {
    background-color: ghostwhite;
  }
  font-size: 16px;
`;
export const Item = styled.div`
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: ghostwhite;
  }
`;
