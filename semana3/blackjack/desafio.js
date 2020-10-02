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




if(confirm("Quer iniciar uma nova rodada?")){

   const firstCardUser = comprarCarta()
   const secondCardUser = comprarCarta()
   const firstCardComputer = comprarCarta()
   const secondCardComputer = comprarCarta()
   
   let pointsUser
   let pointsComputer
   let arrayExtraCards =[]
   let arrayExtraCardsComputer =[]

   if (firstCardUser && secondCardUser === 11){
   firstCardUser = comprarCarta()
   secondCardUser = comprarCarta()
   }else if (firstCardComputer && secondCardComputer === 11){
   firstCardComputer = comprarCarta()
   secondCardComputer = comprarCarta()
   }else{
      pointsUser = firstCardUser.valor + secondCardUser.valor
      pointsComputer = firstCardComputer.valor + secondCardComputer.valor
   }

   if(confirm("Suas cartas são "+ firstCardUser.texto + " " + secondCardUser.texto + " . A carta revelada do computador é "+ firstCardComputer.texto + "\n" + "Deseja comprar mais uma carta?")){
         while(pointsUser <= 21 || confirm === false){
            const takeOneMore = comprarCarta()
            arrayExtraCards.push(takeOneMore.texto)
            confirm("Suas cartas são "+ firstCardUser.texto + " " + secondCardUser.texto + " " + arrayExtraCards +" . A carta revelada do computador é "+ firstCardComputer.texto +"\n" + "Deseja comprar mais uma carta?")
            pointsUser += takeOneMore.valor           
         }
   }else{
         while(pointsComputer <= 21){
            const takeOneMore = comprarCarta()
            arrayExtraCardsComputer.push(takeOneMore.texto)
            pointsComputer += takeOneMore.valor           
         }
   } 

   if (pointsUser > pointsComputer || pointsComputer > 21){
      alert("Suas cartas são "+ firstCardUser.texto + " " + secondCardUser.texto + " " + arrayExtraCards +" . Sua pontuação é "+ pointsUser + ". \n As cartas do computador são " + firstCardComputer.texto + " " + secondCardComputer.texto + " " + arrayExtraCardsComputer + ". A pontuação do computador é " + pointsComputer + ". \n O usuário ganhou!!!" )
   } else if (pointsUser < pointsComputer || pointsUser > 21){
      alert("Suas cartas são "+ firstCardUser.texto + " " + secondCardUser.texto + " " + arrayExtraCards +" . Sua pontuação é "+ pointsUser + ". \n As cartas do computador são " + firstCardComputer.texto + " " + secondCardComputer.texto + " " + arrayExtraCardsComputer + ". A pontuação do computador é " + pointsComputer + ". \n O computador ganhou!!!" )
   } else {
      alert("Empate!!!")
   }

} else {
   console.log("O jogo acabou!")
}    

