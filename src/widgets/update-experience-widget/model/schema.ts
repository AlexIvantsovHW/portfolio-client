import { z } from "zod";

export const schema = z.object({
  companyTitle: z
    .string()
    .min(2, "Company title should include at least 2 chars!"),
  description: z
    .string()
    .min(6, "description should include at least 2 chars!"),
  endAt: z.string().min(6, "End date should include at least 6 chars!"),
  jobTitle: z.string().min(2, "Job title should include at least 2 chars!"),
  logo: z.string().url(),

  startAt: z.string().min(6, "Stard date should include at least 6 chars!"),
});

export type TexperienceForm = z.input<typeof schema>;

export type Experience = z.infer<typeof schema>;
