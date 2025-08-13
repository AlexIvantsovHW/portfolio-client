import { Attributes } from "./attributes.type";
export type Tfeedbacks = Pick<
  Attributes,
  | "id"
  | "name"
  | "date"
  | "description"
  | "position"
  | "companyTitle"
  | "logo"
  | "country"
  | "city"
>;
export type Tfeedback = Omit<Tfeedbacks, "id">;
