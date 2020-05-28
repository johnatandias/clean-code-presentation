import React from 'react';
import { Heading, UnorderedList, ListItem, Text } from 'spectacle';

const SignsOfACleanCode: React.FC = () => (
  <>
    <Heading type="h2">Sinais de um código limpo</Heading>
    <UnorderedList>
      <ListItem>
        Pode ser entendido facilmente por todos da equipe
        </ListItem>

      <ListItem>
        Pode ser lido e aprimorado por um desenvolvedor que não seja o autor original
        </ListItem>
      </UnorderedList>

    <Text>
      Com capacidade de compreensão, vem a legibilidade, a capacidade de mudança, a extensibilidade e a manutenção.
    </Text>
  </>
);

export default SignsOfACleanCode;