import React from 'react';

import styles from './NavList.module.css';

function NavList({loggedIn}) {
    return (
        <ul className={styles['navlist']}>
            {loggedIn === true && <li className={styles['navlist__item']}>
                <a className={styles['navlist__link']} href='#'>Create Blog Post</a>
            </li>}
            <li className={styles['navlist__item']}>
                <a className={styles['navlist__link']} href='#'>{loggedIn=== true ? 'Log Out' : 'Log In'}</a>
            </li>
        </ul>
    );
}

export default NavList;