import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Contact } from "@/types/contact";
import type { DailyRecord } from "@/types/reading";
import { DEFAULT_CONTACTS } from "@/lib/constants";

interface ReadingState {
  contacts: Contact[];
  selectedPartnerId: string | null;
  records: DailyRecord[];
  startDate: string | null;

  setContacts: (contacts: Contact[]) => void;
  updateContact: (id: string, name: string) => void;
  selectPartner: (id: string) => void;
  getSelectedPartner: () => Contact | null;
  addRecord: (record: DailyRecord) => void;
  getTodayRecord: () => DailyRecord | null;
  getCurrentDay: () => number;
  getSuccessCount: () => number;
  startJourney: () => void;
  reset: () => void;
}

export const useReadingStore = create<ReadingState>()(
  persist(
    (set, get) => ({
      contacts: DEFAULT_CONTACTS,
      selectedPartnerId: null,
      records: [],
      startDate: null,

      setContacts: (contacts) => set({ contacts }),

      updateContact: (id, name) =>
        set((state) => ({
          contacts: state.contacts.map((c) =>
            c.id === id ? { ...c, name } : c
          ),
        })),

      selectPartner: (id) => set({ selectedPartnerId: id }),

      getSelectedPartner: () => {
        const { contacts, selectedPartnerId } = get();
        return contacts.find((c) => c.id === selectedPartnerId) ?? null;
      },

      addRecord: (record) =>
        set((state) => {
          const filtered = state.records.filter(
            (r) => r.date !== record.date
          );
          return { records: [...filtered, record] };
        }),

      getTodayRecord: () => {
        const today = new Date().toISOString().split("T")[0];
        return get().records.find((r) => r.date === today) ?? null;
      },

      getCurrentDay: () => {
        const { startDate } = get();
        if (!startDate) return 1;
        const start = new Date(startDate);
        const now = new Date();
        const diff = Math.floor(
          (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
        );
        return Math.min(diff + 1, 30);
      },

      getSuccessCount: () =>
        get().records.filter((r) => r.status === "success").length,

      startJourney: () =>
        set({ startDate: new Date().toISOString().split("T")[0] }),

      reset: () =>
        set({
          contacts: DEFAULT_CONTACTS,
          selectedPartnerId: null,
          records: [],
          startDate: null,
        }),
    }),
    { name: "reading-store" }
  )
);
