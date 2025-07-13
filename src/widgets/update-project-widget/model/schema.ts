import { z } from "zod";

export const schema = z.object({
  title: z.string().min(2, "Project title should include at least 2 chars!"),
  description: z
    .string()
    .min(6, "description should include at least 2 chars!"),
  endAt: z.string().min(6, "End date should include at least 6 chars!"),
  logo: z.string().url(),
  link: z.string().url(),
  startAt: z.string().min(6, "Stard date should include at least 6 chars!"),
});

export type TprojectForm = z.input<typeof schema>;

export type Tproject = z.infer<typeof schema>;
