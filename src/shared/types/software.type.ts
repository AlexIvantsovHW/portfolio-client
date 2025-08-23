import { Attributes } from "./attributes.type";

export type Tsoftwares = Pick<Attributes, "id" | "title" | "logo">;
export type Tsoftware = Omit<Tsoftwares, "id">;
