import React from "react";
import { Header, Price, SlideItemImg, WrapperItem } from "./units";
import { RatingBar } from "../RatingBar";

export const SlideItem = ({ itemWidth, header, price, img, rating }) => {
  return (
    <WrapperItem itemWidth={itemWidth}>
      <SlideItemImg src={img} />
      <div>
        <Header>{header}</Header>
        <RatingBar rating={rating} />
        <Price>{price + "руб."}</Price>
      </div>
    </WrapperItem>
  );
};
