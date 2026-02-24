import { create } from "zustand";
import type { OnboardingStep, ReadingSessionStep } from "@/types/reading";

interface UIState {
  onboardingStep: OnboardingStep;
  readingStep: ReadingSessionStep;

  setOnboardingStep: (step: OnboardingStep) => void;
  setReadingStep: (step: ReadingSessionStep) => void;
  resetOnboarding: () => void;
  resetReading: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  onboardingStep: "declaration",
  readingStep: "prep",

  setOnboardingStep: (step) => set({ onboardingStep: step }),
  setReadingStep: (step) => set({ readingStep: step }),
  resetOnboarding: () => set({ onboardingStep: "declaration" }),
  resetReading: () => set({ readingStep: "prep" }),
}));
