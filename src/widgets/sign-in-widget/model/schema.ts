import { z } from "zod";

export const schema = z.object({
  username: z.string().nonempty().min(4, "Username should be 4 chars at least"),
  password: z.string().nonempty().min(4, "Password should be 4 chars at least"),
  email: z.string().email("Invalid email address"),
});
export type schema = z.infer<typeof schema>;
