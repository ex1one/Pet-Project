import * as yup from "yup";

const LoginFormValidate = yup.object().shape({
  identifier:
    yup.string().required("This input is required") ||
    yup.string().required("This input is required").email(),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password length should be at least 4 characters")
    .max(30, "Password cannot exceed more than 30 characters"),
});

export default LoginFormValidate;
