import { Attributes } from "./attributes.type";

export type Contacts = Pick<
  Attributes,
  | "id"
  | "whatsApp"
  | "telegram"
  | "linkedIn"
  | "phone"
  | "email"
  | "cv"
  | "website"
  | "github"
  | "codewars"
>;
export type Contact = Omit<Contacts, "id">;
