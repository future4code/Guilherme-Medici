import React from 'react';
import styled from 'styled-components';


export default class Pag3 extends React.Component {

    render () {
  
    return (
  
        <containerPag3>

        <div>
          <h3> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        </div>
  
        <div>
          <p>5. Porque você não terminou um curso de graduação?</p>
          <input/>
        </div>
  
        <div>
          <p>6. Você fez algum curso complementar?</p>
          <select>
            <option value="Curso técnico">Curso técnico</option>
            <option value="Curso de inglês">Curso de inglês</option>
        </select>
        </div>
  
        </containerPag3>
  
    );
  }
  }