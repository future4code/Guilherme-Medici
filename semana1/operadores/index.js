//EXERCÍCIO 1 - INTERPRETAÇÃO

/* 1)
/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

//FALSE

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) 

//FALSE

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado)

//FALSE

console.log("d. ", typeof resultado)

//BOOLEAN*/

//EXERCÍCIO 2 - INTERPRETAÇÃO

/* O prompt sempre será string, regra geral, portanto, sem incluir a função Number, os valores do primeiroNumero e segundoNumero não serão somados, serão tão somente colocados lado a lado.

const primeiroNumero = Number (prompt("Digite um numero!"))
const segundoNumero = Number (prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

// EXERCÍCIO 3 - INTERPRETAÇÃO
// Para que no exemplo o valor impresso seja realmente a soma dos números, pode-se optar por incluir a função number, conforme códigos acima.*/


/* EXERCÍCIO 1 - ESCRITA DE CÓDIGO

const idade = Number (prompt("Qual é a sua idade?"))
const idadeAmigo = Number (prompt("Qual é a idade de seu melhor amigo?"))

const compararIdade = idade > idadeAmigo

console.log ("Sua idade é maior do que a de seu melhor amigo?", compararIdade)
console.log ("Diferença de idades:", idade - idadeAmigo)*/

/*EXERCÍCIO 2 - ESCRITA DE CÓDIGOS

const numPar = Number (prompt("Insira um número par!"))

const restoDivisao = numPar % 2 === 0

console.log ("Resto da divisão", restoDivisao)

// c) Todos os números pares que são inseridos retornarão TRUE.
// d) Todos os números ímpares retornam com valor FALSE*/

//EXERCÍCIO 3 - ESCRITA DE CÓDIGOS
/*
const idadeAnos = Number (prompt("Insira sua idade em anos!"))
const idadeMeses = Number (prompt(idadeAnos * 12))
const idadeDias = Number (prompt(idadeAnos * 365))
const idadeHoras = Number (prompt(idadeAnos * 8766))

console.log ("Idade em meses", idadeMeses)
console.log ("Idade em dias", idadeDias)
console.log ("Idade em Horas", idadeHoras)
*/