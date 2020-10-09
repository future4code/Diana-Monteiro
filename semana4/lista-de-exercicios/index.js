/*
------> Exercícios de interpretação de código <------

1. # O que faz ==> O código converte o valor de um dinheiro em dólares para reais.
   # Como faz ==> A função conversorDeMoeda recebe um valor e pede o valor da cotação do dólar, retorna R$ e o valor inserido multiplicado pelo valor da cotação em dólares.
   # Valor impresso ==> O valor impresso no console será de 100 multiplicado pela cotação do Dólar, que segundo o google esta em 5,54, então no console será impresso R$ 554.

2. # O que faz ==> O código retorna para o usuário quanto o seu valor irá render no investimento escolhido (Poupança, Renda Fixa, CDB ou Ações).
   # Como faz ==> A função recebe o tipoDeInvestimento e o valor que o usuário gostaria de investiver. Esses valores entram no switch case e param no case do tipoDeInvestimento introduzido pelo usuário. Dentro do case a variável valorAposInvestimento recebe o valor inserido pelo usuário e é então multiplicado por detemrinado valor já contido nela. Se o investimento escolhido não estiver presente em nenhum dos cases, ele vai direto para default e um alert é aberto com a mensagem " TIPO DE INVESTIMENTO INFORMADO INCORRETO!". No final da função o valor da variável valorAposInvestimento é retornado. Após a função são criadas mais duas variáveis, novoMontante e segundoMontante. A primeira recebe como tipoDeInvestimento "Ações" e como valor 150, a segunda recebe "Tesouro direto" e como valor 200. Em seguida é impresso no console o valor desses duas últimas variáveis.
   # Valor impresso ==> O valor impresso no console será de 165.

3. # O que faz ==>  O código cria três arrays: numeros, array1 e array2. Os array1 e array2 foram criados vazios e o array numeros com 14      números desordenados. Os arrays vazios recebem números a partir do array numeros. O array1 recebe os números pares e o array2 recebe os ímpares. Em seguida são impressos no console a quantidade de índices de cada array.
   # Como faz ==> O código cria três arrays: numeros, array1 e array2. Em FOR é comandado que a variável numero percorra o array numeros e receba cada índice desse array um por vez. Dentro do IF em FOR, é comandado que se o valor contido na variável numero seja divido por 2 e tiver o resto igual a zero que esse valor seja inserido no array1, se não (se o resto não for igual a zero) seja inserido no array2. Em seguida é impresso no console três valores, respectivamente: a string "Quantidade total de números" mais o valor da quantidade de índices do array numeros; o valor da quantidade de índices do array1; o valor da quantidade de índices do array2.
   # Valor impresso ==> É impresso no console três valores: "Quantidade total de números 14", "6" e "8".
   
4. # O que faz ==> O código retorna e imprime no console o maior número e o menor número do array numeros.
   # Como faz ==> O código criar tres variáveis: numeros (que recebe um array) , numero1 (que recebe o valor Infinity) e numero2 (que recebe o valor 0). Em seguida, em FOR, é criada a variável numero que percorre o array numeros. Dentro do primeiro IF em FOR, é comandado que se o valor da variável numero for menor que o valor da variável numero1, numero1 recebe o valor de numero (isso irá acontecer até a variável numero percorrer todos os índices do array numeros). Logo após no segundo IF em FOR, é comandado que se o valor da variável numero for maior que o valor da variável numero2, numero2 recebe o valor de numero (isso irá acontecer até a variável numero percorrer todos os índices do array numeros). Em seguida é impresso no console o valor final das variáveis numero1 e numero2.
   # Valor impresso ==> Será impresso no console os número -10 e 1590.
  

------> Exercícios de Lógica de Pogramação <------

1. 

const numeros = [5, 6, 9, 18, 23, 30, 50, 54, 78, 109]

function percorrerarrays1 (array){
    for (let i of array){
        console.log(array.length)
    }
   
}

function percorrerarrays2 (array){
    let i = 0
    while(i < array.length) {
        console.log(array)
        i++
    }
   
}

function percorrerarrays3 (array){
    for (let i=0; i<array.length; i++){
        console.log(array)
    }
   
}

percorrerarrays1(numeros)
percorrerarrays2(numeros)
percorrerarrays3(numeros)

2.

a) true && false && false 
Return ==> false

b) (true && false) || false
   false || false
Return ==> false

c) (false || true) && (false || true)
    true && true 
Return ==> true

d) !(false && true) || !(true && true)
    true || false 
Return ==> true

e) !(true) && !(true) || (!false && true && true)
    false && false || true
    false || true
Return ==> true

3.
O código não funciona pois falta um contador no While, sem ele o código entra em loop infinito. Também retirei do While o sinal de = , pois com ele o número iniciado na váriavel também era impresso no console. Com contador e sem o sinal igual, o código funciona como requisitado.


const quantidadeDeNumerosPares = (n) => {
let i = 0

while(i < n) {
  console.log(i*2)
  i++
}
}

quantidadeDeNumerosPares()

4.

function triangulos(a,b,c){
    if ((a === b && b === c)){
        console.log("É um triângulo Equilátero!")
    }
    else if ((a === b && b!== c) || (b === c && b !== a) || (c === a && a !== c)){
        console.log("É um triângulo Isósceles!")
    }
    else {
        console.log("É um triângulo Escaleno!")
    }
}

triangulos()

5.

function verificandoNumeros (a,b){

    if (a > b){
        console.log(`O maior é: ${a}`)
    }
    else{
        console.log(`O maior é: ${b}`)
    }

    if(a % b === 0){
        console.log(`${a} é divisível por ${b}`)
    }
    else{
        console.log(`${a} não é divisível por ${b}`)
    }

    let diferenca = a - b

    if(diferenca < 0){
        diferenca = diferenca * -1
    }
    console.log(`A diferença entre eles é ${diferenca}`)
}

verificandoNumeros(15,30)

------> Exercícios de Função <------

1.

const numeros = [-10, -1, 3, 4, 6, 7, 8, 9, 10, 60] 

const segundoNumero = (array) => {
    let menor = Infinity
    let maior = 0
    let segundoMenor = Infinity
    let segundoMaior = 0
    let indiceMenor = 0
    let indiceMaior = 0

    for (let i of array) {
        if (i < menor) {
            menor = i
            indiceMenor = array.indexOf(menor)
        }
        if (i > maior) {
            maior = i
            indiceMaior = array.indexOf(maior)
        }
    }    

    array.splice(indiceMaior, 1)
    array.splice(indiceMenor, 1)

    for (let i of array) {
        if (i < segundoMenor) {
            segundoMenor = i
        }
        if (i > segundoMaior) {
            segundoMaior = i
        }
    }  

    console.log(segundoMenor)
    console.log(segundoMaior)

}


segundoNumero(numeros)

2.

let digaHello = (mensagem) => {
    alert(mensagem)
}

const mensagemLabenu = "Hello Futre4! Que agora é Labenu!"

digaHello(mensagemLabenu)

//Fiquei na dúvida se era assim então fiz uma segunda versão

let digaHello = () => {
    alert("Hello Future4! Que agora é Labenu!")
}

digaHello()


------> Exercícios de Função <------

1.   Arrays são variáveis onde podemos armazenar mais de um valor com um único nome. Podemos utilizá-lo quando queremos guardar e acessar mais de um elemento e quando precisamos que os nomes dos elementos sejam números, pois nos arrays os índices são numerados. Objetos são variáveis que assim como arrays podem armazenar mais de um valor com um único nome, porém guardam informações mais detalhadas e de uma forma mais organizada. Os objetos guardam seus elementos no formato de strings e seus índeces são nomeados.

2.

const criarRetangulo = (lado1, lado2) => {
    const retangulo ={
        largura: lado1,
        altura: lado2,
        perimetro: 2*(lado1 + lado2),
        area: lado1*lado2
    }

    return retangulo
}

const retangulo1 = criarRetangulo(1,2)
console.log(retangulo1)

3.

const filmes = () =>{
    const filmeFavorito ={
        titulo: "Star Wars",
        ano: "1977",
        diretor: "George Lucas",
        elenco: ["Harrison Ford", "Mark Hamill", "Carrie Fisher", "Shelag Fraser"]
    }

    console.log (`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.elenco[0]}, ${filmeFavorito.elenco[1]}, ${filmeFavorito.elenco[2]} e ${filmeFavorito.elenco[3]}.`)
}

filmes()

4.

let serHumano = {
    nome: "Felipe Zanone",
    idade: 33,
    email: "felipezanone@gamil.com",
    endereco: "Rua Aureliano Coutinho 390"
}


const anonimizarPessoa = (objeto) => {
    const novoObjeto = {
        ...objeto,
        nome: "Anônimo"
    }
    return novoObjeto
}

const anonimo = anonimizarPessoa(serHumano)
console.log(anonimo)

------> Exercícios de Funções de Array <------

1.

a)
 
const pessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const maioresDeIdade = pessoas.filter((pessoas) => {
    return pessoas.idade >= 20
})

console.log(maioresDeIdade)

b)
const menoresDeIdade = pessoas.filter((pessoas) => {
    return pessoas.idade < 20
})

console.log(menoresDeIdade)

*/ 