import React from 'react';
import { UnorderedList, ListItem, CodeSpan } from 'spectacle';
import { CodeSlide } from '../utils/renderCodeSlide';

const code = `
const currentDate = new Date();

const handleSave = (event: MouseEvent) => {/*...*/};

const onSaveClick = (event: MouseEvent) => {/*...*/};
`;

const slide: CodeSlide = {
  type: 'code',
  headerProps: {
    children: 'Mantenha simples e declarativo, mesmo que seja estúpido',
    fontSize: 'h2'
  },
  description: (
    <UnorderedList>
      <ListItem>
        <CodeSpan>Mais simples é sempre melhor</CodeSpan>
      </ListItem>

      <ListItem>
        <CodeSpan>Reduza a complexidade o máximo possível.</CodeSpan>
      </ListItem>
    </UnorderedList>
  ),
  code,
  stepperProps: {
    defaultValue: [1, 1],
    values: [[3, 5]]
  }
}

export default slide;
