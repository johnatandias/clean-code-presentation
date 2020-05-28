import React from "react";
import { Slide } from "spectacle";

export interface ImageSlide {
  type: 'image',
  backgroundColor: string,
  backgroundImage: string,
  backgroundOpacity?: number,
}

export const renderImageSlide = (props: ImageSlide) => (
  <Slide
    backgroundColor={props.backgroundColor}
    backgroundOpacity={props.backgroundOpacity}
    backgroundImage={`url(${props.backgroundImage})`}
    backgroundSize="contain"
  >
    <></>
  </Slide>
);
