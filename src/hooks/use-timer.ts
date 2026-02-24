"use client";

import { useEffect, useRef } from "react";
import { useTimerStore } from "@/stores";

export function useTimer() {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { isRunning, tick } = useTimerStore();

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        tick();
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, tick]);
}
