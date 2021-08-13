import React from 'react'
import Axios from 'axios'
import { Container } from './TelaInicialStyles';
import { TelaContainer } from './TelaInicialStyles';
import { BotaoSim } from './TelaInicialStyles';
import { BotaoNao } from './TelaInicialStyles';
import { BotaoMatchs } from './TelaInicialStyles';

function TelaInicial() {

  return (

    <Container>

      <TelaContainer>

        <BotaoSim> Match </BotaoSim>

        <BotaoMatchs> Ver Match's </BotaoMatchs>

        <BotaoNao> X </BotaoNao>

      </TelaContainer>

    </Container>

  );
}

export default TelaInicial;