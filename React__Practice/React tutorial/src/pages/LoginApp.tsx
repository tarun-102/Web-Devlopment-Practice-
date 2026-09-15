import { useState } from "react";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppButton from "../components/AppButton";
import { loginSchema, registerSchema } from "../schemas/authSchema";

interface UserProfile {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  token: string;
}

const LoginApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem("apiUser");
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "Emily",
      lastName: "Johnson",
      email: "emilys@gmail.com",
      username: "emilys",
      password: "emilyspass",
    },
    validationSchema: isRegister ? registerSchema : loginSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        if (isRegister) {
          const response = await fetch("https://dummyjson.com/users/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: values.username,
              password: values.password,
              email: values.email,
              firstName: values.firstName,
              lastName: values.lastName,
            }),
          });

          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.message || "Registration failed");
          }

          toast.success("Registration successful! Please login.");
          setIsRegister(false);
        } else {
          const response = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: values.username,
              password: values.password,
              expiresInMins: 30,
            }),
          });

          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.message || "Login failed");
          }

          setUser(data);
          localStorage.setItem("apiUser", JSON.stringify(data));
          toast.success("Login successful!");
          resetForm();
        }
      } catch (err: any) {
        toast.error(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    },
  });

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("apiUser");
    toast.info("Logged out successfully!");
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column pb-5 mt-5">
      <ToastContainer theme="dark" />

      {!user ? (
        <div className="card bg-dark text-white p-4 shadow" style={{ width: "420px", borderRadius: "15px" }}>
          <h3 className="text-center mb-4">{isRegister ? "Register" : "Login"}</h3>

          <form onSubmit={formik.handleSubmit}>
            {isRegister && (
              <>
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control bg-secondary text-white border-0"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-danger small mt-1">{formik.errors.firstName}</div>
                  ) : null}
                </div>

                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control bg-secondary text-white border-0"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-danger small mt-1">{formik.errors.lastName}</div>
                  ) : null}
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control bg-secondary text-white border-0"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger small mt-1">{formik.errors.email}</div>
                  ) : null}
                </div>
              </>
            )}

            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                className="form-control bg-secondary text-white border-0"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-danger small mt-1">{formik.errors.username}</div>
              ) : null}
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control bg-secondary text-white border-0"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger small mt-1">{formik.errors.password}</div>
              ) : null}
            </div>

            <AppButton type="submit" className="w-100 btn-success mt-2 mb-3" disabled={loading}>
              {loading ? "Please wait..." : isRegister ? "Register" : "Login"}
            </AppButton>

            <div className="text-center">
              <button
                type="button"
                className="btn btn-link text-info text-decoration-none p-0"
                onClick={() => {
                  setIsRegister(!isRegister);
                  formik.resetForm();
                }}
              >
                {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="card bg-dark text-white p-4 shadow" style={{ width: "450px", borderRadius: "15px" }}>
          <h3 className="text-center mb-4 text-success">User Dashboard</h3>
          <div className="mb-4 bg-secondary p-3 rounded">
            <h5 className="mb-3">Welcome, {user.firstName} {user.lastName}!</h5>
            <p className="mb-1"><strong>Username:</strong> {user.username}</p>
            <p className="mb-0"><strong>Email:</strong> {user.email}</p>
          </div>
          <AppButton className="w-100 btn-danger" onClick={handleLogout}>
            Logout
          </AppButton>
        </div>
      )}
    </div>
  );
};

export default LoginApp;