import React, { useState } from 'react';
import MenuItem from '../../atoms/MenuItem/MenuItem';
import Logo from '../../atoms/Logo/Logo';
import './Menu.css';
import LogoImg from '../../assets/Logo.png';
import Settings from '../../assets/SettingsIcon.svg';
import LoginIcon from '../../assets/LoginIcon.svg';

const Menu = ({ data, curActive }) => {
  const menuItems = data.map((menuItem) => (
    <MenuItem title={menuItem.title} iconPath={menuItem.iconPath} />
  ));
  return (
    <div className={'menu'}>
      <Logo title={'Music Logo'} iconPath={LogoImg} />
      {menuItems}
      <div style={{ marginTop: '272px' }}>
        <MenuItem title="Settings" iconPath={Settings} />
        <MenuItem title="Login" iconPath={LoginIcon} />
      </div>
    </div>
  );
};

export default Menu;
