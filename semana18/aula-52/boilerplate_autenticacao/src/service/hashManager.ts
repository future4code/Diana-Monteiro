import * as bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export function generateHash(plainText: string): string {
  const rounds = Number(process.env.BCRYPT_COST);
  const salt = bcrypt.genSaltSync(rounds);
  const cypherText = bcrypt.hashSync(plainText, salt);
  return cypherText;
}

export function compare(plainText: string, cypherText: string): boolean {
  return bcrypt.compareSync(plainText, cypherText);
}
