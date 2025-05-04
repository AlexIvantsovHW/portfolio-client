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
>;
export type Contact = Omit<Contacts, "id">;
