import React from 'react';
import styled from 'styled-components';


export default class Pag1 extends React.Component {


    render () {
  
    return (
        
    <containerGrande>

      <div>
        <h3> ETAPA 1 - DADOS GERAIS</h3>
      </div>

      <div>
        <p>1. Qual é o seu nome?</p>
        <input/>
      </div>

      <div>
        <p>2. Qual é a sua idade?</p>
        <input/>
      </div>

      <div>
        <p>3. Qual é o seu e-mail?</p>
        <input/>
      </div>

      <div>
        <p>4. Qual é a sua escolaridade?</p>
        <select>
            <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
            <option value="Ensino Médio Completo">Ensino Médio Completo</option>
            <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
            <option value="Ensino Superior Completo">Ensino Superior Completo</option>
        </select>
      </div>

    </containerGrande>
    );
  }
  }
  