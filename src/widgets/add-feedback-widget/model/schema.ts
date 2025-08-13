import { z } from "zod";

export const schema = z.object({
  description: z
    .string()
    .min(6, "description should include at least 2 chars!"),
  logo: z.string().url(),
  name: z.string().min(2, "User name should include at least 2 chars!"),
  position: z.string().min(2, "Position should include at least 2 chars!"),
  companyTitle: z
    .string()
    .min(2, "Company title should include at least 2 chars!"),
  country: z.string().min(2, "Country should include at least 2 chars!"),
  city: z.string().min(2, "City should include at least 2 chars!"),
});

export type TfeedbackForm = z.input<typeof schema>;

export type Tfeedback = z.infer<typeof schema>;
