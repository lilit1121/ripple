import * as yup from "yup";

// Error messages
const required = "Field is required";
const invalidEmail = "Invalid email address";
const password =
  "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character";
const minCharPassword = "Password must be at least 8 characters";
const passwordMatch = "Passwords must match";

export const loginSchema = yup.object().shape({
  email: yup.string().email(invalidEmail).required(required),
  password: yup.string().required(required),
});

export const schemaForCreator = yup.object().shape({
  fullName: yup.string().required(required),
  userName: yup.string().required(required),
  email: yup.string().email(invalidEmail).required(required),
  password: yup
    .string()
    .min(8, minCharPassword)
    .required(required)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      password
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], passwordMatch)
    .required(required),
});

export const schemaForCompany = yup.object().shape({
  companyName: yup.string().required(required),
  email: yup.string().email(invalidEmail).required(required),
  password: yup
    .string()
    .min(8, minCharPassword)
    .required(required)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      password
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], passwordMatch)
    .required(required),
});
