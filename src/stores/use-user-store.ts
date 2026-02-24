import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserProfile } from "@/types/user";

interface UserState extends UserProfile {
  setName: (name: string) => void;
  completeOnboarding: () => void;
  reset: () => void;
}

const initialState: UserProfile = {
  name: "",
  isOnboarded: false,
  declarationDate: null,
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      ...initialState,
      setName: (name) => set({ name }),
      completeOnboarding: () =>
        set({
          isOnboarded: true,
          declarationDate: new Date().toISOString(),
        }),
      reset: () => set(initialState),
    }),
    { name: "user-store" }
  )
);
