import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useEmployeeStore } from "@/store/useEmployeeStore";
import { GET_EMPLOYEES } from "@/queries";

function useGetEmployees() {
  const { loading, error, data } = useQuery(GET_EMPLOYEES);
  const { employees, getEmployees, setEmployees } = useEmployeeStore();

  useEffect(() => {
    if (!loading && !error && data && employees.length === 0) {
      setEmployees(data.employees);
    }
  }, [loading, error, data, employees, setEmployees]);

  return { loading, error, data, employees: getEmployees() };
}

export default useGetEmployees;
