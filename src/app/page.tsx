"use client";
import Header from "@/components/Layout/Header";
import Padding from "@/components/Layout/Padding";
import EmployeeList from "@/feature/Employee/EmployeeList";
import { useRouter } from "next/navigation";
import useGetEmployees from "@/hooks/useGetEmployees";
import { useEmployeeStore } from "@/store/useEmployeeStore";
import { useEventLogger } from "@/store/useEventLogger";
import { Employee } from "@/types";
import Loader from "@/components/UI/Loader";
import toast from "react-hot-toast";
import { createUserEvent } from "@/helpers";

export default function Home() {
  const router = useRouter();
  const { voteEmployee } = useEmployeeStore();
  const { logEvent } = useEventLogger();

  const handleRowClick = (id: string) => {
    logEvent(createUserEvent("Employee row clicked", id));
    router.push(`/employee/${id}`);
  };

  const handleVoteClick = (employee: Employee) => {
    voteEmployee(employee);
    logEvent(createUserEvent("Employee voted", employee.id));
    toast.success(`You voted for ${employee.firstName} ${employee.lastName}`);
  };

  const { loading, error, employees } = useGetEmployees();

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Header title="Employee of the month" />
      <Padding value={16} />
      <main className="w-8/12 mx-auto">
        <EmployeeList
          data={employees}
          onClickRow={handleRowClick}
          onClickVote={handleVoteClick}
        />
      </main>
    </>
  );
}
