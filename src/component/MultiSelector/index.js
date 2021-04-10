import React, { useRef, useState } from "react";
import delImg from "assets/img/delbutton.png";
import {
  DelButton,
  Title,
  SelectedItem,
  WrapperSelectedItems,
  WrapperItems,
  DropBox,
  Item,
  InputItem,
  SendButton,
  WrapperInput,
} from "./units";
import useOutsideClick from "../../Hooks/useOutsideClick";

const MultiSelector = ({
  items,
  titleDropDawn = "Введите заголовок",
  placeholder = "Введите placeholder",
  onClickSearchButton,
}) => {
  const ref = useRef();
  useOutsideClick(ref, () => {
    setActiveDropBox(false);
  });
  const [selectedItems, setSelectedItems] = useState([]);
  const [inputText, setInputText] = useState("");
  const [activeDropBox, setActiveDropBox] = useState(false);
  const addSelectItem = (item) => {
    if (!selectedItems.find((e) => e.item === item.item)) {
      setSelectedItems([...selectedItems, item]);
    }
  };
  const delSelectItem = (item) => {
    setSelectedItems(selectedItems.filter((e) => e !== item));
  };
  const onClickSearchButtonHandler = () => {
    onClickSearchButton(selectedItems);
    setSelectedItems([]);
    setActiveDropBox(false);
  };
  return (
    <DropBox ref={ref}>
      <Title>{titleDropDawn}:</Title>
      <WrapperInput>
        {selectedItems.length < 3 ? (
          <WrapperSelectedItems>
            {selectedItems.map((e) => (
              <SelectedItem>
                <div>{e.item}</div>
                <DelButton onClick={() => delSelectItem(e)} src={delImg} />
              </SelectedItem>
            ))}
          </WrapperSelectedItems>
        ) : (
          <WrapperSelectedItems>
            {selectedItems.reduce((result, count, index) => {
              if (index < 2) {
                result.push(
                  <SelectedItem>
                    <div>{count.item}</div>
                    <DelButton
                      onClick={() => delSelectItem(count)}
                      src={delImg}
                    />
                  </SelectedItem>
                );
              }
              return result;
            }, [])}
            <SelectedItem>
              Еще:{selectedItems.length - 2}
              <DelButton
                onClick={() =>
                  setSelectedItems([selectedItems[0], selectedItems[1]])
                }
                src={delImg}
              />
            </SelectedItem>
          </WrapperSelectedItems>
        )}
        <SendButton
          disabled={selectedItems.length < 1}
          onClick={onClickSearchButtonHandler}
        >
          Искать
        </SendButton>
        <InputItem
          onFocus={() => setActiveDropBox(true)}
          placeholder={placeholder}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </WrapperInput>
      {activeDropBox && (
        <WrapperItems>
          {items.reduce((result, count) => {
            if (count.item.includes(inputText)) {
              result.push(
                <Item onClick={() => addSelectItem(count)}>{count.item}</Item>
              );
            }
            return result;
          }, [])}
        </WrapperItems>
      )}
    </DropBox>
  );
};

export default MultiSelector;
