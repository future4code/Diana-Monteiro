import { Character, validateCharacter } from "./validateCharacter";

//Exercício 3A

/*export const performAttack = (attacker: Character,        defender: Character) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.force > defender.defense) {
      defender.life -= attacker.force - defender.defense;
    }
};
*/

//Exercício 3B

export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input:Character) => boolean
) => {
    if(!validator(attacker) || !validator(defender)){
        throw new Error("Invalid character");
    }
    if(attacker.force > defender.defense){
        defender.life = attacker.force - defender.defense
    }
}

/*Exercício 3C

A diferença entre as funções está na forma como a função de validação dos adversários está sendo atribuída, na letra A essa função é implementada diretamente na função performAttack, já na letra B ela é atribuída a função performAttack como parâmetro facilitando a alteração do comportamento dessa função de uma forma mais eficiente.*/
