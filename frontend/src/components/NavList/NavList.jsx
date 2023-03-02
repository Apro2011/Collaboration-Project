import React from 'react';
import auth from '../../hooks/auth';

import styles from './NavList.module.css';

function NavList({loggedIn}) {

    const handleLogout = ()=>{
        auth.logout()
    }

    return (
        <ul className={styles['navlist']}>
            {loggedIn === true && <li className={styles['navlist__item']}>
                <a className={styles['navlist__link']} href='#'>Create Blog Post</a>
            </li>}
            <li className={styles['navlist__item']}>
                {loggedIn ? <span className={styles['navlist__link']} onClick={handleLogout}>Log Out</span>
                :<a className={styles['navlist__link']} href='/sign-in'>Sign In</a>}
            </li>
        </ul>
    );
}

export default NavList;