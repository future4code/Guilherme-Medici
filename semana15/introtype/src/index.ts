//Exercício 1

// const minhaString2: string = 22

const meuNumero: number|string = 22

// a) Ao tentar atribuir um número a uma variável de tipo string, retorna o erro com a menção de que o tipo número não é atribuível ao tipo string.

// b) Podemos colocar mais de um tipo, fazendo o uso de um union type |, que significará que a variável poderá receber uma string e um número.

// c) 

enum CoresPermitidas {
    VIOLETA = "Violeta",
    ANIL = "Anil",
    AZUL = "Azul",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    LARANJA = "Laranja",
    VERMELHO = "Vermelho"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CoresPermitidas
}

type cores = {
    class: pessoa
}

const aline: pessoa = {
    nome: "Aline",
    idade: 33,
    corFavorita: CoresPermitidas.AZUL
}

const edna: pessoa = {
    nome: "Edna",
    idade: 61,
    corFavorita: CoresPermitidas.LARANJA
}

const carol: pessoa = {
    nome: "Carol",
    idade: 34,
    corFavorita: CoresPermitidas.AMARELO
}

const guilherme: pessoa = {
    nome: "Guilherme",
    idade: 29,
    corFavorita: CoresPermitidas.VERMELHO
}

//EXERCÍCIO 2

// a) 

function obterEstatisticas(numeros: any) {

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: retorno = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type retorno = {
    maior: number,
    menor: number,
    media: number
}

//EXERCÍCIO 3

// a)

type postsBase = {
    autor: string,
    texto: string,
  }

const posts: postsBase[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

  // b)




