import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useAuth from "../hooks/useAuth";

import type { LoginForm } from "../types/auth";

function Login() {
  const navigate = useNavigate();

  const { dispatch } = useAuth();

  const [formData, setFormData] =
    useState<LoginForm>({
      email: "",
      password: "",
    });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields");
      return;
    }

    dispatch({
      type: "LOGIN",
      payload: {
        id: 1,
        name: "Developer",
        email: formData.email,
        role: "user",
      },
    });

    toast.success("Login successful!");

    navigate("/");
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div
        className="card border-0 shadow-sm"
        style={{ width: "400px" }}
      >
        <div className="card-body p-4">

          <div className="text-center mb-4">
            <h2 className="fw-bold">
              Welcome Back
            </h2>

            <p className="text-secondary">
              Login to your DevFlow account
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label
                htmlFor="password"
                className="form-label"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Login
            </button>

          </form>

          <p className="text-center text-secondary mt-3 mb-0">
            Don't have an account?{" "}
            <button
              type="button"
              className="btn btn-link p-0"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;