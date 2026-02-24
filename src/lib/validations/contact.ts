import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요"),
  phone: z.string().min(1, "전화번호를 입력해주세요"),
});

export type ContactInput = z.infer<typeof contactSchema>;
