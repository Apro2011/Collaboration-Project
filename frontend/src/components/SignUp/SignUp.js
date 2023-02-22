import React, { useEffect } from "react";
import styles from "./SignUp.module.css";
import Link from "next/link";
import { SIGN_UP_USER_MUTATION,SIGN_IN_USER_MUTATION } from "../../graphql/auth/user";
import { useMutation } from "@apollo/client";
import { validationSignup } from "../../helpers/validation";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";
import { Button, Input } from "../atoms";

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
              <p className={styles.login_title}>Sign Up</p>
              <p className={styles.login_subtitle}>
                Sign up to enjoy unlimited music
              </p>
              <Input placeholder="Username" name="username" error={errors.username} touched={touched.username} type="text"/>
              <Input placeholder="Email" name="email" error={errors.email} touched={touched.email} type="text"/>
              <Input placeholder="Password" name="password" error={errors.password} touched={touched.password} type="password"/>
              <Button isSubmitting={isSubmitting} type="submit" title="Sign up"/>
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
