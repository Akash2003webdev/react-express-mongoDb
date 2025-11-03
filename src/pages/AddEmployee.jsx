import React from "react";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../api";

const AddEmployee = () => {
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
  <div>
  <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input
        required
        placeholder="Enter your name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
    </label>
    <br />

    <label>
      Password:
      <input
        required
        type="password"
        placeholder="Enter your password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
    </label>
    <br />

    <label>
      Image URL:
      <input
        required
        placeholder="Enter image URL"
        name="imageUrl"
        value={form.imageUrl}
        onChange={handleChange}
      />
    </label>
    <br />

    <label>
      Role:
      <input
        required
        placeholder="Enter role"
        name="role"
        value={form.role}
        onChange={handleChange}
      />
    </label>
    <br />

    <button type="submit">Submit</button>
  </form>
</div>

  );
};

export default AddEmployee;
