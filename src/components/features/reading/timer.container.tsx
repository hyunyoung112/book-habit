"use client";

import { useEffect, useState } from "react";
import { useTimerStore, useUIStore } from "@/stores";
import { useTimer } from "@/hooks/use-timer";
import { ENCOURAGEMENT_MESSAGES } from "@/lib/constants";
import { TimerView } from "./timer";

export function TimerContainer() {
  useTimer();

  const remainingSeconds = useTimerStore((s) => s.getRemainingSeconds());
  const progress = useTimerStore((s) => s.getProgress());
  const isPaused = useTimerStore((s) => s.isPaused);
  const isCompleted = useTimerStore((s) => s.isCompleted);
  const pause = useTimerStore((s) => s.pause);
  const resume = useTimerStore((s) => s.resume);
  const setReadingStep = useUIStore((s) => s.setReadingStep);

  const [encouragement] = useState(
    () =>
      ENCOURAGEMENT_MESSAGES[
        Math.floor(Math.random() * ENCOURAGEMENT_MESSAGES.length)
      ]
  );

  useEffect(() => {
    if (isCompleted) {
      setReadingStep("log");
    }
  }, [isCompleted, setReadingStep]);

  return (
    <TimerView
      remainingSeconds={remainingSeconds}
      progress={progress}
      isPaused={isPaused}
      encouragement={encouragement}
      onPause={pause}
      onResume={resume}
    />
  );
}
