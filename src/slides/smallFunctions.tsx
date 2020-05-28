import React from 'react';
import { Text } from 'spectacle';
import { CodeSlide } from '../utils/renderCodeSlide';

const code = `
const login = ({ user, password }) => {
  if (/* Validação se o usuário é inválido */) {/*...*/}
  if (/* Validação se a senha é inválida */) {/*...*/}
  //...
}
\n\n\n
const invalidUser = user => {/*...*/}
const invalidPassword = password => {/*...*/}

const login = ({ user, password }) => {
  if (invalidUser(user)) {/*...*/}
  if (invalidPassword(password)) {/*...*/}
  //...
}
`;

const slide: CodeSlide = {
  type: 'code',
  headerProps: {
    children: 'Funções objetivas e pequenas',
    fontSize: 'h2'
  },
  description: (
    <Text>
      No cenário ideal, cada função tem 2, 3 ou 4 linhas e possui uma obviedade transparente. Cada uma conta uma história e leva você a próxima em uma ordem.
    </Text>
  ),
  code,
  stepperProps: {
    defaultValue: [1, 5],
    values: [[10, 17]]
  }
}

export default slide;
