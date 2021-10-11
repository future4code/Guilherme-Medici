import React from 'react'
import Axios from 'axios'
import Styled from 'styled-components'
import Main from './components/Main/Main';
import ResetButton from './components/ResetButton/ResetButton'

const MainContainer = Styled.div`
  display:flex;
  justify-content: center;
`

function App() {
  return (
<>
    <MainContainer>
      <Main/>
      
    </MainContainer>
    <ResetButton/>
</>
  );
}

export default App;
