"use client";

import { useRouter } from "next/navigation";
import { useReadingStore, useTimerStore, useUIStore } from "@/stores";

import { CompletionView } from "./completion";

export function CompletionContainer() {
  const router = useRouter();
  const getTodayRecord = useReadingStore((s) => s.getTodayRecord);
  const resetTimer = useTimerStore((s) => s.reset);
  const resetReading = useUIStore((s) => s.resetReading);

  const record = getTodayRecord();

  const handleViewRecords = () => {
    resetTimer();
    resetReading();
    router.push("/journey");
  };

  return (
    <CompletionView
      bookTitle={record?.bookTitle ?? "오늘의 책"}
      lastPage={record?.lastPage ?? 0}
      onViewRecords={handleViewRecords}
    />
  );
}
