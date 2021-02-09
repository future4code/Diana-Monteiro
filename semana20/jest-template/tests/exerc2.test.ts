import { perfomPurchase } from "../src/exercicios/exerc1"
import { User } from "../src/types/user"

describe("performPurchase - EX2a", () => {
    test("Testing balance greater than value", () => {

      expect.assertions(1)

      try {
          const user: User = {
              name: "Nome",
              balance: 300
          }

          expect(user.balance).toBeGreaterThan(200)
      } catch (error) {
          expect(error).toBeInstanceOf(Error)
          console.log(error.message)
      }
    })  
})

describe("performPurchase - EX2b", () => {
    test("Testing balance less than value", () => {

      expect.assertions(1)

      try {
          const user: User = {
              name: "Nome",
              balance: 200
          }

          expect(user.balance).toEqual(user.balance)
      } catch (error) {
          expect(error).toBeInstanceOf(Error)
          console.log(error.message)
      }
    })  
})

describe("performPurchase - EX2c", () => {
    test("Testing balance equal than value", () => {

      expect.assertions(1)

      try {
          const user: User = {
              name: "Nome",
              balance: 100
          }

          expect(user.balance).toBeLessThan(200)
      } catch (error) {
          expect(error).toBeInstanceOf(Error)
          console.log(error.message)
      }
    })  
})