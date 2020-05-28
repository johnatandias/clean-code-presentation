import React from 'react';
import { Heading, UnorderedList, ListItem, CodeSpan, Text } from 'spectacle';

const Justifications2: React.FC = () => (
  <>
    <Heading type="h2">
      5 principais motivos para "justificar" a entrega de um código sujo
    </Heading>

    <UnorderedList>
      <ListItem>
        <CodeSpan>
          Mudança de escopo
        </CodeSpan>
      </ListItem>

      <ListItem>
        <CodeSpan>
          O seu chefe ou cliente não entendem nada do seu trabalho e só reclamam
        </CodeSpan>
      </ListItem>
    </UnorderedList>

    <Text>Mas a culpa é NOSSA! - Analogia do médico.</Text>
  </>
);

export default Justifications2;