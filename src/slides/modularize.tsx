import React from 'react';
import { Text } from 'spectacle';
import { CodeSlide } from '../utils/renderCodeSlide';

const code = `
const Carousel = () => (
  <>
    <button className="left" onClick={() => {/*...*/}}>
      <Icon name="left" />
    </button>

    {/*...*/}

    <button className="right" onClick={() => {/*...*/}}>
      <Icon name="right" />
    </button>
  </>
);

const ArrowButton = ({ direction, onClick }) => (
  <button className={direction} onClick={onClick}>
    <Icon name={direction} />
  </button>
);

const Carousel = () => (
  <ArrowButton direction="left" onClick={() => {/*...*/}} />
  {/*...*/}
  <ArrowButton direction="right" onClick={() => {/*...*/}} />
);
`;

const slide: CodeSlide = {
  type: 'code',
  headerProps: {
    children: "DRY (Don't Repeat Yourself — Não se repita)",
    fontSize: 'h2'
  },
  description: (
    <Text>
      Se você estiver fazendo a mesma coisa em vários locais, consolide o código duplicado, modularize, componentize!
    </Text>
  ),
  code,
  stepperProps: {
    defaultValue: [1, 13],
    values: [[15, 25]]
  }
}

export default slide;
