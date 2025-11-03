import { useEffect, useState } from "react";
import { getEmployees } from "../api";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function getAllEmployees() {
      const data = await getEmployees();
      setEmployees(data);
    }
    getAllEmployees();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {employees.length > 0 &&
        employees.map((emp) => {
          const { _id, name, imageUrl } = emp;
          return (
            <div
              key={_id}
              className="border border-gray-300 bg-white rounded-xl shadow-md p-4 w-60 text-center hover:shadow-lg transition"
            >
              <img
                src={imageUrl}
                alt={name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-3 border border-gray-200"
              />
              <p className="font-semibold text-lg text-gray-800">{name}</p>
              <div className="flex flex-col gap-2 mt-3">
                <Link
                  to={`/employee/${_id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View
                </Link>
                <Link
                  to={`/edit/${_id}`}
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  Edit
                </Link>
                <Link
                  to={`/delete/${_id}`}
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Delete
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default EmployeeList;
