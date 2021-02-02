// Libraries
import * as bcrypt from "bcryptjs"


// Encryption functions
export const hash = async (plainText: string): Promise<string> => {
    const salt: string = await bcrypt.genSalt(Number(process.env.BCRYPT_COST))

    const cypheredText: string = await bcrypt.hash(plainText, salt)

    return cypheredText
}

export const compare = async (plainText: string, hash: string): Promise<boolean> => bcrypt.compare(plainText, hash)