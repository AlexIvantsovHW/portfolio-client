import { z } from "zod";

export const schema = z.object({
  title: z.string().min(2, "Title should include at least 2 chars!"),
  logo: z.string().url(),
});

export type TsoftwareForm = z.input<typeof schema>;

export type Software = z.infer<typeof schema>;
