// import axios from "axios";
// import React from 'react'

// const endereço = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

// const headers = {
//     headers: {
//         Authorization: "guilherme-medici-lovelace",
//     }
// }

// export default class TelaCadastro extends React.Component {
//     state = {
//         inputnome: "",
//         inputemail: "",
//     }

//     InputNome = (e) => {
//         this.setState({ inputnome: e.target.value })
//     }

//     InputEmail = (e) => {
//         this.setState({ inputemail: e.target.value })
//     }

//     adicionarUsuario = (event) => {
//         event.preventDefault()

//         const body = {
//             nome: this.state.inputnome,
//             email: this.state.inputemail,
//         }


//         axios
//             .post(endereço, body, headers)
//             .then(() => {
//                 alert("Usuário criado!")
//                 this.setState({ inputnome: "", inputemail: "" })
//             })
//             .catch((error) => {
//                 alert(error.response.data.message)
//             })
//     }

//     render() {

//         return (
//                 <form onSubmit={this.adicionarUsuario}>
//                     <label>Nome:</label>
//                     <input value={this.state.inputNome} onChange={this.InputNome} />
//                     <label>E-mail:</label>
//                     <input value={this.state.inputEmail} onChange={this.InputEmail} />
//                     <button>Salvar</button>
//                 </form>
               
//         );
//     }
// }

