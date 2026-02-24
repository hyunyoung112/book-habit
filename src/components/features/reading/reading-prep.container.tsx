"use client";

import { useUIStore, useTimerStore } from "@/stores";
import { ReadingPrepView } from "./reading-prep";

export function ReadingPrepContainer() {
  const setReadingStep = useUIStore((s) => s.setReadingStep);
  const startTimer = useTimerStore((s) => s.start);

  const handleReady = () => {
    startTimer();
    setReadingStep("timer");
  };

  return <ReadingPrepView onReady={handleReady} />;
}
