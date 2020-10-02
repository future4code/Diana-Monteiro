// Exercícios de interpretação de código //

/*

1. 
O código está dizendo para somar um valor a variável enquando i for menor que 5. Dessa forma é impresso no console a soma dos valores de 1 a 4

2.
    a. O código está imprimindo no console os números maiores que 18. 
    b. Não com as ferramentas que aprendemos até hoje, consigo imprimir todos os elementos do array porém para acessar suas posições usaríamos a função indexOf() ou um outro contador.
*/ 
    // let i = 0
    // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    // for (let numero of lista) {
    //         console.log("Índice: "+i+" "+numero)
    //         i++
    // }


// Exercícios de escrita de código //

//3.
  
//let arrayOriginal = [10, 24, 37, 40, 53, 60, 73, 80, 96, 103]

//a.
// for (let numero of arrayOriginal) {
//         console.log(numero)
// }

//b.

// for (let numero of arrayOriginal){
//         let divisao = numero/10
//         console.log(divisao)
// }

//c.
// let pares = []
// for (let numero of arrayOriginal){
//     if (numero%2 === 0){
//         pares.push(numero)
//     }
// }
// console.log(pares)

//d.

// let i = 0
// let texto = ""

// for(let numero of arrayOriginal ){
//     texto = "O elemento do índex "+ i + " é " + numero
//     i++
//     console.log(texto)
// }

//e.

// let maiorNumero = arrayOriginal[0] 
// let menorNumero = arrayOriginal[0]

// for(let i=0; i<arrayOriginal.length; i++){
//     let elemento = arrayOriginal[i]
//     if(maiorNumero < elemento) {
//         maiorNumero = elemento
//     }
//     else if(menorNumero > elemento) {
//         menorNumero = elemento
//     }
//     else{}
// }

// console.log("O maior número é "+ maiorNumero+ " e o menor número é " + menorNumero)


// DESAFIOS de interpretação de código //

//1. 
    // 0
    // 00
    // 000
    // 0000  

// Exercícios de escrita de código //

//2.

// let numeroPensado = Number(prompt("Escolha um número!"))
// console.log("Vamos jogar!!!")

// let numeroChutado = Number(prompt("Chute um número e eu te digo se acertou!"))
// console.log("O número chutado foi: "+ numeroChutado)

// let tentativas = 1

//     while (numeroPensado !== numeroChutado){
//         if (numeroPensado > numeroChutado){
//             console.log("Errrrrrrrou, é maior")
//         }
//         else if( numeroPensado < numeroChutado){
//             console.log("Errrrrrrrou, é menor")
//         }

//     tentativas++
//     numeroChutado = Number(prompt("Chute um número e eu te digo se acertou!"))
//     console.log("O número chutado foi: "+ numeroChutado)

//     }

// console.log("Acertou!!!")
// console.log("O número de tentativas foi: " + tentativas)

//3.

// console.log("Vamos jogar!!!")
// let numeroPensado = Math.floor(Math.random()*100)

// let numeroChutado = Number(prompt("Chute um número e eu te digo se acertou!"))
// console.log("O número chutado foi: "+ numeroChutado)

// let tentativas = 1

// while (numeroPensado !== numeroChutado){
//     if (numeroPensado > numeroChutado){
//         console.log("Errrrrrrrou, é maior")
//     }
//     else if( numeroPensado < numeroChutado){
//         console.log("Errrrrrrrou, é menor")
//     }

// tentativas++
// numeroChutado = Number(prompt("Chute um número e eu te digo se acertou!"))
// console.log("O número chutado foi: "+ numeroChutado)

// }

// console.log("Acertou!!!")
// console.log("O número de tentativas foi: " + tentativas)