// Exercícios de interpretação de código //

/*

1. 

O código testa se o número digitado no prompt é par ou ímpar. Se o número for par será impresso no console a mensagem "Passou no teste". Se o número for ímpar será impresso no console a mensagem "Não passou no teste".

2.

a. O código informa o preço de algumas frutas que estão a venda.
b. O preço da fruta  Maçã  é  R$  2.25
c. O preço da fruta  Pêra  é  R$  5

3.

a. O código da primeira linha pede para que o usuário digite um número e automaticamente converte aquela valor para o tipo número.
b. Digitando 20 a mensagem seria "Esse número passou no teste", digitando -10 não apareceria nenhuma mensagem.
c. Sim, a variável mensagem foi criada dentro do escopo e está sendo chamada fora do escopo, dessa forma ela não funciona pois as variáveis criadas no escopo pertencem ao escopo .


// Exercícios de escrita de código //

4.

let idade = Number(prompt("Qual sua idade?"))

if (idade >= 18){
    console.log("Você pode dirigir")
}else {
    console.log("Você não pode dirigir")
}

5.

const turno = prompt("Em que turno do dia você estuda? Digite M para matutino, V para vespertino e N para Noturno.").toUpperCase()

if (turno === "M"){
    console.log("Bom dia!")
} else if (turno === "V"){
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}

.6

const turno = prompt("Em que turno do dia você estuda? Digite M para matutino, V para vespertino e N para Noturno.").toUpperCase()

switch(turno){
    case "M":
        console.log("Bom dia!")
    break;
    case "V":
        console.log("Boa tarde!")
    break;
    default:
        console.log("Boa noite!")
}

.7

let genero = prompt("Qual o gênero do filme que vamos assitir?").toLowerCase()
let preco = Number(prompt("Qual o preço do ingresso?"))

if(genero === "fantasia" && preco <= 15){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme!")
}

// Exercícios de interpretação de código //

.1

let genero = prompt("Qual o gênero do filme que vamos assitir?").toLowerCase()
let preco = Number(prompt("Qual o preço do ingresso?"))
let snack = prompt("Que snack você vai comer?")

if(genero === "fantasia" && preco <= 15 && snack){
    console.log("Bom filme!")
    console.log("...com "+ snack)
} else {
    console.log("Escolha outro filme!")
}

.2

let nomeCompleto = prompt("Digite seu nome completo:")
let tipoJogo = prompt("Que tipo de jogo quer assitir? Digite IN para internacional e DO para doméstico.").toUpperCase()
let etapaJogo=prompt("Qual a etapa do jogo que deseja assistir? Digit SF para semi-final, DT para decisão de terceiro lugar e FI para final.").toUpperCase()
let categoria = Number(prompt("Qual categoria? (1,2,3 ou 4)"))
let quantidade = Number(prompt("Finalizando! Quantos ingressos deseja comprar?"))
let valorIngresso
let valorTotal

console.log(" ---Dados de Compra--- ")
console.log("Nome do cliente: "+nomeCompleto)

if (tipoJogo === "IN"){
    console.log("Tipo do jogo: Nacional")
} else {
    console.log("Tipo do jogo: Internacional")
}

if(categoria === 1 && etapaJogo === "SF"){
    console.log("Etapa do jogo: Semi-Final")
    console.log("Categoria: 1")
    console.log("Quantidade de Ingressos: "+quantidade+" ingressos") 
    valorIngresso = 1320.00 
}else if (categoria === 1 && etapaJogo === "DT"){
    console.log("Etapa do jogo: Decisão do 3º lugar")
    console.log("Categoria: 1")
    console.log("Quantidade de Ingressos: "+quantidade+" ingressos") 
    valorIngresso = 660.00
}else if (categoria === 1 && etapaJogo === "FI"){
    console.log("Etapa do jogo: Final")
    console.log("Categoria: 1")
    console.log("Quantidade de Ingressos: "+quantidade+" ingressos") 
    valorIngresso = 1980.00
}else {}

if(categoria === 2 && etapaJogo === "SF"){
    console.log("Etapa do jogo: Semi-Final")
    console.log("Categoria: 2")
    console.log("Quantidade de Ingressos: "+quantidade+" ingressos") 
    valorIngresso = 880.00 
}else if (categoria === 2 && etapaJogo === "DT"){
    console.log("Etapa do jogo: Decisão do 3º lugar")
    console.log("Categoria: 2")
    console.log("Quantidade de Ingressos: "+quantidade+" ingressos") 
    valorIngresso = 440.00
}else if (categoria === 2 && etapaJogo === "FI"){
    console.log("Etapa do jogo: Final")
    console.log("Categoria: 2")
    console.log("Quantidade de Ingressos: "+quantidade+" ingressos") 
    valorIngresso = 1320.00
}else {}

if(categoria === 3 && etapaJogo === "SF"){
    console.log("Etapa do jogo: Semi-Final")
    console.log("Categoria: 3")
    console.log("Quantidade de Ingressos: "+quantidade+" ingressos") 
    valorIngresso = 550.00 
}else if (categoria === 3 && etapaJogo === "DT"){
    console.log("Etapa do jogo: Decisão do 3º lugar")
    console.log("Categoria: 3")
    console.log("Quantidade de Ingressos: "+quantidade+" ingressos") 
    valorIngresso = 330.00
}else if (categoria === 3 && etapaJogo === "FI"){
    console.log("Etapa do jogo: Final")
    console.log("Categoria: 3")
    console.log("Quantidade de Ingressos: "+quantidade+" ingressos") 
    valorIngresso = 880.00
}else {}

if(categoria === 4 && etapaJogo === "SF"){
    console.log("Etapa do jogo: Semi-Final")
    console.log("Categoria: 4")
    console.log("Quantidade de Ingressos: "+quantidade+" ingressos") 
    valorIngresso = 220.00 
}else if (categoria === 4 && etapaJogo === "DT"){
    console.log("Etapa do jogo: Decisão do 3º lugar")
    console.log("Categoria: 4")
    console.log("Quantidade de Ingressos: "+quantidade+" ingressos") 
    valorIngresso = 170.00
}else if (categoria === 4 && etapaJogo === "FI"){
    console.log("Etapa do jogo: Final")
    console.log("Categoria: 4")
    console.log("Quantidade de Ingressos: "+quantidade+" ingressos") 
    valorIngresso = 330.00
}else {}

console.log("---Valores---")
console.log("Valor do ingresso: " + valorIngresso)


if (tipoJogo === "IN"){
    valorIngresso = valorIngresso*5.6
    valorIngresso = valorIngresso*quantidade
    console.log("Valor total: R$ "+ valorIngresso)
} else{
    valorIngresso = valorIngresso*quantidade
    console.log("Valor total: R$ "+ valorIngresso)
}

*/