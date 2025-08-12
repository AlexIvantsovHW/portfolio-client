import { z } from "zod";

export const schema = z.object({
  certificate: z.string().url(),
  companyLogo: z.string().url(),
  companyTitle: z
    .string()
    .min(2, "Company title should include at least 2 chars!"),
  description: z
    .string()
    .min(6, "Description should include at least 6 chars!"),
  endAt: z.string().min(6, "End date should include at least 6 chars!"),
  link: z.string().url(),
  startAt: z.string().min(6, "Start date should include at least 6 chars!"),
  title: z.string().min(2, "Title should include at least 2 chars!"),
});

export type TeducationForm = z.input<typeof schema>;

export type Experience = z.infer<typeof schema>;
