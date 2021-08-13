import Styled from 'styled-components'
import React from 'react'

 export const Container = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`

export const TelaContainer = Styled.div`
  border: 1px solid black;
  border-radius: 3rem;
  position: relative;
  height: 500px;
  width: 400px;
  display: flex;
  justify-content: center;
`

export const BotaoSim = Styled.button`
  height: 60px;
  width: 70px;
  border-radius: 40px;
  background-color: green;
  align-self: flex-end;
  font-size: 20px;
  margin-bottom: 10px;
`

export const BotaoNao = Styled.button`
  height: 60px;
  width: 70px;
  border-radius: 40px;
  background-color: red;
  align-self: flex-end;
  font-size: 25px;
  margin-bottom: 10px;
`

export const BotaoMatchs = Styled.button`
  height: 20px;
  background-color: lightblue;
  border-radius: 30px;
  margin-top: 10px;
`


