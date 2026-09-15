import { useState, type ChangeEvent } from "react";
import AppButton from "../components/AppButton";

interface FormData {
  id: number;
  name: string;
  email: string;
  password: string;
}

const FormReactApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submittedList, setSubmittedList] = useState<FormData[]>(() => {
    const saved = localStorage.getItem("reactFormList");
    return saved ? JSON.parse(saved) : [];
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newItem: FormData = {
      id: Date.now(),
      ...formData,
    };
    const updatedList = [newItem, ...submittedList];
    setSubmittedList(updatedList);
    localStorage.setItem("reactFormList", JSON.stringify(updatedList));
    setFormData({ name: "", email: "", password: "" });
  };

  const handleDelete = (id: number) => {
    const filteredList = submittedList.filter((item) => item.id !== id);
    setSubmittedList(filteredList);
    localStorage.setItem("reactFormList", JSON.stringify(filteredList));
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column pb-5">
      <div className="card bg-dark text-white p-4 shadow mb-4" style={{ width: "400px", borderRadius: "15px" }}>
        <h3 className="text-center mb-4">Form Using React</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control bg-secondary text-white border-0"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control bg-secondary text-white border-0"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control bg-secondary text-white border-0"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <AppButton type="submit" className="w-100 btn-success mt-2">
            Submit Form
          </AppButton>
        </form>
      </div>

      <div style={{ width: "400px" }}>
        {submittedList.map((item) => (
          <div key={item.id} className="card bg-secondary text-white p-3 mb-3 shadow" style={{ borderRadius: "15px" }}>
            <h5>Submitted Details:</h5>
            <p className="mb-1"><strong>Name:</strong> {item.name}</p>
            <p className="mb-1"><strong>Email:</strong> {item.email}</p>
            <p className="mb-2"><strong>Password:</strong> {item.password}</p>
            <AppButton className="btn-danger btn-sm w-100" onClick={() => handleDelete(item.id)}>
              Delete
            </AppButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormReactApp;