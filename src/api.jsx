const API_URL = "https://express-mongo-db.onrender.com/api/employees";

export const getEmployees = async (query = "") => {
  console.log(`${API_URL}${query ? `?${query}` : ""}`);
  const res = await fetch(`${API_URL}${query ? `?${query}` : ""}`);
  const data = await res.json();
  // console.log(data);
  return data;
};

export const getEmployeeById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  const data = await res.json();
  // console.log(data);
  return data;
};

export const updateEmployee = async (id, data) => {
  const res = await fetch(
    `${API_URL}/${id}`,

    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  return res.json();
};

export const deleteEmployee = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  const data = res.json();
  return data;
};

export const addEmployee = async (data) => {
  const res = await fetch(`${API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// post api/employees add employee
//  get api/employees all emplpyee get (limit, name, role)
// get api/employees/:id single object
// delete api/employees/:id delete object
