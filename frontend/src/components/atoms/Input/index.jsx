import { Field } from 'formik';
import React from 'react';
import styles from "./Input.module.css";

const Input = ({placeholder,name,type}) => {
    return (
        <>
            <Field
                type={type}
                className={styles.input}
                placeholder={placeholder}
                name={name}
              />
        </>
    );
};

export default Input;