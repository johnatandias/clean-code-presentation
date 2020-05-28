import React from 'react';
import { Slide, FlexBox, } from 'spectacle';

export const renderCommonSlide = (slide: JSX.Element) => (
  <Slide backgroundColor="backgroundColor">
    <FlexBox height="100%" width="100%" flexDirection="column">
      {slide}
    </FlexBox>
  </Slide>
);
