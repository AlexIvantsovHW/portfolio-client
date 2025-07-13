import { z } from "zod";

export const schema = z.object({
  username: z.string().min(2),
  surname: z.string().min(2),
  country: z.string().min(2),
  city: z.string().min(2),
  description: z.string().min(6),
  avatar: z.string().url(),
  age: z.string(),
  yearExperince: z.string(),
});

export type TpersonalForm = z.input<typeof schema>;

export type Personal = z.infer<typeof schema>;
