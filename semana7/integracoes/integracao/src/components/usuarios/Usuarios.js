import axios from 'axios'
import React from 'react'

const endereço2 = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    headers: {
        Authorization: "guilherme-medici-lovelace",
    }
}

export default class Usuarios extends React.Component {
    state = {
        usuarios: null,
    }

    componentDidMount() {
        axios
        .get(`${endereço2}/${this.props.id}`, headers)
        .then((resposta) => {
            this.setState({ usuario: resposta.data })
        })
        .catch((erro) => {
            alert(erro.response.data.message)
        }) 
    }

    render() {
      return (
          <div>
              <button onClick={this.props.limparUsuario}>
                  Voltar para tela de lista
              </button>

              {!this.state.usuarios ? (
                  <p>Loading...</p>
              ) : (
                <div>
                    <ul>
                        <li>{this.state.usuario.nome}</li>
                        <li>{this.state.usuario.email}</li>
                        <li>
                            <button
                            onClick={() => this.props.limparUsuario(this.state.usuario.id)}>
                                X
                            </button>
                        </li>

                    </ul>
                </div>
              )}
          </div>
      )
    }
  }