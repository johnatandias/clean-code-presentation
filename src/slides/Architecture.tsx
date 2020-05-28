import React from 'react';
import { Heading, Text } from 'spectacle';

const Architecture: React.FC = () => (
  <>
    <Heading fontSize="h2">Funções objetivas e pequenas</Heading>
    <Text>
      Seguindo o conceito de responsabilidade única do SOLID, lembre-se que cada função deve seguir esse mesmo conceito. Clean Code e SOLID andam de mãos dadas. Um código "Sólido" tem tudo para ser um código limpo.
    </Text>

    <Text>
      Independente da arquitetura de desenvolvimento que você use, não misture as coisas. O objeto na camada de acesso à dados (DAO) não faz validação do objeto, é responsabilidade da camada anterior tratar se os dados estão corretos antes de chamar o DAO. "Single responsability".
    </Text>
  </>
);

export default Architecture;