import React from "react";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../api";

export default function AddEmployee() {
  const [form, setForm] = React.useState({
    name: "",
    password: "",
    imageUrl: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEmployee(form);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center  bg-gray-50 p-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-10 "
      >
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Add Employee
        </h2>

        <label className="block">
          <span className="text-base font-medium text-gray-700">Name</span>
          <input
            required
            placeholder="Enter your name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </label>

        <label className="block">
          <span className="text-base font-medium text-gray-700">Password</span>
          <input
            required
            type="password"
            placeholder="Enter your password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </label>

        <label className="block">
          <span className="text-base font-medium text-gray-700">Image URL</span>
          <input
            required
            placeholder="Enter image URL"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </label>

        <label className="block">
          <span className="text-base font-medium text-gray-700">Role</span>
          <input
            required
            placeholder="Enter role"
            name="role"
            value={form.role}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </label>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full inline-flex justify-center items-center rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
