import { useEffect, useState } from "react";
import { getEmployees } from "../api";
import { Link } from "react-router-dom";
// import { getEmployeeById } from "../api";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function getAllEmployees() {
      const data = await getEmployees();
      // console.log(data);
      setEmployees(data);
    }
    getAllEmployees();
  }, []);
  return (
    <div style={{ display: 'flex' }}>
      {employees.length > 0 &&
        employees.map((emp) => {
          const { _id, name, imageUrl } = emp;
          return (
            <div style={{ border: "1px solid red", padding: "1em" }} key={_id}>
              <img src={imageUrl} width="100px" alt="" />
              <p>{name}</p>
              <br />
              <Link to={`/employee/${_id}`}>view</Link>
              <br />
              <Link to={`/edit/${_id}`}>edit</Link>
              {/* <button onClick={() => getEmployeeById(_id)}>click</button> */}
              <br />
              <Link to={`/delete/${_id}`}>delete</Link>
              <br />
             
            </div>
          );
        })}
    </div>
  );
};

export default EmployeeList;
