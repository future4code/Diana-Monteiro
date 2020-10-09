/*
------> Exercícios de interpretação de código <------

1. # O que faz ==> O código converte o valor de um dinheiro em dólares para reais.
   # Como faz ==> A função conversorDeMoeda recebe um valor e pede o valor da cotação do dólar, retorna R$ e o valor inserido multiplicado pelo valor da cotação em dólares.
   # Valor impresso ==> O valor impresso no console será de 100 multiplicado pela cotação do Dólar, que segundo o google esta em 5,54, então no console será impresso R$ 554.

2. # O que faz ==> O código retorna para o usuário quanto o seu valor irá render no investimento escolhido (Poupança, Renda Fixa, CDB ou Ações).
   # Como faz ==> A função recebe o tipoDeInvestimento e o valor que o usuário gostaria de investiver. Esses valores entram no switch case e param no case do tipoDeInvestimento introduzido pelo usuário. Dentro do case a variável valorAposInvestimento recebe o valor inserido pelo usuário e é então multiplicado por detemrinado valor já contido nela. Se o investimento escolhido não estiver presente em nenhum dos cases, ele vai direto para default e um alert é aberto com a mensagem " TIPO DE INVESTIMENTO INFORMADO INCORRETO!". No final da função o valor da variável valorAposInvestimento é retornado. Após a função são criadas mais duas variáveis, novoMontante e segundoMontante. A primeira recebe como tipoDeInvestimento "Ações" e como valor 150, a segunda recebe "Tesouro direto" e como valor 200. Em seguida é impresso no console o valor desses duas últimas variáveis.
   # Valor impresso ==> O valor impresso no console será de 165.

3. # O que faz ==>  O código cria três arrays: numeros, array1 e array2. Os array1 e array2 foram criados vazios e o array numeros com 14       números desordenados. Os arrays vazios recebem números a partir do array numeros. O array1 recebe os números pares e o array2 recebe os ímpares. Em seguida são impressos no console a quantidade de índices de cada array.
   # Como faz ==> O código cria três arrays: numeros, array1 e array2. Em FOR é comandado que a variável numero percorra o array numeros e receba cada índice desse array um por vez. Dentro do IF em FOR, é comandado que se o valor contido na variável numero seja divido por 2 e tiver o resto igual a zero que esse valor seja inserido no array1, se não (se o resto não for igual a zero) seja inserido no array2. Em seguida é impresso no console três valores, respectivamente: a string "Quantidade total de números" mais o valor da quantidade de índices do array numeros; o valor da quantidade de índices do array1; o valor da quantidade de índices do array2.
   # Valor impresso ==> É impresso no console três valores: "Quantidade total de números 14", "6" e "8".

*/