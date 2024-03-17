import Padding from "@/components/Layout/Padding";
import { Card, CardContent, CardHeader } from "@/components/UI/Card";
import Image from "next/image";
import { Employee } from "@/types";
import { useRouter } from "next/navigation";
import BackButton from "@/components/UI/Buttons/BackButton";

type EmployeeCardProps = {
  employee: Employee;
};

function InfoLine({ title, value }: { title: string; value: string }) {
  return (
    <p>
      <strong>{title}:</strong> {value}
    </p>
  );
}

export default function EmployeeCard({ employee }: EmployeeCardProps) {
  const router = useRouter();

  return (
    <>
      <Card>
        <CardHeader>
          <BackButton onClick={() => router.back()} title="Back to list" />
          <Padding value={8} />
          <span>{`${employee.firstName} ${employee.lastName}`}</span>
        </CardHeader>
        <CardContent>
          <Image
            src={employee.image || "https://via.placeholder.com/100"}
            alt={`${employee.firstName} ${employee.lastName}`}
            width={100}
            height={100}
          />
          <Padding value={8} />
          <InfoLine title="First Name" value={employee.firstName} />
          <InfoLine title="Last Name" value={employee.lastName} />
          <InfoLine title="E-mail" value={employee.email} />
          <InfoLine title="Phone" value={employee.phone} />
          <InfoLine title="Address" value={employee.address} />
          <InfoLine title="Job Title" value={employee.jobTitle} />
          <InfoLine title="Vote" value={employee.vote.toString()} />
        </CardContent>
      </Card>
    </>
  );
}
