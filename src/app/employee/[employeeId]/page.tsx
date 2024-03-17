"use client";
import { notFound } from "next/navigation";
import { Flex } from "@/components/Layout/Flex";
import Header from "@/components/Layout/Header";
import Padding from "@/components/Layout/Padding";
import Loader from "@/components/UI/Loader";
import EmployeeCard from "@/feature/Employee/EmployeeCard";
import useGetSelectedEmployee from "@/hooks/useGetSelectedEmployee";

type EmployeeDetailParams = {
  employeeId: string;
};

export default function EmployeeDetail({
  params,
}: {
  params: EmployeeDetailParams;
}) {
  const { selectedEmployee, employeeNotFound } = useGetSelectedEmployee(params);

  if (employeeNotFound) {
    return notFound();
  }

  if (!selectedEmployee) {
    return <Loader />;
  }

  return (
    <>
      <Header title="Employee Detail" />
      <Padding value={16} />
      <main>
        <Flex justify="center">
          <Flex width="50%">
            <EmployeeCard employee={selectedEmployee} />
          </Flex>
        </Flex>
      </main>
    </>
  );
}
