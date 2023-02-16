import React, { useEffect } from "react";
import styles from "./SignUp.module.css";
import Link from "next/link";
import { SIGN_UP_USER_MUTATION,SIGN_IN_USER_MUTATION } from "../../graphql/auth/user";
import { useMutation } from "@apollo/client";
import { validationSignup } from "../../helpers/validation";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";

import Button from  '../atoms/Button';

const initialFormState = {
  username: "",
  email: "",
  password: "",
};

const Signup = () => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  const [mutateSignup] = useMutation(SIGN_UP_USER_MUTATION);
  const [mutateSignIn] = useMutation(SIGN_IN_USER_MUTATION);

  const submitHandler = async (values, actions) => {
    try {
      await mutateSignup({ variables: values });
      const result = await mutateSignIn({ variables: values });
      localStorage.setItem("token", result.data.tokenAuth.token);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
    actions.setSubmitting(false);
  };

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push("/");
    }
  }, [isLoading , isAuthenticated]);

  if (!isLoading && !isAuthenticated) {
    return (
      <div className={styles.container}>
        <Formik
          initialValues={initialFormState}
          validationSchema={validationSignup}
          onSubmit={submitHandler}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className={styles.login_box}>
              <p className={styles.login_title}>Sign In</p>
              <p className={styles.login_subtitle}>
                Sign up to enjoy unlimited music
              </p>
              <Field
                className={styles.input}
                placeholder="Username"
                name="username"
              />
              <p
                className={
                  errors.username && touched.username
                    ? styles.error_show
                    : styles.error_hide
                }
              >
                {errors.username}
              </p>
              <Field
                className={styles.input}
                placeholder="Email"
                name="email"
              />
              <p
                className={
                  errors.email && touched.email
                    ? styles.error_show
                    : styles.error_hide
                }
              >
                {errors.email}
              </p>
              <Field
                className={styles.input}
                placeholder="Password"
                name="password"
              />
              <p
                className={
                  errors.password && touched.password
                    ? styles.error_show
                    : styles.error_hide
                }
              >
                {errors.password}
              </p>
              <Button />
              {/* <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submit_button}
              >
                Signup
              </button> */}
            </Form>
          )}
        </Formik>
        <Link href="/sign-in" className={styles.signup}>
          Already a member? Sign in
        </Link>
        <Link href="/forget-password" className={styles.forget_password}>
          Forgot Password
        </Link>
      </div>
    );
  }
};

export default Signup;
