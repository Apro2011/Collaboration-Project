import React, { useState } from 'react';
import styles from './Menu.module.css';
import MenuItem from '../../atoms/MenuItem/MenuItem';

const Menu = ({ data }) => {
  return (
    <div className={styles.menu}>
      {data.map((menuItem) => (
        <MenuItem title={menuItem.title} iconPath={menuItem.iconPath} />
      ))}
    </div>
  );
};

export default Menu;
