import { useNavigate, useParams } from "react-router-dom";
import { deleteEmployee } from "../api";
import React from "react";
const DeleteEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const confirmDelete = async () => {
      if (window.confirm("Are you sure you want delete")) {
        await deleteEmployee(id);
      }
      navigate("/");
    };
    confirmDelete();
  }, [id, navigate]);
  return <div>deleting employe..💀</div>;
};

export default DeleteEmployee;
