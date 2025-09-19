import { Attributes } from "./attributes.type";
export type Tprop<T> = Pick<Attributes<T>, "data" | "route">;
