"use client";

import { useState } from "react";
import { useReadingStore, useTimerStore, useUIStore } from "@/stores";
import { readingLogSchema } from "@/lib/validations/reading";
import { saveReadingLog } from "./reading.action";
import { ReadingLogView } from "./reading-log";

export function ReadingLogContainer() {
  const addRecord = useReadingStore((s) => s.addRecord);
  const elapsed = useTimerStore((s) => s.elapsed);
  const setReadingStep = useUIStore((s) => s.setReadingStep);

  const [bookTitle, setBookTitle] = useState("");
  const [lastPage, setLastPage] = useState("");
  const [errors, setErrors] = useState<{
    bookTitle?: string;
    lastPage?: string;
  }>({});

  const handleSubmit = async () => {
    const result = readingLogSchema.safeParse({
      bookTitle,
      lastPage,
    });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        bookTitle: fieldErrors.bookTitle?.[0],
        lastPage: fieldErrors.lastPage?.[0],
      });
      return;
    }

    setErrors({});

    const today = new Date().toISOString().split("T")[0];
    addRecord({
      date: today,
      bookTitle: result.data.bookTitle,
      lastPage: result.data.lastPage,
      durationSeconds: elapsed,
      status: "success",
    });

    console.log("📖 독서 기록 저장:", result.data);
    await saveReadingLog(result.data);

    setReadingStep("completion");
  };

  return (
    <ReadingLogView
      bookTitle={bookTitle}
      lastPage={lastPage}
      errors={errors}
      onBookTitleChange={setBookTitle}
      onLastPageChange={setLastPage}
      onSubmit={handleSubmit}
    />
  );
}
