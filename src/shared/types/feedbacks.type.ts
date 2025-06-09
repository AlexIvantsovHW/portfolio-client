import { Attributes } from "./attributes.type";
export type Feedbacks = Pick<
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
export type Feedback = Omit<Feedbacks, "id">;
