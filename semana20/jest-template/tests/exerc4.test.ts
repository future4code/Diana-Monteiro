import verifyAge from "../src/exercicios/exerc3"
import {User, NACIONALITY, Casino, LOCATION} from "../src/types/casino"

describe("verifyAge - EX4a", () => {
    test("User entry permission test", () => {
      try {
            const brazilian: User = {
              name: "Lucas",
              age: 20,
              nacionality: NACIONALITY.BRAZILIAN,
            };
        
            const casino: Casino = {
              name: "Festa no Barco",
              location: LOCATION.BRAZIL,
            };
        
            const result = verifyAge(casino, [brazilian]);
            expect(result.brazilians.allowed).toContain(["Lucas"]);

      } catch (error) {
          expect(error).toBeInstanceOf(Error)
          console.log(error.message)
      }
    })  
})

describe("verifyAge - EX4b", () => {
    test("User entry permission test", () => {
      try {
            const american: User = {
              name: "Felipe",
              age: 28,
              nacionality: NACIONALITY.AMERICAN
            };
        
            const casino: Casino = {
              name: "Reggae Party",
              location: LOCATION.EUA
            };
        
            const result = verifyAge(casino, [american]);
            expect(result.americans.allowed).toContain(["Felipe"]);

      } catch (error) {
          expect(error).toBeInstanceOf(Error)
          console.log(error.message)
      }
    })  
})

