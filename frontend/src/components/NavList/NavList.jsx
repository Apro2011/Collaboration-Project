import React from 'react';
import auth from '../../hooks/auth';
import Link from 'next/link'
import styles from './NavList.module.css';

function NavList({loggedIn}) {

    const handleLogout = ()=>{
        auth.logout()
    }

    return (
        <ul className={styles['navlist']}>
            {loggedIn === true && <li className={styles['navlist__item']}>
                <Link href="/#" className={styles['navlist__link']}> 
                    Create Blog Post
                </Link>
            </li>}
            <li className={styles['navlist__item']}>
                {loggedIn ? <button className={styles['navlist__link']} onClick={handleLogout}>Log Out</button>
                :<Link href="/sign-in" className={styles['navlist__link']}> 
                    Sign In
                </Link>
              }
            </li>
        </ul>
    );
}

export default NavList;