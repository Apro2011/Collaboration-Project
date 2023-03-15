import React from 'react';
import { Field } from 'formik';
import styles from "./Input.module.css";
const Input = ({placeholder,name,type}) => {
    return (  
          <Field
            type={type}
            className={styles.input}
            placeholder={placeholder}
            name={name}
        />
    );
};

export default Input;
