import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formValidationSchema } from "../schemas/formSchema";
import AppButton from "../components/AppButton";

interface StoredData {
  name: string;
  email: string;
  password: string;
}

const FormFormikTagApp = () => {
  const [savedDataList, setSavedDataList] = useState<StoredData[]>([]);

  
  useEffect(() => {
    const existingData = localStorage.getItem("formikTagUsers");
    if (existingData) {
      setSavedDataList(JSON.parse(existingData));
    }
  }, []);

  const initialValues: StoredData = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values: StoredData, { resetForm }: { resetForm: () => void }) => {
    const updatedList = [...savedDataList, values];
    setSavedDataList(updatedList);
    localStorage.setItem("formikTagUsers", JSON.stringify(updatedList));

    toast.success("data save successfully!", {
      position: "top-right",
      autoClose: 3000,
    });

    resetForm();
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column pb-5">
      <ToastContainer theme="dark" />

      <div className="card bg-dark text-white p-4 shadow mb-4" style={{ width: "450px", borderRadius: "15px" }}>
        <h3 className="text-center mb-4">Form Using Formik Tag & Yup</h3>

        <Formik
          initialValues={initialValues}
          validationSchema={formValidationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <Field
                  type="text"
                  name="name"
                  className="form-control bg-secondary text-white border-0"
                  placeholder="Enter your name"
                />
                <ErrorMessage name="name" component="div" className="text-danger small mt-1" />
              </div>

              
              <div className="mb-3">
                <label className="form-label">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="form-control bg-secondary text-white border-0"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="div" className="text-danger small mt-1" />
              </div>

              
              <div className="mb-3">
                <label className="form-label">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="form-control bg-secondary text-white border-0"
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" component="div" className="text-danger small mt-1" />
              </div>

              {/* Reusable AppButton */}
              <AppButton type="submit" className="w-100 btn-success mt-2">
                Submit & Save
              </AppButton>
            </Form>
          )}
        </Formik>
      </div>

      
      {savedDataList.length > 0 && (
        <div className="card bg-secondary text-white p-4 shadow" style={{ width: "450px", borderRadius: "15px" }}>
          <h5 className="mb-3">Saved Submissions (Formik Tag):</h5>
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

export default FormFormikTagApp;