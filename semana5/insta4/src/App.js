import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

class App extends React.Component {
  render() {
    return (
      <>
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </MainContainer>

      <MainContainer>
      <Post
        nomeUsuario={'Guilherme'}
        fotoUsuario={'https://picsum.photos/50/40'}
        fotoPost={'https://picsum.photos/200/140'}
      />
      </MainContainer>

      <MainContainer>
        <Post
          nomeUsuario={'Aline'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/130'}
        />
      </MainContainer>
</>
    );
  }
}

export default App;
