/*

1 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

RESPOSTA: Na primeiro console.log será impresso o valor de b que é 10. No segundo console será impresso o valor de a e b que sera respectivamente 10 e 5.

2 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

RESPOSTA: Será impresso no console, os valores 10, 10 e 10.


< ----------- Exercícios de escrita de código ------------>

1. Construa um programa, seguido os passos.

let name
let age

console.log (typeof name , typeof age)

D) Foi impresso undefined para ambas as variárveis, pois eu não atribui valores a elas. Quando se declara uma variável sem atribuir uma valor a ela, ela é do tipo undefined.

name = prompt ('Qual o seu nome?')
age = prompt('Qual sua idade?')

console.log (typeof name, typeof age)

E) Agora as variáveis name e age são do tipo string, pois eu pedi para que o usuário escrevesse suas informações, dessa forma são atribuídas a elas o tipo string.

console.log (`Olá ${name}, você tem ${age} anos.`)


2. Faça um programa que faça 5 perguntas para o usuário (pode ser criativo aqui). Imprima-as com as respostas no console da seguinte forma:

let name = prompt('Qual é seu nome?')
let age = prompt ('Qual sua idade?')
let gender = prompt ('Como você se identifica?')
let quest = prompt ('Você sabe o que é mansplaining')
let answer = prompt ('Você acredita que homens são mais inteligentes que as mulheres?')

console.log (`Qual é o seu nome? ${name}.`)
console.log (`Qual é o sua idade? ${age} anos.`)
console.log (`Como você se identifica? ${gender}.`)
console.log (`Você sabe o que é mansplaining? ${quest}.`)
console.log (`Você acredita que homens são mais inteligentes que mulheres? ${answer}.`)


3. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

let arrayFoods = ["hamburguer", "estrogonofe", "japonês", "churrasco", "parmegiana"]

console.log(arrayFoods)

console.log(`Essas são minhas comidas preferidas: \n ${arrayFoods[0]} \n ${arrayFoods[1]} \n ${arrayFoods[2]} \n ${arrayFoods[3]} \n ${arrayFoods[4]} \n `)

let food = prompt('Qual sua comida preferida?')

arrayFoods[1] = food;

console.log(`Essas são minhas comidas preferidas: \n ${arrayFoods[0]} \n ${arrayFoods[1]} \n ${arrayFoods[2]} \n ${arrayFoods[3]} \n ${arrayFoods[4]} \n `)


4. Faça um programa que contenha um array com 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

let arrayPerguntas = ['Você tem tatuagem?', 'Você se acha feio?', 'O presidente é um bosta?']

let arrayRespostas = [true, false, true]

console.log(`\n ${arrayPerguntas[0]} ${arrayRespostas[0]} \n ${arrayPerguntas[1]} ${arrayRespostas[1]} \n ${arrayPerguntas[2]} ${arrayRespostas[2]} \n `)

*/
