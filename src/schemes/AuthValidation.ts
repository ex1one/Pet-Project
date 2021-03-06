import * as yup from "yup";

const AuthFormValidate = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().required("Email is required").email(),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password length should be at least 4 characters")
    .max(30, "Password cannot exceed more than 30 characters"),
  confirmPassword: yup
    .string()
    .required("confirmPassword is required")
    .oneOf([yup.ref("password")], "Password do not match"),
  terms: yup.bool().oneOf([true], "Please agree"),
});

export default AuthFormValidate;
