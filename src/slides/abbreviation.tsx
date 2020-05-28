import React from 'react';
import { Text } from 'spectacle';
import { CodeSlide } from '../utils/renderCodeSlide';

const code = `
getRepositories()
  .then(r => /*...*/)
  .catch(e => /*...*/);
\n\n\n\n\n\n
getRepositories()
  .then(response => /*...*/)
  .catch(error => /*...*/);
\n\n\n\n\n\n
new Promise((res, rej) => {});
\n\n\n\n\n\n\n\n
new Promise((resolve, reject) => {});
`;

const slide: CodeSlide = {
  type: 'code',
  headerProps: {
    children: 'Não abrevie nomes de variáveis',
    fontSize: 'h2'
  },
  description: (
    <Text>
      As variáveis "e" e "r" além de estarem abreviada, não é passível de busca, pois uma letra sozinha, compõem diversos outros nomes…
    </Text>
  ),
  code,
  stepperProps: {
    defaultValue: [1, 3],
    values: [[11, 13], [21, 21], [31, 31]]
  }
}

export default slide;
