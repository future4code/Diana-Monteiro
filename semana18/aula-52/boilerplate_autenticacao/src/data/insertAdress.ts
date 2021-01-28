import { connection } from "./config";

export const insertAddress = async (id: string, public_place: string, number: number, neighborhood: string, city: string, state:string, user_id: string, complement?:string) => {
    await connection
      .insert({
        id,
        public_place,
        number,
        neighborhood,
        city,
        state,
        user_id,
        complement
      })
      .into("address_aula50");
  };