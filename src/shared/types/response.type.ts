import { Attributes } from "./attributes.type";

export type Tresponse<T> = Pick<Attributes, "message"> & { data: T };
