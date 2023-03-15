import React from 'react';

import styles from './Navbar.module.css';

import User from '../User/User';
import NavList from '../NavList/NavList';
import useAuth from "../../hooks/useAuth";

const userLoggedIn = true;

function NavBar() {
    const { isAuthenticated } = useAuth();
    return (
        <nav className={styles['navbar']}>
            <div className={styles['navbar__nav-list']}>
                <NavList
                    loggedIn = {isAuthenticated}
                />
            </div>
            {userLoggedIn === true && <div className={styles['navbar__user']}><User/></div>}
        </nav>
    );
}

export default NavBar;