import { Attributes } from "./attributes.type";

export type Tsignin = Pick<Attributes, "email" | "password" | "username">;
export type Tlogin = Omit<Tsignin, "username">;
export type Tauth = Pick<Attributes, "access_token">;
