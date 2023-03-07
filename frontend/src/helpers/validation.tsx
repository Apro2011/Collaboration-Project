import * as Yup from "yup";

export const validationSignup = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username must be at least 2 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
});

export const validationSignIn = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username must be at least 2 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const validationForgetPassword = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username must be at least 2 characters")
    .required("Username is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
});

export const validationResetPassword = Yup.object().shape({
  currentPassword: Yup.string()
    .min(6, "CurrentPassword must be at least 6 characters")
    .required("CurrentPassword is required"),
  newPassword: Yup.string()
    .min(6, "New password must be at least 6 characters")
    .required("New password is required"),
});
