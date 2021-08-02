// import axios from 'axios'
// import React from 'react'
// import TelaCadastro from './components/telacadastro/telacadastro';
// import TelaLista from './components/telalista/telalista';



// export default class App extends React.Component {

//   state = {
//     tela: "cadastro",
//   }

//   mudançaDePagina = () => {
//     this.setState ({
//       tela: this.state.tela === "cadastro" ? "usuarios" : "cadastro",
//     })
//   }

//   render () {

//   return (

//     <div>
//       <button onClick={this.mudançaDePagina}>
//         Vá para a página de{" "}
//         {this.state.tela === "cadastro" ? "usuarios" : "cadastro"}
//       </button>
//       {this.state.tela === "cadastro" ? <TelaCadastro/> : <TelaLista/>}
//     </div>
//   );
// }
// }

import React from 'react'
import axios from 'axios'
import Styled from 'styled-components'
import RegisterScreen from './components2/RegisterScreen'
import UserListScreen from './components2/UserListScreen'

export default class App extends React.Component {
    state = {
        currentScreen: "register"
    }

    chooseScreen = () => {
        switch (this.state.currentScreen) {
            case "register":
                return <RegisterScreen goToUserList={this.goToUserList}/> //Prop em vermelho passando a função de mesmo nome//
            case "list":
                return <UserListScreen goToRegister={this.goToRegister}/>
            default:
                return <div>"Sorry! Page not found."</div>
        }
    }

    /*...Então quando eu estiver na tela de cadastro, eu quero ter um botão que vai para a tela de lista, então iremos passar a prop 'goToUserList', que por acaso é a função que já temos de mesmo nome "goToUserList", portanto não há problema em dar à prop o mesmo nome da função. Pronto, agora passamos essas informações para dentro dos nossos componentes/telas*/

    goToRegister = () => {
        this.setState ({currentScreen: "register"})
    }

    goToUserList = () => {
        this.setState ({currentScreen: "list"})
    }

    /* O código vai ficar olhando para o "this.state.currentScreen", caso o que esteja escrito no estado seja "register", eu quero que retorne o meu componente da tela de cadastro <RegisterScreen/>.

    Caso o que estiver escrito seja "list", eu quero que retorne/será retornado o meu componente da lista de usuários <UserListScreen/>. 
    
    Em todo Switch case é interessante colocar um default, caso seja escrito qualquer coisa que não seja "register" ou "list", iremos retornar uma DIV com uma frase de "Sorry! Page not found."
    
    A função acima é a função que escolhe a tela ("chooseScreen") baseada no ESTADO, então se chamarmos ela ali embaixo, dentro do nosso return, o código irá verificar qual é a tela que tem que aparecer. Como ela está dentro da classe, precisamos usar THIS. 
    
    E agora precisamos fazer uma função para mudar de telas/ir para as diferentes páginas, criaremos então uma função "goToRegister" e outra função "goToUserList". Antes estávamos testando o código e alterando o estado "na mão", mas para as mudanças de tela acontecerem precisamos mudar o estado com as novas funções, ou ele vai ser "register" ou ele vai ser "list". Para alteração do estado, usamos setState(), o qual agenda uma atualização para o objeto state de um componente. Quando o state muda, o componente responde renderizando novamente. O que temos dentro do ESTADO é o "currentScreen", portanto iremos inserir ele após o this.setState com parênteses e chaves, mencionando depois dos dois pontos: qual o "texto" ele usará de referência, se "register" ou "list".

    Assim, precisaremos criar botões para ir para cada uma dessas páginas/componentes e neste poderemos/poderíamos criá-los dentro da própria tela/componente ou então fazê-los abaixo dentro do return, escrevendo um que iria para tela de cadastro e um que iria para tela de lista. Neste caso vamos colocar os botões em cada tela e não no APP.js.

    Importante salientar que não conseguimos de dentro/escrevendo dentro da "RegisterScreen" alterar o estado do componente APP com o this.setState. Porém, uma vez criadas as funções "goToRegister" e "goToUserList", podemos passar elas como props para dentro de qualquer outro componente/tela, ou seja, podemos passar as funções como props para a <RegisterScreen> e para a <UserListScree/>.

    Então quando eu estiver na tela de cadastro, eu quero ter um botão que vai para a tela de lista, então iremos passar a prop 'goToUserList', que por acaso é a função que já temos de mesmo nome "goToUserList", portanto não há problema em dar à prop o mesmo nome da função. Pronto, agora passamos 




    */

    render() {

        return (

            <div>
                {this.chooseScreen()}
            </div>
        )
    }
}