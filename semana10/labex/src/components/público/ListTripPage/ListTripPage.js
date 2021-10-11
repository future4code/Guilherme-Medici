import React from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';

// Neste componente atual deve haver um botão que leve para a página ApplicationFormPage, que tem a finalidade do usuário se inscrever para uma viagem espacial e um botão de voltar para a HomePage. Além da lista de lista de viagens.//

const TripBox = styled.div`

`

const ListContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const ButtonContainer = styled.div`
  padding: 20px;
  
`
function ListTripPage() {

  const history = useHistory()
  const params = useParams()

  const backToHomePage = () => {
    history.push("/")
  }

  const goToApplicationFormPage = () => {
    history.push("/trips/application")
  }

  return (


    <ListContainer>


      <h2>Lista de Viagens</h2>

      <TripBox>



      </TripBox>

      <ButtonContainer>
        <button onClick={backToHomePage}>Voltar</button>
        <button onClick={goToApplicationFormPage}>Inscrever-se</button>
      </ButtonContainer>

    </ListContainer>
  )
}

export default ListTripPage;