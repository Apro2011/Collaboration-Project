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

// Input.propTypes = {
//   name: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   placeholder: PropTypes.string.isRequired
// };

export default Input;
