import axios from 'axios'
import React from 'react'
import TelaCadastro from './components/telacadastro/telacadastro';
import TelaLista from './components/telalista/telalista';



export default class App extends React.Component {

  state = {
    tela: "cadastro",
  }

  mudançaDePagina = () => {
    this.setState ({
      tela: this.state.tela === "cadastro" ? "usuarios" : "cadastro",
    })
  }

  render () {

  return (

    <div>
      <button onClick={this.mudançaDePagina}>
        Vá para a página de{" "}
        {this.state.tela === "cadastro" ? "usuarios" : "cadastro"}
      </button>
      {this.state.tela === "cadastro" ? <TelaCadastro/> : <TelaLista/>}
    </div>
  );
}
}

