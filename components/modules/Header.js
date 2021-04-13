import React from 'react';
import styles from '../../styles/header.module.scss';
const Header = () => {
    return (
        <header>
            <div className='container'>
                <ul className={styles.nav}>
                    <li className={styles.services}>
                        <img src='/ico-services.svg' alt='' /> All services
                    </li>
                    <li className={styles.account}>
                        <img src='/avatar.png' alt='' /> Howdy...
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
