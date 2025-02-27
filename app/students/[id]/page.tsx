import { getStudentById } from "../data";

export default function StudentDetail({ params }: { params: { id: string } }) {
  const student = getStudentById(Number(params.id));

  if (!student) {
    return <h2 className="text-red-500">Student Not Found</h2>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold">Student Information</h2>
      <p className="mt-2 text-lg">Student ID: {student.id}</p>
      <p className="text-lg">Name: {student.name}</p>
    </div>
  );
}
