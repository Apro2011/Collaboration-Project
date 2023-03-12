import React from 'react';

import styles from './Navbar.module.css';

import User from '../User/User';
import NavList from '../NavList/NavList';
import auth from '../../hooks/auth'

function NavBar() {
    
    const {isLoggedIn} = auth.isLoggedIn();

    return (
        <nav className={styles['navbar']}>
            <div className={styles['navbar__nav-list']}>
                <NavList
                    loggedIn = {isLoggedIn}
                />
            </div>
            {isLoggedIn && <div className={styles['navbar__user']}><User/></div>}
        </nav>
    );
}

export default NavBar;