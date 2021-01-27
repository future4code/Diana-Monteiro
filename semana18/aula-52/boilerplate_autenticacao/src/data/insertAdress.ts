import { connection } from "./config";

export const insertAddress = async (id: string, public_place: string, number: string, neighborhood: string, city: string, state:string, complement?:string) => {
    await connection
      .insert({
        id,
        public_place,
        number,
        neighborhood,
        city,
        state,
        complement
      })
      .into("address_aula50");
  };