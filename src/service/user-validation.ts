import { z, ZodType } from "zod";

export class UserValidation {
  static readonly REGISTER: ZodType = z.object({
    username: z.string().min(3).max(100),
    email: z.string().email().min(1).max(100),
    password: z.string().min(8).max(255),
  });

  static readonly LOGIN: ZodType = z.object({
    email: z.string().email().min(1).max(100),
    password: z.string().min(1).max(255),
  });
}
