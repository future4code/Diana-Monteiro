/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


alert("Seja Bem-vindo ao jogo BlackJack!!")

// INCIANDO JOGO E SORTEANDO CARTAS

if (confirm("Quer iniciar uma nova rodada?")) {

   const firstCardUser = comprarCarta()
   const secondCardUser = comprarCarta()
   const firstCardComputer = comprarCarta()
   const secondCardComputer = comprarCarta()

   let arrayExtraCards = []
   let arrayExtraCardsComputer = []

//SE DOIS ASES FOREM SORTEADOS, SORTEEM AS CARTAS NOVAMENTE

   if ((firstCardUser === "A") && (secondCardUser === "A")) {
      firstCardUser = comprarCarta()
      secondCardUser = comprarCarta()
   } else if ((firstCardComputer === "A") && (secondCardComputer === "A")) {
      firstCardComputer = comprarCarta()
      secondCardComputer = comprarCarta()
   }

// ATRIBUINDO VALORES AS VARIAVEIS DE PONTUAÇÃO

   let pointsUser = firstCardUser.valor + secondCardUser.valor
   let pointsComputer = firstCardComputer.valor + secondCardComputer.valor

// SE AINDA NÃO SOMAREM 21 PONTOS CONTINUE SORTEANDO CARTAS

   if (pointsUser < 21) {
      for (; ;) {
         let option = confirm("Suas cartas são " + firstCardUser.texto + " " + secondCardUser.texto + " " + arrayExtraCards + ". A carta revelada do computador é " + firstCardComputer.texto + "\n" + "Deseja comprar mais uma carta?")
         if (option === false) break;
         if (pointsUser > 21) break;
         takeOneMore = comprarCarta()
         arrayExtraCards.push(takeOneMore.texto)
         pointsUser += takeOneMore.valor
      }
   } 
   
   if (pointsComputer < 21) {
      for (; ;) {
         let takeOneMore = comprarCarta()
         arrayExtraCardsComputer.push(takeOneMore.texto)
         pointsComputer += takeOneMore.valor
         if (pointsComputer > 21) break;
      }
   }

// ESCREVA O RESULTADO E O PLACAR

   if (pointsUser <= 21) {
      alert("Suas cartas são " + firstCardUser.texto + " " + secondCardUser.texto + " " + arrayExtraCards + ". Sua pontuação é " + pointsUser + ". \n As cartas do computador são " + firstCardComputer.texto + " " + secondCardComputer.texto + " " + arrayExtraCardsComputer + ". A pontuação do computador é " + pointsComputer + ". \n Você ganhou!!!")
   } else if (pointsComputer <= 21) {
      alert("Suas cartas são " + firstCardUser.texto + " " + secondCardUser.texto + " " + arrayExtraCards + ". Sua pontuação é " + pointsUser + ". \n As cartas do computador são " + firstCardComputer.texto + " " + secondCardComputer.texto + " " + arrayExtraCardsComputer + ". A pontuação do computador é " + pointsComputer + ". \n O computador ganhou!!!")
   } else if (pointsUser === pointsComputer) {
      alert("Suas cartas são " + firstCardUser.texto + " " + secondCardUser.texto + " " + arrayExtraCards + ". Sua pontuação é " + pointsUser + ". \n As cartas do computador são " + firstCardComputer.texto + " " + secondCardComputer.texto + " " + arrayExtraCardsComputer + ". A pontuação do computador é " + pointsComputer + ". \n Empate!!!")
   } else if ((pointsUser > 21 && pointsComputer > 21))
   alert("Suas cartas são " + firstCardUser.texto + " " + secondCardUser.texto + " " + arrayExtraCards + ". Sua pontuação é " + pointsUser + ". \n As cartas do computador são " + firstCardComputer.texto + " " + secondCardComputer.texto + " " + arrayExtraCardsComputer + ". A pontuação do computador é " + pointsComputer + ". \n Sem ganhadores, tentem mais uma vez!!!")


// SOU VACILÃO NÃO QUERO JOGAR

} else {
   alert("O jogo acabou!")
}
