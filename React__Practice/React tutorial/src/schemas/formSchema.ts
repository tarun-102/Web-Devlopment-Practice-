import * as Yup from "yup";

export const formValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});



const today = new Date();

export const RegisterUserSchema = Yup.object({
  fullName: Yup
    .string()
    .min(2, "Too short")
    .max(25, "Too long")
    .required("Please enter your full name"),

  userName: Yup
    .string()
    .min(2, "Too short")
    .max(25, "Too long")
    .required("Please enter your username"),

  email: Yup
    .string()
    .email("Invalid email")
    .required("Please enter your email"),

  gender: Yup
    .string()
    .required("Please select a gender"),

  date: Yup
    .date()
    .max(today, "Future date is not allowed")
    .required("Please enter your birth date"),

  country: Yup
    .string()
    .required("Please select a country"),

  city: Yup
    .string()
    .required("Please select a city"),

  condition: Yup
    .boolean()
    .oneOf([true], "Please accept terms and conditions"),
});