import * as yup from "yup";

export const AuthFormValidate = yup.object().shape({
  username: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("E-mail is not valid")
    .required("Email is required"),
  password: yup
    .string()
    .min(4, "Password length should be at least 4 characters")
    .max(30, "Password cannot exceed more than 30 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Name is required")
    .oneOf([yup.ref("password")], "Password do not match"),
  terms: yup.bool().oneOf([true], "Please agree"),
});
