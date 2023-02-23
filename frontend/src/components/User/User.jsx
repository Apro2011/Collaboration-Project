import React from 'react';

import styles from './User.module.css';

import UserMenu from '../UserMenu/UserMenu';

var profilePic = '';
var userName = 'Username';

function User() {
  return (
    <div className={styles['user']}>
      <div className={styles['user__profile-pic']}>
        <img className={styles['user__img']} src={profilePic}></img>
      </div>
      <div className={styles['user__username']}>{userName}</div>
      <UserMenu />
    </div>
  );
}

export default User;
