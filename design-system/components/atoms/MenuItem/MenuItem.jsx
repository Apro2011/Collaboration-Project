import React, { useState } from 'react';
import styles from './MenuItem.module.css';

const MenuItem = ({ title, iconPath, pathName }) => {
  return (
    <>
      {/* <a href={pathName}> */}
      <div className={styles.menuItem}>
        <img src={iconPath} className={styles.img} alt={title} />
        <span className={styles.title}>{title}</span>
      </div>
      {/* </a> */}
    </>
  );
};

export default MenuItem;
