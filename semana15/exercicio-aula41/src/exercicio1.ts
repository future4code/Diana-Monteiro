let minhaString: string = "quatro"

//a) Ao atribuir um valor numérico a variável do tipo string ocorre o erro "Type number is not assignable to type 'string'."

let meuNumero: number = 4
let meuNumero2: number | string = "quatro"

//b) Para que a variável acima também aceite strings devemos usar o union type, dessa forma a variável pode assumir mais de um tipo.

//c) Utilizando o Type e definindo as propriedades que aquele tipo de objeto deve ter.

// const person : { name: string, age: number, favoriteColor: string} = {
//     name: "Diana",
//     age: 32,
//     favoriteColor: "blue"
// }

// type person = {name: string, age: number, favoriteColor: string}

//const diana : person = {name: "Diana", age: 32, favoriteColor: "azul"}

//d) 

//type person = {name: string, age: number, favoriteColor: string}

//const marina : person = {name: "Marina", age: 30, favoriteColor: "laranja"}
//const fernanda : person = {name: "Fernanda", age: 34, favoriteColor: "verde"}
//const bruno : person = {name: "Bruno", age: 24, favoriteColor: "roxo"}

//e)
 enum Cores {
        AMARELO = "amarelo",
        LARANJA = "laranja",
        VERMELHO = "vermelho",
        VEWRDE = "verde",
        AZUL = "azul",
        ANIL = "anil",
        VIOLETA = "violeta"
 }

type person = {name: string, age: number, favoriteColor: Cores}

const diana : person = {name: "Diana", age: 32, favoriteColor: Cores.AZUL}
