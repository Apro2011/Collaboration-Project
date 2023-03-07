import React, { useEffect } from "react";
import styles from "./SignIn.module.css";
import Link from "next/link";
import { SIGN_IN_USER_MUTATION } from "../../graphql/auth/user";
import { useMutation } from "@apollo/client";
import { validationSignIn } from "../../helpers/validation";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";
import FormField from "../organisms/FormField";
import { Button, Input, Error, Label } from "../atoms";

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
  }, [isLoading, isAuthenticated]);

  if (!isLoading && !isAuthenticated) {
    return (
      <div className={styles.container}>
        <Formik
          initialValues={initialFormState}
          validationSchema={validationSignIn}
          onSubmit={submitHandler}
        >
          {({ isSubmitting, touched }) => (
            <Form className={styles.sign_in_box}>
              <p className={styles.sign_in_title}>Sign In</p>
              <p className={styles.sign_in_subtitle}>
                Log in to enjoy unlimited music
              </p>

              <FormField>
                <Label label="Username" />
                <Input
                  placeholder="Username"
                  name="username"
                  touched={touched.username}
                  type="text"
                />
                <Error name="username" />
              </FormField>

              <FormField>
                <Label label="Password" />
                <Input
                  placeholder="Password"
                  name="password"
                  touched={touched.password}
                  type="text"
                />
                <Error name="password" />
              </FormField>

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
              <Button
                isSubmitting={isSubmitting}
                type="submit"
                title="Sign In"
              />
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
