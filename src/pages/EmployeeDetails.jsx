import { useParams } from "react-router-dom";
import { getEmployeeById } from "../api";
import { useEffect, useState } from "react";

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    async function getEmployee() {
      const data = await getEmployeeById(id);
      setEmployee(data);
    }
    getEmployee();
  }, []);

  return (
    <div>
      <h2>name- {employee.name}</h2>
      <p>role - {employee.role}</p>
    </div>
  );
};

export default EmployeeDetails;
