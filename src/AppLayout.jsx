import React from "react";
import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold text-center py-6 bg-blue-600 text-white shadow-md">
        Employee Dashboard
      </h1>

      <nav className="flex justify-center gap-6 bg-white py-4 shadow-sm">
        <Link
          to="/"
          className="text-blue-600 font-medium hover:text-blue-800 transition"
        >
          All Employees
        </Link>
        <Link
          to="/add"
          className="text-blue-600 font-medium hover:text-blue-800 transition"
        >
          Add Employee
        </Link>
      </nav>

      <div className="flex justify-center p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
