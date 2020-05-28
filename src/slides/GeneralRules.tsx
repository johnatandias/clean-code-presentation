import React from 'react';
import { Heading, UnorderedList, ListItem, CodeSpan } from 'spectacle';
import { Anchor } from '../components/Anchor';

const GeneralRules = () => (
  <>
    <Heading fontSize="h2">Regras gerais</Heading>
    <UnorderedList>
      <ListItem>
        <CodeSpan>Siga as convenções padrões</CodeSpan>
        <UnorderedList>
          <ListItem>
            <CodeSpan>
              <Anchor url="https://github.com/airbnb/javascript" text="Airbnb," />
              <Anchor url="https://github.com/google/styleguide" text="Google..." />
            </CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>ESLint, Prettier</CodeSpan>
          </ListItem>
        </UnorderedList>
      </ListItem>

      <ListItem>
        <CodeSpan>Regra dos escoteiros</CodeSpan>
        <UnorderedList>
          <ListItem>
            <CodeSpan>Deixe o acampamento mais limpo do que o encontrado.</CodeSpan>
          </ListItem>
        </UnorderedList>
      </ListItem>
    </UnorderedList>
  </>
);

export default GeneralRules;
