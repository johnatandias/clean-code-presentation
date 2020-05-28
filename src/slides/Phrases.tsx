import React from 'react';
import { Quote } from 'spectacle';

const phrases = [
  `O código limpo sempre parece que foi escrito por alguém que se importa. - Michael Feathers`,
  'Você sabe que está trabalhando em um código limpo quando cada rotina que você lê é praticamente o que você esperava. Você pode chamá-lo de código bonito quando o código também faz parecer que o idioma foi criado para o problema. - Ward Cunningham',
  'Escrever um código é como escrever um livro. Deve-se escrever sempre pensando na compreensão dos leitores.'
];

const Phrases = () => (
  <>
    {phrases.map((phrase: string, index: number) => (
      <React.Fragment key={index}>
        <Quote>{phrase}</Quote>
      </React.Fragment>
    ))}
  </>
);

export default Phrases;
