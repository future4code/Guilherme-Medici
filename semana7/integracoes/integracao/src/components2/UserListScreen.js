import React from 'react'
import axios from 'axios'

export default class UserListScreen extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.goToRegister}>Go to the register!</button>
                <h2>USER'S LIST</h2>
            </div>
        )
    }
}

/* Assim como na <RegisterScreen>, começaremos criando um título simples e um botão "ir para a página de registro!". E quando eu clicar neste botão, a gente vai pegar a props que foi colocada no component app, colocando ela com a sintaxe "onClick={this.props.goToRegister}" dentro da tag button, porque nós passamos a informação "de lá" pela props e como estamos em um componente de classe, usamos novamente o THIS antes de passar a props e dizer qual props estamos passando.


*/