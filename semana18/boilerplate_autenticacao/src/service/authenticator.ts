import * as jwt from "jsonwebtoken";

const expiresIn = "1min";

export const generateToken = (id: string): string => {
  const token: string = jwt.sign({ id: id }, process.env.JWT_KEY as string, {
    expiresIn,
  });
  return token;
}

 export const getTokenData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  return payload as AuthenticationData;
};

export type AuthenticationData = {
  id: string;
};
