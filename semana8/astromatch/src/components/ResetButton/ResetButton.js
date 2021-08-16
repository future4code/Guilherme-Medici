import React from 'react'
import Styled from 'styled-components'
import axios from 'axios'

function ResetButton() {

  const onClickReset = () => {
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear').then(response =>{
      console.log(response)
    })
  }

    return (
      <div>
        <button onClick={onClickReset}>Resetar curtidas e Matches</button>
      </div>
    )
  
  }
  
  export default ResetButton;
