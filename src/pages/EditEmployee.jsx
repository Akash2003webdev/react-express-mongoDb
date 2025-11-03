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

  useEffect(() => {
    async function getEmployee() {
      const data = await getEmployeeById(id);
      setForm(data);
    }
    getEmployee();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEmployee(id, form);
  };

  return (
    <div className="min-h-screen flex  justify-center bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-md rounded-2xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-800">Edit Employee</h2>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Name</span>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Image URL</span>
          <input
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Role</span>
          <input
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Enter role"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </label>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full inline-flex justify-center items-center rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
