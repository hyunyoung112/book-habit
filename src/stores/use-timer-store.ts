import { create } from "zustand";
import { TIMER_DURATION_SECONDS } from "@/lib/constants";

interface TimerState {
  elapsed: number;
  isRunning: boolean;
  isPaused: boolean;
  isCompleted: boolean;

  start: () => void;
  pause: () => void;
  resume: () => void;
  tick: () => void;
  reset: () => void;
  getRemainingSeconds: () => number;
  getProgress: () => number;
}

export const useTimerStore = create<TimerState>()((set, get) => ({
  elapsed: 0,
  isRunning: false,
  isPaused: false,
  isCompleted: false,

  start: () => set({ isRunning: true, isPaused: false, elapsed: 0, isCompleted: false }),

  pause: () => set({ isPaused: true, isRunning: false }),

  resume: () => set({ isPaused: false, isRunning: true }),

  tick: () => {
    const { elapsed } = get();
    const next = elapsed + 1;
    if (next >= TIMER_DURATION_SECONDS) {
      set({ elapsed: TIMER_DURATION_SECONDS, isRunning: false, isCompleted: true });
    } else {
      set({ elapsed: next });
    }
  },

  reset: () =>
    set({ elapsed: 0, isRunning: false, isPaused: false, isCompleted: false }),

  getRemainingSeconds: () => TIMER_DURATION_SECONDS - get().elapsed,

  getProgress: () => (get().elapsed / TIMER_DURATION_SECONDS) * 100,
}));
