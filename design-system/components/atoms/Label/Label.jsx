import React from 'react';
import styles from "./Label.module.css";

const Label = ({label}) => {
  
    return (
        <>
              <p className={ styles.label}>
                {label}
              </p> 
        </>
    );
};

export default Label;