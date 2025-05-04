import { Attributes } from "./attributes.type";

export type Universities = Pick<
  Attributes,
  | "companyTitle"
  | "title"
  | "link"
  | "companyLogo"
  | "description"
  | "certificate"
  | "endAt"
  | "startAt"
  | "id"
>;
export type University = Omit<Universities, "id">;
