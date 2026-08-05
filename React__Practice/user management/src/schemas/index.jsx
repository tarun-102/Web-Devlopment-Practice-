import * as yup from "yup";

const today = new Date();

export const RegisterUserSchema = yup.object({
  fullName: yup
    .string()
    .min(2)
    .max(25)
    .required("Please enter your full name"),

  userName: yup
    .string()
    .min(2)
    .max(25)
    .required("Please enter your username"),

  email: yup
    .string()
    .email("Invalid email")
    .required("Please enter your email"),

  gender: yup
    .string()
    .required("Please select a gender"),

  date: yup
    .date()
    .max(today, "Future date is not allowed")
    .required("Please enter your birth date"),

  country: yup
    .string()
    .required("Please select a country"),

  city: yup
    .string()
    .required("Please select a city"),

  condition: yup
    .boolean()
    .oneOf([true], "Please accept terms and conditions"),
});