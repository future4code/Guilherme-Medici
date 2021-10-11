import React from 'react';
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'
import img from '../imagens/Earth-Maybe.jpg'

// Neste componente, página principal/HomePage, teremos a princípio 02 botões, um que levará para a ListTripPage, cuja finalidade é mostra a lista de viagens existente e um botão para a área de admin, que já estando autenticado, seguirá para a AdminHomePage. Caso ainda seja necessária autenticação, seguirá para a LoginPage.//

const PageContainer = styled.div`

`
const HeaderContainer = styled.div`
  border: 1px solid black;
  width: 200vh;
  display: flex;
  justify-content: center;
`
const MainContainer = styled.div`
  border: 1px solid black;
  height: 85vh;
  width: 99,5%;
  background-image: url(${img});
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`

const BotoesContainer = styled.button`
  width: 15vh;
  height: 6vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 1vh;
  margin: 15px;
`



function HomePage() {

  const history = useHistory()
  const params = useParams()

  const goToListTripPage = () => {
    history.push("/trips/list")
  }

  const goToAdminHomePage = () => {
    history.push("/admin/trips/list")
  }

  return (

    <PageContainer>

      <HeaderContainer>

        <h2>StarTravel</h2>

      </HeaderContainer>

      <MainContainer>

        <BotoesContainer onClick={goToListTripPage}>Ver Viagens</BotoesContainer>


        <BotoesContainer onClick={goToAdminHomePage}>Área de Admin</BotoesContainer>

      </MainContainer>

    </PageContainer>
  )
}

export default HomePage;