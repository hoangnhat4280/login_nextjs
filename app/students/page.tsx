import Link from "next/link";
import { getStudents } from "./data";

export default function StudentsList() {
  const students = getStudents();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Student List</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id} className="hover:bg-gray-200">
              <td className="border border-gray-300 p-2">{student.id}</td>
              <td className="border border-gray-300 p-2">{student.name}</td>
              <td className="border border-gray-300 p-2">
                <Link href={`/students/${student.id}`} className="text-blue-600 underline">
                  Show
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
