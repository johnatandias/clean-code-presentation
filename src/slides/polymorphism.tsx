import React from 'react';
import { Text } from 'spectacle';
import { CodeSlide } from '../utils/renderCodeSlide';

const code = `
const onKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    //...
  } else if (event.key === 'Backspace') {
    //...
  }
  //...
};
\n\n
const onKeyPress = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'Enter':
      //...
      break;

    case 'Backspace':
      //...
      break;

    //...

    default:
      //...
      break;
  }
};
\n\n\n
const handleKeys = {
  Enter: (event: KeyboardEvent) => {/*...*/},
  Backspace: (event: KeyboardEvent) => {/*...*/},
  //... More methods
};

const onKeyPress = (event: KeyboardEvent) => {
  // https://github.com/tc39/proposal-optional-chaining
  handleKeys[key]?.();
};
`;

const slide: CodeSlide = {
  type: 'code',
  headerProps: {
    children: 'Prefira o polimorfismo a if/else ou switch/case.',
    fontSize: 'h2'
  },
  description: <Text>Strategy Design Pattern</Text>,
  code,
  stepperProps: {
    defaultValue: [1, 8],
    values: [[12, 28], [33, 42]]
  }
}

export default slide;
