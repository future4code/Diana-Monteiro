// Exercícios de interpretação de código //

/*

1. É impresso o seguinte no console:
a. false
b. false
c. true
e. boolean

2. É impresso o seguinte no console:
a. undefined
b. null
c. 11
d. 3
e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

// Exercícios de escrita de código //

1.

let idade = prompt("Qual sua idade?")
let idadeAmigo = prompt("Qual a idade da sua melhor amiga?")

const resultado = Number(idade) > Number(idadeAmigo)
const diferenca = Number(idade) - Number(idadeAmigo)
console.log(`Sua idade é maior do que a da sua amiga? ${resultado}`)
console.log(`A diferença de idade entre vocês é de ${diferenca} anos`)

2.

let par = prompt("Digite um número par:")
console.log(Number(par)%2)

C. A resposta impressa no console é sempre 0 quando o número digitado no prompt é par, isso pq qualquer número par dividido por 2 tem como resto o número 0.

D. Quando o número digitado no prompt é ímpar, o número impresso no console é sempre 1, pois qualquer número ímpar dividido por 2 tem como resto o número 1.

3.

let listaDeTarefas = []
let tarefa1 = prompt("Digite uma tarefa que você precisa realizar ao longo do dia:")
let tarefa2 = prompt("Digite mais uma tarefa:")
let tarefa3 = prompt("Sem querer ser chata, mais digita só mais uma por favor:")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas)

let tarefaRealizada = prompt("Qual das tarefas você ja realizou? 0, 1 ou 2?")

listaDeTarefas.splice(tarefaRealizada, 1)
console.log(listaDeTarefas)

4.

let nomeDoUsuario = prompt("Qual seu nome?")
let emailDoUsuario= prompt("Qual seu e-mail?")

console.log("O e-mail "+ emailDoUsuario + " foi cadastrado com sucesso. Seja bem-viada(o), " + nomeDoUsuario +"!")

// Exercícios Desafios Extras //

1.

let celsius = 80
let fahrenheit = 77

a.

let fParaK =  (fahrenheit - 32)*5/9 + 273.15
console.log(fParaK+"K")

b.

let cParaF = (celsius)*9/5 + 32
console.log(cParaF+"°F")

c.

celsius = 30

cParaF = (celsius)*9/5 + 32
console.log(cParaF+"°F")

let cParaK = celsius + 273.15
console.log(cParaK+"°K")

d.

celsius = prompt("Insira o valor em °C que deseja converter:")
cParaF = Number(celsius)*9/5 + 32
console.log(cParaF+"°F")

cParaK = Number(celsius) + 273.15
console.log(cParaK+"°K")

2.

let consumo = prompt("Quantos kWh você consumiu?")
let kWh = 0.05
let calculoConsumo = consumo*kWh
console.log(calculoConsumo + " reais")

a.
consumo = 280
calculoConsumo = consumo*kWh
console.log(calculoConsumo + " reais")

b.
let desconto = prompt("Qual a porcentagem do desconto recebido?")
calculoDesconto = calculoConsumo*(Number(desconto)/100)
console.log("O valor do desconto será de " + calculoDesconto + " reais")

3.
*/
//a.
let lb = 20
let kg = (lb)*0.45

console.log(lb + "lb equivalem a "+ kg + "kg")

//b.
let oz = 10.5
kg = (oz)*0.029

console.log(oz + "oz equivalem a " + kg + "kg")

//c.
let mi = 100
let metro = (mi)*1609.34
console.log(mi + "mi equivalem a " + metro + "m")

//d.
let ft = 50
metro = (ft)*0.3048
console.log(ft + "ft equivalem a " + metro + "m")

//e.
let gal = 103.56
let litro = (gal)*3.78541
console.log(gal + "gal equivalem a " + litro + "l")

//f
let xic = 450
litro = (xic)*0.284131
console.log(xic + "xic equivalem a " + litro + "l")

//g
gal = prompt("Insira o valor que você gostaria de converter:")
litro = (gal)*3.78541
console.log(gal + "gal equivalem a " + litro + "l")

xic = prompt("Insira o valor que você gostaria de converter:")
litro = (xic)*0.284131
console.log(xic + "xic equivalem a " + litro + "l")
