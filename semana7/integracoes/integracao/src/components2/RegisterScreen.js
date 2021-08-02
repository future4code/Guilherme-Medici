import React from 'react'
import axios from 'axios'

export default class RegisterScreen extends React.Component {
    state = {
        name: "",
        email: ""
    }

    render() {
        return (
            <div>
                <button onClick={this.props.goToUserList}> Go to the user's list! </button>
                <h2>REGISTER</h2>
                <input placeholder={"Nome"}/>
                <input placeholder={"E-mail"}/>
                <button>Register</button>
            </div>
        )
    }
}

/* Começaremos criando um título simples e um botão "ir para lista de usuários". E quando eu clicar neste botão, a gente vai pegar a props que foi colocada no component app, colocando ela com a sintaxe "onClick={this.props.goToUserList}" dentro da tag button, porque nós passamos a informação "de lá" pela props e como estamos em um componente de classe, usamos novamente o THIS antes de passar a props e dizer qual props estamos passando

Esta página atual, página de registro, conforme enunciado, deverá solicitar um e-mail e um nome e iremos usar um botão para cadastrar. Para isso, usaremos/faremos dois inputs e o botão de cadastro. Feito isso, precisamos fazer com que esses inputs sejam controlados. O nosso componente de classe permite esse controle dos inputs, sendo isso feito através da criação do estado, para podermos ter nosso 'nome' e 'email' variando.

*/