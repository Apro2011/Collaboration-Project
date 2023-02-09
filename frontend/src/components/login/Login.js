import React from "react";
import styles from "./login.module.css";
import Link from "next/link";
import { LOGIN_USER_MUTATION } from "../../graphql/auth/user";
import { useMutation } from "@apollo/client";
import { validationLogin } from "../../helpers/validation";
import { Formik, Form, Field } from "formik";
import { useRouter } from 'next/router';

const initialFormState = {
  username: "",
  password: "",
};

const Login = () => {
  const router = useRouter();
  const [mutateLogin, { data, loading, error }] =
    useMutation(LOGIN_USER_MUTATION);

  const submitHandler = async (values, actions) => {
    try {
      const result = await mutateLogin({ variables: values });
      console.log('result',result.data.tokenAuth);
      localStorage.setItem("token",result.data.tokenAuth.token)
      router.push('/');
    } catch (error) {
      console.log(error);
    }
    actions.setSubmitting(false);
  };

  return (
    <div className={styles.container}>
      <p className={styles.login_title}>Sign In</p>
      <p className={styles.login_subtitle}>Log in to enjoy unlimited music</p>
      <Formik
        initialValues={initialFormState}
        validationSchema={validationLogin}
        onSubmit={submitHandler}
      >
        {({ isSubmitting ,errors,touched }) => (
          <Form  className={styles.login_box}>
            <Field className={styles.input} placeholder="Username" name="username" />
            <p className={(errors.username && touched.username) ? styles.error_show : styles.error_hide }>{errors.username}</p>
            <Field
              className={styles.input}
              placeholder="Password"
              name="password"
            />
            <p className={(errors.password && touched.password) ? styles.error_show : styles.error_hide }>{errors.password}</p>
            <div className={styles.remember_me_box}>
              <input
                id="login_remember_me"
                type="checkbox"
                className={styles.remember_me_checkbox}
              />
              <label
                htmlFor="login_remember_me"
                className={styles.remember_me_label}
              >
                Remember Me
              </label>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submit_button}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
      <Link href="/signup" className={styles.signup}>
        Don’t have an account? Sign Up
      </Link>
      <Link href="/forget-password" className={styles.forget_password}>
        Forgot Password
      </Link>
    </div>
  );
};

export default Login;

Login.getInitialProps = async () => {
  // Check if the user is authenticated
  const isAuthenticated = checkIfUserIsAuthenticated();

  if (isAuthenticated) {
    // If the user is authenticated, redirect to the home page
    Router.push('/');
  }

  return {};
};
