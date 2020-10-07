// Exercícios de interpretação de código //

/*

1.
a. 10 e 50
b. Não apareceria nada no console pois não está sendo comandado a impressão do resultado das funções no console.


2. 
a. Está sendo impresso no console os dois primeiros nomes do array nas posições 0 e 1, Darvas e Caio.
b. Seria impresso Amanda e Caio, nessa ordem.

3. A função pega apenas os números pares de um array e cria um novo array com suas raízes quadradas (ou multiplicados por eles mesmos). Essa função poderia se chamar raizQuadradaNumerosPares ou squareRootEvenNumbers.


// Exercícios de escrita de código //

4.

a.

function aboutMe() {
    console.log("Eu sou Diana, tenho 32 anos, moro no Rio de Janeiro e sou bióloga em transição de carreira.")
}

aboutMe ()

b.

// function aboutMe (name, age, city, student){

//     if (student){
//         student = "sou"
//     }else{ 
//         student = "não sou"
//     }

//     console.log (`Eu sou ${name}, tenho ${age} anos, moro no/em ${city} e ${student} estudante.`)
// }

// const information = aboutMe("Diana", 32, "Rio de Janeiro", true)

5.

a.

const sumTwoNumbers = (a ,b) => {
    return a + b
}

const result = sumTwoNumbers(34, 79)
console.log(result)

b.

let biggerOurEqual = (a,b) => {
    if (a >= b){
        return true
    } else {
        return false
    }
}

let result = biggerOurEqual(109, 79)
console.log(result)

.c

let message = (words) => {
    for (i=0; i<10; i++){
        console.log(words)
    }
} 

let messageForYou = message("Aqui vai uma mensagem ara você!")

.6

a.

const arrayOfNumbers = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

let howManyElements = (array) => {
    return array.length
}

console.log(howManyElements(arrayOfNumbers))

b.

const checkIfIsEven = (number) => {
    if( number%2 === 0){
        return true
    } else {
        return false
    }
}

const result = checkIfIsEven(24)
console.log(result)

c.

const arrayOfNumbers = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

const justEvenNumbers = (array) => {
    let arrayOfEvenNumbers = [];
  
    for (let i of array) {
          if (i % 2 === 0) {
          arrayOfEvenNumbers.push(i)
          }
    }
  
    return arrayOfEvenNumbers;
    
}

const evenNumbers = justEvenNumbers(arrayOfNumbers)
console.log(evenNumbers.length)

.d

const arrayOfNumbers = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

const justEvenNumbers = (array) => {
    let arrayOfEvenNumbers = [];
  
    for (let i of array) {
        if (checkIfIsEven(i)) {
            arrayOfEvenNumbers.push(i)
           }
    }
    return arrayOfEvenNumbers;
    
}

const howManyEvens= justEvenNumbers(arrayOfNumbers)
console.log(howManyEvens.length)

DESAFIOS //

1.
a.
let print = (value) => {
    console.log(value)
}

print("Gastei horas pra entender esse enunciado.")

b.
let sumNumbers = (a,b) => {
   let soma = a + b
   console.log(soma)
}

sumNumbers(23, 65)

2.
*/
const numbers = [0, 8, 23, 16, 10, 15, 41, 12, 13]
//a.
// const squareRootEvenNumbers = (array) => {
//     let arrayOfEvenNumbers = [];
  
//     for (let i of array) {
//           if (i % 2 === 0) {
//           arrayOfEvenNumbers.push(i * i)
//           }
//     }
  
//     return arrayOfEvenNumbers;
//   }

//   console.log(squareRootEvenNumbers(numbers))

//.b
// const higherNumber = (array) => {
//     let biggest = array[0]
//     for (let i=0; i<array.length; i++) {
//         let element = array[i]
//         if(biggest < element) {
//             biggest = element
//         } 
//     }

//     return biggest
// }

// console.log(higherNumber(numbers))

//.c

// const higherIndex = (array) => {
//     let biggest = array[0]
//     let index
//     for (let i=0; i<array.length; i++) {
//         let element = array[i]
//         if(biggest < element) {
//             index = i
//             biggest = element
//         } 
//     }

//     return index
// }

// console.log(higherIndex(numbers))

//.d
// const reverseArray = (array) => {
// let arrayInvert = [];

//     for (let i = array.length;; i--) {
//         let element= array[i]
//         arrayInvert.push(element)
//         if(i <= 0) break;
//     }

// return arrayInvert;
// }

// console.log(reverseArray(numbers))
