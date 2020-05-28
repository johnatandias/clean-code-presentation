import React from 'react';
import { Heading, UnorderedList, ListItem, CodeSpan } from 'spectacle';

const Justifications: React.FC = () => (
  <>
    <Heading type="h2">
      5 principais motivos para "justificar" a entrega de um código sujo
    </Heading>

    <UnorderedList>
      <ListItem>
        <CodeSpan>Você estava querendo resultados rápido demais</CodeSpan>
      </ListItem>

      <ListItem>
        <CodeSpan>
          Você percebeu que o prazo estava acabando e não daria pra entregar
        </CodeSpan>
      </ListItem>

      <ListItem>
        <CodeSpan>
          Você estava de saco cheio da tarefa atual e não queria se esforçar pra deixar mais bonita
        </CodeSpan>
      </ListItem>
    </UnorderedList>
  </>
);

export default Justifications;