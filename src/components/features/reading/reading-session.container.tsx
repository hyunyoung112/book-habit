"use client";

import { useEffect } from "react";
import { useUIStore, useTimerStore } from "@/stores";
import { ReadingSessionView } from "./reading-session";
import { ReadingPrepContainer } from "./reading-prep.container";
import { TimerContainer } from "./timer.container";
import { ReadingLogContainer } from "./reading-log.container";
import { CompletionContainer } from "./completion.container";

export function ReadingSessionContainer() {
  const step = useUIStore((s) => s.readingStep);
  const resetReading = useUIStore((s) => s.resetReading);
  const resetTimer = useTimerStore((s) => s.reset);

  useEffect(() => {
    return () => {
      resetReading();
      resetTimer();
    };
  }, [resetReading, resetTimer]);

  return (
    <ReadingSessionView step={step}>
      {{
        prep: <ReadingPrepContainer />,
        timer: <TimerContainer />,
        log: <ReadingLogContainer />,
        completion: <CompletionContainer />,
      }}
    </ReadingSessionView>
  );
}
