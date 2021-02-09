/*Exercício 4A
 Precisamos criar um mock da função validateCharacter pois é ela que será enviada como parâmetro para a outra função, performAttack.
 */

import { Character } from "../src/validateCharacter";

export const validateMock = jest.fn((input: any): Character => {
    return true
})