/*
------> Exercícios de interpretação de código <------

1. # O que faz ==> O código converte o valor de um dinheiro em dólares para reais.
   # Como faz ==> A função conversorDeMoeda recebe um valor e pede o valor da cotação do dólar, retorna R$ e o valor inserido multiplicado pelo valor da cotação em dólares.
   # Valor impresso ==> O valor impresso no console será de 100 multiplicado pela cotação do Dólar, que segundo o google esta em 5,54, então no console será impresso R$ 554.

2. # O que faz ==> O código retorna para o usuário quanto o seu valor irá render no investimento escolhido (Poupança, Renda Fixa, CDB ou Ações).
   # Como faz ==> A função recebe o tipoDeInvestimento e o valor que o usuário gostaria de investiver. Esses valores entram no switch case e param no case do tipoDeInvestimento introduzido pelo usuário. Dentro do case a variável valorAposInvestimento recebe o valor inserido pelo usuário e é então multiplicado por detemrinado valor já contido nela. Se o investimento escolhido não estiver presente em nenhum dos cases, ele vai direto para default e um alert é aberto com a mensagem " TIPO DE INVESTIMENTO INFORMADO INCORRETO!". No final da função o valor da variável valorAposInvestimento é retornado. Após a função são criadas mais duas variáveis, novoMontante e segundoMontante. A primeira recebe como tipoDeInvestimento "Ações" e como valor 150, a segunda recebe "Tesouro direto" e como valor 200. Em seguida é impresso no console o valor desses duas últimas variáveis.
   # Valor impresso ==> O valor impresso no console será de 165.

*/