import React, { useEffect } from "react";
import styles from "./SignIn.module.css";
import Link from "next/link";
import { SIGN_IN_USER_MUTATION } from "../../graphql/auth/user";
import { useMutation } from "@apollo/client";
import { validationSignIn } from "../../helpers/validation";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";
import Button from  '../atoms/Button';

const initialFormState = {
  username: "",
  password: "",
};

const SignIn = () => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  const [mutateSignIn] = useMutation(SIGN_IN_USER_MUTATION);

  const submitHandler = async (values, actions) => {
    try {
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
          validationSchema={validationSignIn}
          onSubmit={submitHandler}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className={styles.sign_in_box}>
              <p className={styles.sign_in_title}>Sign In</p>
              <p className={styles.sign_in_subtitle}>
                Log in to enjoy unlimited music
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
              <div className={styles.remember_me_box}>
                <input
                  id="sign_in_remember_me"
                  type="checkbox"
                  className={styles.remember_me_checkbox}
                />
                <label
                  htmlFor="sign_in_remember_me"
                  className={styles.remember_me_label}
                >
                  Remember Me
                </label>
              </div>
              <Button isSubmitting={isSubmitting} type="submit" title="Sign In"/>
            </Form>
          )}
        </Formik>
        <Link href="/sign-up" className={styles.signup}>
          Don’t have an account? Sign Up
        </Link>
        <Link href="/forget-password" className={styles.forget_password}>
          Forgot Password
        </Link>
      </div>
    );
  }
};

export default SignIn;
