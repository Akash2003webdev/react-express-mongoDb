import React from "react";
import { Link, Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div>
      <h1>Employee Dashboard</h1>
      <nav>
        <Link to="/">All Employees</Link>
        <Link to="/add">Add Employee</Link>
      </nav>
     <div style={{ display: 'flex' }}>
  <Outlet />
</div>

    </div>
  );
};

export default AppLayout;
