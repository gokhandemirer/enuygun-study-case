import { Employee } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type EmployeeStore = {
  employees: Employee[];
  getEmployees: () => Employee[];
  setEmployees: (employees: Employee[]) => void;
  voteEmployee: (employee: Employee) => void;
};

export const useEmployeeStore = create(
  persist(
    (set, get: () => EmployeeStore) => ({
      employees: [],
      getEmployees: () => get().employees.sort((a, b) => b.vote - a.vote),
      setEmployees: (employees: Employee[]) => {
        const sorted = [...employees].sort(
          (a: Employee, b: Employee) => b.vote - a.vote
        );

        set({ employees: sorted });
      },
      voteEmployee: (employee: Employee) => {
        set({
          employees: get().employees.map((e: Employee) =>
            e.id === employee.id ? { ...e, vote: e.vote + 1 } : e
          ),
        });
      },
    }),
    {
      name: "employee-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
