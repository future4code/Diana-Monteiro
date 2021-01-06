function obterEstatisticas(numeros: Array<number>) {
  const numerosOrdenados:Array<number> = numeros.sort((a, b) => a - b);

  let soma:number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

//a) A entra é numeros, um array. A saída é estatísticas, um objeto.
//b) a const numerosOrdenados é do tipo array de number e a let soma e a let num são do tipo number.

//c)

type estatisticas = {
  maior: number,
  menor: number,
  media: number,
};

type amostraDeDados = {
  numeros: Array<number>;

  obterEstatisticas: (numeros: number) => estatisticas;
};

console.log(obterEstatisticas([1, 4, 6, 7, 8, 9]));
