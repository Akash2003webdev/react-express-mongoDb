import { useParams } from "react-router-dom";
import { getEmployeeById } from "../api";
import { useEffect, useState } from "react";

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getEmployee() {
      const data = await getEmployeeById(id);
      setEmployee(data);
    }
    getEmployee();
  }, [id]);

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Name: <span className="text-blue-600">{employee.name}</span>
        </h2>
        <p className="text-lg text-gray-700">
          Role: <span className="font-medium">{employee.role}</span>
        </p>

        {employee.imageUrl && (
          <img
            src={employee.imageUrl}
            alt={employee.name}
            className="w-32 h-32 rounded-full mx-auto mt-4 object-cover border border-gray-200"
          />
        )}
      </div>
    </div>
  );
};

export default EmployeeDetails;
