import React from "react";
import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 text-gray-900">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center py-6 text-white drop-shadow-lg">
        Employee Dashboard
      </h1>

      {/* Navigation Bar */}
      <nav className="flex justify-center gap-6 bg-white/20 backdrop-blur-md py-4 rounded-xl mx-8 shadow-lg">
        <Link
          to="/"
          className="text-2xl text-white font-semibold hover:text-yellow-300 transition duration-300"
        >
          All Employees
        </Link>
        <Link
          to="/add"
          className="text-2xl text-white font-semibold hover:text-yellow-300 transition duration-300"
        >
          Add Employee
        </Link>
      </nav>

      {/* Page Content */}
      <div className="flex justify-center p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
