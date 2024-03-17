import Table from "@/components/Table";
import { createColumnHelper, type ColumnDef } from "@tanstack/react-table";
import { Employee } from "@/types";
import Image from "next/image";
import StyledButton from "@/components/UI/Buttons/StyledButton";

const columnHelper = createColumnHelper<Employee>();

interface EmployeeListProps {
  data: Employee[];
  onClickRow: (id: string) => void;
  onClickVote: (employee: Employee) => void;
}

export default function EmployeeList({
  data,
  onClickRow,
  onClickVote,
}: EmployeeListProps) {
  const columns: ColumnDef<Employee, any>[] = [
    columnHelper.accessor("image", {
      header: "Image",
      cell: (props) => (
        <Image
          src={props.getValue()}
          alt="employee image"
          width={120}
          height={120}
          objectFit="contain"
          layout="fixed"
        />
      ),
    }),
    columnHelper.accessor("firstName", {
      header: "First Name",
    }),
    columnHelper.accessor("lastName", {
      header: "Last Name",
    }),
    columnHelper.accessor("jobTitle", {
      header: "Job Title",
    }),
    columnHelper.accessor("vote", {
      header: "Vote",
    }),
    columnHelper.display({
      header: "Actions",
      cell: (props) => (
        <StyledButton
          onClick={(e) => {
            e.stopPropagation();
            onClickVote(props.row.original);
          }}
        >
          Vote
        </StyledButton>
      ),
    }),
  ];

  return <Table data={data} columns={columns} onClickRow={onClickRow} />;
}
