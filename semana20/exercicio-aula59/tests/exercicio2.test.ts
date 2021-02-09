import { validateCharacter} from "../src/validateCharacter"

describe("Testing Validate Character", () => {
    test("Should return false for empty name input", () => {
        expect.assertions(1)

        const input = {
            name: "",
            life: 1500,
            defense: 50,
            force: 60
        }
        const output = validateCharacter(input)
        expect(output).toBe(false)
    })

    test("Should return false for zero life input", () => {
        expect.assertions(1)

        const input = {
            name: "Gael",
            life: 0,
            defense: 50,
            force: 60
        }
        const output = validateCharacter(input)
        expect(output).toBe(false)
    })

    test("Should return false for zero force input", () => {
        expect.assertions(1)

        const input = {
            name: "Gael",
            life: 1500,
            defense: 50,
            force: 0
        }
        const output = validateCharacter(input)
        expect(output).toBe(false)
    })

    test("Should return false for zero defense input", () => {
        expect.assertions(1)

        const input = {
            name: "Gael",
            life: 1500,
            defense: 0,
            force: 60
        }
        const output = validateCharacter(input)
        expect(output).toBe(false)
    })

    test("Should return false for negative input value", () => {
        expect.assertions(1)

        const input = {
            name: "Gael",
            life: -1500,
            defense: -0,
            force: -60
        }
        const output = validateCharacter(input)
        expect(output).toBe(false)
    })

    test("Should return true for all valid inputs", () => {
        const character = validateCharacter({
          name: "Gael",
          life: 1500,
          force: 50,
          defense: 60,
        });
    
        expect(character).toBe(true);
      });
})