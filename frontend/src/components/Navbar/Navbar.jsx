import React from 'react';

import styles from './Navbar.module.css';

import User from '../User/User';
import NavList from '../NavList/NavList';
import auth from '../../hooks/auth'

function NavBar() {
    
    const {isLoggedIn} = auth.isLoggedIn();

    console.log('loggedzzz',isLoggedIn);

    return (
        <nav className={styles['navbar']}>
            <div className={styles['navbar__nav-list']}>
                <NavList
                    loggedIn = {isLoggedIn}
                />
            </div>
            {isLoggedIn === true && <div className={styles['navbar__user']}><User/></div>}
        </nav>
    );
}

export default NavBar;