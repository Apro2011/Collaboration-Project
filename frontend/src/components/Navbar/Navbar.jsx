import React from 'react';

import styles from './NavBar.module.css';

import User from '../User/User';
import NavList from '../NavList/NavList';

const userLoggedIn = true;

function NavBar() {
    return (
        <nav className={styles['navbar']}>
            <div className={styles['navbar__nav-list']}>
                <NavList
                    loggedIn = {userLoggedIn}
                />
            </div>
            {userLoggedIn === true && <div className={styles['navbar__user']}><User/></div>}
        </nav>
    );
}

export default NavBar;