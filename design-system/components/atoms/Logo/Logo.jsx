import React from 'react';
import styles from './Logo.module.css';

const Logo = ({ title, iconPath }) => {
  return (
    <>
      <div className={styles.logo}>
        <img src={iconPath} alt={title} />
        <span className={styles.title}>{title}</span>
      </div>
    </>
  );
};

export default Logo;
