/* eslint-disable prettier/prettier */
import { Field } from 'formik';
import React from 'react';
import styles from './Input.module.css';

const Input = ({ placeholder, name, error, touched, type }) => {
  return (
    <>
      <Field
        type={type}
        className={styles.input}
        placeholder={placeholder}
        name={name}
      />
      <p className={error && touched ? styles.error_show : styles.error_hide}>
        {error}
      </p>
    </>
  );
};

export default Input;
