import { z } from "zod";

export const schema = z.object({
  username: z.string().min(2, "username should be at least 2 letters"),
  surname: z.string().min(2, "surname should be at least 2 letters"),
  country: z.string().min(2, "country should be at least 2 letters"),
  city: z.string().min(2, "city should be at least 2 letters"),

  description: z.string().min(6, "description should be at least 6 letters"),
  avatar: z.string().url(),
  age: z.string().transform((v) => +v),
  yearExperince: z.string().transform((v) => +v),
});

export type schema = z.infer<typeof schema>;
