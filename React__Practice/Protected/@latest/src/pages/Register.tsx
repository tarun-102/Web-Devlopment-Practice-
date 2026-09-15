import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { registerSchema } from "../schema";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";
interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

function Register() {
  const navigate = useNavigate();

   const { register } = useAuth();

  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: registerSchema,

    onSubmit: (values) => {
      console.log("Register Data:", values);

      register(values)
      navigate("/login", { replace: true });
      toast.success("user register successfully")
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="text-center mb-3">
          <h1>Sign up</h1>
        </div>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="registerName" className="form-label">
            Name
          </label>

          <input
            type="text"
            id="registerName"
            name="name"
             className={`form-control rounded-3 ${formik.touched.name &&formik.errors.name ? "is-invalid" : ""}`}
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.name && formik.errors.name && (
            <div className="text-danger mt-1">
              {formik.errors.name}
            </div>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="registerEmail" className="form-label">
            Email
          </label>

          <input
            type="email"
            id="registerEmail"
            name="email"
             className={`form-control rounded-3 ${formik.touched.email &&formik.errors.email ? "is-invalid" : ""}`}
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.email && formik.errors.email && (
            <div className="text-danger mt-1">
              {formik.errors.email}
            </div>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="registerPassword" className="form-label">
            Password
          </label>

          <input
            type="password"
            id="registerPassword"
            name="password"
             className={`form-control rounded-3 ${formik.touched.password &&formik.errors.password ? "is-invalid" : ""}`}
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.password && formik.errors.password && (
            <div className="text-danger mt-1">
              {formik.errors.password}
            </div>
          )}
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="btn btn-primary w-100 mb-3"
        >
          Sign up
        </button>

        {/* Login */}
        <div className="text-center">
          <p>
            Already have an Account?{" "}

            <button
              type="button"
              className="btn btn-link p-0"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;