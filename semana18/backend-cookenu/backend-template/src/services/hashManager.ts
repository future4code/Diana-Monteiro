// Libraries
import * as bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

// Encryption functions
export function generateHash(plainText: string): string {
  const rounds = Number(process.env.BCRYPT_COST);
  const salt = bcrypt.genSaltSync(rounds);
  const cypherText = bcrypt.hashSync(plainText, salt);
  return cypherText;
}

export function compareHash(plainText: string, cypherText: string): boolean {
  return bcrypt.compareSync(plainText, cypherText);
}
