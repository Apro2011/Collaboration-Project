import React from 'react';
import styles from "./FormField.module.css";

const FormField = ({children}) => {
  
    return (
        <div className={styles.FormField}>
             {children}
        </div>
    );
};

export default FormField;