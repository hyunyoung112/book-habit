export type DayStatus = "success" | "fail" | "pending";

export interface DailyRecord {
  date: string;
  bookTitle: string;
  lastPage: number;
  durationSeconds: number;
  status: DayStatus;
}

export type ReadingSessionStep = "prep" | "timer" | "log" | "completion";

export type OnboardingStep = "declaration" | "partner" | "failure-preview";
