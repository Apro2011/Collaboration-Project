import { Router } from 'next/router';
import React from 'react';
import { useRouter } from 'next/router'

import styles from './NavList.module.css';

function NavList({loggedIn}) {
    const router = useRouter()
    const handleLoguout = ()=>{
        localStorage.clear()
        router.push('/sign-in')
    }

    return (
        <ul className={styles['navlist']}>
            {loggedIn === true && <li className={styles['navlist__item']}>
                <a className={styles['navlist__link']} href='#'>Create Blog Post</a>
            </li>}
            <li className={styles['navlist__item']} onClick={handleLoguout}>
                <span className={styles['navlist__link']}>{loggedIn=== true ? 'Log Out' : 'Log In'}</span>
            </li>
        </ul>
    );
}

export default NavList;