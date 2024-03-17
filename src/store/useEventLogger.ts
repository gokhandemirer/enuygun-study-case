import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { UserEvent } from "@/types";

type EventLoggerStore = {
  events: UserEvent[];
  logEvent: (event: UserEvent) => void;
};

export const useEventLogger = create(
  persist(
    (set, get: () => EventLoggerStore) => ({
      events: [],
      logEvent: (event: UserEvent) => {
        set({ events: [...get().events, event] });
      },
    }),
    {
      name: "event-logger",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
