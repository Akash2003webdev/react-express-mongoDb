import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../api";

const EditEmployee = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: "",
    password: "",
    imageUrl: "",
    role: "",
  });

  console.log(form);
  useEffect(() => {
    async function getEmployee() {
      const data = await getEmployeeById(id);
      setForm(data);
    }
    getEmployee();
  }, []);

  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2>Edit Employee</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateEmployee(id, form);
        }}
      >
        <input name="name" value={form.name} onChange={handleChange} />
        <input name="password" value={form.password} onChange={handleChange} />
        <input name="imageUrl" value={form.imageUrl} onChange={handleChange} />
        <input name="role" value={form.role} onChange={handleChange} />
        <button>submit</button>
      </form>
    </div>
  );
};

export default EditEmployee;
