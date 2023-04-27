import React, { useState } from 'react';
import Logo from '../../atoms/Logo/Logo';
import styles from './SideBar.module.css';
import LogoImg from '../../assets/Logo.png';
import Menu from '../../molecule/Menu/Menu';

const SideBar = ({ mainMenu, footerMenu, curActive }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.header}>
        <Logo title={'Music Logo'} iconPath={LogoImg} />
      </div>
      <div className={styles.body}>
        <Menu data={mainMenu} />
      </div>
      <div className={styles.footer}>
        <Menu data={footerMenu} />
      </div>
    </div>
  );
};

export default SideBar;
