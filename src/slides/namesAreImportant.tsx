import React from 'react';
import { Text } from 'spectacle';
import { CodeSlide } from '../utils/renderCodeSlide';

const code = `
setTimeout(() => console.log('DORIME'), 120000);
\n\n\n\n\n\n
const elapsedTimeInMinutes = 12 * 10 * 1000;
setTimeout(() => console.log('DORIME'), elapsedTimeInMinutes);
`;

const slide: CodeSlide = {
  type: 'code',
  headerProps: {
    children: 'Nomes são importantes',
    fontSize: 'h2'
  },
  description: (
    <Text>
      O nome de uma variável, função ou classe deve responder a todas as grandes questões. Deve dizer por que existe, o que faz e como é usado. Se um nome exigir um comentário, ele não revela sua intenção.
    </Text>
  ),
  code,
  stepperProps: {
    defaultValue: [1, 1],
    values: [[9, 10]]
  }
}

export default slide;
