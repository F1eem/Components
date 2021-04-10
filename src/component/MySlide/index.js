import React, { useState } from "react";
import { NavButton, WrapperSlide, WrapperItems } from "./units";
import { SlideItem } from "./SlideItem";

const MySlide = ({ itemWidth, slideWidth, slideItemsData }) => {
  const [position, setPosition] = useState(0);
  const positionHandler = (side) => {
    if (side === "left") {
      setPosition(position < 0 ? position + itemWidth : 0);
    } else {
      setPosition(
        position > -(itemWidth * slideItemsData.length - slideWidth)
          ? position - itemWidth
          : 0
      );
    }
  };

  return (
    <WrapperSlide slideWidth={slideWidth}>
      <NavButton onClick={() => positionHandler("left")}>{`<`}</NavButton>
      <NavButton onClick={() => positionHandler("right")} right>
        {`>`}
      </NavButton>

      <WrapperItems position={position}>
        {slideItemsData.map(({ id, ...rest }) => (
          <SlideItem key={id} itemWidth={itemWidth} {...rest} />
        ))}
      </WrapperItems>
    </WrapperSlide>
  );
};

export { MySlide };
