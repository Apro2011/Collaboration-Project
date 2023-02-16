import React from 'react';

import styles from './UserMenu.module.css';

function UserMenu() {
    return (
        <div className={styles['user-menu']}>
            <div className={styles['user-menu__button']}>
                x
                <ul className={styles['user-menu__list']}>
                    <li className={styles['user-menu__item']}><a className={['user-menu__link']} href='#'>Item 1</a></li>
                    <li className={styles['user-menu__item']}><a className={['user-menu__link']} href='#'>Item 2</a></li>
                    <li className={styles['user-menu__item']}><a className={['user-menu__link']} href='#'>Item 3</a></li>
                    <li className={styles['user-menu__item']}><a className={['user-menu__link']} href='#'>Item 4</a></li>
                </ul>
            </div>
        </div>
    );
}

export default UserMenu;