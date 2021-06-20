// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------
testando
// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = Number(prompt("Insira a altura"))
const largura = Number(prompt("Insira a largura"))

console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Insira o ano atual"))
const anoDeNascimento = Number(prompt("Insira o ano de seu nascimento"))

console.log(anoAtual - anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)
  
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual é o seu nome?")
  const idade = prompt("Qual é a sua idade?")
  const email = prompt("Qual é o seu e-mail?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e meu email é ${email}.`)
  }

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Qual é a sua cor favorita?")
  const cor2 = prompt("Qual é sua segunda cor favorita?")
  const cor3 = prompt("Qual é sua terceira cor favorita?")

  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length == string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const temp = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = temp
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const lowerCaseString1 = string1.toLowerCase()
  const lowerCaseString2 = string2.toLowerCase()

  return lowerCaseString1 == lowerCaseString2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const esteAno = Number(prompt("Insira o ano atual"))
  const anoDeNascimento = Number(prompt("Digite o ano de seu nascimento"))
  const anoCarteira = Number(prompt("Insira o ano que sua carteira foi emitida"))

  const idadeDoUsuario = esteAno - anoDeNascimento
  const ultimaRenovacao = esteAno - anoCarteira

  if (idadeDoUsuario <= 20) {
    console.log(ultimaRenovacao >= 5)
  } else if (idadeDoUsuario > 20 && idadeDoUsuario <= 50) {
    console.log(ultimaRenovacao >= 10)
  } else {
    console.log(ultimaRenovacao >= 15)
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const condicao1 = ano % 400 === 0
  const condicao2 = ano % 4 === 0 && !(ano % 100 === 0 && !condicao1)

  return condicao1 || condicao
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Você tem mais de 18 anos de idade?").toLowerCase()
  const escolaridade = prompt("Você fez o ensino medio completo?").toLowerCase()
  const disponibilidade = prompt("Você possui dispobibilidade exclusiva durante os horários do curso?").toLowerCase()

  console.log([idade, escolaridade, disponibilidade].every((q) => q === "sim"))
}

