//EXERCÍCIO 4

// a) e b) A forma que encontrei para fazer foi através do mesmo comando (tsc), sendo que por estar dentro da pasta src, coloquei o caminho junto com o comando, ex. tsc ./src/exercicio4.ts

type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}