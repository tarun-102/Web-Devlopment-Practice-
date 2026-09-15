import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export const registerSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});