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
>;
export type Personal = Omit<Personals, "id">;
