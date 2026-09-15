import React, { useEffect } from "react";
import "../App.css";
import Button from "./Button";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { RegisterUserSchema } from "../schemas";
import useUser from "../hooks/useUser";

function Form() {
  const { saveUser, updateUser, editUser, setShowForm, setEditUser } =
    useUser();

  const initialValues = {
    fullName: "",
    userName: "",
    email: "",
    gender: "",
    date: "",
    country: "",
    city: "",
    condition: false,
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: RegisterUserSchema,
    onSubmit: (values) => {
      if (editUser) {
        updateUser({
          id: editUser.id,
          FullName: values.fullName,
          username: values.userName,
          email: values.email,
          gender: values.gender,
          date: values.date,
          city: values.city,
          country: values.country,
          condition: values.condition,
        });

        toast.success("User updated successfully!", {
          position: "top-right",
          autoClose: 10000,
        });

        setEditUser(null);
      } else {
        saveUser({
          FullName: values.fullName,
          username: values.userName,
          email: values.email,
          gender: values.gender,
          date: values.date,
          city: values.city,
          country: values.country,
          condition: values.condition,
        });

        toast.success("User added successfully!", {
          position: "top-right",
          autoClose: 120000,
        });
      }

      resetForm();
      setShowForm();
    },
  });

  const cityData = {
    India: ["Ahmedabad", "Mumbai", "Delhi", "Bengaluru", "Jaipur"],
    USA: ["New York", "Los Angeles", "Chicago", "Houston", "Miami"],
    Canada: ["Toronto", "Vancouver", "Montreal", "Ottawa", "Calgary"],
    Australia: ["Sydney", "Melbourne", "Perth", "Brisbane", "Adelaide"],
    "United Kingdom": [
      "London",
      "Manchester",
      "Liverpool",
      "Birmingham",
      "Leeds",
    ],
  };

  useEffect(() => {
    if (editUser) {
      setValues({
        fullName: editUser.fullName || editUser.FullName || "",
        userName: editUser.userName || editUser.username || "",
        email: editUser.email || "",
        gender: editUser.gender || "",
        date: editUser.date || "",
        country: editUser.country || "",
        city: editUser.city || "",
        condition: editUser.condition || false,
      });
    }
  }, [editUser, setValues]);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg border-0 rounded-4 p-4"
        style={{ width: "500px" }}
      >
        <h3 className="text-center fw-bold text-primary mb-4">
          {editUser ? "Edit User" : "Add User"}
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold" htmlFor="fullName">
                Full Name
              </label>

              <input
                type="text"
                id="fullName"
                name="fullName"
                value={values.fullName}
                className={`form-control rounded-3 ${
                  touched.fullName && errors.fullName ? "is-invalid" : ""
                }`}
                placeholder="Full Name"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {touched.fullName && errors.fullName && (
                <div className="text-danger small mt-1">{errors.fullName}</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold" htmlFor="userName">
                User Name
              </label>

              <input
                type="text"
                id="userName"
                name="userName"
                value={values.userName}
                className={`form-control rounded-3 ${
                  touched.userName && errors.userName ? "is-invalid" : ""
                }`}
                placeholder="User Name"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {touched.userName && errors.userName && (
                <div className="text-danger small mt-1">{errors.userName}</div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 mb-3">
              <label className="form-label fw-semibold" htmlFor="email">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                className={`form-control rounded-3 ${
                  touched.email && errors.email ? "is-invalid" : ""
                }`}
                placeholder="abc@gmail.com"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {touched.email && errors.email && (
                <div className="text-danger small mt-1">{errors.email}</div>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold" htmlFor="date">
              Date Of Birth
            </label>

            <input
              type="date"
              id="date"
              name="date"
              value={values.date}
              className={`form-control rounded-3 ${
                touched.date && errors.date ? "is-invalid" : ""
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.date && errors.date && (
              <div className="text-danger small mt-1">{errors.date}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold d-block">Gender</label>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={values.gender === "male"}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={values.gender === "female"}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="other"
                name="gender"
                value="other"
                checked={values.gender === "other"}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <label className="form-check-label" htmlFor="other">
                Other
              </label>
            </div>

            {touched.gender && errors.gender && (
              <div className="text-danger small mt-1">{errors.gender}</div>
            )}
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold" htmlFor="country">
                Country
              </label>

              <select
                className={`form-select ${
                  touched.country && errors.country ? "is-invalid" : ""
                }`}
                name="country"
                id="country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select Country</option>

                {Object.keys(cityData).map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              {touched.country && errors.country && (
                <div className="text-danger small mt-1">{errors.country}</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold" htmlFor="city">
                City
              </label>

              <select
                className={`form-select ${
                  touched.city && errors.city ? "is-invalid" : ""
                }`}
                name="city"
                id="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={!values.country}
              >
                <option value="">Select City</option>

                {values.country &&
                  cityData[values.country].map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
              </select>

              {touched.city && errors.city && (
                <div className="text-danger small mt-1">{errors.city}</div>
              )}
            </div>
          </div>

          <div className="mb-4">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                id="condition"
                name="condition"
                checked={values.condition}
                className={
                  touched.condition && errors.condition ? "is-invalid" : ""
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <label
                className="ms-2 form-label fw-semibold mb-0"
                htmlFor="condition"
              >
                Terms and conditions
              </label>
            </div>

            {touched.condition && errors.condition && (
              <div className="text-danger small mt-1">{errors.condition}</div>
            )}
          </div>
          <div className="d-flex gap-2 justify-content-end">
            <Button
              className="btn btn-primary rounded-3 py-2"
              name={editUser ? "Update" : "Add User"}
              type="submit"
            />

            <Button
              className="btn btn-secondary rounded-3 py-2"
              name="Close"
              type="button"
              onClick={() => {
                resetForm();
                setEditUser(null);
                setShowForm();
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
