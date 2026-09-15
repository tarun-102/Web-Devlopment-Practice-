import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../schema";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";
interface LoginFormValues {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "", 
      password: "",
    },

    validationSchema: loginSchema,

    onSubmit: (values) => {
      const success = login(values);

      if (success) {
        navigate("/", { replace: true });
        toast.success("login successfully")
      }
      
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="text-center mb-3">
          <h1>Login</h1>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="loginEmail" className="form-label">
            Email
          </label>

          <input
            type="email"
            id="loginEmail"
            name="email"
            className={`form-control rounded-3 ${formik.touched.email &&formik.errors.email ? "is-invalid" : ""}`}
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.email && formik.errors.email && (
            <div className="text-danger mt-1">{formik.errors.email}</div>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="loginPassword" className="form-label">
            Password
          </label>

          <input
            type="password"
            id="loginPassword"
            name="password"
             className={`form-control rounded-3 ${formik.touched.password &&formik.errors.password ? "is-invalid" : ""}`}
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.password && formik.errors.password && (
            <div className="text-danger mt-1">{formik.errors.password}</div>
          )}
        </div>

        {/* Remember Me */}
        <div className="row mb-4">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="loginCheck"
                defaultChecked
              />

              <label className="form-check-label" htmlFor="loginCheck">
                Remember me
              </label>
            </div>
          </div>
        </div>

        {/* Login Button */}
        <button type="submit" className="btn btn-primary w-100 mb-4">
          Sign in
        </button>

        {/* Register */}
        <div className="text-center">
          <p>
            Not a member?{" "}
            <button
              type="button"
              className="btn btn-link p-0"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
