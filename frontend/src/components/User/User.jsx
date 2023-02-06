import React from 'react';

import styles from './User.module.css';

var profilePic = '';
var userName = 'Username';

function User() {
    return (
        <div className={styles['user']}>
            <div className={styles['user__profile-pic']}><img className={styles['user__img']} src={profilePic}></img></div>
            <div className={styles['user__username']}>{userName}</div>
            <div className={styles['user__dropdown-button']}>x</div>{/* Need to add styling/functionality for drop down menu, waiting on design */}
        </div>
    );
}

export default User;