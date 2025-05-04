import { Attributes } from "./attributes.type";
export type Projects = Pick<
  Attributes,
  "id" | "startAt" | "endAt" | "description" | "link" | "logo" | "title"
>;
export type Project = Omit<Projects, "id">;
