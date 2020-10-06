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

   let pointsUser = firstCardUser.valor + secondCardUser.valor
   let pointsComputer = firstCardComputer.valor + secondCardComputer.valor

   console.log("Usuário - cartas: "+ firstCardUser.texto + " " + secondCardUser.texto + " - pontuação "+pointsUser )
   console.log("Computador - cartas: "+ firstCardComputer.texto + " " + secondCardComputer.texto + " - pontuação "+pointsComputer )

   if (pointsUser > pointsComputer){
      console.log("O usuário ganhou!!!")
   } else if (pointsUser < pointsComputer){
      console.log("O computador ganhou!!!")
   } else {
      console.log("Empate!!!")
   }
   
}else {
   console.log("O jogo acabou!")
}    

