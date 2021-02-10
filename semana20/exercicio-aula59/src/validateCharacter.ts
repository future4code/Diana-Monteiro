//Exercício 1

export interface Character {
    name: string,
    life: number,
    defense: number,
    force: number
}


export const validateCharacter = (
    input: Character
): boolean => {
   if (!input.name || !input.life || !input.defense || !input.force){
    return false;
   }
   if (input.life <=0 || input.force <=0 || input.defense <=0) {
    return false;
  }

  return true
}
  