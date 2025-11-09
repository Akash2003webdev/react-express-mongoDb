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
    <div className="flex justify-center   bg-transparent">
      <div className="bg-white/50 backdrop-blur-md shadow-xl rounded-2xl p-10 w-full max-w-lg text-center border border-white/40">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Name: <span className="text-blue-600">{employee.name}</span>
        </h2>
        <p className="text-xl text-gray-700 mb-2">
          Role: <span className="font-medium">{employee.role}</span>
        </p>

        {employee.imageUrl && (
          <div className="flex justify-center mt-6">
            <img
              src={employee.imageUrl}
              alt={employee.name}
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-400 shadow-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeDetails;
