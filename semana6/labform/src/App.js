import React from 'react';
import styled from 'styled-components';
import Pag1 from './components/pag1';
import Pag2 from './components/pag2';
import Pag3 from './components/pag3';
import Pagfinal from './components/pagfinal';


export default class App extends React.Component {

  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Pag1 />
      case 2:
        return <Pag2 />
      case 3:
        return <Pag3 />
      case 4:
        return <Pagfinal />

    }}

    irParaProximaEtapa = (etapa) => {
      this.setState({etapa: etapa})
    }

    render() {

      return (

        <div>
          {this.renderizaEtapa()}
          <button onClick={() => this.irParaProximaEtapa(2)}>Próxima etapa</button>
        </div>

      );
    }
  }

