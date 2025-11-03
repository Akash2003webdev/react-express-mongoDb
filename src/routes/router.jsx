import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../AppLayout";
import EmployeeList from "../pages/EmployeeList";
import AddEmployee from "../pages/AddEmployee";
import EmployeeDetails from "../pages/EmployeeDetails";
import EditEmployee from "../pages/EditEmployee";
import DeleteEmployee from "../pages/DeleteEmployee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <EmployeeList />,
      },
      {
        path: "add",
        element: <AddEmployee />,
      },
      {
        path: "employee/:id",
        element: <EmployeeDetails />,
      },
      {
        path: "edit/:id",
        element: <EditEmployee />,
      },
      {
        path: "delete/:id",
        element: <DeleteEmployee />,
      },
    ],
    
  },
]);

export default router;
