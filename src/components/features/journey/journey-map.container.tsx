"use client";

import { useRouter } from "next/navigation";
import { useReadingStore } from "@/stores";
import type { DayStatus } from "@/types/reading";
import { TOTAL_DAYS } from "@/lib/constants";
import { JourneyMapView } from "./journey-map";

export function JourneyMapContainer() {
  const router = useRouter();
  const records = useReadingStore((s) => s.records);
  const getCurrentDay = useReadingStore((s) => s.getCurrentDay);
  const getSuccessCount = useReadingStore((s) => s.getSuccessCount);
  const startDate = useReadingStore((s) => s.startDate);

  const currentDay = getCurrentDay();
  const successCount = getSuccessCount();

  const dayStatuses: DayStatus[] = Array.from(
    { length: TOTAL_DAYS },
    (_, i) => {
      const day = i + 1;

      if (!startDate) return "pending";

      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      const dateStr = date.toISOString().split("T")[0];

      const record = records.find((r) => r.date === dateStr);
      if (record) return record.status;

      if (day < currentDay) return "fail";
      return "pending";
    }
  );

  return (
    <JourneyMapView
      currentDay={currentDay}
      successCount={successCount}
      dayStatuses={dayStatuses}
      onBack={() => router.push("/home")}
    />
  );
}
