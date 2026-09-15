import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formValidationSchema } from "../schemas/formSchema";
import AppButton from "../components/AppButton";

interface StoredData {
  name: string;
  email: string;
  password: string;
}

const FormFormikApp = () => {
  const [savedDataList, setSavedDataList] = useState<StoredData[]>([]);

  
  useEffect(() => {
    const existingData = localStorage.getItem("formikUsers");
    if (existingData) {
      setSavedDataList(JSON.parse(existingData));
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values, { resetForm }) => {
      const updatedList = [...savedDataList, values];
      setSavedDataList(updatedList);
      localStorage.setItem("formikUsers", JSON.stringify(updatedList));

    
      toast.success("Form submitted & saved to LocalStorage!", {
        position: "top-right",
        autoClose: 3000,
      });

      resetForm();
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center flex-column pb-5">
      
      <ToastContainer theme="dark" />

      <div className="card bg-dark text-white p-4 shadow mb-4" style={{ width: "450px", borderRadius: "15px" }}>
        <h3 className="text-center mb-4">Form Using Formik & Yup</h3>

        <form onSubmit={formik.handleSubmit}>
          {/* Name Field */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control bg-secondary text-white border-0"
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-danger small mt-1">{formik.errors.name}</div>
            ) : null}
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control bg-secondary text-white border-0"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger small mt-1">{formik.errors.email}</div>
            ) : null}
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control bg-secondary text-white border-0"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger small mt-1">{formik.errors.password}</div>
            ) : null}
          </div>

          <AppButton type="submit" className="w-100 btn-success mt-2">
            Submit & Save
          </AppButton>
        </form>
      </div>

      
      {savedDataList.length > 0 && (
        <div className="card bg-secondary text-white p-4 shadow" style={{ width: "450px", borderRadius: "15px" }}>
          <h5 className="mb-3">Saved Submissions (LocalStorage):</h5>
          {savedDataList.map((item, index) => (
            <div key={index} className="bg-dark p-2 rounded mb-2 border border-secondary">
              <p className="mb-1"><strong>Name:</strong> {item.name}</p>
              <p className="mb-1"><strong>Email:</strong> {item.email}</p>
              <p className="mb-0"><strong>Password:</strong> {item.password}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormFormikApp;