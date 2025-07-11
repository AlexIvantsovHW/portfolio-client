import { Attributes } from "./attributes.type";

export type Jobs = Pick<
  Attributes,
  | "companyTitle"
  | "description"
  | "endAt"
  | "jobTitle"
  | "software_id"
  | "startAt"
  | "id"
  | "logo"
>;
export type Job = Omit<Jobs, "id">;
