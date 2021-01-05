function calcular (a: number, b:number) {
    let soma: number = a + b
    let sub: number = a - b
    let mult: number = a*b
    let maior: number = 0

    if (a > b){
        maior =+ a
    } else {
        maior =+ b
    }

    type calculos = {
        totalSoma: number,
        totalSub: number,
        totalMult: number,
        totalMaior: number
    }

    const calculos = {
        totalSoma: soma,
        totalSub: sub,
        totalMult: mult,
        totalMaior: maior
    }

    return calculos
}

console.log(calcular(30, 20))