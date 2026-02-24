import { z } from "zod";

export const readingLogSchema = z.object({
  bookTitle: z.string().min(1, "책 제목을 입력해주세요"),
  lastPage: z.coerce
    .number()
    .min(1, "페이지 번호를 입력해주세요")
    .max(9999, "올바른 페이지 번호를 입력해주세요"),
});

export type ReadingLogInput = z.infer<typeof readingLogSchema>;
