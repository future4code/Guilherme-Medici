import React from 'react';
import { useHistory } from 'react-router-dom';

function ApplicationFormPage() {

  const history = useHistory()

  const goBackToTripListPage = () => {
    history.push("/trips/list")
  }

  return (
    <div>

      <div>

        <select>

          <option>Go to Mars</option>
          <option>Go to Venus</option>
          <option>Go to Saturn</option>
          <option>Go to Earth</option>

        </select>

      </div>

      <input placeholder="Nome"></input>
      <input placeholder="Idade"></input>
      <input placeholder="Profissão"></input>
      <input placeholder="Texto de Candidatura"></input>

      <button onClick={goBackToTripListPage}>Voltar</button>
      <button>Enviar</button>

    </div>
  )
}

export default ApplicationFormPage;