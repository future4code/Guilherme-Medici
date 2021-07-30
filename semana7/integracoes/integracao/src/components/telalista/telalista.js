import axios from "axios";
import React from 'react'
import Usuarios from "../usuarios/Usuarios";


const endereço2 = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    headers: {
        Authorization: "guilherme-medici-lovelace",
    }
}



export default class TelaLista extends React.Component {
    state = {
        usuarios: [],
        usuarioSelecionado: null,
    }

    componentDidMount() {
        this.buscarUsuarios()
    }

    buscarUsuarios = () => {
        axios
            .get(endereço2, headers)
            .then((resposta) => {
                this.setState({ usuarios: resposta.data })
            })
            .catch((erro) => {
                alert(erro.response.data.message)
            })
    }

    limparUsuario = () => {
        this.setState({ usuarioSelecionado: null })
    }

    apagarUsuario = (id) => {
        const deletar = window.confirm(
            "Você deseja deletar este usuário?"
        )
        if (deletar) {
            axios
                .delete(`${endereço2}/${id}`, headers)
                .then(() => {
                    this.apagarUsuario()
                    alert("Usuário devidamente apagado!")

                    if (id === this.state.usuarioSelecionado) {
                        this.limparUsuario()
                    }
                })
                .catch((erro) => {
                    alert(erro.response.data.message)
                })
        }
    }

    selecionarUsuario = (id) => {
        this.setState({ usuarioSelecionado: id })
    }


    render() {
        if (this.state.usuarioSelecionado !== null) {
            return (
                <Usuarios 
                    id={this.state.usuarioSelecionado}
                    apagarUsuario={this.apagarUsuario}
                    limparUsuario={this.limparUsuario}
                    />
            )
        }
        return (
            <div>
                {this.state.usuarios.map((usuarios) => (
                    <div key={usuarios.id}>
                    <p onClick={() => this.selecionarUsuario(usuarios.id)}> {usuarios.nome} </p>
                    <button onClick={() => this.apagarUsuario(usuarios.id)}>X</button>

                    </div>
                ))}
                {!this.state.usuarios.length && <p> Usuário não encontrado</p>}
            </div>
        );
    }
}
