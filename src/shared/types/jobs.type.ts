import { Attributes } from "./attributes.type";
import { Tsoftwares } from "./software.type";
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
export type TjobCard = Omit<Jobs, "software_id"> & {
  softwares: Tsoftwares[];
};
