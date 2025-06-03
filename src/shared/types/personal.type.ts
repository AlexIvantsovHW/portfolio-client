import { Attributes } from "./attributes.type";
export type Personals = Pick<
  Attributes,
  | "id"
  | "username"
  | "surname"
  | "age"
  | "city"
  | "country"
  | "yearExperince"
  | "description"
  | "avatar"
>;
export type Personal = Omit<Personals, "id">;
