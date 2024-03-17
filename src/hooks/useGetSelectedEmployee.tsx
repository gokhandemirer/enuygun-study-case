import { useEffect, useState } from "react";
import { useEmployeeStore } from "@/store/useEmployeeStore";
import { Employee } from "@/types";

function useGetSelectedEmployee(params: { employeeId: string }) {
  const { employees } = useEmployeeStore();
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [employeeNotFound, setEmployeeNotFound] = useState(false);

  useEffect(() => {
    const { employeeId } = params;

    const employee = employees.find(
      (e: Employee) => e.id === decodeURIComponent(employeeId)
    );

    if (employee) {
      setSelectedEmployee(employee);
    } else {
      setEmployeeNotFound(true);
    }
  }, [params, employees]);

  return { selectedEmployee, employeeNotFound };
}

export default useGetSelectedEmployee;
