import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

function ChooseButtons (props) {

    return (
      <ButtonsContainer>
        <button onClick={props.onClickNo}>NÃO</button>
        <button onClick={props.onClickYes}>SIM</button>
      </ButtonsContainer>
    )
  
  }
  
  export default ChooseButtons;