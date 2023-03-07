import React from 'react';
import styles from "./Error.module.css";
import { ErrorMessage } from "formik";

const Error = ({name}) => {
  
    return (
        <div className={styles.error_container}>
              <ErrorMessage name={name} render={msg => <div className={styles.error}>{msg}</div>} />
        </div>
    );
};

export default Error;