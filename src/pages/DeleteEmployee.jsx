import { useNavigate, useParams } from "react-router-dom";
import { deleteEmployee } from "../api";
import React from "react";

const DeleteEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const confirmDelete = async () => {
      if (window.confirm("Are you sure you want to delete this employee?")) {
        await deleteEmployee(id);
      }
      navigate("/");
    };
    confirmDelete();
  }, [id, navigate]);

  return (
    <div className=" flex items-center justify-center bg-gray-50">
      <div className=" shadow-md rounded-2xl p-8 text-center">
        <p className="text-lg font-medium text-gray-800 mb-2">
          Deleting employee...
        </p>
        <p className="text-3xl animate-pulse">💀</p>
      </div>
    </div>
  );
};

export default DeleteEmployee;
