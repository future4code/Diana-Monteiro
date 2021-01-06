
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

//a) Através do comando tsc exercicio4.ts
//b) Sim, mas a única diferença seria o endereço (o caminho que leva) da pasta. Por exemplo, tsc ./src/exercicio4.ts
//c) Sim, através do comando tsc --init que cria um arquivo de configuração dentro da pasta do projeto. Após configurar esse arquivo basta utilizar novamente o comando tsc e os arquivos typescript serão transpilados para JS.
//d) A propriedade Target aparece com a versão 5, comparando com o arquivo criado nos slides a versão certa seria a 6. Porém ao lado podemos ver também as diversas versões disponíveis. No arquivo dos slides aparecem poucas propriedades e nenhuma comentada, já no arquivo gerado através do init as propriedade são muitas e em maiora estão comentadas.